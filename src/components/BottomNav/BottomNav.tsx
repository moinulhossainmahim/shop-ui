import { useState } from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import OptionsDrawer from "../OptionsDrawer";

const BottomNav = () => {
  const [value, setValue] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { xs: 'block', md: 'none' }}} elevation={3}>
        <BottomNavigation
          sx={{
            "& .Mui-selected, .Mui-selected > svg": {
              color: "rgb(0,159,127)"
            },
            display: 'flex',
            justifyContent: 'space-between',
          }}
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<CgMenuLeft size={25} />} />
          <BottomNavigationAction icon={<AiOutlineHome size={25} />} />
          <BottomNavigationAction icon={<IoBagHandleOutline size={25} />} />
        </BottomNavigation>
      </Paper>
      <OptionsDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default BottomNav;
