<script setup lang="ts">
import { useRoute } from "vue-router";
import articleData from "../data/articles/articles_long.json"
const route = useRoute()
const t: ArticleData = articleData

const currentArticle = {
  htmlTag: t[String(route.params.id)].contents.contentBlock.htmlTag,
  classList: t[String(route.params.id)].contents.contentBlock.htmlClassList,
  children: t[String(route.params.id)].contents.contentBlock.children
}

</script>
<template>
  <component :is="currentArticle.htmlTag" :class="currentArticle.classList">
    <component v-for="child in currentArticle.children" :is="child.childHtmlTag" :class="child.childHtmlClassList">

      <h2>{{ child.childContent[0].header }}</h2>
      <div v-for="textblock in child.childContent[0].text.paragraphs">
        <p>{{ textblock }}</p>
      </div>
    </component>


  </component>

</template>
<style scoped>
.article-block {
  grid-column: content
}
</style>
