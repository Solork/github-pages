<template>
  <ul class="nav nav-tabs">
    <li class="nav-item" v-for="(route, index) in $router.options.routes" :key="index">
      <router-link class="nav-link" :class="{'active': currentRouteName == route.name}" :to="route.path">{{ route.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>