import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Container, Grid, Card, CardContent, CardMedia, Button, Table, TableBody, TableCell, TableHead, TableRow, Paper, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const ClimaPage = () => {
  const comments = [
    { name: 'Juan Pérez', comment: 'El cambio climático está afectando cada vez más nuestras vidas diarias.' },
    { name: 'Ana Gómez', comment: 'Es crucial estar informado sobre las alertas climáticas para tomar medidas adecuadas.' },
    { name: 'Carlos Rodríguez', comment: 'Los incendios forestales son una amenaza creciente que debemos abordar con urgencia.' },
    { name: 'Laura Fernández', comment: 'La prevención y preparación son claves para mitigar los efectos de los desastres climáticos.' },
  ];

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
          <Button color="inherit" component={Link} to="/subscribe">Subscribe</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12}>
            <Typography variant="h6">Últimas Noticias</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt="Tormenta"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      A paragraph of text with an <MuiLink href="#">unassigned link</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt="Lluvias"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      A paragraph of text with an <MuiLink href="#">unassigned link</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt="Calor"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      A paragraph of text with an <MuiLink href="#">unassigned link</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6">Videos y Reportajes</Typography>
            <Card>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/200"
                alt="Entrevista"
              />
            </Card>
          </Grid>
          
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>#</TableCell>
                    <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Nombre</TableCell>
                    <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Región</TableCell>
                    <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Intensidad</TableCell>
                    <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Descripción</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { id: 1, name: 'Tormenta Alex', region: 'Costa Este', intensity: 'Alta', description: 'Tormenta con vientos fuertes y lluvias intensas.' },
                    { id: 2, name: 'Inundaciones Noroeste', region: 'Noroeste', intensity: 'Moderada', description: 'Lluvias continuas causando inundaciones en áreas bajas.' },
                    { id: 3, name: 'Ola de Calor Sur', region: 'Sur', intensity: 'Alta', description: 'Temperaturas extremas superando los 40°C.' },
                    { id: 4, name: 'Incendios Oeste', region: 'Oeste', intensity: 'Alta', description: 'Riesgo de incendios debido a condiciones secas.' },
                  ].map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.region}</TableCell>
                      <TableCell>{row.intensity}</TableCell>
                      <TableCell>{row.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>Opiniones</Typography>
            <AutoPlaySwipeableViews interval={3900}>
              {comments.map((comment, index) => (
                <Card key={index} sx={{
                  width: '300px',
                  height: '200px',
                  margin: '0 auto',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                  },
                  transition: 'background-color 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <CardContent>
                    <Typography variant="body1"><strong>{comment.name}</strong></Typography>
                    <Typography variant="body2" color="text.secondary">{comment.comment}</Typography>
                  </CardContent>
                </Card>
              ))}
            </AutoPlaySwipeableViews>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
