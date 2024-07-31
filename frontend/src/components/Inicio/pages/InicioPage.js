import { AppBar, Toolbar, Typography, Tabs, Tab, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { LayoutCMS } from '../../common/LayoutCMS';

export const InicioPage = () => {
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
                    image="https://via.placeholder.com/150"
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
                    image="https://via.placeholder.com/150"
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
                    image="https://via.placeholder.com/150"
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
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Opiniones</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Jennifer Sanchez" secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
                <VisibilityOffIcon />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Elizabeth Lupone" secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
                <VisibilityOffIcon />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Stacy Jordan" secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
                <VisibilityOffIcon />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Jane Doe" secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
                <VisibilityOffIcon />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </LayoutCMS>
  );
}