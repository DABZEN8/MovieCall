<script setup>
//shows the 7 randomly generated movies that are placed in the week days
import WeekGrid from '@/components/WeekGrid.vue';
import { useMoviesStore } from '@/stores/movies';
import { useWeekSchedule } from '@/composables/useWeekSchedule';

const moviesStore = useMoviesStore()

const {
    weekSchedule,
    generateWeekSchedule,
    errorMessage
}
=

useWeekSchedule()
</script>

<template>
    <h2>This week</h2>
    <p>Generate 7 random movies from your list</p>

    <button @click="generateWeekSchedule(moviesStore.savedMovies)">
        Generate week
    </button>

    <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
    </p>

    <WeekGrid :weekSchedule="weekSchedule"/>
</template>

//styling for now, will be cleaned up later
<style scoped>
button {
    margin-bottom: 1rem;
    padding: 0.4rem;
    background: #1a73e8;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s;
}

button:hover {
    background: #071f3e;
}

.error-message {
    color: red;
}
</style>