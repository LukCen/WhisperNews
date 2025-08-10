<script setup lang="ts">
import { ref } from 'vue'

const openId = ref<number | null>(null)
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
  <footer class="flex flex-col desktop:flex-row justify-around p-4 gap-5 bg-offwhite border-t-1 border-violet">
    <div v-for="col in [1, 2, 3]" :key="col" class="footer_link flex flex-col gap-2">
      <button type="button" class="px-4 border-1 rounded-sm border-violet font-bold" :aria-expanded="openId === col"
        :aria-controls="`footer-column-${col}`" @click.stop.prevent="safeToggle(col)">
        Header {{ col }}
      </button>

      <ul :id="`footer-column-${col}`" v-show="openId === col" class="footer_sublinks">
        <li v-for="opt in ['Option1', 'Option2', 'Option3', 'Option4']" :key="opt"
          class="w-full text-center px-4 py-2 hover:bg-[#f6f6f6]">
          {{ opt }}
        </li>
      </ul>
    </div>
  </footer>
</template>
