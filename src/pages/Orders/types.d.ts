import { StatusType } from "../../components/OrderStatusChip/OrderStatusChip";
import { IMeta, IProductTemp } from "../../components/Products/types";

export interface IOrder {
  id: string;
  orderNumber: number;
  status: StatusType;
  date: string;
  deliveryTime: string;
  amount: number;
  total: number;
}

export enum PaymentStatus {
	Pending = 'pending',
	Received = 'received',
}

export enum PaymentMethod {
	Cashon = 'cashon',
	Online = 'online',
}

export enum AddressType {
	Shipping = 'shipping',
	Billing = 'billing',
}

interface IOrderItem {
	id: string;
	quantity: number;
	unit_price: string;
	subtotal: string;
	product: IProductTemp;
}

interface IShippingAddress {
	id: string;
	title: string;
	country: string;
	city: string;
	state: string;
	zip: string;
	streetAddress: string;
	addressType: AddressType.Shipping;
}

interface IBillingAddress {
	id: string;
	title: string;
	country: string;
	city: string;
	state: string;
	zip: string;
	streetAddress: string;
	addressType: AddressType.Billing;
}

export interface INewOrder {
	id: string;
	tracking_no: string;
	order_date: string;
	order_status: StatusType;
	delivery_fee: number;
	total: number;
	amount: number;
	payment_status: PaymentStatus;
	payment_method: PaymentMethod;
	orderItems: IOrderItem[];
	shippingAddress: IShippingAddress;
	billingAddress: IBillingAddress;
}

export interface IOrderResponse {
  content: INewOrder[] | INewOrder;
  success: boolean;
  message: string;
	order: INewOrder;
	orderMessage: string;
	orderSuccess: boolean;
  meta?: IMeta;
}
