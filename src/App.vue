<script setup lang="ts">
import MainContent from './components/MainContent.vue';
import Navbar from './components/Navbar.vue';
import SkipLink from './components/SkipLink.vue';
import AppFooter from './components/AppFooter.vue'

</script>

<template>
  <SkipLink />
  <Navbar class="--full" />
  <MainContent class="--content" />
  <AppFooter class="--full" />
</template>
