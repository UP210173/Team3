import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider, Button, Table, TableBody, TableCell, TableHead, TableRow, Paper, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { LayoutCMS } from '../../common';

export const DeportesPage = () => {
  return (
    <LayoutCMS>
      <Container>
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
                    image="https://via.placeholder.com/150"
                    alt="Placeholder image"
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
                    alt="Placeholder image"
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
                    alt="Placeholder image"
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
                image="https://via.placeholder.com/200"
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
            <List>
              <ListItem>
                <ListItemText primary="Jennifer Sanchez" secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Elizabeth Lupone" secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Stacy Jordan" secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Jane Doe" secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </LayoutCMS>
  );
}


