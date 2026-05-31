<script setup>
//visar veckoschemat med filmer
defineProps({
  weekSchedule: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <section class="week-grid">
    <article
      v-for="item in weekSchedule"
      :key="item.day"
      class="day-card"
    >
      <h3 class="day">{{ item.day }}</h3>

      <div v-if="item.movie">
        <p class="title">{{ item.movie.title }}</p>
        <p class="year">{{ item.movie.release_date?.slice(0, 4) }}</p>
      </div>

      <p v-else class="empty">
        No movie selected
      </p>
    </article>
  </section>
</template>

<style scoped>
.week-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}

.day-card {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0.75rem;
  background: white;
}

.day {
  margin: 0 0 0.75rem;
}

.title {
  font-size: 1rem;
  margin: 0 0 0.25rem;
}

.year {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.empty {
  color: #888;
}
</style>