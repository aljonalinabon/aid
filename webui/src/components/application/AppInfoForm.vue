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
          <v-card flat> <APIinformation /> </v-card>
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
  </div>
</template>

<script>
import BasicInformation from './applicationform/1_BasicInformation'
import References from './applicationform/2_References'
import APIinformation from './applicationform/3_APIinformation'
import Features from './applicationform/4_Features'
import Functions from './applicationform/5_Functions'
import TargetDevices from './applicationform/6_TargetDevice'
import Others from './applicationform/7_Others'

export default {
  name: 'AppInfoForm',
  components: {
    BasicInformation,
    References,
    APIinformation,
    Features,
    Functions,
    TargetDevices,
    Others
  },
  data () {
    return {
      appinfoform_action: 'Add application',
      tab: null,
      items: [
        'Basic',
        'References',
        'API Information',
        'Features',
        'Functions',
        'Target Devices',
        'Others'
      ]
      // text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
  methods: {
    goToHome() {
      this.$router.push({name: 'Home'});
    }
  }
}
</script>