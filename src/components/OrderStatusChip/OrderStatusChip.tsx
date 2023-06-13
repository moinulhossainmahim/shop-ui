import classNames from 'classnames';

import styles from './OrderStatusChip.module.scss';

export enum StatusType {
  Processing = 'Processing',
  Completed = 'Completed',
  Canceled = 'Canceled',
}

interface Props {
  type: StatusType;
  content: string;
}

export default function OrderStatusChip({ type, content } : Props) {
  return (
    <span
      className={classNames(styles.OrderStatusBtn, {
        [styles.OrderStatusBtn__processing]: type === StatusType.Processing,
        [styles.OrderStatusBtn__completed]: type === StatusType.Completed,
        [styles.OrderStatusBtn__canceled]: type === StatusType.Canceled,
      })}
    >
      {content}
    </span>
  )
}
