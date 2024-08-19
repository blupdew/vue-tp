<script setup>
import { ref } from 'vue'
import JSConfetti from 'js-confetti' // Si cette ligne génère une erreur, penser à `pnpm install js-confetti`

const emit = defineEmits(['close'])

const login = ref('')
const password = ref('')

async function submitForm() {
  // On pourrait améliorer ceci pour pré-valider les données par exemple sur le format du login
  if(login.value && password.value) {
    // Données à envoyer dans le corps de la requête
    const data = {
      email: login.value,
      password: password.value,
      role: "7ba8cfca-75a8-4bf7-ac39-461c2d55063b"
    }
    // Envoi de la requête vers l'API
    const response = await fetch(import.meta.env.VITE_API_URL + 'users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + import.meta.env.VITE_AUTHORIZATION
      },
      body: JSON.stringify(data)
    })
    // Traitement de la réponse
    if(response.ok && response.status === 200) {
      // Ici il faudrait prévoir une confirmation visuelle, par exemple...
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
      emit('close')
    } else {
      // Ici il faudrait prévoir un composant affichant l'erreur appropriée
      console.error('Inscription échouée :', (await response.json())?.errors[0]?.message)
    }
  }
}
</script>

<template>
  <form class="login" v-on:submit.prevent="submitForm">
    <p><img src="/logo.svg"></p>
    <h3>S'inscrire</h3>
    <p>
      <label for="login">E-mail</label>
      <input type="text" id="login" autocomplete="off" v-model="login">
    </p>
    <p>
      <label for="password">Mot de passe</label>
      <input type="password" id="password" autocomplete="off" v-model="password">
    </p>
    <input type="submit" value="Valider">
  </form>
</template>
