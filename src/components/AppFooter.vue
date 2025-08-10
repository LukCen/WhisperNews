<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { ref } from 'vue'

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
  <footer class="flex flex-col desktop:flex-row justify-around p-4 gap-5 bg-midnight text-offwhite border-t-1">
    <div v-for="col in [1, 2, 3]" :key="col" class="footer_link flex flex-col gap-2">
      <button type="button" class="px-4 rounded-sm text-xl font-bold" :aria-expanded="openId === col"
        :aria-controls="`footer-column-${col}`" @click.stop.prevent="safeToggle(col)">
        Header {{ col }}
      </button>

      <ul :id="`footer-column-${col}`" v-show="openId === col || isDesktop" class="footer_sublinks flex flex-col">
        <a href="#" v-for="opt in ['Option 1', 'Option 2', 'Option 3', 'Option 4']" :key="opt"
          class="w-full text-center px-4 py-2 hover:text-primary-orange">
          {{ opt }}
        </a>
      </ul>
    </div>
  </footer>
</template>
