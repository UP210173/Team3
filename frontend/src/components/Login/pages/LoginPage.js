import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

export const LoginPage = () => {

  const [isPasswordShowed, setisPasswordShowed] = useState(false);

  return (
    <Grid
      container
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ backgroundColor: '#6aa9e9' }}
      height={'100vh'}
    >
      <Grid
        height={'100%'}
        width={'90%'}
        display={'flex'}
        flexDirection={'column'}
        alignContent={'center'}
        justifyContent={'center'}
        xs={12}
        md={4}
      >
        <Typography 
          textAlign={'center'} 
          sx={{ 
            textTransform: 'uppercase', 
            letterSpacing: '5px', 
            fontWeight: '900', 
            color: '#fff'
          }} 
          component="h1" 
          variant="h4" 
          pb={1} 
          mb={2}
        >CMS Noticias</Typography>
        <Grid
          sx={{ backgroundColor: '#fff' }}
          borderRadius={'5px'}
          boxShadow={'initial'}
          p={4}
        >
          <Typography sx={{ textTransform: 'uppercase', fontSize: '18px', letterSpacing: '2px', fontWeight: '500'}} component="h2" pb={1}>
            {' '}
            Iniciar Sesión
          </Typography>
          <Divider />

          <Box component={'form'} mb={6} mt={3}>
            <Box display={'flex'} flexDirection={'column'} gap={2}>
              <TextField placeholder='Ingresa tu correo' fullWidth label="Correo" type="email" />

              <TextField
                fullWidth
                placeholder='Ingresa tu contraseña'
                label="Tu Contraseña"
                type={`${ isPasswordShowed ? 'text': 'password'}`}
                InputProps={{
                  startAdornment: (
                    <InputAdornment onClick={ () => setisPasswordShowed( !isPasswordShowed ) } sx={{ cursor: 'pointer'}} position="start">
                    {isPasswordShowed ? (<RemoveRedEyeIcon />) : (<VisibilityOffIcon />) }
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant='contained' sx={{ backgroundColor: '#000'}}>Ingresar a cuenta</Button>
            </Box>
          </Box>

          <Box display={'flex'} justifyContent={'space-between'} alignContent={'center'} mt={3}>
            <Typography component={'p'}>No tienes una cuenta?</Typography>
            <Link to="/registrar" style={{ color: 'inherit', textDecoration: 'none'}}>
                <Typography sx={{ paddingBottom:'1px', borderBottom: '1px solid currentColor'}}>Crear Una</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
