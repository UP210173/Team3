import { Button, InputAdornment, TextField } from '@mui/material';
import { LayouLogin } from '../layout/LayoutLogin';
import { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

export const RegisterPage = () => {
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/auth/register', {
        nombre,
        email,
        contrasena,
      });
      console.log(response.data);
      // Redirigir o mostrar mensaje de éxito
    } catch (error) {
      console.error('Error al registrar el usuario', error);
      // Mostrar mensaje de error
    }
  };

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
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <TextField
        placeholder="Registra un correo"
        fullWidth
        label="Ingresa un correo electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      <Button onClick={handleRegister}>Crear una cuenta</Button>
    </LayouLogin>
  );
};
