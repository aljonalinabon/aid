<template>
  <div>
    <v-toolbar color="primary" dark>
      <v-btn icon class="hidden-xs-only" @click="goToHome">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>{{appinfoform_action}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="hidden-xs-only">
        <v-icon>mdi-content-save-outline</v-icon>
      </v-btn>
      <v-btn icon class="hidden-xs-only">
        <v-icon>mdi-cancel</v-icon>
      </v-btn>
    </v-toolbar>

    <v-tabs v-model="tab" vertical>
      <v-tab 
        v-for="item in items"
        :key="item"
      >
        <div style="width:100%; text-align: right">{{ item }}</div>
      </v-tab>

      <v-tabs-items v-model="tab" style="padding-top: 30px">
        <v-tab-item>
          <v-card flat> <BasicInformation /> </v-card>
        </v-tab-item>
        
        <v-tab-item>
          <v-card flat> <References /> </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat> <Features /> </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat> <Functions /> </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat> <TargetDevices /> </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat> <Others /> </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
    <div style="width: 100%" class="d-flex flex-row">
      <v-spacer></v-spacer>
      <v-btn color="green darken-1" text @click="save()">Save</v-btn>
      <v-btn color="green darken-1" text @click="goToHome()">Cancel</v-btn>
    </div>
  </div>
</template>

<script>
import BasicInformation from './applicationform/1_BasicInformation'
import References from './applicationform/2_References'
import Features from './applicationform/4_Features'
import Functions from './applicationform/5_Functions'
import TargetDevices from './applicationform/6_TargetDevice'
import Others from './applicationform/7_Others'
import { mapActions } from 'vuex'

export default {
  name: 'AppInfoForm',
  components: {
    BasicInformation,
    References,
    Features,
    Functions,
    TargetDevices,
    Others
  },
  data () {
    return {
      application_information: {},
      appinfoform_action: 'Add application',
      tab: null,
      items: [
        'Basic',
        'References',
        'Features',
        'Functions',
        'Target Devices',
        'Others'
      ]
    }
  },
  methods: {
    ...mapActions(['addApplication']),
    goToHome() {
      this.$router.push({name: 'Home'});
    },
    save() {
      this.addApplication();
    }
  }
}
</script>