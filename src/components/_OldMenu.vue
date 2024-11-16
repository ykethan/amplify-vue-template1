<!-- First setup --- NOT in use --- Stephan -->

<script setup>
const menuExpanded = ref(false);

const toggleMenu = () => {
  menuExpanded.value = !menuExpanded.value;
  console.log(menuExpanded.value);
};

const menuItems = [
  {
    label: 'Files',
    items: [
      { label: 'Favorite files', icon: 'pi pi-star' },
      { label: 'Files', icon: 'pi pi-file' },
      { label: 'Libraries / resources', icon: 'pi pi-database' }
    ]
  },
  {
    label: 'Settings',
    items: [
      { label: 'Account', icon: 'pi pi-user' },
      { label: 'Settings', icon: 'pi pi-cog' },
      { label: 'Logout', icon: 'pi pi-power-off', command: handleSignout }
    ]
  }
];
</script>

<template>
  <!-- Slide-out Menu -->
  <transition-group name="slide">
    <div
      :class="[
        'bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col animate__animated ',
        menuExpanded ? 'w-[314px]' : 'w-[64px]'
      ]"
    >
      <!-- Toggle Menu Button -->
      <Button
        :icon="menuExpanded ? 'pi pi-times' : 'pi pi-angle-right'"
        @click="toggleMenu"
        :class="['p-4 flex', menuExpanded ? 'justify-end' : 'justify-center']"
      ></Button>

      <nav class="flex-1">
        <ul class="">
          <li v-for="(section, sIndex) in menuItems" :key="sIndex" class="mb-4">
            <div class="h-[25px] hover:bg-none">
              <span
                v-if="menuExpanded"
                class="px-4 py-4 text-sm font-semibold text-gray-500 animate__animated animate__fadeIn animate__faster"
                >{{ section.label }}</span
              >
            </div>
            <ul>
              <li
                v-for="(item, iIndex) in section.items"
                :key="iIndex"
                :class="[
                  's-[40px] gap-4 font-bold font-roboto flex items-center cursor-pointer',
                  menuExpanded ? 'justify-between' : 'justify-center'
                ]"
              >
                <i :class="[item.icon, 'text-purple-100 text-2xl']"></i>
                <div class="flex justify-between flex-1">
                  <span
                    v-if="menuExpanded"
                    class="ml-2 font-normal font-roboto animate__animated animate__fadeIn animate__faster"
                    >{{ item.label }}</span
                  >
                  <span
                    v-if="menuExpanded"
                    class="text-2xl text-purple-100 pi pi-angle-right"
                  ></span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div v-if="menuExpanded" class="flex flex-col p-4 text-center">
        <div class="inline-flex flex-col">
          <div class="font-bold">{{ currentUser?.nickname || 'User' }}</div>
          <!--               <Avatar
                      image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                      class="mr-2 size-1/2"
                      shape="circle"
                    /> -->
        </div>
        <div class="flex justify-around p-4">
          <a href="#" class="mr-4 text-sm text-gray-600">Imprint</a>
          <a href="#" class="text-sm text-gray-600">Data policy</a>
        </div>
      </div>
    </div>
  </transition-group>
</template>
