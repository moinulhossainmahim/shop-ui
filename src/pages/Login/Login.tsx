import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import Link from "@mui/material/Link";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import styles from './Login.module.scss';

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box className={styles.Login__page}>
      <Stack className={styles.Login__stack}>
        <div>
          <img className={styles.PickBazar__logo} src="/PickBazar.webp" alt="pickbazar-logo" />
        </div>
        <Typography variant="h6" fontWeight={400} className={styles.Login__title}>Login with your email & password</Typography>
        <form noValidate>
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            className={styles.LoginForm__input}
          />
          <FormControl variant="outlined" className={styles.LoginForm__input}>
            <InputLabel htmlFor='password'>password</InputLabel>
            <OutlinedInput
              id='password'
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="password"
            />
          </FormControl>
          <Button className={styles.Login__btn} size="large">Login</Button>
        </form>
        <div className={styles.OrTitle}>
          <div className={styles.Horizontal__line} />
          <span className={styles.OrText}>Or</span>
          <div className={styles.Horizontal__line} />
        </div>
        <Typography variant="subtitle1" fontWeight={500} className={styles.Login__title}>
          Don't have any account?
          <Link onClick={() => navigate('/register')} className={styles.Login__link}>Register</Link>
        </Typography>
      </Stack>
    </Box>
  )
}
