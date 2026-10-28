<script setup>
import { ref } from "vue"

// sends the search text to the parent component when the form is submitted
// HomeView listens for this and runs the actual API call
const emit = defineEmits(["search"])

const query = ref("")

function handleSubmit() {
    emit("search", query.value)
}
</script>

<template>
    <form class="search-bar" @submit.prevent="handleSubmit">
    <input
        v-model="query"
        type="text"
        placeholder="Search for a movie.."
        class = "search-input"/>
        <button type="submit" class="search-button">Search</button>
    </form>
</template>


<style scoped>
.search-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.search-input {
  flex: 1;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-button {
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  background: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>