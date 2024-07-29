import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Button, Table, TableBody, TableCell, TableHead, TableRow, Paper, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

export const ClimaPage = () => {
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
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Región</TableCell>
                    <TableCell>Intensidad</TableCell>
                    <TableCell>Descripción</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Tormenta Alex</TableCell>
                    <TableCell>Costa Este</TableCell>
                    <TableCell>Alta</TableCell>
                    <TableCell>Tormenta con vientos fuertes y lluvias intensas.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Inundaciones Noroeste</TableCell>
                    <TableCell>Noroeste</TableCell>
                    <TableCell>Moderada</TableCell>
                    <TableCell>Lluvias continuas causando inundaciones en áreas bajas.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Ola de Calor Sur</TableCell>
                    <TableCell>Sur</TableCell>
                    <TableCell>Alta</TableCell>
                    <TableCell>Temperaturas extremas superando los 40°C.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>Incendios Oeste</TableCell>
                    <TableCell>Oeste</TableCell>
                    <TableCell>Alta</TableCell>
                    <TableCell>Riesgo de incendios debido a condiciones secas.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Opiniones</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Juan Pérez" secondary="El cambio climático está afectando cada vez más nuestras vidas diarias." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Ana Gómez" secondary="Es crucial estar informado sobre las alertas climáticas para tomar medidas adecuadas." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Carlos Rodríguez" secondary="Los incendios forestales son una amenaza creciente que debemos abordar con urgencia." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Laura Fernández" secondary="La prevención y preparación son claves para mitigar los efectos de los desastres climáticos." />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
