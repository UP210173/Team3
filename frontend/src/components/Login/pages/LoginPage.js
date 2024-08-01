import { useEffect, useState } from 'react';
import { LayouLogin } from '../layout/LayoutLogin';
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm, useUI } from '../../common/hooks';
import { useLogin } from '../hooks/useLogin';

const formData = {
  email: '',
  password: '',
}

const formValidations = {
  email: [ value => value.length > 1, 'El correo es obligatorio'],
  password: [ value => value.length > 1, 'La contraseña es obligatoria'],
}

export const LoginPage = () => {
  const [isPasswordShowed, setisPasswordShowed] = useState(false);

  const { 
    email, password, onInputChange, formState, 
    emailValid, passwordValid, isFormValid, onResetForm
  } = useForm( formData, formValidations );

  const { loginUser, user: { status } } = useLogin();
  const { showAlert } = useUI();

  const onLoginUser = ( e ) => {
    e.preventDefault();

    if ( !isFormValid ) {
      showAlert('El formulario no ha sido llenado correctamente', 'error');
      return;
    }

    loginUser( formState );
  }

  useEffect(() => {
    if ( status === 'authorized' ) {
      onResetForm();
    }
  }, [ status ] )

  return (
    <LayouLogin 
      title='Iniciar Sesión' 
      navPage='/registrar' 
      textPage='Crear Una' 
      buttonText='Ingresar a cuenta'
      outlineText='No tienes una cuenta?'
    >
      <Box onSubmit={ onLoginUser } component={'form'} mb={6} mt={3}>
        <Box display={'flex'} flexDirection={'column'} gap={2}>

          <Box>
            <TextField
              name="email"
              value={ email }
              onChange={ onInputChange }
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
              value={ password }
              onChange={ onInputChange }
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
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#000' }}>
            Iniciar Sesión
          </Button>
        </Box>
      </Box>
    </LayouLogin>
  );
};
