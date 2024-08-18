<script setup>
import { computed, ref } from 'vue'

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

// Défilement horizontal des listes
const pos = ref(0) // Valeur de décalage en %
const el = ref(null) // Élement de liste

// Précédent
function prev() {
    pos.value = Math.min(0, pos.value + 50)
}

// Suivant
function next() {
    // Version basique :
    // pos.value = Math.max(-220, pos.value - 50)
    // Version dynamique à partir des valeurs réelles :
    const max = ((el.value.scrollWidth - el.value.offsetWidth) / window.innerWidth) * 100
    pos.value = Math.max(-max, pos.value - 50)
}
</script>

<template>
  <div class="medialist">
    <h2>{{ filter }} ({{ mediasFiltered.length }})</h2>
    <template v-if="mediasFiltered.length > 0"><!-- On se sert de template pour regrouper liste et boutons dans la condition -->
        <ul ref="el">
            <li v-for="media in mediasFiltered" :key="media.id">
                <a href="#">
                    <img :src="'/medias/' + media.img" :alt="media.title">
                </a>
            </li>
        </ul>
        <input type="button" class="next" title="Suivant" value="▶" v-on:click="next">
        <input type="button" class="prev" title="Précédent" value="◀" v-on:click="prev">
    </template>
    <p v-else>Aucun média trouvé</p>
  </div>
</template>

<style scoped>
.medialist ul {
    transform: translateX(v-bind(pos+'%'));
}
</style>
