<script setup>
const emit = defineEmits(['close'])
</script>

<template>
  <div class="popin">
    <button class="close" aria-label="Fermer" title="Fermer" v-on:click="emit('close')">✖</button>
    <slot>
        <!-- Ici viendra se loger le contenu "utile" de la popin -->
    </slot>
  </div>
</template>
