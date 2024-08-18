import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import data from '@/data.js'

export const useMediaStore = defineStore('medias', () => {
  const medias = ref(data)
  const getMedia = computed(() => (id) => medias.value.find(m => m.id === Number(id)))
  return { medias, getMedia }
})
