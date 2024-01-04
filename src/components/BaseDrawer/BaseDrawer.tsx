import React from 'react';
import { useDispatch } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { RxCross2 } from 'react-icons/rx';

import styles from './BaseDrawer.module.scss';

import Logo from '../../assets/logo2.png';
import { SagaActions } from '../../redux/sagas/actions';

interface BaseDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bodyContent: React.ReactElement;
}

export default function BaseDrawer({ isOpen, onClose, bodyContent } : BaseDrawerProps) {
  const dispatch = useDispatch();
  return (
    <>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={onClose}
      >
        <section className={styles.Drawer__section}>
          <Box className={styles.Drawer__header}>
            <Link to='/'>
              <img className={styles.Logo} src={Logo} alt="shop-logo" onClick={() => {
                dispatch({ type: SagaActions.FetchProducts, payload: {}});
                onClose();
              }} />
            </Link>
            <Button className={styles.Drawer__cancel} onClick={onClose}>
              <RxCross2 size={15}/>
            </Button>
          </Box>
          <Box>
            {bodyContent}
          </Box>
        </section>
      </Drawer>
    </>
  )
}
