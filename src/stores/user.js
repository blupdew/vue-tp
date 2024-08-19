import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // Informations utilisateur
  const user = ref({})

  // Retourne "true" si l'utilisateur est connecté (dispose d'un token)
  const isAuthenticated = computed(() => user.value.access_token?.length > 0)

  // Mémorise les informations utilisateur en vrac dans le state de ce store
  function setUser(u) {
    user.value = u
  }

  return { user, isAuthenticated, setUser }
})
