import { useDispatch } from "react-redux";
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

import styles from './Register.module.scss';

import { IRegisterForm } from "./types.d";
import { SagaActions } from "../../redux/sagas/actions";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [registerFormData, setRegisterFormData] = useState<IRegisterForm>({
    fullName: '',
    email: '',
    password: '',
  })

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  function handleAccountRegister() {
    dispatch({ type: SagaActions.Register, payload: registerFormData });
    navigate('/login');
  }

  return (
    <Box className={styles.Register__page}>
      <Stack className={styles.Register__stack}>
        <div>
          <img className={styles.PickBazar__logo} src="/PickBazar.webp" alt="pickbazar-logo" />
        </div>
        <Typography variant="h6" fontWeight={400} className={styles.Register__title}>Register new account</Typography>
        <form noValidate>
          <TextField
            type="text"
            variant="outlined"
            label="Full Name"
            size="small"
            className={styles.RegisterForm__input}
            value={registerFormData.fullName}
            onChange={(e) => setRegisterFormData({ ...registerFormData, fullName: e.target.value })}
          />
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            size="small"
            className={styles.RegisterForm__input}
            value={registerFormData.email}
            onChange={(e) => setRegisterFormData({ ...registerFormData, email: e.target.value })}
          />
          <FormControl variant="outlined" className={styles.RegisterForm__input} size="small">
            <InputLabel htmlFor='password'>password</InputLabel>
            <OutlinedInput
              id='password'
              type={showPassword ? 'text' : 'password'}
              value={registerFormData.password}
              onChange={(e) => setRegisterFormData({ ...registerFormData, password: e.target.value })}
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
          <Button className={styles.Register__btn} size="large" onClick={handleAccountRegister}>Register</Button>
        </form>
        <div className={styles.OrTitle}>
          <div className={styles.Horizontal__line} />
          <span className={styles.OrText}>Or</span>
          <div className={styles.Horizontal__line} />
        </div>
        <Typography variant="subtitle1" fontWeight={500} className={styles.Register__title}>
          Already have an account?
          <Link onClick={() => navigate('/login')} className={styles.Login__link}>Login</Link>
        </Typography>
      </Stack>
    </Box>
  )
}
