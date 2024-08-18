<script setup>
import data from '@/data'
import MediaList from '../components/MediaList.vue'

import { ref, onMounted } from 'vue'
const search = ref('')
const recherche = ref(null)

onMounted(() => {
  recherche.value.focus()
})
</script>

<template>
  <div class="mediagallery">
    <!-- Recherche -->
    <p class="search">
      <label for="searchtxt">Recherche</label>
      <input id="searchtxt" type="search" v-model="search" ref="recherche">
    </p>
    <MediaList :medias="data" filter="serie" :search="search" />
    <MediaList :medias="data" filter="movie" :search="search" />
  </div>
</template>
