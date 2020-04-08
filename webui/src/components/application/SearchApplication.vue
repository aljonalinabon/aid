<template>
  <form class="flex align-end" style="height: 100px">
    <v-text-field single-line></v-text-field>
    <v-btn style="margin: 10px;" primary>Add application</v-btn>
  </form>
</template>

<script>
export default {
  name: 'SearchApplication'
}
</script>

<style>
	form {
		display: flex;
	}

</style>