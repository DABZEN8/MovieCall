<script setup>
import MovieCard from './MovieCard.vue'

// A grid of MovieCards. 
defineProps({
  movies: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['add'])

function handleAdd(movie) {
  emit('add', movie)
}
</script>

<template>
  <div class="movie-grid">
    <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      @add="handleAdd"/>
  </div>
</template>

<style scoped>
.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}
</style>