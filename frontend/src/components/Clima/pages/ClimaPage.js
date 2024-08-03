// src/components/Clima/pages/ClimaPage.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardMedia, Paper, Table, TableBody, TableCell, TableHead, TableRow, Link as MuiLink } from '@mui/material';
import { LayoutCMS } from '../../common';
import Opiniones from '../../opiniones/Opiniones';

export const ClimaPage = () => {
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
                    image="https://www.elheraldodetabasco.com.mx/local/yr6zdg-a1.jpg/ALTERNATES/LANDSCAPE_400/a1.jpg"
                    alt="Tormenta"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Tormentas eléctricas y vientos fuertes azotan el país, dejando daños a su paso <MuiLink href="#">unassigned link</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card>
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
              <Grid item xs={12} sm={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.shutterstock.com/image-photo/heat-thermometer-shows-temperature-hot-600nw-2472353719.jpg"
                    alt="Calor"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Ola de calor extremo azota varias regiones del país <MuiLink href="#">unassigned link</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper elevation={3} style={{ padding: 16, marginTop: 20 }}>
              <Typography variant="h6" style={{ marginBottom: 16 }}>Videos y Reportajes</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoawR8SeTG2IL_5fsTkaeViU0wvxOhMAujyw&s"
                      alt="Tormentas"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Tormentas eléctricas dejan daños significativos en el sur <MuiLink href="#">unassigned link</MuiLink>.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://i.ytimg.com/vi/DwjsrdTWUaU/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC6AKKAgwIABABGEsgWChlMA8=&rs=AOn4CLBEjuArHFxdBEtgUul7vbVIEw0IwA"
                      alt="Sequía"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Sequía prolongada afecta la producción agrícola en el oeste <MuiLink href="#">unassigned link</MuiLink>.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
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
            <Opiniones />
          </Grid>
        </Grid>
      </Container>
    </LayoutCMS>
  );
}
