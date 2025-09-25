<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { ref } from 'vue'
import fb from "../assets/facebook.webp"
import x from "../assets/x.webp"
import bsk from "../assets/bluesky.webp"
const footerItems = [
  "Contact Us", "About Us", "Blog", "Partners", "Careers"
]

const followUs = [
  { name: "facebook", logo: fb },
  { name: "x/twitter", logo: x },
  { name: "bluesky", logo: bsk }
]

const openId = ref<number | null>(null)
const isDesktop = useMediaQuery(`(min-width: 1439px)`)
let lastClick = 0

function safeToggle(id: number) {
  const now = Date.now()

  // Filtr anty-double-trigger
  if (now - lastClick < 300) return
  lastClick = now

  // Logika toggle
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <footer class="grid w-full p-4 gap-5 bg-midnight text-offwhite border-t-1">
    <div class="footer-entries flex justify-around items-center w-3/4 desktop:w-full columns-8">
      <a href="#" v-for="item in footerItems" class="hover:text-primary-orange duration-150">{{ item }}</a>
    </div>
    <div class="footer-extra justify-center items-center flex flex-col gap-4 border-l-1">
      <h4>Check out our socials!</h4>
      <div class="social-box flex justify-center gap-8">
        <a class="flex gap-2" href="#" v-for="item in followUs">
          <img :title="item.name" :src="item.logo" alt="" width="30" height="30">
        </a>

      </div>
    </div>
    <small>Footer icons via <a class="text-primary-orange text-[size:inherit]" href="https://icons8.com">icons8</a></small>
  </footer>

</template>

<style scoped>
footer {
  grid-template-columns:
    auto;
  grid-template-rows:
    auto auto;
}
.footer-entries, .footer-extra {
  grid-row: 1/2;
}

.footer-entries {
  grid-column: 1 / 9;
}
.footer-extra {
  grid-column: 10 / 12
}
small {
  grid-row: 2/3;
  grid-column: 1 / 12;
  text-align: center;
}

.social-box a:hover {
  filter: brightness(0) saturate(100%) invert(72%) sepia(72%) saturate(428%) hue-rotate(337deg) brightness(94%) contrast(94%);
}
</style>
