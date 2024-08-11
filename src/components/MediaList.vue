<script setup>
import { computed } from 'vue'

const props = defineProps({
    medias: {
        type: Array,
        default: () => [] // on a besoin d'une fonction ici
    },
    // Filtre par type (serie, movie)
    filter: {
        type: String,
        default: ''
    },
    // Mot recherché dans le titre
    search: {
        type: String,
        default: ''
    }
})

const mediasFiltered = computed(() => {
    return props.medias
    .filter(m => m.type === props.filter) // On filtre par type de média
    .filter(m => m.title.toLowerCase().includes(props.search.toLowerCase())) // On ajoute le filtre pour la recherche
})
</script>

<template>
  <div class="medialist">
    <h2>{{ filter }} ({{ mediasFiltered.length }})</h2>
    <ul v-if="mediasFiltered.length > 0">
        <li v-for="media in mediasFiltered" :key="media.id">
            <a href="#">
                <img :src="'/medias/' + media.img" :alt="media.title">
            </a>
        </li>
    </ul>
    <p v-else>Aucun média trouvé</p>
  </div>
</template>
