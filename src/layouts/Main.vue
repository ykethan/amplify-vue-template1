<script setup lang="ts">
import MenuPrime from '@/components/MenuPrime.vue';
import isAuthenticated from '@/utils/checkAuth';
import { onMounted, ref, watch } from 'vue';

const isLoggedIn = ref(false);

onMounted(async () => {
  isLoggedIn.value = await isAuthenticated();
});
</script>

<!-- TODO: Need to fix the condition for menu to appear. Currently it is showing the menu only
after refresh, after successfull login. -->
<template>
  <Suspense>
    <template #default>
      <div class="flex h-dvh">
        <MenuPrime v-if="isLoggedIn" />
        <main :class="['w-full z-0 ', { 'ml-[70px] bg-blue-gray-20': isLoggedIn }]">
          <slot />
        </main>
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
