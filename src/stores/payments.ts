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
    peopleCount: 1,
    tipsFraction: 0,
    currentPayMethod: undefined,
    pointer: 'tips',

    paymentList: [],
  }),

  getters: {
    getTotalTips: (state) => state.totalTips,
    getTipsFraction: (state) => state.tipsFraction,
    getTotalPayment: (state) => state.paymentList.reduce((acu, p) => p.value + acu, 0),
    getRemainingTips(state) {
      const pay = state.paymentList.reduce((acu, p) => p.value + acu, 0);
      return state.totalTips - pay;
    }
  },

  actions: {
    addPayment(v: number): void {
      if (!this.currentPayMethod) {
        alert("Seleccione un método de pago.");
        return;
      }

      const payment: Payment = {
        id: GetRandomString(),
        value: v,
        date: GetCurrentDate(),
        method: this.currentPayMethod,
      }

      const procede = this.subsRemaining(v);
      if (!procede) return;

      this.paymentList.push(payment);
    },

    removePayment(id: string): void {
      this.paymentList = this.paymentList.filter(p => p.id != id);
    },

    subsRemaining(v: number): boolean {
      if (this.getRemainingTips < v) {
        const msg = 'Propinas insuficientes. Deseas completar con el dinero en caja?'
        const c = confirm(msg);
        if (!c) return false;

        const rest = v - this.getRemainingTips;
        if (this.totalMoney < rest) {
          alert("Fondos insuficientes en caja");
          return false;
        }

        this.totalMoney -= rest;
      }
      return true;
    },

    setValue(num: number): void {
      console.log(num);
      switch (this.pointer) {
        case 'tips':
          this.setTotalTips(num);
          this.setTipsFraction();
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
