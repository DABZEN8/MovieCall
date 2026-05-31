
<script setup>
  import { ref } from "vue"

  const menuOpen =
  ref(false)

  function toggleMenu() {
    menuOpen.value =
    !menuOpen.value
  }

  function closeMenu() {
    menuOpen.value =
    false
  }
</script>

<template>
  <header class="app-header">
    <h1 class="logo">MovieCall</h1>
    <button
      class="nav-toggle"
      @click="toggleMenu"
    >
    ☰
  </button>

  <nav
    class="main-nav"
    :class="{ open: menuOpen}"
  >
    <RouterLink
      to="/"
      @click="closeMenu"
  >
      Search
    </RouterLink>

    <RouterLink
      to="/my-list"
      @click="closeMenu"
  >
      My List
    </RouterLink>

    <RouterLink
      to="/week"
      @click="closeMenu"
  >
      This week
    </RouterLink>
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

.nav-toggle {
  display: none;
}

.main-nav {
  display: flex;
  gap: 1rem;
}

@media (max-width: 768px) {

  .app-header {
    padding: 1rem;
  }

  .nav-toggle {
    display: block;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
  }

  .main-nav {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: white;
    border-bottom: 1px solid #ddd;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .main-nav.open {
    display: flex;
  }
}

</style>