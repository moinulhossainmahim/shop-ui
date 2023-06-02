import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { MdClose } from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';

import styles from './Header.module.scss'

import { pageOptions } from './test-data';
import InputAdornment from '@mui/material/InputAdornment';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const navItems = ['Shops', 'Offers', 'FAQ', 'Contact'];

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [page, setPage] = React.useState('Grocery');
  const [searchValue, setSearchValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPage(event.target.value);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className={styles.AppBar} position="static">
        <Toolbar>
          <Stack direction="row" width="33.3333%" alignItems="center">
            <img className={styles.Logo} src="/PickBazar.webp" alt="pickbarazar-logo" />
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
          </Stack >
          <Stack direction="row" width="33.3333%" alignItems="center">
            <TextField
              className={styles.Search__input}
              id="input-with-sx"
              variant="outlined"
              label="Search products"
              size="small"
              fullWidth
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent!important',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgb(31,41,55);',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgb(31,41,55);',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  color: 'rgb(31,41,55);',
                  fontSize: '16px',
                },
                '& label, label.Mui-focused': {
                  color: 'rgb(31,41,55);',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'rgb(31,41,55);',
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    {searchValue && (
                      <MdClose
                        className={styles.Clear__searchValue}
                        size={25}
                        color="rgb(31,41,55)"
                        onClick={() => {
                          setSearchValue('');
                        }}
                        title="Clear"
                        />
                    )}
                    <IoMdSearch
                      className={styles.SearchIcon}
                      color="rgb(31,41,55)"
                      size={30}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack direction="row" width="33.3333%" alignItems="center" justifyContent="flex-end">
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} className={styles.NavItems}>
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
    </AppBar>
  );
}
export default Header;
