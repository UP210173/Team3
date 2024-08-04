import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Link as MuiLink, Divider, Box } from '@mui/material';
import { LayoutCMS } from '../../common';
import Opiniones from '../../opiniones/Opiniones';

export const ClimaPage = () => {
  // Estilos para el efecto de hover
  const hoverEffectStyles = {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)', // Efecto de agrandamiento al pasar el mouse
    },
  };

  return (
    <LayoutCMS>
      {/* Línea divisoria debajo del diseño principal */}
      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {/* Columna principal con noticia destacada y últimas noticias */}
          <Grid item xs={12} md={8}>
            {/* Noticia principal grande */}
            <Card sx={hoverEffectStyles}>
              <CardMedia
                component="img"
                height="400" // Ajustar el tamaño a una imagen más grande
                image="https://www.shutterstock.com/image-photo/heat-thermometer-shows-temperature-hot-600nw-2472353719.jpg"
                alt="Calor"
              />
              <CardContent>
                <Typography variant="h5">Ola de calor extremo azota varias regiones del país</Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <MuiLink href="#">Leer más</MuiLink>.
                </Typography>
              </CardContent>
            </Card>

            {/* Contenedor de últimas noticias */}
            <Typography variant="h6" align="center" style={{ marginTop: 20 }}>Últimas Noticias</Typography>
            <Divider style={{ marginBottom: 20 }} />
            <Grid container spacing={2}>
              {/* Noticia 1 */}
              <Grid item xs={12} sm={4} md={4}>
                <Card sx={hoverEffectStyles}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150?text=Noticia+1"
                    alt="Noticia 1"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Primer párrafo de texto con un <MuiLink href="#">enlace no asignado</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Noticia 2 */}
              <Grid item xs={12} sm={4} md={4}>
                <Card sx={hoverEffectStyles}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150?text=Noticia+2"
                    alt="Noticia 2"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Segundo párrafo de texto con un <MuiLink href="#">enlace no asignado</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Noticia 3 */}
              <Grid item xs={12} sm={4} md={4}>
                <Card sx={hoverEffectStyles}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150?text=Noticia+3"
                    alt="Noticia 3"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Tercer párrafo de texto con un <MuiLink href="#">enlace no asignado</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Agrega más tarjetas de noticias si es necesario */}
              {/* Noticia 4 */}
              <Grid item xs={12} sm={4} md={4}>
                <Card sx={hoverEffectStyles}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150?text=Noticia+4"
                    alt="Noticia 4"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Cuarto párrafo de texto con un <MuiLink href="#">enlace no asignado</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Noticia 5 */}
              <Grid item xs={12} sm={4} md={4}>
                <Card sx={hoverEffectStyles}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150?text=Noticia+5"
                    alt="Noticia 5"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Quinto párrafo de texto con un <MuiLink href="#">enlace no asignado</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Noticia 6 */}
              <Grid item xs={12} sm={4} md={4}>
                <Card sx={hoverEffectStyles}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150?text=Noticia+6"
                    alt="Noticia 6"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Sexto párrafo de texto con un <MuiLink href="#">enlace no asignado</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Columna para la noticia sobre lluvias y el componente de opiniones */}
          <Grid item xs={12} md={4}>
            {/* Noticia sobre lluvias */}
            <Grid item xs={12}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://enfoquenoticias.com.mx/wp-content/uploads/2022/09/lluvias.jpg"
                  alt="Lluvias"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Fuertes lluvias causan inundaciones en varias regiones del país <MuiLink href="#">unassigned link</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Línea divisoria debajo del diseño principal */}
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />

            {/* Componente de opiniones con efecto hover */}
            <Box sx={hoverEffectStyles}>
              <Opiniones />
            </Box>
          </Grid>
        </Grid>

        {/* Línea divisoria debajo del diseño principal */}
        <Divider style={{ marginTop: 20, marginBottom: 20 }} />

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: 20 }}>
          <Typography variant="body2" color="text.secondary">
            © 2024 CMS UPA
          </Typography>
        </footer>
    </LayoutCMS>
  );
};
