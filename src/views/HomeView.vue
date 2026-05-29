<script setup>
import SearchBar from '@/components/SearchBar.vue'
import MovieList from '@/components/MovieList.vue'
import { useMovieSearch } from '@/composables/useMovieSearch'
import { useMoviesStore } from "@/stores/movies"

// markera här för jag ser absolut noll...------------
// Tilläägg av filmer kopplas här
const moviesStore = useMoviesStore()

function handleAdd(movie) {

console.log("ADDING:", movie)

moviesStore.addMovie(movie)

console.log(
moviesStore.savedMovies
)

}


// slutmarkerat--------------------------------

const { results, isLoading, error, search } = useMovieSearch()

function handleSearch(query) {
  search(query)
}

</script>

<template>
  <h2>Search for movies</h2>

  <SearchBar @search="handleSearch" />

  <p v-if="isLoading">Loading...</p>
  <p v-else-if="error">Error: {{ error }}</p>

  <MovieList v-else :movies="results" buttonText="ADD MOVIE" @action="handleAdd"/>
</template>