<template>
  <div class="input-container">
    <div class="result-container"></div>
    <div class="buttons-container">
      <button v-for="n of Array.from(Array(12).keys())">{{ n + 1 }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.input-container {
  background-color: rgb(223, 223, 223);
  padding: 2rem;
  border-radius: 20px;

  .result-container {
    height: 50px;
    border-bottom: 1px solid rgb(67, 67, 67);
    margin-bottom: 1rem;
  }

  .buttons-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0.5rem;

    button {
      width: 100%;
      height: 80px;

      font-size: 2.5rem;

      border: 1px solid rgb(200, 200, 200);
      border-radius: 10px;
      background-color: rgb(245, 245, 245);
    }
  }
}
</style>
