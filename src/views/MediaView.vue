<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

import { useMediaStore } from '@/stores/medias'
const mediaStore = useMediaStore()

// Récupère l'objet media directement dans le store de manière réactive grâce à computed
const media = computed(() => mediaStore.getMedia(route.params.id))

watch(media, (newMedia) => {
  // On change le titre de la page active, pour cela on utilise un watcher pour le propager à une propriété native
  document.title = 'Media ' + newMedia?.title
}, { immediate: true }) // On ajoute cette option pour le déclencher dès le premier montage
</script>

<template>
  <div class="media">
    <iframe v-if="media.tube" :src="'https://www.youtube.com/embed/'+media.tube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p v-else>Pas de vidéo trouvée pour média N°{{ route.params.id }}</p>
  </div>
</template>
