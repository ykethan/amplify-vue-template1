<template>
  <ContentLayout>
    <div class="grid xs:grid-cols-4 sm:grid-cols-8 lg:grid-cols-12">
      <div
        class="xs:col-span-4 sm:col-span-8 md:col-span-4 lg:col-span5 col-span-5 xl:col-span-4 2xl:col-span-3 3xl:col-span-2 flex flex-col gap-lg"
      >
        <h1 class="text-2xl">My Account</h1>
        <img :src="userData.picture" alt="Profile picture" class="h-xl w-xl rounded-lg" />
        <form @submit.prevent="handleUserUpdate" class="flex flex-col gap-lg w-full items-start">
          <InputField
            label="Name"
            id="name"
            name="name"
            type="text"
            size="large"
            v-model="userData.name"
            :disabled="!!nextstep && nextstep !== 'DONE'"
          />
          <InputField
            :disabled="!!nextstep && nextstep !== 'DONE'"
            label="Email"
            id="email"
            name="email"
            type="text"
            v-model="userData.email"
            size="large"
          />
          <InputField
            v-if="nextstep === 'CONFIRM_ATTRIBUTE_WITH_CODE'"
            label="Confirmation code"
            id="confirmationCode"
            name="confirmationCode"
            type="text"
            size="large"
            v-model="userData.confirmationCode"
          />

          <Button type="submit" class="btn-outline" :disabled="formError"
            ><p class="text-center">Save</p></Button
          >
        </form>
        <h1 class="text-2xl">Change password</h1>
        <form @submit="handleChangePassword" class="flex flex-col gap-lg w-full items-start">
          <InputField
            label="Current password"
            id="password"
            name="password"
            type="password"
            size="large"
            v-model="userData.password"
          />
          <InputField
            label="New password"
            id="newPassword"
            name="newPassword"
            type="password"
            size="large"
            v-model="userData.newPassword"
          />
          <InputField
            label="Repeat password"
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            size="large"
            v-model="userData.repeatPassword"
          />
          <Button type="submit" class="btn-outline" :disabled="formError"
            ><p class="text-center">Save</p></Button
          >
        </form>
      </div>
    </div>
  </ContentLayout>
</template>
<script lang="ts">
import InputField from '@/components/InputField.vue';
import ContentLayout from '@/layouts/Content.vue';
import {
  confirmUserAttribute,
  fetchUserAttributes,
  updatePassword,
  updateUserAttribute,
  updateUserAttributes,
  type FetchUserAttributesOutput,
  type UpdateUserAttributeOutput,
  type UpdateUserAttributesOutput
} from 'aws-amplify/auth';
import { onMounted, reactive, ref } from 'vue';
export default {
  components: {
    InputField,
    ContentLayout
  },
  setup() {
    const userData = reactive({
      picture: '',
      name: '',
      email: '',
      password: '',
      newPassword: '',
      repeatPassword: '',
      confirmationCode: ''
    });
    const formError = ref(false);
    const nextstep = ref('');
    onMounted(async () => {
      try {
        const userAttributes: FetchUserAttributesOutput = await fetchUserAttributes();
        userData.name = userAttributes.nickname ?? '';
        userData.email = userAttributes.email ?? '';
        userData.picture = userAttributes.picture ?? '';
        console.log({ userData });
      } catch (error) {
        console.log(error);
      }
    });
    console.log(!!nextstep.value, 'nextstep.value');
    const handleChangePassword = async (event: Event) => {
      event.preventDefault();
      const response = await updatePassword({
        oldPassword: userData.password,
        newPassword: userData.newPassword
      });
      if (response === undefined) {
        userData.password = '';
        userData.newPassword = '';
        userData.repeatPassword = '';
      }
      console.log({ response });
    };
    const handleUserUpdate = async (event: Event) => {
      event.preventDefault();
      if (nextstep.value === 'CONFIRM_ATTRIBUTE_WITH_CODE') {
        handleConfirmUserUpdate();
        return;
      }
      try {
        const output = await updateUserAttributes({
          userAttributes: {
            email: userData.email,
            nickname: userData.name
          }
        });
        handleUpdateUserAttributeNextSteps(output);
      } catch (error) {
        console.log(error);
      }
    };
    const handleConfirmUserUpdate = async () => {
      try {
        const output = await confirmUserAttribute({
          userAttributeKey: 'email',
          confirmationCode: userData.confirmationCode
        });
        if (output === undefined) {
          nextstep.value = 'DONE';
        }
      } catch (error) {
        console.log(error);
      }
    };
    function handleUpdateUserAttributeNextSteps(output: UpdateUserAttributesOutput) {
      const { email } = output;

      switch (email.nextStep?.updateAttributeStep) {
        case 'CONFIRM_ATTRIBUTE_WITH_CODE':
          nextstep.value = 'CONFIRM_ATTRIBUTE_WITH_CODE';
          break;
        case 'DONE':
          nextstep.value = 'DONE';
          console.log(`attribute was successfully updated.`);
          break;
        default:
          console.log('Updated user attribute');
      }
    }
    return {
      userData,
      handleChangePassword,
      handleUserUpdate,
      handleConfirmUserUpdate,
      formError,
      nextstep
    };
  }
};
</script>
