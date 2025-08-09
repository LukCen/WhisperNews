<template>
  <section class="flex flex-col desktop:flex-row gap-5">
    <!-- banner section - left side -->
    <div class="left flex flex-col desktop:flex-8/12">
      <picture>
        <source media="(min-width: 1440px)" srcset="/image-web-3-desktop.jpg">
        <img src="/image-web-3-mobile.jpg" alt="Main banner">
      </picture>
      <!-- text -->
      <div class="article flex flex-col desktop:flex-row gap-1 py-4">
        <div class="text_container desktop:flex-5/12">
          <h2 class="text-5xl desktop:text-7xl font-bold">The Bright Future of Web 3.0?</h2>
        </div>
        <div class="article_text flex flex-col justify-between desktop:flex-7/12 gap-2">
          <span class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores facilis
            ad tempore amet
            dicta labore aliquid, molestiae quod, esse voluptatem ab. Expedita tempora vel inventore id asperiores,
            accusantium veniam!</span>
          <a class="px-8 py-2 text-center bg-primary-red hover:bg-midnight duration-100 font-semibold hover:text-offwhite w-fit"
            href="#">Read more</a>
        </div>
      </div>
    </div>
    <!-- banner section - right side -->
    <div class="right flex flex-col desktop:flex-1/4 bg-midnight text-offwhite p-4 gap-8">
      <h2 class="text-primary-orange font-semibold">New</h2>
      <div class="subarticle_block flex flex-col gap-2">
        <span class="h4 font-medium">Hydrogen VS Electric Cars</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, numquam.</p>
      </div>
      <hr class="text-violet">
      <div class="subarticle_block flex flex-col gap-2">
        <span class="h4 font-medium">Hydrogen VS Electric Cars</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, numquam.</p>
      </div>
      <hr class="text-violet">
      <div class="subarticle_block flex flex-col gap-2">
        <span class="h4 font-medium">Hydrogen VS Electric Cars</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, numquam.</p>
      </div>
    </div>
  </section>
</template>
