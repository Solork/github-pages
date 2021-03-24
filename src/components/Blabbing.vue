<template>
  <div class="card">
    <div class="card-body" v-for="(row, index) in data" :key="index">
      <h5 class="card-title">{{ row.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ row.date }}</h6>
      <p class="card-text">{{ row.content }}</p>
      <a v-for="(link, index_link) in row.links" :key="index_link + '_link'" :href="link.url" class="card-link">{{ link.alias }}</a>
      <!-- <a href="#" class="card-link">About today</a> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Blabbing',
  computed: {
    ...mapGetters({
      data: 'blabbing/getData'
    })
  }
}
</script>