import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
  return (
    <Grid 
      container 
      p={2} 
      display={'flex'} 
      justifyContent={'center'} 
      alignItems={'center'} 
      sx={{ backgroundColor: '#a61e4d' }}
      height={'100vh'}
    >
      <Grid xs={12} md={10} sx={{ backgroundColor: '#fff'}} borderRadius={"5px"} p={2}>
        <Typography component="h1" variant="h5" pb={1}> Iniciar Sesión</Typography>
        <Divider />

        <Box component={"form"} mt={2}>
          <Box display={"flex"} flexDirection={"column"} gap={2} mb={5}>
            <TextField 
              fullWidth
              label="Tu Correo Electrónico" 
              type='email' 
            />
            <TextField 
              fullWidth
              label="Tu Contraseña" 
              type='password' 
            />
            <Button>Iniciar sesión</Button>
          </Box>
        </Box>  
      </Grid>
    </Grid>
  );
};
