<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Customer</th>
          <th class="text-left">Sales company</th>
          <th class="text-left">Features</th>
          <th class="text-left">Date released</th>
          <th class="text-left">Latest version</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="app in applications" :key="app.name">
          <td>{{ app.name }}</td>
          <td>{{ app.customer }}</td>
          <td>{{ app.sc }}</td>          
          <td> <span class="feature-item" v-for="feature in app.features" :key="feature"> {{feature}}</span> </td>
          <td>{{ app.date }}</td>          
          <td>{{ app.latest_version }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'ApplicationList',
  data() {
    return {
      applications: []
    }
  },
  created() {
    this.applications = [
      {
        name: 'ID card scan',
        customer: 'KDAS',
        sc: 'KDAS',
        features: [
          "Scan ID card",
          "Send to FTP"
        ],
        date: "1/20/2020",
        latest_version: 'E000.001.200.9000'
      },
      
      {
        name: 'Multicrop',
        customer: 'KDAS',
        sc: 'KDAS',
        features: [
          "Multicrop",
          "Send to FTP",
          "Send to SMB",
          "Send to Email"
        ],
        date: "1/20/2020",
        latest_version: 'E000.001.200.9000'
      },
      {
        name: 'ID card scan',
        customer: 'KDAS',
        sc: 'KDAS',
        features: [
          "Scan ID card",
          "Send to FTP"
        ],
        date: "1/20/2020",
        latest_version: 'E000.001.200.9000'
      }
    ]
  }
}
</script>

<style>
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
