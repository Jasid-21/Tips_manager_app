import PaymentMethod from "@/Types/PaymentMethod.type";
import PointerValue from "@/Types/PointerValue.type";
import GetCurrentDate from "@/functions/GetCurrentDate.func";
import GetRandomString from "@/functions/GetRandomString.func";
import Payment from "@/interfaces/Payment.interface";
import PaymentStore from "@/interfaces/PaymentStore.interface";
import { defineStore } from "pinia";

export const usePaymentsStore = defineStore('payments', {
  state: (): PaymentStore => ({
    totalMoney: 5500,
    totalTips: 0,
    remainingTips: 0,
    peopleCount: 1,
    tipsFraction: 0,
    currentPayMethod: undefined,
    pointer: undefined,

    paymentList: [],
  }),

  getters: {
    getTotalTips: (state) => state.totalTips,
    getTipsFraction: (state) => state.tipsFraction,
  },

  actions: {
    addPayment(v: number): void {
      if (!this.currentPayMethod) return;

      const payment: Payment = {
        id: GetRandomString(),
        value: v,
        date: GetCurrentDate(),
        method: this.currentPayMethod,
      }

      this.paymentList.push(payment);
      this.subsRemaining(v);
    },

    subsRemaining(v: number): void {
      this.remainingTips -= v;
    },

    setValue(num: number): void {
      console.log(num);
      switch (this.pointer) {
        case 'tips':
          this.setTotalTips(num);
          break;
        case 'people':
          this.setPeopleCount(num);
          break;
        default:
          console.log('Pointer unset');
      }
    },

    setPointer(value?: PointerValue): void {
      console.log(value);
      this.pointer = value;
    },

    setTotalTips(num: number): void {
      this.totalTips = num;
      this.remainingTips = num;
    },

    setPeopleCount(num: number): void {
      this.peopleCount = num;

      this.setTipsFraction();
    },

    setPaymentMethod(method: PaymentMethod): void {
      this.currentPayMethod = method;
    },

    setTipsFraction(): void {
      console.log("Tips fraction");
      
      this.tipsFraction = this.totalTips / (this.peopleCount || 1);
    }
  }
});
