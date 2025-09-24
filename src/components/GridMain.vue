<script setup lang="ts">
import imgWeb from "/image-web-3-mobile.jpg"

</script>
<template>
  <section aria-labelledby="main-banner-heading" class="flex flex-col desktop:flex-row gap-5">
    <!-- banner section - left side -->
    <div class="left flex flex-col desktop:flex-8/12">
      <picture>
        <source media="(min-width: 1440px)" srcset="/image-web-3-desktop.jpg">
        <img :src="imgWeb" alt="Main banner" class="w-full" loading="eager">
      </picture>
      <!-- text -->
      <div class="article flex flex-col desktop:flex-row gap-4 py-4">
        <div class="text_container desktop:flex-5/12">
          <h2 id="main-banner-heading" class="text-5xl desktop:text-7xl font-extrabold">The Bright Future of Web 3.0?
          </h2>
        </div>
        <div class="article_text flex flex-col justify-between desktop:flex-7/12 gap-4">
          <span class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores facilis
            ad tempore amet
            dicta labore aliquid, molestiae quod, esse voluptatem ab. Expedita tempora vel inventore id asperiores,
            accusantium veniam!</span>
          <a aria-label="Read more about the bright future of Web 3.0"
            class="px-8 py-2 text-center text-[1rem] bg-primary-red hover:bg-midnight duration-100 font-semibold hover:text-offwhite w-fit uppercase tracking-[6px]" href="#">Read more</a>
        </div>
      </div>
    </div>
    <!-- banner section - right side -->
    <aside class="right flex flex-col desktop:flex-1/4 bg-midnight text-offwhite px-6 py-8 gap-4" aria-label="Latest news">
      <h2 class="text-primary-orange font-semibold">New</h2>
      <ul class="flex flex-col gap-4" role="list">
        <li class="subarticle_block">
          <a href="" class="flex flex-col gap-2 hover:text-primary-orange duration-150">
            <h3 class="font-medium">Hydrogen VS Electric Cars</h3>
            <p class="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, numquam.</p>

          </a>
        </li>
        <hr class="bg-white opacity-50">
        <li class="subarticle_block">
          <a href="" class="flex flex-col gap-2 hover:text-primary-orange duration-150">
            <h3 class="font-medium">The Downsides of AI Artistry</h3>
            <p class="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, numquam.</p>

          </a>
        </li>
        <hr class="bg-white opacity-50">
        <li class="subarticle_block">
          <a href="" class="flex flex-col gap-2 hover:text-primary-orange duration-150">
            <h3 class="font-medium">Is VC funding drying up?</h3>
            <p class="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, numquam.</p>

          </a>
        </li>
      </ul>
    </aside>
  </section>
</template>

<style scoped>
.subarticle_block h3 {
  font-size: 2rem;
}
</style>
