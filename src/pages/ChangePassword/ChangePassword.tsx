import { useState } from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

import styles from './ChangePassword.module.scss';
import { UInputField } from "./types.d";

const inputFields: { name: UInputField, label: string }[] = [
  {
    name: 'oldPassword',
    label: 'Old Password'
  },
  {
    name: 'newPassword',
    label: 'New Password'
  },
  {
    name: 'confirmNewPassword',
    label: 'Confirm New Password'
  }
]

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })

  const handleClickShowPassword = (name: UInputField) => {
    setShowPassword({ ...showPassword, [name]: !(showPassword[name]) })
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.ChangePasswordPage}>
      <ProfileSidebar />
      <div className={styles.ChangePassword}>
        <Typography variant="h6" fontWeight='bold' mb={2}>Change Password</Typography>
        <div className={styles.Form__container}>
          {inputFields.map((inputField) => (
            <FormControl variant="outlined">
              <InputLabel htmlFor={inputField.name}>{inputField.label}</InputLabel>
              <OutlinedInput
                id={inputField.name}
                type={showPassword[inputField.name] ? 'text' : 'password'}
                value={passwordData[inputField.name]}
                onChange={(e) => setPasswordData({ ...passwordData, [inputField.name]: e.target.value })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword(inputField.name)}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword[inputField.name] ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={inputField.label}
              />
            </FormControl>
          ))}
        </div>
        <div className={styles.SubmitBtn__box}>
          <Button variant="contained" className={styles.SubmitBtn__box__btn}>Submit</Button>
        </div>
      </div>
    </div>
  )
}
