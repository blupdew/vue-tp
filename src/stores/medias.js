import { ref } from 'vue'
import { defineStore } from 'pinia'

import data from '@/data.js'

export const useMediaStore = defineStore('medias', () => {
  const medias = ref(data)  
  return { medias }
})
