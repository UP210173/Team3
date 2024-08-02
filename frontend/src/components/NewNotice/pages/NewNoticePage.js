import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Container, Grid, TextField, Button, Box, Paper
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export const NewNoticePage = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(dayjs());
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CMS UPA
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={12}>
            <Typography variant="h4">Nueva Noticia</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h6">Paso 1: Título</Typography>
              <TextField
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h6">Paso 2: Fecha</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h6">Paso 3: Autor</Typography>
              <TextField
                fullWidth
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h6">Paso 4: URL</Typography>
              <TextField
                fullWidth
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h6">Paso 5: Contenido</Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box display="flex" justifyContent="space-between">
              <Button variant="contained" color="secondary">
                Cancelar
              </Button>
              <Button variant="contained" color="primary">
                Guardar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
