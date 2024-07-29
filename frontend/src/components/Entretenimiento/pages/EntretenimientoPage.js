import React from 'react';

import { AppBar, Toolbar, Typography, Tabs, Tab, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Tabs, Tab, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Swiper, SwiperSlide } from 'swiper/react';


export const EntretenimientoPage = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CMS UPA
          </Typography>
          <Tabs textColor="inherit">
            <Tab label="Inicio" component={Link} to="/inicio" />
            <Tab label="Tendencias" component={Link} to="/tendencias" />
            <Tab label="Deportes" component={Link} to="/deportes" />
            <Tab label="Entretenimiento" component={Link} to="/entretenimiento" />
            <Tab label="Política" component={Link} to="/politica" />
            <Tab label="Cine" component={Link} to="/cine" />
            <Tab label="Clima" component={Link} to="/clima" />
          </Tabs>
          <Button color="inherit" component={Link} to="/subscribe">Subscribete</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5">How Republicans Will Try Again to Impeach Alex Melanova</Typography>
            <Typography variant="body2" color="textSecondary">LIVE 24m ago</Typography>
            <Typography variant="body1" style={{ marginTop: 10 }}>
              After last week's chaotic vote, Republicans are hoping to make the Homeland Security Secretary the first sitting cabinet member to be impeached.
            </Typography>
            <Button variant="contained" color="primary" style={{ marginTop: 10 }}>See more updates</Button>
            <Paper style={{ marginTop: 20, padding: 20 }}>
              <Typography variant="h6">Melanova Impeachment Live Vote</Typography>
              <Typography variant="body2">Dem: 210</Typography>
              <Typography variant="body2">Rep: 214</Typography>
              <Typography variant="body2">Total: 213</Typography>
            </Paper>
            <Typography variant="body2" color="textSecondary" style={{ marginTop: 20 }}>
              Source: Office of the Clerk, U.S. House of Representative
            </Typography>
            <Card style={{ marginTop: 20 }}>
              <CardMedia
                component="img"
                height="400"
                image="https://via.placeholder.com/600x400"
                alt="Main news image"
              />
            </Card>
            <Typography variant="body1" style={{ marginTop: 20 }}>
              On Capitol Hill, Republicans Use Bigoted Attack Against Political Foes
            </Typography>
            <Typography variant="body2" color="textSecondary">6 MIN READ</Typography>
            <Typography variant="body1" style={{ marginTop: 10 }}>
              House and Senate Republicans have denigrated fellow lawmakers, Simonez officials and witnesses in racist ways both in casual comments and in official settings.
            </Typography>
            <Typography variant="body1" style={{ marginTop: 20 }}>
              Steve Skillet, the House majority leader, returned to the Capitol after cancer treatment, noting "votes are tight."
            </Typography>
            <Card style={{ marginTop: 20 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/600x200"
                alt="Video thumbnail"
              />

            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">When the Breakup Ruins Your Favorite Foodie Spots</Typography>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150"
                alt="Placeholder image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Getting dumped while dining out doesn’t just happen in movies. And in real life, it could put you off your favorite place to eat forever.
                </Typography>
                <Button size="small">Read More</Button>
              </CardContent>
            </Card>
            <Typography variant="h6" style={{ marginTop: 20 }}>Opinions</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Janet Sacrando" secondary="Excepteur sint occaecat cupidatat non proident." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Elizabeth Lupone" secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Stacy Jordan" secondary="Excepteur sint occaecat cupidatat non proident." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Jane Donaway" secondary="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Kenneth Rudge" secondary="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Les Hope" secondary="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Opinionated Audio" secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Don Swanson" secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />

              <CardContent>
                <Typography variant="h4" component="div">
                  ENTRENTENIMIENTO
                </Typography>
                <Typography variant="h6" component="div">
                  Cómo el éxito de Barbie ha cambiado la percepción del cine
                </Typography>
              </CardContent>
            </Card>
            <Box mt={2}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Noticias de entretenimiento en vivo</Typography>
                  <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
                    <SwiperSlide>
                      <Box>
                        <Typography variant="body1">Noticia A</Typography>
                        <Typography variant="body2" color="textSecondary">Detalles sobre Noticia A...</Typography>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box>
                        <Typography variant="body1">Noticia B</Typography>
                        <Typography variant="body2" color="textSecondary">Detalles sobre Noticia B...</Typography>
                      </Box>
                    </SwiperSlide>
                  </Swiper>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Últimas Noticias</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Nuevo álbum de Taylor Swift rompe récords" secondary="23:30" />
                <RemoveRedEyeIcon />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Premios Oscar 2024: Nominaciones y sorpresas" secondary="23:45" />
                <RemoveRedEyeIcon />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="El regreso de Friends: ¿Qué podemos esperar?" secondary="23:54" />
                <RemoveRedEyeIcon />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Análisis: La evolución del cine de superhéroes" secondary="23:59" />
                <RemoveRedEyeIcon />

              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6">More Stories</Typography>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Button size="small">Read More</Button>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 20 }}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Button size="small">Read More</Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6">In Case You Missed It</Typography>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://via.placeholder.com/300x200"
                    alt="Placeholder image"
                  />

            <Typography variant="h6">Noticias Mundiales</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">EE.UU.</Typography>
                    <Typography variant="body2" color="text.secondary">
                      La expansión de Hollywood hacia el streaming: ¿Es el futuro?
                    </Typography>
                    <VisibilityOffIcon />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">REINO UNIDO</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Festival de cine de Londres: Lo más destacado del año
                    </Typography>
                    <VisibilityOffIcon />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">JAPÓN</Typography>
                    <Typography variant="body2" color="text.secondary">
                      El auge del anime en la cultura occidental
                    </Typography>
                    <VisibilityOffIcon />
                  </CardContent>

                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );

}
