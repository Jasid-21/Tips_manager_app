import PaymentStore from "@/interfaces/PaymentStore.interface";
import { defineStore } from "pinia";

export const usePaymentsStore = defineStore('payments', {
  state: (): PaymentStore => ({
    totalMoney: 5500,
    totalTips: 1500,
    dividerCount: 5,
    tipsFraction: 300,
  }),

  getters: {
    totalTips: (state) => state.totalTips,
    getTipsFraction: (state) => state.tipsFraction,
  },

  actions: {
    setDividerCount(num: number): void {
      this.dividerCount = num;

      this.setTipsFraction();
    },

    setTipsFraction(): void {
      this.tipsFraction = this.totalTips / (this.dividerCount || 1);
    }
  }
});
