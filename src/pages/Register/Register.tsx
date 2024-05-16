import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

import styles from './Register.module.scss';

import { useSelector } from "react-redux";
import { ReduxStore } from "../../redux/store";
import { TSignUpSchema, signUpSchema } from "../../types/schemaTypes";
import { SagaActions } from "../../redux/sagas/actions";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector((state: ReduxStore) => state.loader.Register);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema)
  })

  const onSubmit = (data: TSignUpSchema) => {
    dispatch({ type: SagaActions.Register, payload: data });
    navigate('/login');
    reset();
  }

  return (
    <Box className={styles.Register__page}>
      <Stack className={styles.Register__stack}>
        <div>
          <img className={styles.PickBazar__logo} src="/PickBazar.webp" alt="pickbazar-logo" />
        </div>
        <Typography variant="h6" fontWeight={400} className={styles.Register__title}>Register new account</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.Register__form}>
          <div className={styles.RegisterForm__input}>
            <TextField
              {...register('fullName')}
              type="text"
              variant="outlined"
              label="Full Name"
              size="small"
              fullWidth
            />
            {errors.fullName ? (
              <p className={styles.Error_message}>{errors.fullName.message}</p>
            ) : null}
          </div>
          <div className={styles.RegisterForm__input}>
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
          <div className={styles.RegisterForm__input}>
            <FormControl variant="outlined" size="small">
              <InputLabel htmlFor='password'>password</InputLabel>
              <OutlinedInput
                {...register('password')}
                id='password'
                type={showPassword ? 'text' : 'password'}
                fullWidth
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
          <Button className={styles.Register__btn} size="large" type="submit" disabled={isLoading || isSubmitting}>Register</Button>
        </form>
        <div className={styles.OrTitle}>
          <div className={styles.Horizontal__line} />
          <span className={styles.OrText}>Or</span>
          <div className={styles.Horizontal__line} />
        </div>
          <Typography variant="subtitle1" fontWeight={500} className={styles.Register__title__bottom}>
            Already have an account?
          <Link onClick={() => navigate('/login')} className={styles.Login__link}>Login</Link>
        </Typography>
      </Stack>
    </Box>
  )
}
