<template>
  <div class="layout">
    <v-container class="grey lighten-2">
      <v-row>
        <v-col class="col-12">
          <Header></Header>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-12">
          <v-card tile style="padding: 20px">
            <Body></Body>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Body from './Body'
import Header from './Header'

export default {
  name: 'Layout',
  components: {
    Body,
    Header
  }
}
</script>
