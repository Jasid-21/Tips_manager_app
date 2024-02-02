<template>
  <div class="master-container">
    <Navbar />
    <div class="navbar-space"></div>
    <div class="main-content">
      <div class="upper-info">
        <span class="view-title">Pago de Propinas</span>
        <AmountContainer :amount="5500.00" />
      </div>
      <section class="calc-section">
        <ProcessContainer />
        <InputDevice />
        <PaymentsList />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import AmountContainer from '@/components/AmountContainer.vue';
import ProcessContainer from '@/components/ProcessContainer.vue';
import InputDevice from '@/components/InputDevice.vue';
import Navbar from '@/components/Navbar.vue';
import PaymentsList from '@/components/PaymentsList.vue';

</script>

<style scoped lang="scss">
.master-container {
  width: 100vw;
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
      column-gap: 2rem;
    }
  }
}
</style>
