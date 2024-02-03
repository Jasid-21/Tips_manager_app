<template>
  <li class="payment-item" :class="{ shadow, cancelable }">
    <div class="symbol">
      <fai icon="fa-solid fa-money-bill" v-if="item.method == 'Efectivo'"></fai>
      <fai icon="fa-solid fa-credit-card" v-else></fai>
    </div>
    <div class="method">{{ item.method }}</div>
    <div class="value">${{ item.value }}</div>
    <div class="date">{{ item.date }}</div>
    <div class="cancel" v-if="cancelable" @click="removePayment(item.id)">x</div>
  </li>
</template>

<script setup lang="ts">
import { usePaymentsStore } from '@/stores/payments';
import Payment from '@/interfaces/Payment.interface';
import { PropType } from 'vue';

const paymentStore = usePaymentsStore();
const props = defineProps({
  item: { type: Object as PropType<Payment>, required: true },
  shadow: { type: Boolean, default: true },
  cancelable: { type: Boolean, default: true },
});

function removePayment(id: string): void {
  if (!id) return;
  const c = confirm('¿Seguro que deseas deshacer este pago?');  
  if (!c) return;
  
  paymentStore.removePayment(id);
}
</script>

<style scoped lang="scss">
li.payment-item {
  width: 100%;
  height: 50px;

  background-color: white;
  border: 1px solid $primary;
  border-radius: 8px;
  margin-bottom: 0.5rem;

  font-weight: 600;
  font-size: 1.2rem;

  display: grid;
  grid-template-columns: 50px auto 100px 100px;

  & > * {
    justify-self: center;
    align-self: center;
  }

  &.cancelable {
    grid-template-columns: 50px auto 100px 100px 50px;
  }

  &.shadow {
    border: none;
    box-shadow: 0 5px 10px rgb(170, 170, 170);
  }

  .symbol {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .method {
    justify-self: flex-start;
  }

  .value {
    color: $accent;
  }

  .date {
    font-size: 1rem;
    font-weight: 500;
  }

  .cancel {
    cursor: pointer;
  }
}
</style>
