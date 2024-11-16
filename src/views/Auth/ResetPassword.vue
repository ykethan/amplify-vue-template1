<script lang="ts">
import { resetPassword, confirmResetPassword } from 'aws-amplify/auth';
import { reactive, ref } from 'vue';

import router from '@/routes';
import InputField from '@/components/InputField.vue';
import AuthLayout from '@/layouts/Auth.vue';
import Button from 'primevue/button';
import { watch } from 'vue';

// TODO: Add better validations for all fields
export default {
  components: {
    InputField,
    AuthLayout,
    Button
  },
  setup() {
    const nextStep = ref('');
    const authError = ref('');
    const hasError = ref(false);
    const resetPasswordData = reactive({
      username: '',
      confirmationCode: '',
      newPassword: '',
      repeatPassword: ''
    });

    async function handleConfirmResetPassword(event: Event) {
      event.preventDefault();
      try {
        const output = await confirmResetPassword({
          username: resetPasswordData.username,
          confirmationCode: resetPasswordData.confirmationCode,
          newPassword: resetPasswordData.newPassword
        });
        console.log('output', output);
        if (output === undefined) {
          router.push('/signin');
        }
      } catch (error: any) {
        authError.value = error?.message ?? 'An error occurred';
        console.log(error);
      }
    }

    async function handleResetPassword(event: Event) {
      event.preventDefault();
      authError.value = '';
      try {
        const output = await resetPassword({ username: resetPasswordData.username });
        handleResetPasswordNextSteps(output);
      } catch (error: any) {
        authError.value = error?.message ?? 'An error occurred';
        console.log(error);
      }
    }
    function handleResetPasswordNextSteps(output: any) {
      const response = output;
      console.log({ response });
      switch (response?.nextStep.resetPasswordStep) {
        case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
          nextStep.value = response?.nextStep?.resetPasswordStep;
          break;
        case 'DONE':
          router.push({ path: '/' });
          break;
      }
    }
    // Example validation function
    const validateForm = () => {
      // Simple validation: check if any field is empty
      hasError.value = !nextStep.value
        ? resetPasswordData.username.trim() === '' || !resetPasswordData.username.includes('@')
        : resetPasswordData.confirmationCode.trim() === '' ||
          resetPasswordData.newPassword.trim().length >= 8 ||
          resetPasswordData.repeatPassword !== resetPasswordData.newPassword;
    };
    watch([resetPasswordData], validateForm, { immediate: true });
    return {
      handleResetPassword,
      handleConfirmResetPassword,
      nextStep,
      authError,
      hasError,
      resetPasswordData
    };
  }
};
</script>

<template>
  <AuthLayout>
    <p class="font-roboto text-[18.22px] font-400 leading-26 text-left">Reset your password</p>
    <p class="text-[#C82B2B] my-md">
      <span>{{ authError }}</span>
    </p>
    <form
      v-if="!nextStep"
      @submit="handleResetPassword"
      class="flex flex-col gap-lg w-full items-center"
    >
      <InputField
        id="username"
        label="Email Address"
        type="text"
        v-model="resetPasswordData.username"
        placeholder="Enter your email"
        required
      />
      <Button type="submit" class="btn-primary w-full" :disabled="hasError">
        <p class="text-center">Reset Password</p>
      </Button>
    </form>
    <form
      v-if="nextStep === 'CONFIRM_RESET_PASSWORD_WITH_CODE'"
      @submit="handleConfirmResetPassword"
      class="flex flex-col gap-lg w-full items-center"
    >
      <InputField
        id="confirmationCode"
        label="Confirmation Code"
        type="text"
        name="confirmationCode"
        placeholder="Enter the confirmation code"
        v-model="resetPasswordData.confirmationCode"
        required
      />
      <InputField
        id="newPassword"
        label="New Password"
        type="password"
        name="newPassword"
        v-model="resetPasswordData.newPassword"
        placeholder="Enter your new password"
        required
      />
      <InputField
        id="repeatPassword"
        label="Repeat Password"
        type="password"
        name="repeatPassword"
        v-model="resetPasswordData.repeatPassword"
        placeholder="Confirm your new password"
        required
      />
      <Button type="submit" class="btn-primary w-full" :disabled="hasError">
        <p class="text-center">Confirm Reset Password</p>
      </Button>
    </form>
  </AuthLayout>
</template>
