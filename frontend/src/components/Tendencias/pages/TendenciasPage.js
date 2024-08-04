import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
} from '@mui/material';
import { LayoutCMS } from '../../common';

import { SwiperCom } from '../../common/components/Swiper';
import Opiniones from '../../common/components/Opiniones';

const cardStyles = {
  display: 'flex',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
};

const containerStyles = {
  display: 'grid',
  gridTemplateColumns: '3fr 1fr',
  marginBottom: '2rem',
};

const containerStyles2 = {
  padding: "2rem 1rem 2rem 0",
  borderTop: "1px solid #ddd",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
}

export const TendenciasPage = () => {
  return (
    <LayoutCMS>
      <SwiperCom />

      <Grid container spacing={2} style={containerStyles}>

        <Grid item xs={12} lg={12} style={ containerStyles2 }>

          <Grid item xs={12} md={12} mb={3} pb={5} borderBottom={"1px solid #ddd"}>
            <Typography variant="h6" textAlign={'center'} mb={3}>
              Automovilismo
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} mb={2}>
                <Card sx={cardStyles}>
                  <CardMedia
                    sx={{ flex: 1 }}
                    component="img"
                    height="150rem"
                    image="https://via.placeholder.com/150"
                    alt="Clima noticia 1"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'start', alignContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Breve descripción sobre el clima reciente en la región.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} mb={2}>
                <Card sx={cardStyles}>
                  <CardMedia
                    sx={{ flex: 1 }}
                    component="img"
                    height="150rem"
                    image="https://via.placeholder.com/150"
                    alt="Clima noticia 2"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'start', alignContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Información sobre alertas meteorológicas y su impacto.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card sx={cardStyles}>
                  <CardMedia
                    component="img"
                    height="300rem"
                    sx={{ flex: 1 }}
                    image="https://via.placeholder.com/300"
                    alt="Clima noticia grande"
                  />
                  <CardContent
                    sx={{ flex: 2, display: 'grid', placeContent: 'center', alignContent: 'center' }}
                  >
                    <Typography mb={4} variant="body2" color="text.secondary">
                      Aute fugiat laboris pariatur ea non laboris veniam velit
                      enim labore exercitation ea. Anim minim quis qui minim
                      nostrud occaecat nulla culpa labore amet exercitation
                      quis.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} mb={3} pb={5} borderBottom={"1px solid #ddd"} >
            <Typography variant="h6" textAlign={'center'} mb={3}>
              Deportes
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} mb={2}>
                <Card sx={cardStyles}>
                  <CardMedia
                    sx={{ flex: 1 }}
                    component="img"
                    height="150rem"
                    image="https://via.placeholder.com/150"
                    alt="Clima noticia 1"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'start', alignContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Breve descripción sobre el clima reciente en la región.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} mb={2}>
                <Card sx={cardStyles}>
                  <CardMedia
                    sx={{ flex: 1 }}
                    component="img"
                    height="150rem"
                    image="https://via.placeholder.com/150"
                    alt="Clima noticia 2"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'start', alignContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Información sobre alertas meteorológicas y su impacto.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card sx={cardStyles}>
                  <CardMedia
                    component="img"
                    height="300rem"
                    sx={{ flex: 1 }}
                    image="https://via.placeholder.com/300"
                    alt="Clima noticia grande"
                  />
                  <CardContent
                    sx={{ flex: 2, display: 'grid', placeContent: 'center' }}
                  >
                    <Typography mb={4} variant="body2" color="text.secondary">
                      Aute fugiat laboris pariatur ea non laboris veniam velit
                      enim labore exercitation ea. Anim minim quis qui minim
                      nostrud occaecat nulla culpa labore amet exercitation
                      quis.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h6" textAlign={'center'} mb={3}>
              Educación
            </Typography>
            <Grid container spacing={2} mb={2}>
              <Grid item xs={12}>
                <Card sx={cardStyles}>
                  <CardMedia
                    sx={{ flex: 1 }}
                    component="img"
                    height="200rem"
                    image="https://via.placeholder.com/200"
                    alt="Clima noticia 1"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Breve descripción sobre el clima reciente en la región.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card sx={cardStyles}>
                  <CardMedia
                    sx={{ flex: 1 }}
                    component="img"
                    height="200rem"
                    image="https://via.placeholder.com/200"
                    alt="Clima noticia 2"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Información sobre alertas meteorológicas y su impacto.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h6" textAlign={'center'} mb={3}>
              Actores
            </Typography>
            <Grid container spacing={2} mb={2}>
              <Grid item xs={12}>
                <Card sx={cardStyles}>
                  <CardMedia
                    sx={{ flex: 1 }}
                    component="img"
                    height="200rem"
                    image="https://via.placeholder.com/200"
                    alt="Clima noticia 1"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Breve descripción sobre el clima reciente en la región.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card sx={cardStyles}>
                  <CardMedia
                    sx={{ flex: 1 }}
                    component="img"
                    height="200rem"
                    image="https://via.placeholder.com/200"
                    alt="Clima noticia 2"
                  />
                  <CardContent
                    sx={{ flex: 3, display: 'grid', placeContent: 'center' }}
                  >
                    <Typography mb={2} variant="body2" color="text.secondary">
                      Información sobre alertas meteorológicas y su impacto.
                    </Typography>
                    <Button variant="outlined" size="small">
                      Conoce más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
          </Grid>

        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6">Opiniones</Typography>
          <Opiniones />
        </Grid>

      </Grid>
    </LayoutCMS>
  );
};
