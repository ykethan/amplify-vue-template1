<template>
  <div class="grid grid-flow-row-dense xs:grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 h-full gap-lg">
    <div
      class="xs:col-span-4 sm:col-span-8 md:col-span-4 lg:col-span-5 3xl:col-span-3 items-start bg-white flex flex-col gap-md p-md"
    >
      <slot />
    </div>
    <div
      class="xs:hidden md:block md:col-span-0 md:col-span-4 lg:col-span-7 3xl:col-span-9 bg-black"
    ></div>
  </div>
</template>
