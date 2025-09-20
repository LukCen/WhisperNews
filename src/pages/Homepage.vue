<script setup lang="ts">
import AppFooter from '../components/AppFooter.vue';
import MainContent from '../components/MainContent.vue';
import Navbar from '../components/Navbar.vue';
import SkipLink from '../components/SkipLink.vue';

</script>

<template>

  <SkipLink />
  <Navbar class="--full" />
  <MainContent class="--content" />
  <AppFooter class="--full" />
</template>
