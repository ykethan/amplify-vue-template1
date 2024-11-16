<script lang="ts" setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { fetchUserAttributes, type FetchUserAttributesOutput } from 'aws-amplify/auth';
import router from '@/routes';
import { signOut } from 'aws-amplify/auth';

const menuExpanded = ref(false);
const menuRef = ref<HTMLElement | null>(null);
const currentUser = ref<FetchUserAttributesOutput | null>(null);

const handleSignout = async () => {
  await signOut();
  router.push({ name: 'signin' });
};
const userPicture = computed(() => currentUser.value?.picture);

const avatarProps = computed(() => {
  return userPicture.value
    ? { image: userPicture.value }
    : { icon: 'pi pi-user', class: 'text-2xl p-3xs text-purple-100' };
});

const items = ref([
  {
    separator: true
  },
  {
    label: 'Workspace',
    items: [
      {
        label: 'Favorite files',
        icon: 'pi pi-star'
      },
      {
        label: 'Files',
        icon: 'pi pi-file',
        command: () => router.push({ name: 'root' })
      },
      {
        label: 'Libraries / resources',
        icon: 'pi pi-database',
        command: () => {
          console.log("Navigating to resources...");
          router.push({ name: 'resources' });}
      }
    ]
  },
  {
    label: 'Settings',
    items: [
      {
        label: 'Account',
        icon: 'pi pi-user',
        command: () => router.push({ name: 'settings' }),
        path: '/settings'
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog'
      },
      {
        label: 'Logout',
        icon: 'pi pi-power-off',
        command: handleSignout
      }
    ]
  },
  {
    separator: true
  }
]);

const toggleMenu = () => {
  menuExpanded.value = !menuExpanded.value;
};
const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    menuExpanded.value = false;
  }
};
onMounted(async () => {
  document.addEventListener('click', handleClickOutside);
  try {
    const userAttributes: FetchUserAttributesOutput = await fetchUserAttributes();
    currentUser.value = userAttributes;
  } catch (error) {
    console.log(error);
  }
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="absolute flex h-screen shadow-xl card z-10 bg-white" ref="menuRef">
    <Menu
      :model="items"
      :class="['flex flex-col pl-2xs', menuExpanded ? 'w-[314px] p-sm' : 'w-[70px]']"
      pt:root="c"
      :pt:menu="[{ 'overflow-x-hidden pr-2xs': !menuExpanded }]"
      pt:submenuheader="hover:bg-transparent"
      pt:end="mt-auto"
      exact
    >
      <template #start>
        <Button
          :icon="menuExpanded ? 'pi pi-times' : 'pi pi-angle-right'"
          @click="toggleMenu"
          :pt:root="[
            'grid w-full h-full pt-xs',
            menuExpanded ? 'place-content-end pr-md' : 'justify-center'
          ]"
        ></Button>
      </template>
      <template #submenuheader="{ item }">
        <div
          :class="[
            'font-bold text-primary mt-xs mb-sm ml-sm',
            menuExpanded ? 'justify-start' : 'invisible'
          ]"
        >
          <span>{{ item.label }}</span>
        </div>
      </template>
      <template #item="{ item, props }">
        <a :class="['flex m-2xs content-center', { 'm-2xs': !menuExpanded }]" v-bind="props.action">
          <div :class="['flex justify-between w-full']">
            <div class="flex items-center justify-center gap-2xs">
              <span
                v-if="item.label !== 'Account'"
                :class="[item.icon, 'text-2xl p-2xs text-purple-100']"
              />
              <Avatar
                v-else
                v-bind="avatarProps"
                class="h-[30px] ml-[5px] mr-[4px] rounded-full"
                shape="circle"
              />
              <span v-if="menuExpanded" class="mb-8 p-2xs text-black">{{ item.label }}</span>
            </div>
            <div :class="['flex justify-self-end']">
              <span
                v-if="menuExpanded"
                class="text-2xl text-purple-100 p-2xs pi pi-angle-right"
              ></span>
            </div>
          </div>
        </a>
      </template>
      <template #end v-if="menuExpanded">
        <div>
          <Button
            class="relative items-start w-full h-full pl-4 overflow-hidden transition-colors duration-200 bg-transparent border-0 rounded-none cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-800"
          >
            <span class="inline-flex flex-col items-start">
              <span class="font-bold">{{ currentUser?.nickname || 'User' }}</span>
            </span>
          </Button>
          <div class="flex justify-around p-4">
            <a href="#" class="mr-4 text-sm text-gray-600">Imprint</a>
            <a href="#" class="text-sm text-gray-600">Data policy</a>
          </div>
        </div>
      </template>
    </Menu>
  </div>
</template>
