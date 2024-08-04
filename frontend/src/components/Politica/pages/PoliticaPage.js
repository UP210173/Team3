import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { LayoutCMS } from '../../common';

export const PoliticaPage = () => {
  return (
    <LayoutCMS>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent style={{ height: 300, backgroundColor: '#000', color: '#fff' }}>
                <Typography variant="h4" component="div">
                  POLÍTICA
                </Typography>
                <Typography variant="h6" component="div">
                  Nueva presidenta de México arma gabinete con miembros del gobierno saliente y exfuncionarios
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Últimas Noticias</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Checo Pérez con la urgencia de repuntar en el GP de España" secondary="23:30" />
                <RemoveRedEyeIcon />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Scaloni y jugadores de Argentina se quejan de la cancha tras debut" secondary="23:45" />
                <RemoveRedEyeIcon />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Julián Quiñones dejó al América luego de un año y tres títulos" secondary="23:54" />
                <RemoveRedEyeIcon />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Yucatán mantiene liderazgo en seguridad con la tasa delictiva" secondary="23:59" />
                <RemoveRedEyeIcon />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Noticias Mundiales</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://phantom-elmundo.unidadeditorial.es/28d7f96fee3de612b821d9742518b176/crop/0x0/3072x2048/resize/600/assets/multimedia/imagenes/2024/07/29/17222334156043.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">UCRANIA</Typography>
                    <Typography variant="body2" color="text.secondary">
                      EE.UU. amplía su política para permitir que Ucrania contraataque a Rusia
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
                    image="https://www.losreplicantes.com/images/photoday/2000/2971/c.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">CHINA</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Escenas impactantes: guardacostas chinos atacan barcos filipinos
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
                    image="https://image.ondacero.es/clipping/cmsimages02/2021/09/21/650E9B8B-D471-4E83-AAFC-41674A258C71/98.jpg?crop=1250,703,x0,y66&width=1900&height=1069&optimize=high&format=webply"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">EUROPA</Typography>
                    <Typography variant="body2" color="text.secondary">
                      El volcán Etna vuelve a la actividad con un llamativo fenómeno
                    </Typography>
                    <VisibilityOffIcon />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </LayoutCMS>
  );
}

