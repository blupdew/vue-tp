<script setup>
import MediaList from '../components/MediaList.vue'

import { ref, onMounted } from 'vue'
const search = ref('')
const recherche = ref(null)

// Store des médias
import { useMediaStore } from '@/stores/medias'
const mediaStore = useMediaStore()

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
    <MediaList :medias="mediaStore.medias" filter="serie" :search="search" />
    <MediaList :medias="mediaStore.medias" filter="movie" :search="search" />
  </div>
</template>
