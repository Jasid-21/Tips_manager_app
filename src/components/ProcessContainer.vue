<template>
  <div class="process-container">
    <div class="total-tips">
      <span class="title">Total de Propinas</span>
      <div class="flex">
        <AmountContainer :amount="totalTips" :active="pointerValue == 'tips'" />
        <button class="edit-btn" @click="setPointer('tips')">
          <fai icon="fa-solid fa-pen"></fai>
        </button>
      </div>
    </div>

    <div class="divider-container">
      <span class="title">
        ¿Entre cuántos quieres dividir las propinas?
      </span>
      <br><br>
      <div class="flex">
        <div class="divider-input" :class="{ active: pointerValue == 'people'}"
          @click="setPointer('people')">
          {{ peopleCount }}
        </div>
        <span>${{ tipsFraction.toFixed(2) }} x Persona</span>
      </div>
    </div>

    <div class="payment-container">
      <span class="title">
        Elige el método de pago
      </span>

      <div class="buttons-container">
        <button class="method-selector" :class="{ active: paymentMethod == v }"
          v-for="v of methods" @click="setPayMethod(v)">
          <fai class="icon" icon="fa-solid fa-money-bill" v-if="v == 'Efectivo'"></fai>
          <fai class="icon" icon="fa-solid fa-credit-card" v-else></fai>
          <br>
          {{ v.split('_').join(' ') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AmountContainer from './AmountContainer.vue';
import { usePaymentsStore } from '@/stores/payments';
import PointerValue from '@/Types/PointerValue.type';
import PaymentMethod from '@/Types/PaymentMethod.type';

const methods: PaymentMethod[] = ['Efectivo', 'BBVA_1234', 'Santander_1234'];
const paymentsStore = usePaymentsStore();
const totalTips = computed(() => paymentsStore.totalTips);
const peopleCount = computed(() => paymentsStore.peopleCount);
const tipsFraction = computed(() => paymentsStore.getTipsFraction);
const pointerValue = computed(() => paymentsStore.pointer);
const paymentMethod = computed(() => paymentsStore.currentPayMethod);

function setPointer(value?: PointerValue): void {
  paymentsStore.setPointer(value);
}

function setPayMethod(method: PaymentMethod): void {
  paymentsStore.setPaymentMethod(method);
}
</script>

<style scoped lang="scss">
.process-container {
  .total-tips {
    width: min-content;
    color: $primary;

    margin-left: auto;
    margin-right: auto;

    span {
      font-size: 1rem;
    }
    .flex {
      display: flex;
      column-gap: 0.5rem;

      .edit-btn {
        background-color: transparent;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 0.5rem;
        font-size: 1.4rem;

        &:hover {
          cursor: pointer;
          background-color: $secondary;
          border-color: $primary;
        }
      }
    }
  }

  .divider-container {
    margin-top: 1rem;

    & > span {
      font-size: 1.2rem;
      font-weight: 700;
    }

    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 4rem;

      .divider-input {
        width: 80px;
        height: 36px;
        border: 1px solid gray;
        border-radius: 10px;
        font-size: 1rem;
        text-align: center;
        font-weight: 600;

        display: flex;
        justify-content: center;
        align-items: center;

        &.active {
          box-shadow: 0 0 2px 2px $primary;
        }
      }

      span {
        color: $primary;
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }

  .payment-container {
    margin-top: 4rem;

    .buttons-container {
      padding: 1rem;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0.5rem;

      .method-selector {
        --border-color: rgb(93, 93, 93);

        width: 100%;
        height: 80px;

        font-weight: 600;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        background-color: white;
        box-shadow: 1px 1px 10px var(--border-color);

        .icon {
          font-size: 1.4rem;
        }

        &.active {
          border: 1px solid $primary;
          box-shadow: 0 0 2px 2px $primary;
          background-color: $secondary;
          color: $primary;
        }
      }
    }
  }
}
</style>