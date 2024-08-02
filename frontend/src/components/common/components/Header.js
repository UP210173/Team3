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
      <Stack direction="row" alignItems={"center"} justifyContent={"center"} spacing={2}>
        <ListItem sx={{ display: "flex", flexDirection: "column"}}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start", gap: "30px", marginBottom: "10px"}}>
            <MenuOutlinedIcon sx={{ cursor: "pointer"}} onClick={ openAsideMenu } />
            <SearchOutlinedIcon />
          </Box>
          <Box width={"100%"}>
            <Typography component={"p"} variant='body2' fontWeight={700}>{ dateFormat() }</Typography>
            <Typography component={"p"} variant='caption'>Today's Paper</Typography>
          </Box>
        </ListItem>
        <Box width={"100%"}>
          <Typography component={"h1"} variant='h4' fontWeight={900} textAlign={"center"}>CMS Noticias</Typography>
        </Box>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: "20px", justifyContent: "flex-end"}}>
          <Link to="/registrar"><Button variant="contained">Subscribete</Button></Link>
          <Link to="/login"><Button variant="contained">Log In</Button></Link>
        </Box>
      </Stack>
    </Container>
  )
}
