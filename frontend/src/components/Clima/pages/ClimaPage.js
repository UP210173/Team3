import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardMedia, Paper, Table, TableBody, TableCell, TableHead, TableRow, List, ListItem, ListItemText, Link as MuiLink } from '@mui/material';
import { LayoutCMS } from '../../common';

export const ClimaPage = () => {
  const comments = [
    { name: 'Juan Pérez', comment: 'El cambio climático está afectando cada vez más nuestras vidas diarias.' },
    { name: 'Ana Gómez', comment: 'Es crucial estar informado sobre las alertas climáticas para tomar medidas adecuadas.' },
    { name: 'Carlos Rodríguez', comment: 'Los incendios forestales son una amenaza creciente que debemos abordar con urgencia.' },
    { name: 'Laura Fernández', comment: 'La prevención y preparación son claves para mitigar los efectos de los desastres climáticos.' },
  ];

  return (
    <LayoutCMS>
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

          <Grid item xs={12} md={4}>
            <Typography variant="h6">Opiniones</Typography>
            <List>
              {comments.map((comment, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={<Typography variant="body1"><strong>{comment.name}</strong></Typography>}
                    secondary={<Typography variant="body2" color="text.secondary">{comment.comment}</Typography>}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </LayoutCMS>
  );
}
