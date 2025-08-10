<!-- body of the website -->

<script setup lang="ts">
import ArticleList from './ArticleList.vue';
import GridMain from './GridMain.vue';

</script>

<template>
  <main class="flex flex-col px-2 gap-10 pb-8 min-h-screen desktop:max-w-[1440px] mx-auto">
    <GridMain />
    <ArticleList />
  </main>
</template>
