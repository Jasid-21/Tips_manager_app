<template>
  <nav>
    <ul class="links-list">
      <li class="link-item">
        <RouterLink to="/">Home</RouterLink>
        <fai icon="fa-solid fa-home"></fai>
      </li>
      <li class="link-item">
        <RouterLink to="/history">Historial</RouterLink>
        <fai icon="fa-solid fa-history"></fai>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
nav {
  width: 180px;
  height: 100vh;

  padding: 1rem;
  background-color: $secondary;
  position: fixed;
  top: 0;
  left: calc($nav_width - 180px);

  box-shadow: 2px 0 10px black;
  transition: left 180ms ease;

  display: flex;
  align-items: center;

  .links-list {
    width: 100%;
    list-style: none;
    padding: 0;

    .link-item {
      width: 100%;
      font-size: 1.2rem;
      color: $text;

      border: 1px solid $primary;
      border-radius: 8px;
      margin-bottom: 0.5rem;
      padding: 0.25rem;

      display: flex;
      justify-content: space-between;
      
      a {
        text-decoration: none;
      }

      &:hover {
        background-color: $accent;
      }
    }
  }

  &:hover {
    left:  0;
  }
}
</style>
