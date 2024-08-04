import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Table, TableBody, TableCell, TableHead, TableRow, Paper, Link as MuiLink } from '@mui/material';
import { LayoutCMS } from '../../common';
import Opiniones from '../../common/components/Opiniones';

export const DeportesPage = () => {
  return (
    <LayoutCMS>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12}>
            <Typography variant="h6">Lo último</Typography>
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
                    image="https://tvazteca.brightspotcdn.com/98/7f/814862b949a491253cc74484f13d/mazatlan-vs-nashville-leagues-cup.jpeg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      mazatlan vs nashville partido que se lleva mazatlan por un marcador 2-0 <MuiLink href="#">link</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.tudn.com/api/image/x/us/futbol/tormenta-electrica-retrasa-el-inicio-del-segundo-tiempo-entre-toluca-y-chicago-video"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Tormenta retrasa segundo tiempo del Toluca vs Chicago Fire <MuiLink href="#">unassigned link</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.milenio.com/uploads/media/2024/07/30/fc-juarez-vs-dallas-canal.jpeg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      FC DALLAS 0-2 FC JUÁREZ | Salieron BRAVOS los fronterizos <MuiLink href="#">unassigned link</MuiLink>.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6">Videos, Relatos, Blogposts, Temas</Typography>
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
                image="https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg"
                alt="Placeholder image"
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Pos</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Edad</TableCell>
                    <TableCell>Nacionalidad</TableCell>
                    <TableCell>Equipo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Quintero Quijano</TableCell>
                    <TableCell>40</TableCell>
                    <TableCell>Peru</TableCell>
                    <TableCell>Equipo A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Romero Smith</TableCell>
                    <TableCell>34</TableCell>
                    <TableCell>USA</TableCell>
                    <TableCell>Equipo B</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Sigma Hutton</TableCell>
                    <TableCell>28</TableCell>
                    <TableCell>Canada</TableCell>
                    <TableCell>Equipo C</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>Mariana Housch</TableCell>
                    <TableCell>24</TableCell>
                    <TableCell>Brazil</TableCell>
                    <TableCell>Equipo D</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Opiniones</Typography>
            <Opiniones />
          </Grid>
        </Grid>
    </LayoutCMS>
  );
};
