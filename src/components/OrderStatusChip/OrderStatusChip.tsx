import classNames from 'classnames';

import styles from './OrderStatusChip.module.scss';
import { renderStatusName } from '../OrderStatusChipButton/OrderStatusChipButton';

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
      })}
    >
      {content ? content : renderStatusName(type)}
    </span>
  )
}
