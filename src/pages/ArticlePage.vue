<script setup lang="ts">
import { useRoute } from "vue-router";
import articleData from "../data/articles/articles_long.json"
const route = useRoute()
const t: ArticleData = articleData

const currentArticle = {
  id: Number(t[String(route.params.id)]),
  htmlTag: t[String(route.params.id)].contents.contentBlock.htmlTag,
  classList: t[String(route.params.id)].contents.contentBlock.htmlClassList
}

</script>
<template>
  <component :is="currentArticle.htmlTag" :class="currentArticle.classList">

  </component>

</template>
