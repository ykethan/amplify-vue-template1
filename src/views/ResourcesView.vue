<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import router from '@/routes';
import { signOut, type FetchUserAttributesOutput, fetchUserAttributes } from 'aws-amplify/auth';
import ContentLayout from '@/layouts/Content.vue';
import MenuPrime from '@/components/MenuPrime.vue';
import UploadFile from '@/components/UploadFile.vue';
import ListFile from '@/components/ListFiles.vue';

const currentUser = ref<FetchUserAttributesOutput | null>(null);



onMounted(async () => {
  try {
    const userAttributes: FetchUserAttributesOutput = await fetchUserAttributes();
    currentUser.value = userAttributes;

  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="flex flex-col flex-1">
    <ContentLayout>
      <div class="flex flex-col items-center">
        <Card style="width: fit-content">
          <template #title>
            <p class="text-3xl font-bold text-red-500">
              Welcome to your Library, {{ currentUser?.nickname ?? 'No email/name' }}
            </p>
          </template>
        </Card>
        <UploadFile></UploadFile>
        ------
        <ListFile></ListFile>
      </div>
    </ContentLayout>
  </div>
  <!-- </div> -->
</template>

<style scoped>
ul {
  border-radius: 0;
  border-width: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  width: 5rem; /* 80px */
}

.slide-enter-to,
.slide-leave-from {
  width: 16rem; /* 256px */
}
</style>
