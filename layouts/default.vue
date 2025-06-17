<script setup lang="ts">

</script>

<template>
  <div class="nav">
    <NuxtLink class="nav__link" to="/">Page1</NuxtLink>
    <NuxtLink class="nav__link" to="/page2">Page2</NuxtLink>
    <NuxtLink class="nav__link" to="/page3">Page3</NuxtLink>
  </div>
  <slot/>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
}

.nav__link {
  text-decoration: none;
  border: 2px solid grey;
  color: black;
  padding: 12px 18px;
}
</style>
