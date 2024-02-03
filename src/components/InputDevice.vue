<template>
  <div class="input-container" :class="{ active: pointerValue }">
    <div class="result-container">
      <span class="symbol" v-if="pointerValue == 'people'">#</span>
      <span class="symbol" v-if="pointerValue == 'tips' || pointerValue == 'final'">
        $
      </span>
      <span class="result">{{ charsArray.join('') }}</span>
      <button class="delete-btn" @click="deleteLast">
        <fai icon="fa-solid fa-delete-left"></fai>
      </button>
    </div>
    <div class="buttons-container">
      <button v-for="n of Array.from(Array(9).keys())" @click="addChar(n)">
        {{ n + 1 }}
      </button>
      <button @click="addDoubleZero">00</button>
      <button @click="addChar(-1)">0</button>
      <button @click="setValue">Ok!</button>
    </div>
    <br>
    <div class="remaining-money-alert" v-if="paymentMethod">
      Cantidad restante ${{ (remainingTips < 0 ? 0 : remainingTips ).toFixed(2) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePaymentsStore } from '@/stores/payments';

const initial = ref<boolean>(true);
const paymentsStore = usePaymentsStore();
const pointerValue = computed(() => paymentsStore.pointer);
const remainingTips = computed(() => paymentsStore.getRemainingTips);
const paymentMethod = computed(() => paymentsStore.currentPayMethod);
const tipsFraction = computed(() => paymentsStore.tipsFraction);
const charsArray = ref<string[]>(['0']);

function handleInitial() {
  if (!initial.value) return;

  charsArray.value = [];
  initial.value = false;
}

function addChar(char: number): void {
  handleInitial();
  const c = (char + 1).toString();
  charsArray.value.push(c);
}

function addDoubleZero(): void {
  handleInitial();
  charsArray.value.push(...['0', '0']);
}

function deleteLast(): string {
  if (!charsArray.value.length) return '';
  return charsArray.value.pop() || '';
}

function resetValue(v?: string[]): void {
  charsArray.value = v || tipsFraction.value.toString().split('');
}

function setValue(): void {
  const joined = charsArray.value.join('');
  const num = Number(joined);

  if (isNaN(num)) return;

  paymentsStore.setValue(Number(joined));

  resetValue(['0']);
  initial.value = true;
  if (pointerValue.value == 'tips') {
    paymentsStore.setPointer('people');
    return;
  }

  if (pointerValue.value == 'people') {
    paymentsStore.setPointer('final');
    resetValue();
    return;
  }

  if (pointerValue.value == 'final') {
    paymentsStore.addPayment(num);
    if (remainingTips.value < tipsFraction.value) {
      resetValue(
        (remainingTips.value < 0 ? 0 : remainingTips.value)
        .toString().split('')
      );
      return;
    }
    resetValue();
  }
}
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

    display: flex;
    justify-content: space-between;
    align-items: baseline;
    column-gap: 1rem;

    span {
      font-size: 2rem;
      font-weight: 600;
    }

    .delete-btn {
      background-color: transparent;
      padding: 0;
      width: min-content;
      height: min-content;
      border: none;
      font-size: 1.4rem;
    }
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

  .remaining-money-alert {
    border: 1px solid $primary;
    border-radius: 20px;
    padding: 1rem;
    font-size: 1.2rem;
    color: $primary;
    text-align: center;
  }

  &.active {
    border: 2px solid $primary;
    background-color: $secondary;
  }
}
</style>
