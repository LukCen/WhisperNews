<!-- thematically-connected block of articles in a 1x2 (mobile) and 2x1(desktop) layout -->

<script setup lang="ts">

const articleItems: ArticleBlock[] = [
  {
    blockTitle: 'Gaming',
    blockItems: [
      {
        id: 'article_gaming_1',
        img: '/main_article_block/article_gaming_1_mobile.webp',
        imgLarge: '/main_article_block/article_gaming_1_desktop.webp',
        title: 'The Success and Failures of Gacha Games',
        subtitle: 'How microtransactions shape the future of mobile gaming',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero dolores ratione incidunt soluta dolore vel. Itaque similique, minima consequuntur ad eum illum tenetur? Sed architecto unde, culpa aut quibusdam, pariatur dolorem laudantium iusto maxime facilis aliquam error perferendis beatae.'
      },
      {
        id: 'article_gaming_2',
        img: '/main_article_block/article_gaming_2_mobile.webp',
        imgLarge: '/main_article_block/article_gaming_2_desktop.webp',
        title: 'Mobile vs Consoles – Does the Old Guard Hold Up?',
        subtitle: 'Why portability isn’t always enough to win the game',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero dolores ratione incidunt soluta dolore vel. Itaque similique, minima consequuntur ad eum illum tenetur? Sed architecto unde, culpa aut quibusdam, pariatur dolorem laudantium iusto maxime facilis aliquam error perferendis beatae.'
      }
    ]
  }
]

</script>
<template>

  <section v-for="i in articleItems" :key="i.blockTitle" aria-label="Articles about gaming"
    class="article_block flex flex-col gap-2">
    <h2 class="font-bold text-primary-red">{{ i.blockTitle }}</h2>
    <div class="article_container flex flex-col desktop:flex-row gap-10">
      <article v-for="subi in i.blockItems" class="article_item flex flex-col">
        <!-- image -->
        <picture>
          <source :srcset="subi.imgLarge" media="(min-width: 1440px)"> <!-- desktop-->
          <img class="w-full" :src="subi.img" alt="">
        </picture>
        <!-- text block -->
        <div class="text_block flex py-4 flex-col justify-between gap-4 h-full">
          <h4 class="font-bold">{{ subi.title }}</h4>
          <span class="text-violet text-[1rem]">{{ subi.subtitle }}</span>
          <p>{{ subi.content }}</p>
        </div>
        <a class="px-8 py-2 bg-primary-red text-offwhite font-bold tracking-wider w-fit hover:bg-midnight duration-150"
          href="#">Read
          more ></a>
      </article>

    </div>
  </section>
</template>
