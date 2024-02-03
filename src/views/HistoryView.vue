<template>
  <div class="master-container">
    <div class="list-container">
      <div class="orderby-container">
        <span class="title">Historial de pagos</span>
      </div>
      <ul class="items-list">
        <PaymentItem v-for="(i, idx) of list"
          :item="i" :key="idx" :shadow="false" :cancelable="false" />
      </ul>

      <div class="controls">
        <button class="reload" @click="getPaymentsList">Re</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Payment from '@/interfaces/Payment.interface';
import PaymentItem from '@/components/PaymentItem.vue';
import { useBehaviorsStore } from '@/stores/behaviors';
import { onMounted, ref } from 'vue';

const behaviorStore = useBehaviorsStore();
const base_url = behaviorStore.base_url;
const list = ref<Payment[]>([]);

onMounted(() => {
  getPaymentsList();
});

async function getPaymentsList() {
  const response = await fetch(base_url + '/payment');
  const ok = response.ok;

  if (!ok) {
    const msg = response.statusText;
    alert(msg);

    return;
  }

  list.value = await response.json();
}

</script>

<style scoped lang="scss">
.master-container {
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .list-container {
    width: 600px;
    padding: 1rem;

    border-radius: 10px;
    box-shadow: 0 0 10px 2px gray;
    position: relative;

    .controls {
      position: absolute;
      width: 50px;
      top: 0;
      right: -60px;

      button {
        width: 100%;
        height: 50px;
        border-radius: 10px;
        border: 1px solid gray;
        margin-bottom: 0.5rem;
      }
    }

    .orderby-container {
      height: 50px;
      border-bottom: 1px solid gray;
      margin-bottom: 0.5rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    ul.items-list {
      height: 400px;
      list-style: none;
      padding: 0;
      padding-right: 0.5rem;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 10px;
        background-color: transparent;
      }

      &::-webkit-scrollbar-track {
        width: 10px;
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        width: 10px;
        background-color: $primary;
        border-radius: 10px;
      }
    }
  }
}
</style>
