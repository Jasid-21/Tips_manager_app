<template>
  <div class="payments-list">
    <span class="title">Pagos</span>
    <ul class="payments">
      <li class="payment-item" v-if="!list.length">
        <span></span>
        <span>Sin pagos</span>
      </li>
      <li class="payment-item" v-for="(p, idx) of list">
        <div class="symbol"></div>
        <div class="method">{{ p.method }}</div>
        <div class="value">${{ p.value }}</div>
        <div class="cancel">x</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePaymentsStore } from '@/stores/payments';

const paymentStore = usePaymentsStore();
const list = computed(() => paymentStore.paymentList);
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

      margin-bottom: 1rem;
      font-weight: 600;
      font-size: 1.2rem;

      display: grid;
      grid-template-columns: 50px auto 100px 50px;

      & > * {
        align-self: center;
      }
    }
  }
}
</style>
