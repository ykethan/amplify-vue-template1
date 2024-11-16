<script lang="ts" setup>
import router from '@/routes';
import { signIn, confirmSignUp } from 'aws-amplify/auth';
import Button from 'primevue/button';

import InputField from '@/components/InputField.vue';
import AuthLayout from '@/layouts/Auth.vue';

import { reactive, ref, watch } from 'vue';

const authError = ref('');
const nextStep = ref('');
const formError = ref(false);
const signInData = reactive({
  username: '',
  password: '',
  otp: ''
});

async function handleSubmit(event: Event) {
  event.preventDefault();
  authError.value = '';
  const response = await signIn({
    username: signInData.username,
    password: signInData.password
  }).catch((error) => {
    authError.value = error?.message ?? 'An error occurred';
    console.error('error signing in', error.message);
  });
  if (response?.nextStep?.signInStep === 'CONFIRM_SIGN_UP') {
    nextStep.value = 'CONFIRM_SIGN_UP';
  } else if (response?.nextStep?.signInStep === 'DONE') {
    router.push({ path: '/' });
  }
  console.log({ authError, nextStep, response });
}
async function handleConfirmSignUp(event: Event) {
  event.preventDefault();
  authError.value = '';
  try {
    const { isSignUpComplete } = await confirmSignUp({
      username: signInData.username,
      confirmationCode: signInData.otp
    });
    if (isSignUpComplete) {
      router.push({ path: '/' });
    }
  } catch (error: any) {
    authError.value = error?.message ?? 'An error occurred';
    console.error('error confirming sign up', error.message);
  }
}

const validateForm = () => {
  formError.value = signInData.username.length === 0 || signInData.password.length === 0;
};
watch(signInData, validateForm, { deep: true });
</script>
<template>
  <AuthLayout>
    <p class="font-roboto text-[18.22px] font-400 leading-26 text-left mb-10 mt-0">
      Login to your Fillm account
    </p>
    <p class="font-grotesk text-[36.49px] font-500 leading-44 text-left mb-30 mt-0">
      Welcome back!
    </p>
    <p class="text-[#C82B2B] my-md">
      <span>{{ authError }}</span>
    </p>

    <form v-if="!nextStep" @submit="handleSubmit" class="flex flex-col gap-lg w-full items-center">
      <InputField
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="name@mail.com"
        size="large"
        v-model="signInData.username"
      />
      <InputField
        label="Password"
        id="password"
        name="password"
        type="password"
        placeholder="password"
        v-model="signInData.password"
        size="large"
      />
      <Button type="submit" class="btn-primary w-full" :disabled="formError"
        ><p class="text-center">Login</p></Button
      >

      <RouterLink to="/reset-password">Forgot Password</RouterLink>
      <span>Don’t have an account? <RouterLink to="/signup">Sign up</RouterLink></span>
    </form>
    <form
      v-if="nextStep === 'CONFIRM_SIGN_UP'"
      @submit="handleConfirmSignUp"
      class="flex flex-col gap-lg w-full items-center"
    >
      <p class="text-[#C82B2B] my-md">Please verify your email</p>
      <InputField
        label="OTP"
        id="otp"
        name="otp"
        type="text"
        v-model="signInData.otp"
        required
        placeholder="Enter the OTP sent to your email"
      />
      <Button type="submit" class="btn-primary w-full"><p class="text-center">Verify</p></Button>
    </form>
  </AuthLayout>
</template>
