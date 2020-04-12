<template>
  <div class="home">
    <ApplicationToolbar />
    <ApplicationList />
  </div>
</template>

<script>
import ApplicationToolbar from '../components/application/ApplicationToolbar';
import ApplicationList from '../components/application/ApplicationList';

export default {
  name: 'Home',
  components: {
    ApplicationToolbar,
    ApplicationList
  }
}
</script>
