import classNames from 'classnames';

import styles from './PaymentStatusChip.module.scss';
import { PaymentStatus } from '../../pages/Orders/types.d';

interface Props {
  type: PaymentStatus;
}

export default function PaymentStatusChip({ type } : Props) {
  return (
    <span
      className={classNames(styles.PaymentStatusBtn, {
        [styles.PaymentStatusBtn__completed]: type === PaymentStatus.Received,
        [styles.PaymentStatusBtn__pending]: type === PaymentStatus.Pending,
      })}
    >
      {renderStatusName(type)}
    </span>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function renderStatusName(type: PaymentStatus) {
  switch(type) {
    case PaymentStatus.Pending:
      return 'Pending';
    case PaymentStatus.Received:
      return 'Received'
    default:
      return ''
  }
}
