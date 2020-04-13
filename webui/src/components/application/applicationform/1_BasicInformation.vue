<template>
  <div>
    <h1>Basic Information</h1>
    <form @change="input_form($event)">
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
  }
}
</script>

<style scoped>
</style>