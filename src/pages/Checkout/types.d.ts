import { StatusType } from "../../components/OrderStatusChip/OrderStatusChip";
import { IBillingAddress, IOrderItem, IShippingAddress, PaymentMethod, PaymentStatus } from "../Orders/types";

export interface IAddressFormData {
  title: string;
  addressType: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  streetAddress: string;
}

export interface ICreateOrderItem {
  productId: string;
  subtotal: number;
  quantity: number;
  unit_price: number;
}

export interface IOrderData {
  order_status: StatusType;
  delivery_fee: number;
  amount: number;
  total: number;
  payment_status: PaymentStatus;
  payment_method: PaymentMethod;
  billingAddress: IBillingAddress;
  shippingAddress: IShippingAddress;
  orderItems: ICreateOrderItem[];
}
