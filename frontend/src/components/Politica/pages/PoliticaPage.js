import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Button
} from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { LayoutCMS } from '../../common';
<<<<<<< Updated upstream
import { useNav } from '../../common/hooks/useNavigation';

export const PoliticaPage = () => {
=======
<<<<<<< HEAD
import Slider from 'react-slick';

// Import styles from slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PoliticaPage = () => {
  const [politicalNews, setPoliticalNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carousel configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const cardStyle = {
    height: "370px",
    border: '1px solid #ddd',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    '&:hover': {
      transform: 'scale(1.03)', // Reduce the scale factor for hover effect
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  };

  // Fetch political news from the API
  useEffect(() => {
    const fetchPoliticalNews = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/notices/category/politica");
        if (!response.ok) {
          throw new Error('Error fetching political news');
        }
        const data = await response.json();
        setPoliticalNews(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching political news:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPoliticalNews();
  }, []);

  // Function to truncate text to a specified number of words
  const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  return (
    <LayoutCMS>
      <Grid container spacing={2} className='politica'>
        <Grid item xs={12} md={8}>
          <Box className='politica-hero'>
            <Box className='politica-hero-content'>
              <Typography variant="h4" component="div">
                Política
              </Typography>
              <Typography variant="h6" component="div">
                Nueva presidenta de México arma gabinete con miembros del gobierno saliente y exfuncionarios
              </Typography>
            </Box>
            <Box className="politica-overlay"></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" textAlign={"center"} fontWeight={"700"}>Últimas Noticias</Typography>
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

        {/* Noticias Mundiales con Carrusel */}
        <Grid item xs={12} marginTop={"30px"}>
          <Typography variant="h6" fontWeight={"700"} mb={5}>Noticias Mundiales</Typography>
          <Grid item xs={12}>
            {loading ? (
              <Typography variant="body2" align="center">Cargando noticias de política...</Typography>
            ) : error ? (
              <Typography variant="body2" align="center" color="error">{error}</Typography>
            ) : (
              <Slider {...settings}>
                {politicalNews.length > 0 ? politicalNews.map((newsItem, index) => (
                  <div key={index}>
                    <Card sx={cardStyle} style={{ margin: '0 10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={newsItem.img || "https://via.placeholder.com/250"}
                        alt={newsItem.title || 'Noticia sin título'}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/250"; }}
                      />
                      <CardContent>
                        <Typography variant="h6">{truncateText(newsItem.title, 8)}</Typography> {/* Truncate title */}
                        <Typography variant="body2" color="text.secondary">
                          {truncateText(newsItem.content, 20)} {/* Truncate content */}
                        </Typography>
                      </CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 2 }}>
                        <Button 
                          variant='outlined' 
                          size='small' 
                          color='primary' 
                          sx={{ width: '90%' }} // Ensure the button takes the majority of the card's width
                        >
                          Leer más
                        </Button>
                      </Box>
                    </Card>
                  </div>
                )) : (
                  <div>
                    <Card sx={cardStyle} style={{ margin: '0 10px' }}>
                      <CardContent>
                        <Typography variant="body2" align="center">No hay noticias de política disponibles</Typography>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </Slider>
            )}
=======
import { useNav } from '../../common/hooks/useNavigation';

export const PoliticaPage = () => {
>>>>>>> Stashed changes

  const { goToPage } = useNav();

  return (
    <LayoutCMS>
        <Grid container spacing={2} className='politica'>
          <Grid onClick={ () => goToPage('/noticia/1') }
            sx={{ cursor: "pointer"}} item xs={12} md={8}>
            <Box className='politica-hero'>
              <Box className='politica-hero-content'>
                <p variant="h4" component="div">
                  Política
                </p>
                <p variant="h6" component="div">
                  Nueva presidenta de México arma gabinete con miembros del gobierno saliente y exfuncionarios
                </p>
              </Box>
              <Box className="politica-overlay"></Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" textAlign={"center"} fontWeight={"700"}>Últimas Noticias</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Checo Pérez con la urgencia de repuntar en el GP de España" secondary="23:30" />
                <RemoveRedEyeIcon onClick={ () => goToPage('/noticia/1') }
                sx={{ cursor: "pointer"}} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Scaloni y jugadores de Argentina se quejan de la cancha tras debut" secondary="23:45" />
                <RemoveRedEyeIcon onClick={ () => goToPage('/noticia/1') }
                sx={{ cursor: "pointer"}} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Julián Quiñones dejó al América luego de un año y tres títulos" secondary="23:54" />
                <RemoveRedEyeIcon onClick={ () => goToPage('/noticia/1') }
                sx={{ cursor: "pointer"}} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Yucatán mantiene liderazgo en seguridad con la tasa delictiva" secondary="23:59" />
                <RemoveRedEyeIcon onClick={ () => goToPage('/noticia/1') }
                sx={{ cursor: "pointer"}} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} marginTop={"30px"}>
            <Typography variant="h6" fontWeight={"700"} mb={5}>Noticias Mundiales</Typography>
            <Grid container spacing={2}>
              <Grid onClick={ () => goToPage('/noticia/1') }
              sx={{ cursor: "pointer"}} item xs={12} md={4}>
                <Card sx={{ height: "370px"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://s.france24.com/media/display/6d1b4c0a-8aa2-11ed-b3ac-005056a90284/w:980/p:16x9/AP22360508997060-1.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">Ucrania</Typography>
                    <Typography variant="body2" color="text.secondary">
                      EE.UU. amplía su política para permitir que Ucrania contraataque a Rusia
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid onClick={ () => goToPage('/noticia/1') }
              sx={{ cursor: "pointer"}} item xs={12} md={4}>
                <Card sx={{ height: "370px"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://static.hosteltur.com/app/public/uploads/img/articles/2023/01/05/L_125233_rel-et-china-enero23.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">China</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Escenas impactantes: guardacostas chinos atacan barcos filipinos
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid onClick={ () => goToPage('/noticia/1') }
              sx={{ cursor: "pointer"}} item xs={12} md={4}>
                <Card sx={{ height: "370px"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://fotos.perfil.com/2023/11/15/trim/636/361/union-europea-1698334.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">Europa</Typography>
                    <Typography variant="body2" color="text.secondary">
                      El volcán Etna vuelve a la actividad con un llamativo fenómeno
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} marginTop={"30px"} marginBottom={"30px"}>
            <Typography variant="h6" fontWeight={"700"} mb={5}>Noticias Nacionales</Typography>
            <Grid container spacing={2}>
              <Grid onClick={ () => goToPage('/noticia/1') }
              sx={{ cursor: "pointer"}} item xs={12} md={4}>
                <Card sx={{ height: "370px"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg40iGFauh6AAUk78wxva9Lx3HGGGNrCpCEw&s"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">Aguascalientes</Typography>
                    <Typography variant="body2" color="text.secondary">
                      EE.UU. amplía su política para permitir que Ucrania contraataque a Rusia
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid onClick={ () => goToPage('/noticia/1') }
              sx={{ cursor: "pointer"}} item xs={12} md={4}>
                <Card sx={{ height: "370px"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://ap-cdn.sfo3.digitaloceanspaces.com/uploads/2023/06/renunciar-Sheinbaum-estatutos-Morena.jpg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">Ciudad de México</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Escenas impactantes: guardacostas chinos atacan barcos filipinos
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid onClick={ () => goToPage('/noticia/1') }
              sx={{ cursor: "pointer"}} item xs={12} md={4}>
                <Card sx={{ height: "370px"}}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://sanluispotosi.quadratin.com.mx/www/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-04-at-9.34.22-AM-775x465.jpeg"
                    alt="Placeholder image"
                  />
                  <CardContent>
                    <Typography variant="h6">San Luis Potosí</Typography>
                    <Typography variant="body2" color="text.secondary">
                      El volcán Etna vuelve a la actividad con un llamativo fenómeno
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
>>>>>>> e820ded2f2554a8822dc341aa70d29336b11e756
          </Grid>
        </Grid>
      </Grid>
    </LayoutCMS>
  );
};
