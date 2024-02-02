<template>
  <div class="process-container">
    <div class="total-tips">
      <span class="title">Total de Propinas</span>
      <div class="flex">
        <AmountContainer :amount="1828.00" />
        <button class="edit-btn"></button>
      </div>
    </div>

    <div class="divider-container">
      <span class="title">
        ¿Entre cuántos quieres dividir las propinas?
      </span>
      <br><br>
      <div class="flex">
        <input type="number" class="divider-input">
        <span>$0,00 x Persona</span>
      </div>
    </div>

    <div class="payment-container">
      <span class="title">
        Elige el método de pago
      </span>

      <div class="buttons-container">
        <button class="method-selector">Efectivo</button>
        <button class="method-selector">BBVA 1234</button>
        <button class="method-selector">Santander 1234</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AmountContainer from './AmountContainer.vue';
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

      input.divider-input {
        width: 80px;
        height: 36px;
        border: 1px solid gray;
        border-radius: 10px;

        appearance: none;
        -moz-appearance: none;
        margin: 0;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          appearance: none;
          -webkit-appearance: none;
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

        border: 1px solid var(--border-color);
        border-radius: 10px;
        background-color: white;
        box-shadow: 1px 1px 10px var(--border-color);
      }
    }
  }
}
</style>