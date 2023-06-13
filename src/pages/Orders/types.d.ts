import { StatusType } from "../../components/OrderStatusChipButton/OrderStatusChipButton";

interface IOrder {
  id: string;
  orderNumber: number;
  status: StatusType;
  date: string;
  deliveryTime: string;
  amount: number;
  total: number;
}
