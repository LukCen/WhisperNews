<template>
  <a href="#main-content" class="skip-link">Skip to main content</a>
</template>

<style scoped>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary-orange);
  color: var(--color-midnight);
  padding: 8px 16px;
  z-index: 1000;
  text-decoration: none;
  transition: top 0.2s;
}
.skip-link:focus {
  top: 0;
}
</style>
