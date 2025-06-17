<script setup lang="ts">
const gtm = useGtm()
const signInHandler = () => {
  gtm.trackEvent({
    event: 'register_click',
    category: 'CTA',
    action: 'click',
    label: 'SignIn Button'
  })
}
</script>

<template>
  <div class="page">
    <h1>Page 1</h1>
    <button @click="signInHandler">Sign in Button</button>
  </div>
</template>

<style scoped>

</style>
