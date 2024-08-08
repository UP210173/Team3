<<<<<<< Updated upstream
import React from 'react';
=======
<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
>>>>>>> e820ded2f2554a8822dc341aa70d29336b11e756
>>>>>>> Stashed changes
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  IconButton,
<<<<<<< Updated upstream
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNav } from '../../common/hooks/useNavigation';

export const GridListNotices = ({ notices }) => {
  const { goToPage } = useNav();

=======
<<<<<<< HEAD
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export const GridListNotices = ({ notices }) => {
  const navigate = useNavigate();

  // Handler to delete a notice
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/notices/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Noticia eliminada exitosamente");
        window.location.reload(); // Refresh the page to update the list
      } else {
        const errorMessage = await response.text(); // Read the error message from the response
        alert(`Error al eliminar la noticia: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error al eliminar la noticia:", error);
      alert("Error de red al eliminar la noticia");
    }
  };

  // Handler to edit a notice
  const handleEdit = (notice) => {
    navigate("/nueva-noticia", { state: { notice } });
  };

  // Function to truncate content to a specified number of words
  const truncateContent = (content, maxWords) => {
    const words = content.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return content;
  };

  return (
    <Box>
      {notices.map((notice) => (
        <Card key={notice.id} className="news-card" sx={{ marginBottom: 2, display: "flex" }}>
          <CardMedia
            className="news-card-image"
            image={notice.img || "https://via.placeholder.com/150"}
            title={notice.title}
            component="img"
            sx={{ width: 200 }}
          />
          <CardActionArea sx={{ flex: 1 }}>
            <CardContent className="news-card-content" sx={{ display: "flex", alignItems: "center" }}>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <Box mb={2}>
                    <Typography component="h5" variant="h5">
                      {notice.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" component="p" mb={1}>
                    <strong>Autor:</strong> {notice.author}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" mb={1}>
                    <strong>Categoría:</strong> {notice.category}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" mb={1}>
                    <strong>Contenido:</strong> {truncateContent(notice.content, 20)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" mb={1}>
                    <strong>Fecha de Publicación:</strong> {notice.date}
                  </Typography>
                </Grid>
                <Grid item xs={2} container alignItems="center" justifyContent="flex-end">
                  <IconButton onClick={() => handleDelete(notice.id)} sx={{ color: "red" }}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(notice)} sx={{ color: "blue" }}>
                    <EditIcon />
                  </IconButton>
                </Grid>
              </Grid>
=======
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNav } from '../../common/hooks/useNavigation';

export const GridListNotices = ({ notices }) => {
  const { goToPage } = useNav();

>>>>>>> Stashed changes
  return (
    <Box>
      {notices.map((notice) => (
        <Card
          onClick={() => goToPage('/noticia/1')}
          key={notice.id}
          mb={5}
          className={'news-card'}
        >
          <CardMedia
            className={'news-card-image'}
            image={notice.img}
            title={notice.title}
            height={200}
          />
          <CardActionArea>
            <CardContent className={'news-card-content'}>
              <Box
                mb={2}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Typography component="h5" variant="h5">
                  {notice.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {notice.author}
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" component="p">
                {notice.body}
              </Typography>
              <Box
                mb={2}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'flex-end'}
              >
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Box>
<<<<<<< Updated upstream
=======
>>>>>>> e820ded2f2554a8822dc341aa70d29336b11e756
>>>>>>> Stashed changes
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};
