import { StatusType } from "../../components/OrderStatusChip/OrderStatusChip";

interface IOrder {
  id: string;
  orderNumber: number;
  status: StatusType;
  date: string;
  deliveryTime: string;
  amount: number;
  total: number;
}
