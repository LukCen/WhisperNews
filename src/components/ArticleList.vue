<template>
  <section class="article_list flex flex-col desktop:flex-row gap-4">
    <a href="#" class="article flex gap-3">
      <img src="/image-retro-pcs.jpg" alt="" class="w-[150px]">
      <div class="text flex flex-col gap-2">
        <span class="h3 text-primary-red font-medium">01</span>
        <h4 class="font-extrabold">Reviving Retro PCs</h4>
        <p class="desktop:text-[0.9rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, qui.</p>
      </div>
    </a>
    <a href="#" class="article flex gap-3">
      <img src="/image-top-laptops.jpg" alt="" class="w-[150px]">
      <div class="text flex flex-col gap-2">
        <span class="h3 text-primary-red font-medium">02</span>
        <h4 class="font-extrabold">Top 10 Laptops of 2025</h4>
        <p class="desktop:text-[0.9rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, qui.</p>
      </div>
    </a>
    <a href="#" class="article flex gap-3">
      <img src="/image-gaming-growth.jpg" alt="" class="w-[150px]">
      <div class="text flex flex-col gap-2">
        <span class="h3 text-primary-red font-medium">03</span>
        <h4 class="font-extrabold">The Growth of Gaming</h4>
        <p class="desktop:text-[0.95rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, qui.
        </p>
      </div>
    </a>
  </section>
</template>

<style scoped>
a.article:hover h4 {
  color: var(--color-primary-red)
}
</style>
