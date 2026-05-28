<script setup>
import { getPosterUrl } from '@/services/tmdb'

//expects a movie object from the parent and signals badck when the "add" button is clicked
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['add'])

function handleAdd() {
  emit('add', props.movie)
}
</script>

<template>
  <article class="movie-card">
    <img
      v-if="getPosterUrl(movie.poster_path)"
      :src="getPosterUrl(movie.poster_path)"
      :alt="movie.title"
      class="poster"
    />
    <div v-else class="poster poster-placeholder">No poster</div>

    <h3 class="title">{{ movie.title }}</h3>
    <p class="year">{{ movie.release_date?.slice(0, 4) }}</p>

    <button class="add-button" @click="handleAdd">+ Add to list</button>
  </article>
</template>

<style scoped>
.movie-card {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0.75rem;
  background: white;
  display: flex;
  flex-direction: column;
}

.poster {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.poster-placeholder {
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
}

.title {
  font-size: 1rem;
  margin: 0 0 0.25rem;
}

.year {
  margin: 0 0 0.75rem;
  color: #666;
  font-size: 0.9rem;
}

.add-button {
  margin-top: auto;
  padding: 0.4rem;
  background: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>