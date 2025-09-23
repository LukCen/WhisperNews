<script setup lang="ts">
import imgRetro from "/image-retro-pcs.jpg"
import imgLaptops from "/image-top-laptops.jpg"
import imgGrowth from "/image-gaming-growth.jpg"

// In a real project this would probably be a fetch from a database, but this is a mock-up, so a simple array will do
const articleList: ArticleItemSimple[] = [
  {
    id: 1,
    img: imgRetro,
    title: "Reviving Retro PCs"
  },
  {
    id: 2,
    img: imgLaptops,
    title: "Top 10 Laptops of 2025"
  },
  {
    id: 3,
    img: imgGrowth,
    title: "The Growth of Gaming"
  }

]

</script>

<template>
  <section aria-labelledby="hotspot-heading" class="article_list flex flex-col gap-8 h-fit">
    <h2 id="hotspot-heading" class="font-bold text-primary-red">Today's picks</h2>
    <ul class="flex flex-col desktop:flex-row gap-6" role="list">
      <li v-for="i in articleList" class="overflow-hidden shadow-base rounded-sm h-fit hover:scale-105 duration-250">
        <a href="#" class="article flex gap-3 h-fit" aria-label="Read more about Reviving Retro PCs">
          <img :src="i.img" alt="Old retro computer setup" class="min-w-[200px]">
          <div class="text flex flex-col gap-2">
            <span class="h3 text-primary-red font-medium">0{{ i.id }}</span>
            <div class="text_content flex flex-col justify-around h-full">
              <h3 class="font-extrabold">{{ i.title }}</h3>
              <p class="desktop:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur,
                qui.
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
