<template>
  <div class="master-container">
    <Navbar />
    <div class="navbar-space"></div>
    <div class="main-content">
      <div class="upper-info">
        <span class="view-title">Pago de Propinas</span>
        <AmountContainer :amount="totalMoney" />
      </div>
      <section class="calc-section">
        <ProcessContainer />
        <InputDevice />
        <PaymentsList />
        <div class="final-steps-container">
          <div class="info-container">
            <span>Total Pagado</span>
            <span class="reverse">${{ (totalTips - remainingTips).toFixed(2) }}</span>
            <span>Restante por Pagar</span>
            <span class="reverse">${{ (remainingTips < 0 ? 0 : remainingTips ).toFixed(2) }}</span>
          </div>
          <div class="button-container">
            <button :disabled="totalTips - remainingTips <= 0"
              @click="sendPostRequest">
              Pagar ${{ (totalTips - remainingTips).toFixed(2) }} en Propinas
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AmountContainer from '@/components/AmountContainer.vue';
import ProcessContainer from '@/components/ProcessContainer.vue';
import InputDevice from '@/components/InputDevice.vue';
import Navbar from '@/components/Navbar.vue';
import PaymentsList from '@/components/PaymentsList.vue';
import { usePaymentsStore } from '@/stores/payments';
import { useBehaviorsStore } from '@/stores/behaviors';

const paymentStore = usePaymentsStore();
const behaviorStore = useBehaviorsStore();

const totalMoney = computed(() => paymentStore.totalMoney);
const totalTips = computed(() => paymentStore.totalTips);
const remainingTips = computed(() => paymentStore.getRemainingTips);
const payments = computed(() => paymentStore.paymentList);

const base_url = behaviorStore.base_url;

async function sendPostRequest() {
  if (!payments.value.length) return;

  const response = await fetch(base_url + '/payment', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(payments.value),
  });

  const ok = response.ok;
  if (!ok) {
    const msg = response.statusText;
    alert(msg);

    return;
  }

  alert("Pagos realizados con éxito!");
  paymentStore.resetValues();
}

</script>

<style scoped lang="scss">
.master-container {
  width: auto;
  height: 100vh;

  display: grid;
  grid-template-columns: $nav_width calc(100vw - $nav_width);

  .main-content {
    padding: 2rem;
    padding-top: 0;

    .upper-info {
      height: 120px;
      border-bottom: 1px solid gray;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .view-title {
        font-size: 28px;
        font-weight: 700;
      }
    }

    section.calc-section {
      margin-top: 1.5rem;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto auto;
      column-gap: 2rem;

      .final-steps-container {
        width: 90%;
        margin-top: 2rem;
        margin-left: auto;
        margin-right: auto;

        grid-row: 2/3;
        grid-column: 1/4;

        display: flex;
        column-gap: 7rem;

        & > * {
          width: 50%;
        }

        .info-container {
          font-size: 1.2rem;

          display: grid;
          grid-template-columns: auto auto;
          grid-template-rows: auto auto;

          span {
            font-size: 1.2rem;
            font-weight: 700;
          }

          &:nth-child(1),
          &:nth-child(2) {
            color: $primary;
          }

          .reverse {
            justify-self: flex-end;
          }
        }

        .button-container {
          display: flex;
          justify-content: center;
          align-items: center;

          button {
            width: 100%;
            height: 60px;
            
            font-size: 1.2rem;
            font-weight: 600;

            background-color: $primary;
            color: white;

            border: none;
            border-radius: 30px;
          }
        }
      }
    }
  }
}
</style>
