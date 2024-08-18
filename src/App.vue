<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import MaryPopin from './components/MaryPopin.vue'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'

import { ref, onMounted, onUnmounted } from 'vue'
const notifications = ref(0)

// État des popins (serait mieux géré dans un store avec un nombre de valeurs souple)
const showPopinLogin = ref(false)
const showPopinRegister = ref(false)

const router = useRouter()

// Un écouteur d'événement global pour la touche echap
onMounted(() => {
  window.addEventListener('keydown', echapHandler)
})

// On pense à le désenregistrer
onUnmounted(() => {
  // Peut s'exécuter quand on HMR durant le dev en modifiant ce fichier source
  window.removeEventListener('keydown', echapHandler)
})

// On doit nommer la fonction pour pouvoir l'utiliser dans add+removeEventListener
function echapHandler(e) {
  if(e.key === 'Escape') {
    showPopinLogin.value = false
    showPopinRegister.value = false
  }
}

// Ferme la popin avant chaque changement de route
router.beforeEach(() => {
  showPopinLogin.value = false
  showPopinRegister.value = false
})
</script>

<template>
  <div class="app">
    <header id="header">
      <div id="logo">
        <img src="/logo.svg" alt="Vueflix">
      </div>
      <nav id="nav">
        <ul>
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink to="/about">À propos</RouterLink></li>
        </ul>
      </nav>
      <div id="profile">
        <span class="notifications" :style="notifications < 1 ? 'visibility: hidden' : ''"><span>{{ notifications }}</span> notifications</span>
        <button class="register" v-on:click="showPopinRegister = true, showPopinLogin = false">S'inscrire</button>
        <button class="auth" v-on:click="showPopinRegister = false, showPopinLogin = true">Connexion</button>
      </div>
    </header>
    <RouterView />
  </div>
  <footer>© Vueflix {{ new Date().getFullYear() }} - Mentions légales - <RouterLink :to="{name: 'about'}">À Propos</RouterLink></footer>

  <!-- KeepAlive nous permet de constater que l'état est préservé -->
  <KeepAlive>
    <MaryPopin v-if="showPopinLogin" v-on:close="showPopinLogin = false">
      <LoginForm v-on:close="showPopinLogin = false"></LoginForm>
    </MaryPopin>
  </KeepAlive>
  <MaryPopin v-if="showPopinRegister" v-on:close="showPopinRegister = false">
    <RegisterForm v-on:close="showPopinRegister = false"></RegisterForm>
  </MaryPopin>

</template>
