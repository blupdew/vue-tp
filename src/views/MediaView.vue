<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="media">
    <p>Média N°{{ route.params.id }}</p>
  </div>
</template>
