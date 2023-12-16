import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItemText from "@mui/material/ListItemText";

import styles from './FilterDrawer.module.scss'

import { ReduxStore } from "../../redux/store";
import { SagaActions } from "../../redux/sagas/actions";
import BaseDrawer from "../BaseDrawer";
import { DrawerKey, setDrawer } from "../../redux/reducers/drawer";
import useCategoryFilter from "../../hooks/useCategoryFilter";

const FilterDrawer = () => {
  const filter = useCategoryFilter();
  const dispatch = useDispatch();
  const isOpen = useSelector((state: ReduxStore) => state.drawers.FilterCategory);
  const [expanded, setExpanded] = useState<string>('panel1');
  const categoriesData = useSelector((state: ReduxStore) => state.categories.categoryResponse.content);

  const onClose = () => {
    dispatch(setDrawer({ key: DrawerKey.FilterCategory, value: false }));
  }

  useEffect(() => {
    if(!categoriesData.length) {
      dispatch({ type: SagaActions.FetchCategories });
    }
  }, [])

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : '');
    };

  const bodyContent = (
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
              <ListItemButton className={styles.ListItem__button} onClick={() => {
                  filter('category', sidebar.slug)
                  onClose()
                }}>
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
                <div className={styles.Sidebar__child} key={child.id}  onClick={() => {
                  filter('subCategory', child.slug)
                  onClose()
                }}>{child.name}</div>
              ))}
            </AccordionDetails>
          </Accordion>
        </ListItem>
      ))}
    </List>
  );
  return (
    <BaseDrawer isOpen={isOpen} onClose={onClose} bodyContent={bodyContent} />
  )
}

export default FilterDrawer
