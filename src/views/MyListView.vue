<script setup>
//visar användarens sparade filmer
import MovieList from "@/components/MovieList.vue"
import {useMoviesStore} from "@/stores/movies"

const moviesStore = useMoviesStore()

function handleRemove(movie){
    moviesStore.removeMovie(movie.id)

    alert(
        movie.title + " removed from the list!"
    )
}
</script>

<template>
    <h2>My list</h2>
    <p>Saved movies will appear here</p>
    <MovieList :movies="moviesStore.savedMovies" buttonText="Remove" @action="handleRemove"/>
    
</template>