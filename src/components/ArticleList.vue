<template>
  <section aria-labelledby="hotspot-heading" class="article_list">
    <h2 id="hotspot-heading" class="sr-only">Hotspot articles</h2>
    <ul class="flex flex-col desktop:flex-row gap-4" role="list">
      <li>
        <a href="#" class="article flex gap-3" aria-label="Read more about Reviving Retro PCs">
          <img src="/image-retro-pcs.jpg" alt="Old retro computer setup" class="w-[150px]">
          <div class="text flex flex-col gap-2">
            <span class="h3 text-primary-red font-medium">01</span>
            <div class="text_content flex flex-col h-full justify-between">
              <h3 class="font-extrabold">Reviving Retro PCs</h3>
              <p class="desktop:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, qui.
              </p>
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="article flex gap-3" aria-label="Read more about Top 10 Laptops of 2025">
          <img src="/image-top-laptops.jpg" alt="Modern laptop on a desk" class="w-[150px]">
          <div class="text flex flex-col gap-2">
            <span class="h3 text-primary-red font-medium">02</span>
            <div class="text_content flex flex-col h-full justify-between">
              <h3 class="font-extrabold">Top 10 Laptops of 2025</h3>
              <p class="desktop:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, qui.
              </p>
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="article flex gap-3" aria-label="Read more about The Growth of Gaming">
          <img src="/image-gaming-growth.jpg" alt="Person playing a video game" class="w-[150px]">
          <div class="text flex flex-col gap-2">
            <span class="h3 text-primary-red font-medium">03</span>
            <div class="text_content flex flex-col h-full justify-between">
              <h3 class="font-extrabold">The Growth of Gaming</h3>
              <p class="desktop:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, qui.
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
a.article h3 {
  font-size: 1.65rem;
}

a.article:hover h3 {
  color: var(--color-primary-red);

}
</style>
