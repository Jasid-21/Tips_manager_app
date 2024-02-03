<template>
  <div class="payments-list">
    <span class="title">Pagos</span>
    <ul class="payments">
      <li class="payment-item" v-if="!list.length">
        <span></span>
        <span>Sin pagos</span>
      </li>
      <PaymentItem :item="i" v-for="(i, idx) of list" :key="idx" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PaymentItem from './PaymentItem.vue';
import { usePaymentsStore } from '@/stores/payments';

const paymentStore = usePaymentsStore();
const list = computed(() => paymentStore.paymentList);
</script>

<style scoped lang="scss">
.payments-list {
  ul.payments {
    list-style: none;
    padding: 0;
  }
}
</style>
