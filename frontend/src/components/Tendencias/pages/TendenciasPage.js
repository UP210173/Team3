import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LayoutCMS } from '../../common';
import Opiniones from '../../opiniones/Opiniones';

export const TendenciasPage = () => {
  return (
    <LayoutCMS>
      <Container>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12}>
            {/* <Carousel showThumbs={false}>
              <div>
                <img src="https://via.placeholder.com/600x300" alt="slider1" />
              </div>
              <div>
                <img src="https://via.placeholder.com/600x300" alt="slider2" />
              </div>
              <div>
                <img src="https://via.placeholder.com/600x300" alt="slider3" />
              </div>
            </Carousel> */}
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6">Automovilismo</Typography>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    La F1 impidió que Red Bull despidiera a Sergio Pérez: la surrealista petición que recibió Christian Horner para sacar de red bull a checo perez.
                    </Typography>
                    <Button size="small">Read More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://fotografias.lasexta.com/clipping/cmsimages02/2024/07/28/188780F9-A62A-469D-A73F-75D5F55A8842/checo-perez_98.jpg?crop=5546,3120,x0,y0&width=1900&height=1069&optimize=low&format=webply"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Pidieron al equipo Red Bull que no cesara a Sergio Pérez porque perderían ingresos de cara al Gran Premio de México. 
                    </Typography>
                    <Button size="small">Read More</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6">Deportes</Typography>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Pelea femenil de box en los Olímpicos terminó a los 46 segundos, después de que Angela Carini abandonó el cuadrilátero.
                    </Typography>
                    <Button size="small">Read More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2024-08%2Fjuegos-olimpicos-mujer-khelif-boxeo.jpg%3Fh%3D920929c4%26itok%3DPqkp-AZY&w=1920&q=75s"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Sed do eiusmod tempor  outso iner con oir tener co ret incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <Button size="small">Read More</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6">Educación</Typography>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Typography>
                    <Button size="small">Read More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://ap-cdn.sfo3.digitaloceanspaces.com/uploads/2022/10/193c6e8f.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Sed do eiusmod tempor coner mer teno coseteer conteneo tenie  incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <Button size="small">Read More</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6">Actores</Typography>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lorem  adipiscing elit. dooooooooo Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Typography>
                    <Button size="small">Read More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.milenio.com/uploads/media/2023/06/16/john-travolta-protagonizo-pelicula-vaselina.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Sed do eiusmod tempor incididunt corte more talar foner nerte tocro ut labore et dolore magna aliqua.
                    </Typography>
                    <Button size="small">Read More</Button>
                  </CardContent>
                </Card> 
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Opiniones</Typography>
            <Opiniones />
          </Grid>
        </Grid>
      </Container>
    </LayoutCMS>
  );
}


