import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { LayoutCMS } from '../../common/LayoutCMS';

import { SwiperCom } from '../../common/components/Swiper';
import Opiniones from '../../common/components/Opiniones';

const hoverEffectStyles = {
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)', 
  },
};

export const InicioPage = () => {
  return (
    <LayoutCMS>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SwiperCom />
          </Grid>

          <Grid item container spacing={2}>
            <Grid item xs={12} sm={8}>
              {/* Sección de Lista de Noticias */}
              <List>
                <ListItem>
                  <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." secondary="12 hours ago" />
                  <RemoveRedEyeIcon />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." secondary="12 hours ago" />
                  <RemoveRedEyeIcon />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." secondary="12 hours ago" />
                  <RemoveRedEyeIcon />
                </ListItem>
              </List>

              {/* Sección de Noticias Adicionales */}
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                  <Card sx={{ display: 'flex', alignItems: 'center', ...hoverEffectStyles }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 150, objectFit: 'cover' }}
                      image="https://www.shutterstock.com/image-photo/heat-thermometer-shows-temperature-hot-600nw-2472353719.jpg"
                      alt="Placeholder image"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        12 hours ago
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ display: 'flex', alignItems: 'center', ...hoverEffectStyles }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 150, objectFit: 'cover' }}
                      image="https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg"
                      alt="Placeholder image"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        12 hours ago
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Sección Lo Más Importante del Momento */}
              <Typography variant="h6" style={{ marginTop: 20 }}>Lo más importante del momento</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Card sx={hoverEffectStyles}>
                        <CardMedia
                          component="img"
                          height="180"
                          image="https://www.shutterstock.com/image-photo/heat-thermometer-shows-temperature-hot-600nw-2472353719.jpg"
                          alt="Placeholder image"
                          style={{ objectFit: 'cover' }}
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card sx={hoverEffectStyles}>
                        <CardMedia
                          component="img"
                          height="180"
                          image="https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg"
                          alt="Placeholder image"
                          style={{ objectFit: 'cover' }}
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Card sx={hoverEffectStyles}>
                        <CardMedia
                          component="img"
                          height="180"
                          image="https://www.puromarketing.com/uploads/img/contents/2023/kiYbDK4qFmjt29zc56C3/upload/20230720122846.webp?rand=20230720122846"
                          alt="Placeholder image"
                          style={{ objectFit: 'cover' }}
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card sx={hoverEffectStyles}>
                        <CardMedia
                          component="img"
                          height="180"
                          image="https://www.shutterstock.com/image-photo/heat-thermometer-shows-temperature-hot-600nw-2472353719.jpg"
                          alt="Placeholder image"
                          style={{ objectFit: 'cover' }}
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Sección de Opiniones con efecto hover */}
            <Grid item xs={12} sm={4}>
              <Box sx={hoverEffectStyles}>
                <Typography variant="h6">Opiniones</Typography>
                <Opiniones />
              </Box>
            </Grid>
          </Grid>
        </Grid>
    </LayoutCMS>
  );
};
