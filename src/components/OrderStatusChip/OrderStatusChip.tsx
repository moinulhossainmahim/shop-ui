import classNames from 'classnames';

import styles from './OrderStatusChip.module.scss';

export enum StatusType {
  Processing = 'processing',
  Completed = 'completed',
  Canceled = 'canceled',
  Pending = 'pending',
  AtLocalFacility = 'atLocalFacility',
  OutForDelivery = 'outForDelivery',
}

interface Props {
  type: StatusType;
  content?: string;
}

export default function OrderStatusChip({ type, content } : Props) {
  return (
    <span
      className={classNames(styles.OrderStatusBtn, {
        [styles.OrderStatusBtn__processing]: type === StatusType.Processing,
        [styles.OrderStatusBtn__completed]: type === StatusType.Completed,
        [styles.OrderStatusBtn__canceled]: type === StatusType.Canceled,
        [styles.OrderStatusBtn__pending]: type === StatusType.Pending,
        [styles.OrderStatusBtn__delivery]: type === StatusType.OutForDelivery,
        [styles.OrderStatusBtn__local]: type === StatusType.AtLocalFacility,
      })}
    >
      {content ? content : renderStatusName(type)}
    </span>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function renderStatusName(type: StatusType) {
  switch(type) {
    case StatusType.Processing:
      return 'Order Processing';
    case StatusType.Completed:
      return 'Order Completed';
    case StatusType.Canceled:
      return 'Order Canceled';
    case StatusType.Pending:
      return 'Order Pending';
    case StatusType.AtLocalFacility:
      return 'Order At Local Facility';
    case StatusType.OutForDelivery:
      return 'Order Out For Delivery';
    default:
      return ''
  }
}
