<template>
  <v-app id="app">
    <Layout />
  </v-app>
</template>

<script>
import Layout from "./views/navigation/Layout";

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
