import { v4 as uuid4 } from "uuid";
import { IOrder } from "./types";
import { StatusType } from "../../components/OrderStatusChip/OrderStatusChip";

export const orders: IOrder[] = [
  {
    id: uuid4(),
    orderNumber: 20,
    status: StatusType.Processing,
    date: 'June 13, 2023',
    deliveryTime: 'Express Delivery',
    amount: 52.50,
    total: 103.55,
  },
  {
    id: uuid4(),
    orderNumber: 21,
    status: StatusType.Completed,
    date: 'June 12, 2023',
    deliveryTime: 'Express Delivery',
    amount: 42.10,
    total: 50.00,
  },
  {
    id: uuid4(),
    orderNumber: 22,
    status: StatusType.Processing,
    date: 'June 10, 2023',
    deliveryTime: 'Express Delivery',
    amount: 52.50,
    total: 103.55,
  },
  {
    id: uuid4(),
    orderNumber: 23,
    status: StatusType.Canceled,
    date: 'June 9, 2023',
    deliveryTime: '',
    amount: 40.50,
    total: 80.55,
  },
  {
    id: uuid4(),
    orderNumber: 24,
    status: StatusType.Completed,
    date: 'June 7, 2023',
    deliveryTime: 'Express Delivery',
    amount: 290.50,
    total: 200.55,
  },
  {
    id: uuid4(),
    orderNumber: 25,
    status: StatusType.Processing,
    date: 'June 4, 2023',
    deliveryTime: 'Express Delivery',
    amount: 10.50,
    total: 20.55,
  },
  {
    id: uuid4(),
    orderNumber: 26,
    status: StatusType.Completed,
    date: 'June 2, 2023',
    deliveryTime: '',
    amount: 15.50,
    total: 90.55,
  },
  {
    id: uuid4(),
    orderNumber: 27,
    status: StatusType.Processing,
    date: 'June 1, 2023',
    deliveryTime: 'Express Delivery',
    amount: 10.50,
    total: 20.55,
  }
]
