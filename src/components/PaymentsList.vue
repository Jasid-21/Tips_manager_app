<template>
  <div class="payments-list">
    <span class="title">Pagos</span>
    <ul class="payments">
      <li class="payment-item"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.payments-list {
  ul.payments {
    list-style: none;
    padding: 0;

    li.payment-item {
      width: 100%;
      height: 60px;

      background-color: white;
      border: 1px solid rgb(200, 200, 200);
      border-radius: 10px;
      box-shadow: 0 5px 10px rgb(170, 170, 170);
    }
  }
}
</style>
