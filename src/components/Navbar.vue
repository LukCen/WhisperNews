<script lang="ts" setup>
import { ref, type Ref } from 'vue';

const menuActive: Ref<boolean> = ref<boolean>(false)

</script>
<template>
  <nav class="flex justify-between px-4 py-2 relative">
    <!-- left side -->
    <a href="/"><img src="/logo.svg" alt="WhisperNews logo" role="link"></a>
    <!-- right side -->

    <!-- popup mobile menu - visible after hamburger press -->
    <div class="menu_dropdown flex flex-col gap-5 w-fit">
      <button class="flex justify-end min-h-[40px] min-w-[40px]"
        @click="menuActive === true ? menuActive = false : menuActive = true">
        <img v-if="!menuActive" src="/icon-menu.svg">
        <img v-else src="/icon-menu-close.svg">
      </button>
      <ul v-if="menuActive" class="mobile_menu flex flex-col gap-5 desktop:hidden w-full max-h-screen px-4 py-4">
        <li class="mobile_menu__item"><a href="#">Home</a></li>
        <li class="mobile_menu__item"><a href="#">New</a></li>
        <li class="mobile_menu__item"><a href="#">Popular</a></li>
        <li class="mobile_menu__item"><a href="#">Trending</a></li>
        <li class="mobile_menu__item"><a href="#">Categories</a></li>
      </ul>

    </div>
  </nav>
</template>

<style scoped>
@reference "../style.css";

.mobile_menu__item {
  @apply px-4 px-2 text-[2.5rem];
}
</style>
