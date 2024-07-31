import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LayoutCMS } from '../../common';

export const TendenciasPage = () => {
  return (
    <LayoutCMS>
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
            <Carousel showThumbs={false}>
              <div>
                <img src="https://via.placeholder.com/600x300" alt="slider1" />
              </div>
              <div>
                <img src="https://via.placeholder.com/600x300" alt="slider2" />
              </div>
              <div>
                <img src="https://via.placeholder.com/600x300" alt="slider3" />
              </div>
            </Carousel>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6">Automovilismo</Typography>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </Typography>
                    <Button size="small">Read More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </Typography>
                    <Button size="small">Read More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6">Actores</Typography>
                <Card>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Opiniones</Typography>
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
                <ListItemText primary="Jane Doe" secondary="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </LayoutCMS>
  );
}


