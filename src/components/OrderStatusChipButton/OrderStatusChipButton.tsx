import classNames from 'classnames';
import styles from './OrderStatusChipButton.module.scss';

export enum StatusType {
  Processing = 'Processing',
  Completed = 'Completed',
  Canceled = 'Canceled',
}

interface Props {
  type: StatusType;
}

export default function OrderStatusChipButton({ type } : Props) {
  return (
    <span
      className={classNames(styles.OrderStatusBtn, {
        [styles.OrderStatusBtn__processing]: type === StatusType.Processing,
        [styles.OrderStatusBtn__completed]: type === StatusType.Completed,
        [styles.OrderStatusBtn__canceled]: type === StatusType.Canceled,
      })}
    >
      {renderStatusName(type)}
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
    default:
      return ''
  }
}
