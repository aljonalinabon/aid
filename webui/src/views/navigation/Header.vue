<template>
  <div class="header">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
  }
</style>
