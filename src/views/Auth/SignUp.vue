<template>
  <AuthLayout>
    <p class="font-grotesk text-[36.49px] font-500 leading-44 text-left mt-0">Hello!</p>
    <p class="font-roboto text-[18.22px] font-400 leading-26 text-left mb-lg mt-0">
      Register to Get Started
    </p>
    <p class="text-red-bright">{{ authError }}</p>
    <form @submit="handleSubmit" v-if="!nextStep" class="flex flex-col gap-lg w-full items-center">
      <InputField
        label="Name"
        id="name"
        name="name"
        type="text"
        v-model="signupData.name"
        required
        placeholder="How should we greet you?"
      />
      <InputField
        label="Email"
        required
        id="email"
        v-model="signupData.email"
        name="email"
        type="email"
        placeholder="@"
      />
      <InputField
        label="Password"
        id="password"
        name="password"
        type="password"
        v-model="signupData.password"
        required
        placeholder="password"
        help="Choose a save password of min 8 characters, a capital letter and another rule. "
      />
      <InputField
        label="Repeat Password"
        id="repeatPassword"
        required
        name="repeatPassword"
        v-model="signupData.repeatPassword"
        type="password"
        placeholder="confirm password"
      />
      <!-- <Input
        label="Password"
        id="password"
        name="password"
        type="password"
        placeholder="password"
        :value="password"
        @input="password = $event.target.value"
        :class="{ 'is-invalid': passwordError }"
        error="passwordError"
        help="Choose a save password of min 8 characters, a capital letter and another rule. "
      />
      <Input
        label="Repeat Password"
        id="repeatPassword"
        name="repeatPassword"
        type="password"
        placeholder="confirm password"
        :value="repeatPassword"
        @input="repeatPassword = $event.target.value"
        error="repeatPasswordError"
      /> -->

      <Button type="submit" class="btn-primary w-full" :disabled="hasError"
        ><p class="text-center" :disabled="hasError">Register</p></Button
      >
      <p>You already have an account? <RouterLink to="/signin">Sign in</RouterLink></p>
    </form>
    <form
      v-if="nextStep === 'CONFIRM_SIGN_UP'"
      @submit="handleVerification"
      class="flex flex-col gap-lg w-full items-center"
    >
      <p class="text-[#C82B2B] my-md">Please verify your email</p>
      <InputField
        label="Verification Code"
        id="otp"
        name="otp"
        type="text"
        v-model="signupData.confirmationCode"
        required
        placeholder="Enter the OTP sent to your email"
      />
      <Button type="submit" class="btn-primary w-full" :disabled="hasError"
        ><p class="text-center">Verify</p></Button
      >
    </form>
  </AuthLayout>
</template>

<script lang="ts">
import router from '@/routes';
import { AuthenticatorSignUpFormFields } from '@aws-amplify/ui-vue';
import { signUp, confirmSignUp } from 'aws-amplify/auth';
import Button from 'primevue/button';

import InputField from '@/components/InputField.vue';
import AuthLayout from '@/layouts/Auth.vue';
import { reactive, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';

// TODO: Add more validation rules and field level error messages
export default {
  components: {
    InputField,
    AuthLayout,
    Button
  },
  setup() {
    const authError = ref('');
    const hasError = ref(false);
    const signupData = reactive({
      email: '',
      name: '',
      password: '',
      confirmationCode: '',
      repeatPassword: '',
      nextStep: undefined as (typeof AuthenticatorSignUpFormFields)['nextStep']
    });
    const nextStep = ref<any>('');

    // const passwordError = computed(() => {
    //   if (!password.value) return 'Password is required';
    //   if (password.value.length < 8) return 'Password must be at least 8 characters';
    //   if (!/[A-Z]/.test(password.value))
    //     return 'Password must contain at least one uppercase letter';
    //   // Add more rules as needed
    //   return null;
    // });

    // const repeatPasswordError = computed(() => {
    //   if (!repeatPassword.value) return 'Repeat password is required';
    //   if (repeatPassword.value !== password.value) return 'Passwords do not match';
    //   return null;
    // });

    async function handleSubmit(event: Event) {
      event.preventDefault();
      // ... validate inputs
      const response = await signUp({
        username: signupData.email,
        password: signupData.password,
        options: {
          userAttributes: {
            given_name: signupData.name,
            nickname: signupData.name
          }
        }
      }).catch((error: any) => {
        authError.value = error?.message ?? 'An error occurred';
        console.error('error signing up', error?.message);
      });
      if (!response?.isSignUpComplete) {
        nextStep.value = response?.nextStep?.signUpStep;
      }
    }
    async function handleVerification(event: Event) {
      event.preventDefault();
      try {
        const { isSignUpComplete, nextStep, ...rest } = await confirmSignUp({
          username: signupData.email,
          confirmationCode: signupData.confirmationCode
        });
        if (isSignUpComplete) {
          router.push('/');
        }
      } catch (error: any) {
        authError.value = error?.message ?? 'An error occurred';
        console.error('error confirming sign up', error.message);
      }
    }
    //TODO: Add more validation rules and field level error messages
    const validateForm = () => {
      // Simple validation: check if any field is empty
      hasError.value = !nextStep.value
        ? signupData.email.trim() === '' ||
          !signupData.email.includes('@') ||
          signupData.password.trim().length === 0 ||
          signupData.repeatPassword !== signupData.password
        : signupData.confirmationCode.trim() === '';
    };
    watch([signupData], validateForm, { immediate: true });
    return {
      // passwordError,
      // repeatPasswordError,
      nextStep,
      authError,
      signupData,
      handleSubmit,
      handleVerification,
      hasError
    };
  }
};
</script>
