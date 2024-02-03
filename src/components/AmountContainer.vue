<template>
  <div class="amount-container" :class="{ active }"
    @click="emit('export-pointer', props.pointer)">
    <span>${{ amount.toFixed(2) }}</span>
  </div>
</template>

<script setup lang="ts">
import PointerValue from '@/Types/PointerValue.type';
import { PropType } from 'vue';

const props = defineProps({
  amount: { type: Number, required: true },
  pointer: { type: String as PropType<PointerValue> },
  active: { type: Boolean, default:  false },
});

const emit = defineEmits(['export-pointer']);
</script>

<style scoped lang="scss">
.amount-container {
  color: $primary;
  font-size: 34px;
  padding: 0.6rem;
  background-color: $secondary;
  border-radius: 10px;

  span {
    color: inherit;
    font-weight: 700;
  }

  &.active {
    box-shadow: 0 0 2px 2px $primary;
  }
}
</style>
