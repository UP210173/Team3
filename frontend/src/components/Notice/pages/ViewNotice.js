import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Header } from '../../common';
import { dateFormat } from '../../common/helpers/dateFormat';
import { Footer } from '../../common/components/Footer';
import { useLocation } from 'react-router-dom';

export const ViewNotice = () => {
  const location = useLocation();
  const { newsItem } = location.state || {}; // Accede a los datos de la noticia desde el estado de la navegación

  const noticeDate = dateFormat(new Date(newsItem?.date || Date.now()));

  if (!newsItem) {
    return (
      <Container sx={{ margin: '50px auto' }} maxWidth={'md'}>
        <Typography variant="h6" color="error">
          No se encontró la noticia.
        </Typography>
      </Container>
    );
  }

  return (
    <div>
      <Header />
      <Container sx={{ margin: '50px auto' }} maxWidth={'md'}>
        <Typography mb={3} variant="h4" component={'h1'} fontWeight={'bold'}>
          {newsItem.title}
        </Typography>
        <Box mb={5} className="notice-top">
          <Typography>{noticeDate}</Typography>
          <Typography borderBottom={''} fontWeight={'bold'}>
            Publicado por:{' '}
            <Box component="span" fontWeight={'regular'}>
              {newsItem.author || 'Desconocido'}
            </Box>
          </Typography>
        </Box>
        <Box className="notice-image" mb={3}>
          <img
            src={newsItem.img || 'https://via.placeholder.com/800x400'}
            alt={newsItem.title}
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          />
        </Box>
        <Box margin={'0 auto'}>
          <Typography mb={3} lineHeight={1.7}>
            {newsItem.content}
          </Typography>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};
