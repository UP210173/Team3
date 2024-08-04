import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link as MuiLink,
  Divider,
  Box,
  LinearProgress
} from '@mui/material';
import { LayoutCMS } from '../../common';
import Opiniones from '../../../components/common/components/Opiniones';
import { fetchWeatherData } from '../../Clima/pages/weatherApi';
import LocationProvider from '../../Clima/pages/LocationProvider'; // Importa el componente de ubicación
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts'; // Importa los componentes necesarios de recharts
import Slider from 'react-slick'; // Importa el componente Slider de react-slick

// Importa los estilos de slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ClimaPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hourlyData, setHourlyData] = useState([]); // Estado para guardar los datos horarios

  useEffect(() => {
    // Simula la obtención de datos horarios (esto se reemplazará por datos reales de la API)
    const simulatedHourlyData = [
      { time: '00:00', temperature: 22, humidity: 78, windSpeed: 3 },
      { time: '01:00', temperature: 21, humidity: 80, windSpeed: 2 },
      { time: '02:00', temperature: 20, humidity: 82, windSpeed: 2 },
      { time: '03:00', temperature: 19, humidity: 85, windSpeed: 2 },
      { time: '04:00', temperature: 18, humidity: 88, windSpeed: 1 },
      { time: '05:00', temperature: 17, humidity: 90, windSpeed: 1 },
      { time: '06:00', temperature: 18, humidity: 88, windSpeed: 1 },
      { time: '07:00', temperature: 19, humidity: 85, windSpeed: 1 },
      { time: '08:00', temperature: 21, humidity: 82, windSpeed: 2 },
      { time: '09:00', temperature: 24, humidity: 78, windSpeed: 3 },
      { time: '10:00', temperature: 26, humidity: 75, windSpeed: 4 },
      { time: '11:00', temperature: 28, humidity: 72, windSpeed: 4 },
      { time: '12:00', temperature: 29, humidity: 70, windSpeed: 5 },
      { time: '13:00', temperature: 30, humidity: 68, windSpeed: 5 },
      { time: '14:00', temperature: 32, humidity: 65, windSpeed: 6 },
      { time: '15:00', temperature: 33, humidity: 63, windSpeed: 6 },
      { time: '16:00', temperature: 32, humidity: 65, windSpeed: 5 },
      { time: '17:00', temperature: 31, humidity: 68, windSpeed: 4 },
      { time: '18:00', temperature: 29, humidity: 72, windSpeed: 3 },
      { time: '19:00', temperature: 27, humidity: 75, windSpeed: 3 },
      { time: '20:00', temperature: 25, humidity: 78, windSpeed: 2 },
      { time: '21:00', temperature: 24, humidity: 80, windSpeed: 2 },
      { time: '22:00', temperature: 23, humidity: 82, windSpeed: 2 },
      { time: '23:00', temperature: 22, humidity: 85, windSpeed: 2 },
    ];

    setHourlyData(simulatedHourlyData);
  }, []); // Este efecto se ejecuta al cargar el componente

  const handleLocationObtained = ({ latitude, longitude }) => {
    // Usa la función fetchWeatherData para obtener los datos del clima
    fetchWeatherData(latitude, longitude)
      .then(data => {
        console.log(data); // Verifica la respuesta de la API
        setWeatherData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleLocationError = (errorMessage) => {
    setError(errorMessage);
    setLoading(false);
  };

  const hoverEffectStyles = {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  };

  const getWeatherIcon = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  const calculateProgress = (temperature) => {
    // Definir el rango de temperatura
    const minTemp = -10; // Temperatura mínima esperada
    const maxTemp = 50;  // Temperatura máxima esperada

    // Calcular el porcentaje de la barra de progreso
    return ((temperature - minTemp) / (maxTemp - minTemp)) * 100;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <LayoutCMS>
      <LocationProvider
        onLocationObtained={handleLocationObtained}
        onError={handleLocationError}
      />

      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={12} md={8}>
          <Card sx={hoverEffectStyles}>
            <CardMedia
              component="img"
              height="400"
              image="https://www.shutterstock.com/image-photo/heat-thermometer-shows-temperature-hot-600nw-2472353719.jpg"
              alt="Calor"
            />
            <CardContent>
              <Typography variant="h5">Ola de calor extremo azota varias regiones del país</Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <MuiLink href="#">Leer más</MuiLink>.
              </Typography>
            </CardContent>
          </Card>

          <Typography variant="h6" align="center" style={{ marginTop: 20 }}>Últimas Noticias</Typography>
          <Divider style={{ marginBottom: 20 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150?text=Noticia+1"
                  alt="Noticia 1"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {`Párrafo de texto con un `}<MuiLink href="#">enlace no asignado</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150?text=Noticia+2"
                  alt="Noticia 2"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {`Párrafo de texto con un `}<MuiLink href="#">enlace no asignado</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150?text=Noticia+3"
                  alt="Noticia 3"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {`Párrafo de texto con un `}<MuiLink href="#">enlace no asignado</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150?text=Noticia+4"
                  alt="Noticia 4"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {`Párrafo de texto con un `}<MuiLink href="#">enlace no asignado</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150?text=Noticia+5"
                  alt="Noticia 5"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {`Párrafo de texto con un `}<MuiLink href="#">enlace no asignado</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Card sx={hoverEffectStyles}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150?text=Noticia+6"
                  alt="Noticia 6"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {`Párrafo de texto con un `}<MuiLink href="#">enlace no asignado</MuiLink>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          {/* Carrusel que incluye clima actual y gráficos */}
          <Card sx={hoverEffectStyles}>
            <CardContent>
              <Slider {...settings}>
                {/* Contenedor del clima actual */}
                <div>
                  {loading ? (
                    <Typography variant="body2" align="center">Cargando datos del clima...</Typography>
                  ) : error ? (
                    <Typography variant="body2" align="center" color="error">{error}</Typography>
                  ) : (
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Typography variant="h6" align="center">Clima Actual</Typography>
                      <Divider style={{ marginBottom: 10 }} />
                      <img src={getWeatherIcon(weatherData.weather[0].icon)} alt="Weather Icon" width={80} style={{ marginBottom: 10 }} />
                      <Typography variant="h4" color="primary" gutterBottom>{weatherData.name}</Typography>
                      <Typography variant="h5" gutterBottom>{`${Math.round(weatherData.main.temp)} °C`}</Typography>
                      <Typography variant="body1" color="textSecondary" gutterBottom>{weatherData.weather[0].description.toUpperCase()}</Typography>
                      <Typography variant="body2" color="textSecondary">{`Viento: ${Math.round(weatherData.wind.speed)} m/s`}</Typography>
                      {/* Barra de progreso de temperatura */}
                      <Box width="100%" mt={2}>
                        <LinearProgress variant="determinate" value={calculateProgress(weatherData.main.temp)} />
                      </Box>
                    </Box>
                  )}
                </div>

                {/* Gráfico de temperatura por hora */}
                <div>
                  <Typography variant="h6" align="center">Temperatura por Hora</Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Gráfico de humedad por hora */}
                <div>
                  <Typography variant="h6" align="center">Humedad por Hora</Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="humidity" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Gráfico de velocidad del viento por hora */}
                <div>
                  <Typography variant="h6" align="center">Velocidad del Viento por Hora</Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="windSpeed" stroke="#ffc658" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Slider>
            </CardContent>
          </Card>

          <Box sx={hoverEffectStyles} mt={2}>
            <Opiniones />
          </Box>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
    </LayoutCMS>
  );
};
