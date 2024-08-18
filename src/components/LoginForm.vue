<template>
  <form class="login">
    <p><img src="/logo.svg"></p>
    <h3>S'identifier</h3>
    <p>
      <label for="login">Identifiant</label>
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
