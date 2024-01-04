import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import InputAdornment from '@mui/material/InputAdornment';
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

import styles from './Header.module.scss';

import { pageOptions } from './test-data';
import Logo from '../../assets/logo2.png';
import { ReduxStore } from '../../redux/store';
import { registerUser, setAuthData, setUserProfile } from '../../redux/reducers/auth';
import { UserStatusType } from '../../pages/Login/types.d';
import { SagaActions } from '../../redux/sagas/actions';

const navItems = ['Shops', 'Offers', 'FAQ', 'Contact'];

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [page, setPage] = useState('Grocery');
  const [searchValue, setSearchValue] = useState('');
  const isAuthenticated = useSelector((state: ReduxStore) => state.auth.isAuthenticated);
  const user = useSelector((state: ReduxStore) => state.auth.user);

  const handleChange = (event: SelectChangeEvent) => {
    setPage(event.target.value);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue !== '') {
      dispatch({ type: SagaActions.FetchProducts, payload: { search: searchValue }});
    }
  }, [dispatch, searchValue])

  return (
    <AppBar
      className={
        classNames(styles.AppBar,{
          [styles.AppBar__scrolled]: true,
      })}
      position={location.pathname !== '/' ? 'static' : 'fixed'}
    >
        <Toolbar className={styles.Toolbar} sx={{ gap: { xs: '20px', md: '0px' }}}>
          <Stack direction="row" alignItems="center" sx={{ width: { xs: '50%', sm: '20%', md: '33.3333%' }}}>
            <Link to='/'>
              <img className={styles.Logo} src={Logo} alt="shop-logo" onClick={() => dispatch({ type: SagaActions.FetchProducts, payload: {}})} />
            </Link>
            <FormControl sx={{ ml: 3, minWidth: 120, display: { xs: 'none', md: 'flex' }}} size="small">
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
          <Stack direction="row" alignItems="center" sx={{ display: { xs: 'none', sm: 'flex', md: 'none' }, width: { xs: '70%', md: '33.3333%' }}}>
            <form className={styles.Search__form} onSubmit={(e) => handleSubmit(e)}>
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
                      borderColor: 'rgb(31,41,55)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgb(31,41,55)',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'rgb(31,41,55)',
                    fontSize: '16px',
                  },
                  '& label, label.Mui-focused': {
                    color: 'rgb(31,41,55);',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'rgb(31,41,55)',
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
            </form>
          </Stack>
          <Stack direction="row" sx={{ width: { md: '66.666%', lg: '33.3333%' }}} alignItems="center" justifyContent="flex-end" gap={3}>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} className={styles.NavItems}>
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {isAuthenticated ? (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.fullName} src={user.avatar} />
                  </IconButton>
                </Tooltip>
              ) : (
                <Button variant='contained' className={styles.Login__btn} onClick={() => navigate('/login')}>Login</Button>
              )}
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
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu()
                    navigate('/profile')
                  }}
                >
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu()
                    navigate('/orders')
                  }}
                >
                    <Typography textAlign="center">My Orders</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu()
                    navigate('/wishlists')
                  }}
                >
                    <Typography textAlign="center">My Wishlists</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu()
                    navigate('/checkout')
                  }}
                >
                    <Typography textAlign="center">Checkout</Typography>
                </MenuItem>
                <MenuItem onClick={() => {
                  handleCloseUserMenu()
                  dispatch(setAuthData({
                    token: '',
                    message: '',
                    isAuthenticated: false,
                  }))
                  dispatch(registerUser({
                    isRegistered: false,
                    message: '',
                  }))
                  dispatch(setUserProfile({
                    isProfileFetched: false,
                    user: {
                      id: "",
                      avatar: "",
                      fullName: "",
                      email: "",
                      status: UserStatusType.Active,
                      userType: '',
                      address: [],
                      contact: ''
                    },
                    message: '',
                  }))
                  navigate('/');
                }}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
    </AppBar>
  );
}
export default Header;
