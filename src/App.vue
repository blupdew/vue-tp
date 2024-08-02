<script setup>
import { /*RouterLink,*/ RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import { ref } from 'vue'
const search = ref('')
const notifications = ref(0)
</script>

<template>
  <div class="app">
    <header id="header">
      <div id="logo">
        <img src="/logo.svg" alt="Vueflix">
      </div>
      <nav id="nav">
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
        </ul>
      </nav>
      <div id="profile">
        <span class="notifications" :style="notifications < 1 ? 'visibility: hidden' : ''"><span>{{ notifications }}</span> notifications</span>
        <button class="register">S'inscrire</button>
        <button class="auth" v-on:click="notifications++">Connexion</button>
      </div>
    </header>
    <!-- Recherche -->
    <p class="search">
      <label for="searchtxt">Recherche</label>
      <input id="searchtxt" type="search" v-model="search">
    </p>
  </div>
  <RouterView />
  <footer>© Vueflix {{ new Date().getFullYear() }} - Mentions légales - À Propos</footer>
</template>
