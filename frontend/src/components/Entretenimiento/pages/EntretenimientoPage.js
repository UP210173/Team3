import React from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, AppBar, Tabs, Tab, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Inicio" />
            <Tab label="Tendencias" />
            <Tab label="Deportes" />
            <Tab label="Entretenimiento" />
            <Tab label="Política" />
            <Tab label="Cine" />
          </Tabs>
        </AppBar>
      </Box>
      <Box my={4}>
        <Typography variant="h2" align="center">CMS UPA</Typography>
        <Typography variant="h6" align="center">Tuesday, February 9, 2024</Typography>
        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image="https://via.placeholder.com/800x400"
                alt="Main news"
              />
              <CardContent>
                <Typography variant="h5">How Republicans Will Try Again to Impeach Alex</Typography>
                <Typography variant="body2" color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Typography>
              </CardContent>
            </Card>
            <Box mt={2}>
              <Card>
                <CardContent>
                  <Typography variant="h6">National Impeachment Live Vote</Typography>
                  <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
                    <SwiperSlide>
                      <Box>
                        <Typography variant="body1">Vote A</Typography>
                        <Typography variant="body2" color="textSecondary">Details about Vote A...</Typography>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box>
                        <Typography variant="body1">Vote B</Typography>
                        <Typography variant="body2" color="textSecondary">Details about Vote B...</Typography>
                      </Box>
                    </SwiperSlide>
                  </Swiper>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">When the Breakup Ruins Your Favorite Foods</Typography>
                <Typography variant="body2" color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/400x200"
                alt="Food news"
              />
            </Card>
            <Box mt={2}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Trending</Typography>
                  <Swiper spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
                    <SwiperSlide>
                      <Box>
                        <Typography variant="body1">Trending News 1</Typography>
                        <Typography variant="body2" color="textSecondary">Details about Trending News 1...</Typography>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box>
                        <Typography variant="body1">Trending News 2</Typography>
                        <Typography variant="body2" color="textSecondary">Details about Trending News 2...</Typography>
                      </Box>
                    </SwiperSlide>
                  </Swiper>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

