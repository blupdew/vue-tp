<script setup>
import { /*RouterLink,*/ RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
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
        <span class="notifications" v-show="false"><span>3</span> notifications</span>
        <button class="register">S'inscrire</button>
        <button class="auth">Connexion</button>
      </div>
    </header>
  </div>
  <RouterView />
  <footer>© Vueflix {{ new Date().getFullYear() }} - Mentions légales - À Propos</footer>
</template>
