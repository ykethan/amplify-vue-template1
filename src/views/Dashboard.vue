<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import router from '@/routes';
import { signOut, type FetchUserAttributesOutput, fetchUserAttributes } from 'aws-amplify/auth';
import ContentLayout from '@/layouts/Content.vue';
import MenuPrime from '@/components/MenuPrime.vue';
import CreateNode from '@/components/CreateNode.vue';

const currentUser = ref<FetchUserAttributesOutput | null>(null);

/* const handleSignout = async () => {
  await signOut();
  router.push({ name: 'signin' });
}; */

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
              Welcome to fiLLM, {{ currentUser?.nickname ?? 'No email/name' }}
            </p>
            <CreateNode></CreateNode>
          </template>
          <!-- <template #footer>
            <div class="flex justify-end gap-4 mt-1">
              <Button label="SignOut" class="p-button-danger" @click="handleSignout"
                >Signout!</Button
              >
            </div>
          </template> -->
        </Card>
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
