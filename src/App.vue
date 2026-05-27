<script setup>

</script>

<template>
  <header class="app-header">
    <h1 class="logo">MovieCall</h1>
    <nav class="main-nav">
      <RouterLink to = "/">Search</RouterLink>
      <RouterLink to = "/my-list">My list</RouterLink>
      <RouterLink to = "/week">This week</routerLink>
    </nav>
  </header>

  <main class = "app-main">
    <RouterView />
  </main>
</template>

 // Detta duger for now, vi städar upp stylingen senare
<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd; 
}

.logo {
  margin: 0;
  font-size: 1.5rem;
}

.main-nav a {
  text-decoration: none;
  color: #333;
}

.main-nav a.router-link-active{
  font-weight: bold;
  color: #1a73e8;
}

.app-main{
  padding: 2rem;
}

</style>