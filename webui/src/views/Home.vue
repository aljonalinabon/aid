<template>
  <div class="home">
    <SearchApplication />
    <ApplicationList />
  </div>
</template>

<script>
import SearchApplication from '../components/application/SearchApplication';
import ApplicationList from '../components/application/ApplicationList';

export default {
  name: 'Home',
  components: {
    SearchApplication,
    ApplicationList
  }
}
</script>
