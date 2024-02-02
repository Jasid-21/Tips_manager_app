<template>
  <nav>

  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
nav {
  width: 180px;
  height: 100vh;

  background-color: $secondary;
  position: absolute;
  top: 0;
  left: calc($nav_width - 180px);

  box-shadow: 2px 0 10px black;
  transition: left 180ms ease;

  &:hover {
    left:  0;
  }
}
</style>
