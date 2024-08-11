<script setup>
import data from '@/data'
// console.log(data)
</script>

<template>
  <div class="mediagallery">
    <ul>
        <li v-for="media in data" :key="media.id">
            <a href="#">
                <img :src="'/medias/' + media.img" :alt="media.title">
            </a>
        </li>
    </ul>
  </div>
</template>
