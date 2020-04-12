<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th >Name</th>
          <th >Customer</th>
          <th >Sales company</th>
          <th >Features</th>
          <th >Date released</th>
          <th >Latest version</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="app in allApplications" :key="app.name">
          <td>{{ app.name }}</td>
          <td>{{ app.customer_name }}</td>
          <td>{{ app.sales_company }}</td>          
          <td> <span class="feature-item" v-for="feature in app.features" :key="feature"> {{ feature.name }}</span> </td>
          <td>{{ app.version | latestRelease }}</td>          
          <td>{{ app.version | latestVersion }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'

export default {
  name: 'ApplicationList',
  methods: {
    ...mapActions(['fetchApplications'])
  },
  computed: mapGetters(['allApplications']),
  created() {
    this.fetchApplications();
  },
  filters: {
    latestVersion: function(array) {
      if(array || array.length != 0) {
        return array[array.length-1].number;
      }
    },
    latestRelease : function(array) {
      if(array || array.length != 0) {
        const date = array[array.length-1].date;
        return moment(date).format('MM/DD/YYYY');
      }
    }
  }
}
</script>

<style>
th {
  text-align: center !important;
}
.feature-item {
  background: #bbb;
  color: white;
  margin: 3px;
  padding: 3px;
  display: inline-block;
  border-radius: 5px;
}
.feature-item:hover {
  background: #999;
  cursor: pointer;
}
</style>
