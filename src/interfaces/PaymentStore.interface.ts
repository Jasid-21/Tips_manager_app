import PaymentMethod from "@/Types/PaymentMethod.type";
import PointerValue from "@/Types/PointerValue.type";
import Payment from "./Payment.interface";

interface PaymentStore {
  totalMoney: number;
  remainingTips: number;
  totalTips: number;
  peopleCount: number;
  tipsFraction: number;
  currentPayMethod?: PaymentMethod;
  pointer?: PointerValue;

  paymentList: Payment[];
}

export default PaymentStore;
