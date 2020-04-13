<template>
  <div>
    <h1>Basic Information</h1>
    <form @input="input_form($event)">
      <v-container>
        <v-row>
          
          <v-col col="12">
            <v-text-field
              v-model="name"
              label="Application name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12" md="8" >
            <v-text-field
              v-model="project_name"
              label="Project name"
            ></v-text-field>
          </v-col>
          <v-col col="12" md="4">
            <v-text-field
              v-model="project_type"
              label="Project type"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12" md="8">
            <v-text-field
              v-model="version"
              label="Application version"
              required
            ></v-text-field>
          </v-col>

          <v-col col="12" md="4">
            <v-text-field
              v-model="base_application"
              label="Base application"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12" md="6">
            <v-text-field
              v-model="sales_company"
              label="Sales company"
            ></v-text-field>
          </v-col>
          <v-col col="12" md="6">
            <v-text-field
              v-model="customer_name"
              label="Customer"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12" md="6">
            <v-text-field
              v-model="dev_status"
              label="Development status"
            ></v-text-field>
          </v-col>
          <v-col col="12" md="6">
            <v-text-field
              v-model="dev_remarks"
              label="Development information"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12">
            <v-text-field
              v-model="description"
              label="Description"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BasicInformation',
  props: ['app_info', 'to_edit'],
  data: () => ({
    name: '',
    project_name: '',
    project_type: '',
    version: [],
    base_application: {},
    sales_company: '',
    customer_name: '',
    dev_status: '',
    dev_remarks: '',
    description: ''
  }),
  methods: {
    ...mapActions(['updateAppForm']),
    input_form() {
      const newApp = {
        name: this.name,
        project_name: this.project_name,
        project_type: this.project_type,
        version: this.version,
        base_application: this.base_application,
        sales_company: this.sales_company,
        customer_name: this.customer_name,
        dev_status: this.dev_status,
        dev_remarks: this.dev_remarks,
        description: this.description
      };
      this.updateAppForm(newApp);
    }
  },
  created() {
    console.log("to edit? " + this.to_edit);
  },
  watch: {
    app_info() { 
      if(this.to_edit && this.app_info) {
        this.name = this.app_info.name;
        this.project_name = this.app_info.project_name;
        this.project_type = this.app_info.project_type;
        this.version = this.app_info.version;
        this.base_application = this.app_info.base_application;
        this.sales_company = this.app_info.sales_company;
        this.customer_name = this.app_info.customer_name;
        this.dev_status = this.app_info.dev_status;
        this.dev_remarks = this.app_info.dev_remarks;
        this.description = this.app_info.description;
      }
    }
  },
  filters: {
    
  }
}
</script>

<style scoped>
</style>