import Drawer from '@mui/material/Drawer';

import styles from './Drawer.module.scss';

interface HomeDrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomeDrawer({ isOpen, setIsOpen } : HomeDrawerProps) {
  return (
    <>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <section className={styles.Drawer__section}>
        </section>
      </Drawer>
    </>
  )
}
