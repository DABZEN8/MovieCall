<script setup>
import SearchBar from '@/components/SearchBar.vue'
import MovieList from '@/components/MovieList.vue'
import { useMovieSearch } from '@/composables/useMovieSearch'

const { results, isLoading, error, search } = useMovieSearch()

function handleSearch(query) {
  search(query)
}

// The 'add' button doesn't do anything yet — the store is added in branch 5.
// For now we just log it so we know the event fires.
function handleAdd(movie) {
  console.log('Add movie:', movie)
}
</script>

<template>
  <h2>Search for movies</h2>

  <SearchBar @search="handleSearch" />

  <p v-if="isLoading">Loading...</p>
  <p v-else-if="error">Error: {{ error }}</p>
  <p v-else-if="results.length === 0">Ni får inte söka på Star wars, Fight club eller Titanic ffs</p>

  <MovieList v-else :movies="results" @add="handleAdd" />
</template>