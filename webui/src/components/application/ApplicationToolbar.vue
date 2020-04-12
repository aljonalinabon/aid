<template>
  <form style="height: 100px">
    <v-container>
      <v-row>
        <v-text-field
          small
          outlined
          label="Search applications..."
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
        <v-btn 
          style="margin: 10px;" primary @click="gotoAddApplication">
            <v-icon left>mdi-plus</v-icon> 
            Add application
          </v-btn>
      </v-row>
    </v-container>
  </form>
</template>

<script>
export default {
  name: 'SearchApplication',
  methods: {
    gotoAddApplication(){
      this.$router.push({name: 'AppInfoForm'});
    }
  }
}
</script>

<style>

	form {
		display: flex;
    transform: scale(0.875);
    /* transform-origin: left; */
	}

</style>