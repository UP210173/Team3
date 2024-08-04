import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { LayoutCMS } from "../../common";
import Opiniones from "../../opiniones/Opiniones";
import { SwiperCom } from "../../common/components/Swiper";

// Estilos para la animación de las tarjetas
const cardStyles = {
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

export const TendenciasPage = () => {
  return (
    <LayoutCMS>
      <SwiperCom />
      {/* Divider para separar secciones */}
      <Grid item xs={12}>
        <Divider style={{ margin: "20px 0" }} />
      </Grid>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} lg={12}>
            <Grid container spacing={2}>
              {/* Sección de Noticias Clima */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6">Noticias Clima</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Card sx={cardStyles}>
                      <CardMedia
                        component="img"
                        height="80"
                        image="https://via.placeholder.com/150"
                        alt="Clima noticia 1"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Breve descripción sobre el clima reciente en la
                          región.
                        </Typography>
                        <Button size="small">Read More</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card sx={cardStyles}>
                      <CardMedia
                        component="img"
                        height="80"
                        image="https://via.placeholder.com/150"
                        alt="Clima noticia 2"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Información sobre alertas meteorológicas y su impacto.
                        </Typography>
                        <Button size="small">Read More</Button>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12}>
                    <Card sx={cardStyles}>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://via.placeholder.com/300"
                        alt="Clima noticia grande"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Artículo extenso sobre cambios climáticos y
                          predicciones futuras.
                        </Typography>
                        <Button size="small">Read More</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>

              {/* Sección de Política */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6">Política</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Card sx={cardStyles}>
                      <CardMedia
                        component="img"
                        height="80"
                        image="https://via.placeholder.com/150"
                        alt="Política noticia 1"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Breve noticia sobre una decisión política reciente.
                        </Typography>
                        <Button size="small">Read More</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card sx={cardStyles}>
                      <CardMedia
                        component="img"
                        height="80"
                        image="https://via.placeholder.com/150"
                        alt="Política noticia 2"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Análisis sobre la situación política actual.
                        </Typography>
                        <Button size="small">Read More</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card sx={cardStyles}>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://via.placeholder.com/300"
                        alt="Política noticia grande"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Reportaje detallado sobre un evento político
                          importante.
                        </Typography>
                        <Button size="small">Read More</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>

              {/* Divider para separar secciones */}
              <Grid item xs={12}>
                <Divider style={{ margin: "20px 0" }} />
              </Grid>

              {/* Sección de Entretenimiento */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6">Entretenimiento</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Card sx={cardStyles}>
                      <CardMedia
                        component="img"
                        height="80"
                        image="https://via.placeholder.com/150"
                        alt="Entretenimiento noticia 1"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Últimos chismes de celebridades y eventos de
                          Hollywood.
                        </Typography>
                        <Button size="small">Read More</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card sx={cardStyles}>
                      <CardMedia
                        component="img"
                        height="80"
                        image="https://via.placeholder.com/150"
                        alt="Entretenimiento noticia 2"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Nuevas películas y series a estrenar este mes.
                        </Typography>
                        <Button size="small">Read More</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card sx={cardStyles}>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://via.placeholder.com/300"
                        alt="Entretenimiento noticia grande"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Reseñas de las últimas películas y eventos en la
                          industria del cine.
                        </Typography>
                        <Button size="small">Read More</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>

              {/* Sección de Deportes */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6">Deportes</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Card sx={cardStyles}>
                      <CardMedia
                        component="img"
                        height="80"
                        image="https://via.placeholder.com/150"
                        alt="Deportes noticia 1"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Resultados recientes de partidos de fútbol.
                        </Typography>
                        <Button size="small">Read More</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card sx={cardStyles}>
                      <CardMedia
                        component="img"
                        height="80"
                        image="https://via.placeholder.com/150"
                        alt="Deportes noticia 2"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Noticias de última hora sobre el mundo del deporte.
                        </Typography>
                        <Button size="small">Read More</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card sx={cardStyles}>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://via.placeholder.com/300"
                        alt="Deportes noticia grande"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          Entrevistas y análisis de expertos sobre las
                          competencias deportivas.
                        </Typography>
                        <Button size="small">Read More</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Opiniones</Typography>
            <Opiniones />
          </Grid>
        </Grid>
        {/* Línea divisoria debajo del diseño principal */}
        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
    </LayoutCMS>
  );
};
