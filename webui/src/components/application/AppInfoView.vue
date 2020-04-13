<template>
  <v-dialog v-model="show_dialog" width="600px">
    <v-card>
      <v-card-title>
        <span class="headline"> {{app_info.name}} </span>

      </v-card-title>
        <div style="float:right">
          <v-btn color="green darken-1" text @click="edit_application">Edit</v-btn>
          <v-btn color="green darken-1" text @click="show_dialog = false">Cancel</v-btn>
        </div>
      <v-card-text>
        
        <v-container class="align-center ">
          <v-row>
            <v-col>
            <h3>Basic information</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4" class="pa-1 info-column-label">
              Application name: 
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
               {{app_info.name}} 
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4" class="pa-1 info-column-label"
            >
              Project name:
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
               {{app_info.project_name}} 
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4" class="pa-1 info-column-label"
            >
              Project type:
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
               {{app_info.project_type}} 
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4" class="pa-1 info-column-label"
            >
              Sales company:
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
               {{app_info.sales_company}} 
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4" class="pa-1 info-column-label"
            >
              Customer name:
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
              {{app_info.customer_name}} 
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4" class="pa-1 info-column-label"
            >
              Latest application version:
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
              <div v-if="app_info.version && app_info.version.number">
                <span> {{app_info.version.number}} </span>
                <h6> {{app_info.version.date | latestRelease}} </h6> 
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4" class="pa-1 info-column-label"
            >
              Base application:
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
              <a v-if="app_info.base_application && app_info.base_application.name" :href="app_info.base_application.link">{{app_info.base_application.name}}</a>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4" class="pa-1 info-column-label"
            >
              Development status:
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
              {{app_info.dev_status}} 
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4" class="pa-1 info-column-label"
            >
              Description:
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
              {{app_info.description}} 
            </v-col>
          </v-row>

          <!-- REFERENCES -->
          <v-row>
            <v-col>
            <h3>References</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4" class="pa-1 info-column-label"
            >
              values: 
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
              {{app_info.references}} 
            </v-col>
          </v-row>

          <!-- FEATURES -->
          <v-row>
            <v-col>
            <h3>Features</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4" class="pa-1 info-column-label"
            >
              values: 
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
              {{app_info.features}} 
            </v-col>
          </v-row>
          
          <!-- FUNCTIONS -->
          <v-row>
            <v-col>
            <h3>Functions</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4" class="pa-1 info-column-label"
            >
              values: 
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
              {{app_info.functions}} 
            </v-col>
          </v-row>

          <!-- TARGET DEVICES -->
          <v-row>
            <v-col>
              <h3>Target devices</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="4" class="pa-1 info-column-label"
            >
              values: 
            </v-col>
            <v-col cols="8" class="pa-1 info-column-value">
              {{app_info.target_device}} 
            </v-col>
          </v-row>
        </v-container>
        
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="edit_application">Edit</v-btn>
        <v-btn color="green darken-1" text @click="show_dialog = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
    
</template>

<script>
import moment from 'moment'

export default {
  name: 'AppInfoView',
  props: ['dialog', 'app_info'],
  computed: {
    show_dialog: {
      get () {
        return this.dialog
      },
      set (value) {
        this.$emit('toggleDialog', value);
      }
    }
  },
  methods: {
    edit_application() {
      this.$router.push({name: 'EditAppInfo', params: {id:this.app_info.id}})
    }
  },
  filters: {
    latestRelease : function(date) {
      
      return moment(date).format('MM/DD/YYYY');
    }
  }
}
</script>

<style scoped>
h3 {
  text-align: left !important;
  font-weight: normal;
  text-transform: uppercase;
}
.info-column-label {
  text-align: right !important;
}
.info-column-value {
  text-align: left !important;
  font-weight: bold;
}
</style>