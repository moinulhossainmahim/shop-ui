import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import styles from './Drawer.module.scss';

import Logo from '../../assets/logo2.png';
import Button from '@mui/material/Button';
import { RxCross2 } from 'react-icons/rx';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from '../../redux/store';
import { useEffect, useState } from 'react';
import { SagaActions } from '../../redux/sagas/actions';
interface HomeDrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomeDrawer({ isOpen, setIsOpen } : HomeDrawerProps) {
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState<string>('panel1');
  const categoriesData = useSelector((state: ReduxStore) => state.categories.categoryResponse.content);

  useEffect(() => {
    if(!categoriesData.length) {
      dispatch({ type: SagaActions.FetchCategories });
    }
  }, [])

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : '');
    };

  return (
    <>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <section className={styles.Drawer__section}>
          <Box className={styles.Drawer__header}>
            <Link to='/'>
              <img className={styles.Logo} src={Logo} alt="shop-logo" />
            </Link>
            <Button className={styles.Drawer__cancel} onClick={() => setIsOpen(false)}>
              <RxCross2 size={15}/>
            </Button>
          </Box>
          <Box>
            <List>
              {categoriesData?.map((sidebar) => (
                <ListItem key={sidebar.id} className={styles.ListItem}>
                  <Accordion
                    expanded={expanded === sidebar.id}
                    onChange={handleChange(sidebar.id)}
                    sx={{
                      boxShadow: 'none',
                      width: '100%',
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      className={styles.Accordian__summary}
                      sx={{
                        '& .MuiAccordionSummary-content': {
                          margin: '0px',
                          '&.Mui-expanded': {
                            margin: '0px 0px 8px 0px'
                          }
                        }
                      }}
                    >
                      <ListItemButton className={styles.ListItem__button}>
                        <ListItemIcon className={styles.ListItem__icon}>
                          <img src={sidebar.icon} alt={sidebar.name} height={25} width={25} />
                        </ListItemIcon>
                        <ListItemText primary={
                          <span className={styles.ListItem__text}>{sidebar.name}</span>
                        } />
                      </ListItemButton>
                    </AccordionSummary>
                    <AccordionDetails className={styles.Accordian__details}>
                      {sidebar.subCategories?.map((child) => (
                        <div className={styles.Sidebar__child} key={child.id}>{child.name}</div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </ListItem>
              ))}
            </List>
          </Box>
        </section>
      </Drawer>
    </>
  )
}
