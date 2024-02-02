<template>
  <div class="amount-container">
    <span>${{ amount.toFixed(2) }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  amount: { type: Number, required: true },
})
</script>

<style scoped lang="scss">
.amount-container {
  color: $primary;
  font-size: 34px;
  padding: 0.6rem;
  background-color: $secondary;
  border-radius: 10px;

  span {
    color: inherit;
    font-weight: 700;
  }
}
</style>
