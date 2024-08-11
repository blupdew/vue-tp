<script setup>
import data from '@/data'
import MediaList from '../components/MediaList.vue'

import { ref } from 'vue'
const search = ref('')
</script>

<template>
  <div class="mediagallery">
    <!-- Recherche -->
    <p class="search">
      <label for="searchtxt">Recherche</label>
      <input id="searchtxt" type="search" v-model="search">
    </p>
    <MediaList :medias="data" filter="serie" :search="search" />
    <MediaList :medias="data" filter="movie" :search="search" />
  </div>
</template>
