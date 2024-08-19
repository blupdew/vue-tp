<script setup>
import { ref } from 'vue'

import { useMediaStore } from '@/stores/medias'
import { useUserStore } from '@/stores/user'
const mediaStore = useMediaStore()
const userStore = useUserStore()

const emit = defineEmits(['close'])

const login = ref('')
const password = ref('')

async function submitForm() {
  if(login.value && password.value) {
    const data = {
      email: login.value,
      password: password.value
    }
    // Envoi des données
    const response = await fetch(import.meta.env.VITE_API_URL + 'auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    // Traitement de la réponse qu'on espère valide
    const json = await response.json()
    if(response.ok && json) {
      if(json.data?.access_token) {
        userStore.setUser(json.data)
        mediaStore.loadData(true) // on passe "true" pour forcer une nouvelle requête
        emit('close')
      }
    } else {
      // Ici il faudrait prévoir un composant affichant l'erreur appropriée
      console.error('Identification échouée :', json?.errors[0]?.message)
    }
  }
}
</script>

<template>
  <form class="login" v-on:submit.prevent="submitForm">
    <p><img src="/logo.svg"></p>
    <h3>S'identifier</h3>
    <p>
      <label for="login">E-mail</label>
      <input type="text" id="login" autocomplete="off" v-model="login">
    </p>
    <p>
      <label for="password">Mot de passe</label>
      <input type="password" id="password" autocomplete="off" v-model="password">
    </p>
    <!-- <p class="error">Veuillez entrer vos identifiants</p> -->
    <input type="submit" value="Valider">
  </form>
</template>
