import React from 'react';
import {
  AppBar, Toolbar, Typography, Tabs, Tab, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Button, Box
} from '@mui/material';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { LayoutCMS } from '../../common';
import Opiniones from '../../opiniones/Opiniones';

export const EntretenimientoPage = () => {
  return (
    <LayoutCMS>
      <Container>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image="https://www.puromarketing.com/uploads/img/contents/2023/kiYbDK4qFmjt29zc56C3/upload/20230720122846.webp?rand=20230720122846"
                alt="Main news"
              />
              <CardContent>
                <Typography variant="h4" component="div">
                  Noticias Entretenimiento
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
                  <List>
                    <ListItem>
                      <ListItemText primary="Noticia A" secondary="Detalles sobre Noticia A..." />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Noticia B" secondary="Detalles sobre Noticia B..." />
                    </ListItem>
                  </List>
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
            <Typography variant="h6">Noticias Mundiales</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2022/08/11163321/Business_Insider_Mexico_recisio%CC%81n.jpg"
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
                    image="https://www.larepublica.ec/wp-content/uploads/2021/10/fESTIVAL-DE-CINE-DE-LONDRES-2021.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">REINO UNIDO</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Festival de cine de Londres: Lo más destacado del año.
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
                    image="https://stateless-fueradefoco.storage.googleapis.com/wp-content/uploads/2022/12/29214736/anime-crecimiento-2022-1-1024x622.webp"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">JAPÓN</Typography>
                    <Typography variant="body2" color="text.secondary">
                      El auge del anime JAPÓN esta creciendo a niveles exhorbitantes.
                    </Typography>
                    <VisibilityOffIcon />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </LayoutCMS>
  );
}