<script lang="ts" setup>
import { useThrottleFn } from '@vueuse/core';
import { onMounted, onUnmounted, ref, type Ref } from 'vue';


const safeClick = useThrottleFn(() => { menuActive.value = !menuActive.value }, 150)
const menuActive: Ref<boolean> = ref(false)
const menuRef = ref<HTMLElement | null>(null)
const menuBtnRef = ref<HTMLElement | null>(null)

</script>

<template>
  <nav aria-label="Main menu"
    class="flex sticky justify-between items-center px-2 desktop:px-0 py-2 top-0 bg-offwhite border-violet h-[80px]">
    <!-- left side -->
    <a href="/"><img src="/logo.svg" alt="WhisperNews homepage"></a>
    <!-- desktop menu -->
    <ul class="menu_row hidden desktop:flex justify-end gap-5 w-full">
      <li v-for="item in ['Home', 'New', 'Popular', 'Trending', 'Categories']" :key="item" class="mobile_menu__item">
        <a class="inline-block w-full h-full hover:text-primary-red" href="#">{{ item }}</a>
      </li>
    </ul>

    <!-- mobile menu -->
    <div class="menu_dropdown flex desktop:hidden flex-col gap-5 w-fit">
      <button ref="menuBtnRef" class="flex justify-end min-h-[40px] min-w-[40px]" @click="safeClick"
        :aria-expanded="menuActive" aria-controls="menu-mobile" :aria-label="menuActive ? 'Close Menu' : 'Open menu'">
        <img v-if="!menuActive" src="/icon-menu.svg" alt="">
        <img v-else src="/icon-menu-close.svg" alt="">
      </button>

      <ul id="menu-mobile" v-if="menuActive" ref="menuRef"
        class="mobile_menu absolute top-[80px] right-0 flex flex-col gap-10 w-3/4 max-h-screen px-4 py-4 bg-offwhite h-screen">
        <li v-for="item in ['Home', 'New', 'Popular', 'Trending', 'Categories']" :key="item" class="mobile_menu__item">
          <a class="inline-block w-full h-full" href="#">{{ item }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
@reference "../style.css";

.mobile_menu__item {
  @apply px-4 py-2;
}
.mobile_menu__item a {
  @apply text-[1.6rem];
}
@media(max-width: 1439px) {
  nav {
    box-shadow: 0px 5px 10px 0px var(--color-midnight)
  }
}
</style>
