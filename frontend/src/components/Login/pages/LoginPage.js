import { useState } from 'react';
import { LayouLogin } from '../layout/LayoutLogin';
import { Button, InputAdornment, TextField } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const LoginPage = () => {
  const [isPasswordShowed, setisPasswordShowed] = useState(false);

  return (
    <LayouLogin 
      title='Iniciar Sesión' 
      navPage='/registrar' 
      textPage='Crear Una' 
      buttonText='Ingresar a cuenta'
      outlineText='No tienes una cuenta?'
    >
      <TextField
        placeholder="Ingresa tu correo"
        fullWidth
        label="Correo"
        type="email"
      />

      <TextField
        fullWidth
        placeholder="Ingresa tu contraseña"
        label="Tu Contraseña"
        type={`${isPasswordShowed ? 'text' : 'password'}`}
        InputProps={{
          startAdornment: (
            <InputAdornment
              onClick={() => setisPasswordShowed(!isPasswordShowed)}
              sx={{ cursor: 'pointer' }}
              position="start"
            >
              {isPasswordShowed ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
            </InputAdornment>
          ),
        }}
      />
    </LayouLogin>
  );
};
