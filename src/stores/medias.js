import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { useUserStore } from '@/stores/user'

const url = import.meta.env.VITE_API_URL // URL de l'API

export const useMediaStore = defineStore('medias', () => {
  const medias = ref([])
  const getMedia = computed(() => (id) => medias.value.find(m => m.id === Number(id)))

  async function loadData(force = false) {
    // S'il y a des médias et qu'on ne force pas le rechargement...
    if(medias.value.length > 0 && !force) return
    try {
      let headers = {}
      // S'il y a un token de session utilisateur, on l'ajoute aux headers de la requête
      const userStore = useUserStore()
      if(userStore.user?.access_token) {
        headers = {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + userStore.user?.access_token
        }
      }
      const response = await fetch(url+'items/medias/',{
        method: 'GET',
        headers // ou headers: headers
      })
      const json = await response.json()
      medias.value = json?.data // Attention il y a une sous-propriété "data" dans la réponse
      console.log('loadData OK : ' + medias.value.length + ' medias')
    } catch(e) {
      console.error(e)
    }
  }

  // Pré-remplit les données
  // mais on pourrait contrôler ceci plus finement en l'appelant depuis App ou un autre composant
  loadData()

  return { medias, getMedia, loadData }
})
