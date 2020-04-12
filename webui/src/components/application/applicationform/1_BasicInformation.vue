<template>
  <div>
    <h1>Basic Information</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col col="12">
            <v-text-field
              v-model="appname"
              label="Application name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12" md="8" >
            <v-text-field
              v-model="projectname"
              label="Project name"
            ></v-text-field>
          </v-col>
          <v-col col="12" md="4">
            <v-text-field
              v-model="projecttype"
              label="Project type"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12" md="8">
            <v-text-field
              v-model="appversion"
              label="Application version"
              required
            ></v-text-field>
          </v-col>

          <v-col col="12" md="4">
            <v-text-field
              v-model="baseapp"
              label="Base application"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12" md="6">
            <v-text-field
              v-model="salescompany"
              label="Sales company"
            ></v-text-field>
          </v-col>
          <v-col col="12" md="6">
            <v-text-field
              v-model="customer"
              label="Customer"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12" md="6">
            <v-text-field
              v-model="devstatus"
              label="Development status"
            ></v-text-field>
          </v-col>
          <v-col col="12" md="6">
            <v-text-field
              v-model="devinfo"
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
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'BasicInformation',
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  })
}
</script>

<style scoped>
</style>