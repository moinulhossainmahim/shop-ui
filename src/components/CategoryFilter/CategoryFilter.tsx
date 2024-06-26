import { useDispatch } from "react-redux";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IoFilter } from "react-icons/io5";

import styles from './CategoryFilter.module.scss';

import { pageOptions } from "../Header/test-data";
import FilterDrawer from "../FilterDrawer";
import { DrawerKey, setDrawer } from "../../redux/reducers/drawer";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState('Grocery');

  const handleChange = (event: SelectChangeEvent) => {
    setPage(event.target.value);
  };

  return (
    <>
      <Box sx={{ display: { xs: 'flex', lg: 'none' } }} className={styles.CategoryFilter}>
        <Box>
        <Button variant="contained" startIcon={<IoFilter />} className={styles.Filter__btn} onClick={() => dispatch(setDrawer({ key: DrawerKey.FilterCategory, value: true }))}>
          Filter
        </Button>
        </Box>
        <Box>
        <FormControl sx={{ ml: 3, minWidth: 120 }} size="small">
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={page}
            onChange={handleChange}
            >
            {pageOptions.map((page) => (
              <MenuItem key={page.id} value={page.name}>{page.name}</MenuItem>
              ))}
          </Select>
        </FormControl>
        </Box>
      </Box>
      <FilterDrawer />
    </>
  )
}

export default CategoryFilter
