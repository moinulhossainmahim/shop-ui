import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack"

import styles from './CategoryLoader.module.scss';

const CategoryLoader = () => {
  return (
    <Stack direction='column' gap={2} alignItems='center' justifyContent='center' className={styles.Skeleton__container}>
      <Stack gap={1} direction='row' alignItems='center'>
        <Skeleton variant="circular" className={styles.Skeleton} width={30} height={30} />
        <Skeleton variant="rounded" className={styles.Skeleton} width={180} height={30} />
      </Stack>
      <Stack gap={1} direction='row' alignItems='center'>
        <Skeleton variant="circular" className={styles.Skeleton} width={30} height={30} />
        <Skeleton variant="rounded" className={styles.Skeleton} width={180} height={30} />
      </Stack>
      <Stack gap={1} direction='row' alignItems='center'>
        <Skeleton variant="circular" className={styles.Skeleton} width={30} height={30} />
        <Skeleton variant="rounded" className={styles.Skeleton} width={180} height={30} />
      </Stack>
      <Stack gap={1} direction='row' alignItems='center'>
        <Skeleton variant="circular" className={styles.Skeleton} width={30} height={30} />
        <Skeleton variant="rounded" className={styles.Skeleton} width={180} height={30} />
      </Stack>
    </Stack>
  )
}

export default CategoryLoader;
