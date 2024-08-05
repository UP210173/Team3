import { Box, Stack, Button, ListItem, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { dateFormat } from '../helpers/dateFormat';
import { useUI } from '../hooks/useUI';

export const Header = () => {

  const { openAsideMenu } = useUI();

  return (
    <Container maxWidth="xl" sx={{ margin: "10px auto 20px"}}>
      <Box className='header'>
        <Box className="header-info">
          <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start", gap: "30px", marginBottom: "10px"}}>
            <MenuOutlinedIcon sx={{ cursor: "pointer"}} onClick={ openAsideMenu } />
            <SearchOutlinedIcon />
          </Box>
          <Box width={"100%"}>
            <Typography component={"p"} variant='body2' fontWeight={700}>{ dateFormat() }</Typography>
            <Typography component={"p"} variant='caption'>Today's Paper</Typography>
          </Box>
        </Box>
        <Box className="header-name" width={"100%"}>
          <h1 className='header-title'>CMS Noticias</h1>
          <Box className="header-buttons-2">
            <Link to="/registrar">Ingresar</Link>
            <Link to="/">Log In</Link>
          </Box>
        </Box>
        <Box className="header-buttons">
          <Link to="/registrar"><Button variant="contained">Subscribete</Button></Link>
          <Link to="/"><Button variant="contained">Log In</Button></Link>
        </Box>
      </Box>
    </Container>
  )
}
