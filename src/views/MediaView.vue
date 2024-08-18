<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

import { useMediaStore } from '@/stores/medias'
const mediaStore = useMediaStore()

const media = ref({})

onMounted(() => {
  media.value = mediaStore.medias.find(m => m.id === Number(route.params.id))
  // S'il n'y a pas de média trouvé dans les données
  if(!media.value) {
    // On redirige vers l'accueil
    router.push({name: 'home'}) // ou '/' pour rediriger vers l'accueil
  } else {
    // On change le titre de la page active
    document.title = 'Media ' + media.value.title
  }
})
</script>

<template>
  <div class="media">
    <iframe v-if="media.tube" :src="'https://www.youtube.com/embed/'+media.tube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p v-else>Pas de vidéo trouvée pour média N°{{ route.params.id }}</p>
  </div>
</template>
