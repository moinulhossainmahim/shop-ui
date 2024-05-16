import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useGoogleLogin } from "@react-oauth/google";

import styles from './Login.module.scss';

import { SagaActions } from "../../redux/sagas/actions";
import { ReduxStore } from "../../redux/store";
import { TSignInSchema, signInSchema } from "../../types/schemaTypes";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const isAuthenticated = useSelector((state: ReduxStore) => state.auth.isAuthenticated);
  const isLoading = useSelector((state: ReduxStore) => state.loader.Login);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema)
  })

  const handleGoogleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async tokenResponse => {
      dispatch({ type: SagaActions.GoogleLogin, payload: { code: tokenResponse.code } });
    },
  });

  const onSubmit = (data: TSignInSchema) => {
    dispatch({ type: SagaActions.Login, payload: data });
    reset();
  }

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated])

  return (
    <Box className={styles.Login__page}>
      <Stack className={styles.Login__stack}>
        <div>
          <img className={styles.PickBazar__logo} src="/PickBazar.webp" alt="pickbazar-logo" />
        </div>
        <Typography variant="h6" fontWeight={400} className={styles.Login__title}>Login with your email & password</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.Login__form}>
          <div className={styles.LoginForm__input}>
            <TextField
              {...register('email')}
              type="email"
              variant="outlined"
              label="Email"
              size="small"
              fullWidth
            />
            {errors.email ? (
                <p className={styles.Error_message}>{errors.email.message}</p>
            ) : null}
          </div>
          <div className={styles.LoginForm__input}>
            <FormControl size="small" variant="outlined" fullWidth>
              <InputLabel htmlFor='password'>password</InputLabel>
              <OutlinedInput
                fullWidth
                {...register('password')}
                id='password'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="password"
              />
            </FormControl>
            {errors.password ? (
                <p className={styles.Error_message}>{errors.password.message}</p>
            ) : null}
          </div>
          <Button className={styles.Login__btn} size="large" disabled={isLoading} type="submit">Login</Button>
          <Button sx={{ mt: 2 }} fullWidth size="large" variant="outlined" onClick={handleGoogleLogin}>Continue With Google</Button>
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
