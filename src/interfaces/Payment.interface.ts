import PaymentMethod from "@/Types/PaymentMethod.type";

interface Payment {
  id: string;
  value: number;
  date: string;
  method: PaymentMethod;
}

export default Payment;
