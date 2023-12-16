import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

import styles from './ProductsWithSidebar.module.scss'

import Products from '../Products/Products';
import { SagaActions } from '../../redux/sagas/actions';
import { ReduxStore } from '../../redux/store';
import CategoryLoader from '../CategoryLoader';
import useCategoryFilter from '../../hooks/useCategoryFilter';

const drawerWidth = 240;

export default function Sidebar() {
  const dispatch = useDispatch()
  const filter = useCategoryFilter();
  const [expanded, setExpanded] = useState<string>('panel1');
  const categoriesData = useSelector((state: ReduxStore) => state.categories.categoryResponse.content);
  const isLoading = useSelector((state: ReduxStore) => state.loader.FetchCategories);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open] = React.useState(true);

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
    <Box sx={{ display: 'flex', borderTop: '1px solid rgb(243,244,246)' }}>
      <Drawer
        sx={{
          display: { xs: 'none', lg: 'flex' },
          width: drawerWidth,
          flexShrink: 0,
          position: 'sticky',
          top: '0',
          height: 'calc(100vh - 64px)',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'unset !important',
            borderRight: 'none !important',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {isLoading ? (
          <CategoryLoader />
        ) : null}
        {!isLoading && categoriesData.length ? (
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
                    <ListItemButton className={styles.ListItem__button} onClick={() => filter('category', sidebar.slug)}>
                      <ListItemIcon className={styles.ListItem__icon}>
                        <img src={sidebar.icon} alt={sidebar.name} height={25} width={25} />
                      </ListItemIcon>
                      <ListItemText primary={
                          <span className={styles.ListItem__text}>{sidebar.name}</span>
                        }
                      />
                    </ListItemButton>
                  </AccordionSummary>
                  <AccordionDetails className={styles.Accordian__details}>
                    {sidebar.subCategories?.map((child) => (
                      <Link component="button" className={styles.Sidebar__child} key={child.id} onClick={() => filter('subCategory', child.slug)}>{child.name}</Link>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </ListItem>
            ))}
          </List>
        ) : null}
      </Drawer>
      <Products />
    </Box>
  );
}
