import React, { useEffect, useState } from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { LayoutCMS } from '../../common/LayoutCMS';
import Opiniones from '../../opiniones/Opiniones';

export const InicioPage = () => {
  return (
    <LayoutCMS>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* Slider placeholder */}
            <div style={{ height: 200, backgroundColor: '#ccc', marginTop: 20 }}></div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Lo más importante del momento</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.shutterstock.com/image-photo/heat-thermometer-shows-temperature-hot-600nw-2472353719.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.puromarketing.com/uploads/img/contents/2023/kiYbDK4qFmjt29zc56C3/upload/20230720122846.webp?rand=20230720122846"
                    alt="Placeholder image"
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
          <Grid item xs={12} sm={8}>
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
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Opiniones</Typography>
            <Opiniones />
          </Grid>
        </Grid>
      </Container>
    </LayoutCMS>
  );
};
