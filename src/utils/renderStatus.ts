import { StatusType } from "../components/OrderStatusChip/OrderStatusChip";

export function renderStatus(type: string) {
  switch(type) {
    case StatusType.Pending:
      return 0;
    case StatusType.Processing:
      return 1;
    case StatusType.AtLocalFacility:
      return 2;
    case StatusType.OutForDelivery:
      return 3;
    case StatusType.Completed:
      return 4;
    case StatusType.Canceled:
      return 4;
    default:
      return 0;
  }
}
