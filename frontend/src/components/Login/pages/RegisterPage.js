import { InputAdornment, TextField } from '@mui/material';
import { LayouLogin } from '../layout/LayoutLogin';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from '../../common/hooks/useForm';
import { useState } from 'react';

export const RegisterPage = () => {

  const [ isPasswordShowed, setIsPasswordShowed ] = useState( false );
  // const {  } = useForm();

  return (
    <LayouLogin
      title="Registra una cuenta"
      navPage="/"
      textPage="Ingresa"
      buttonText="Crear una cuenta"
      outlineText='Ya tienes una cuenta?'
    >
      <TextField
        placeholder="Ingresa tu nombre"
        fullWidth
        label="Nombre"
        type="text"
      />
      <TextField
        placeholder="Registra un correo"
        fullWidth
        label="Ingresa un correo electrónico"
        type="email"
      />
      <TextField
        fullWidth
        placeholder="Crea una contraseña de 8 caracteres"
        label="Ingresa una contraseña"
        type={`${isPasswordShowed ? 'text' : 'password'}`}
        InputProps={{
          startAdornment: (
            <InputAdornment
              onClick={() => setIsPasswordShowed(!isPasswordShowed)}
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
