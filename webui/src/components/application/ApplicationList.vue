<template>
  <div>
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
          <tr v-for="app in filteredApplications" :key="app.name" @click.stop="openAppInfoDialog(app)">
            <td>{{ app.name }}</td>
            <td>{{ app.customer_name }}</td>
            <td>{{ app.sales_company }}</td>          
            <td> <span class="feature-item" v-for="feature in app.features" :key="feature.name"> {{ feature.name }}</span> </td>
            <td> <span v-if="app.version.date">{{ app.version.date | latestRelease }}</span> </td>          
            <td> <span v-if="app.version.number">{{ app.version.number }}</span> </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>


    <AppInfoView :dialog="show_appinfo_dialog" :app_info ="app_info" v-on:toggleDialog="toggleDialog"/>
  </div>
</template>

<script>
import AppInfoView from './AppInfoView'
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'


export default {
  name: 'ApplicationList',
  
  components: {
    AppInfoView
  },

  data () {
    return {
      show_appinfo_dialog : false,
      app_info: {}
    }
  },

  methods: {
    ...mapActions(['fetchApplications']),
    openAppInfoDialog(app_info) {
      this.show_appinfo_dialog = true;
      this.app_info = app_info;
      // this.show_appinfo_dialog.appinfo = app_info
    },
    toggleDialog(value){
      this.show_appinfo_dialog = value;
    }
  },

  computed: mapGetters(['filteredApplications']),

  created() {
    this.fetchApplications();
  },

  filters: {
    latestRelease : function(date) {
      
      return moment(date).format('MM/DD/YYYY');
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
