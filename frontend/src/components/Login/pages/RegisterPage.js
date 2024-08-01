import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import { LayouLogin } from '../layout/LayoutLogin';
import { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm, useUI } from '../../common/hooks';
import { useLogin } from '../hooks/useLogin';

const formData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const emailRgx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const formValidations = {
  firstName: [(value) => value.length > 1, 'El nombre es obligatorio'],
  lastName: [(value) => value.length > 1, 'El apellido es obligatorio'],
  email: [
    (value) => value.length >= 1 && emailRgx.test(value),
    'Correo valido necesario',
  ],
  password: [
    (value) => value.length >= 8,
    'La contraseña debe contener mínimo 8 caracteres',
  ],
};

export const RegisterPage = () => {
  const [isPasswordShowed, setisPasswordShowed] = useState();

  const {
    firstName,
    lastName,
    email,
    password,
    isFormValid,
    firstNameValid,
    lastNameValid,
    emailValid,
    passwordValid,
    formState,
    onInputChange,
    onResetForm,
  } = useForm(formData, formValidations);

  const { registerUser } = useLogin();

  const { showAlert, message: { type } } = useUI();

  const onRegisterUser = ( e ) => {
    e.preventDefault();

    if ( !isFormValid ) {
      showAlert('El registro no ha sido llenado correctamente', 'error');
      return;
    };

    registerUser(formState);
  }

  useEffect(() => {
    if ( type === 'success' ) {
      onResetForm();
    }
  }, [ type ]);

  return (
    <LayouLogin
      title="Registra una cuenta"
      navPage="/login"
      textPage="Ingresa"
      buttonText="Crear una cuenta"
      outlineText="Ya tienes una cuenta?"
    >
      <Box onSubmit={ onRegisterUser } component={'form'} mb={6} mt={3}>
        <Box display={'flex'} flexDirection={'column'} gap={2}>

          <Box>
            <TextField
              name="firstName"
              value={firstName}
              onChange={onInputChange}
              placeholder="Ingresa tu nombre"
              fullWidth
              label="Nombre"
              type="text"
            />
            <Typography
              component='span'
              variant='caption'
              display='block'
              textAlign='right'
            >
              {firstNameValid}
            </Typography>
          </Box>

          <Box>  
            <TextField
              name="lastName"
              value={lastName}
              onChange={onInputChange}
              placeholder="Ingresa tu apellido"
              fullWidth
              label="Apellido"
              type="text"
            />
            <Typography
              component='span'
              variant='caption'
              display='block'
              textAlign='right'
            >
              {lastNameValid}
            </Typography>
          </Box>

          <Box>
            <TextField
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="Registra un correo"
              fullWidth
              label="Ingresa un correo electrónico"
              type="email"
            />
            <Typography
              component='span'
              variant='caption'
              display='block'
              textAlign='right'
            >
              {emailValid}
            </Typography>
          </Box>

          <Box>
            <TextField
              name="password"
              value={password}
              onChange={onInputChange}
              fullWidth
              placeholder="Crea una contraseña de 8 caracteres"
              label="Ingresa una contraseña"
              type={`${isPasswordShowed ? 'text' : 'password'}`}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    onClick={() => setisPasswordShowed(!isPasswordShowed)}
                    sx={{ cursor: 'pointer' }}
                    position="start"
                  >
                    {isPasswordShowed ? (
                      <RemoveRedEyeIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Typography
              component='span'
              variant='caption'
              display='block'
              textAlign='right'
            >
              {passwordValid}
            </Typography>
          </Box>

          <Button type='submit' variant="contained" sx={{ backgroundColor: '#000' }}>
            Registrarse
          </Button>
        </Box>
      </Box>
    </LayouLogin>
  );
};
