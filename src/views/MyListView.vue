<script setup>
//visar användarens sparade filmer
import MovieList from "@/components/MovieList.vue"
import {useMoviesStore} from "@/stores/movies"

const moviesStore = useMoviesStore()

function handleRemove(movie){
    moviesStore.removeMovie(movie.id)
}
</script>

<template>
    <h2>My list</h2>

    <p v-if="moviesStore.savedMovies.length === 0">
        Saved movies will appear here
    </p>
    
    <MovieList :movies="moviesStore.savedMovies" buttonText="Remove" @action="handleRemove"/>
    
</template>