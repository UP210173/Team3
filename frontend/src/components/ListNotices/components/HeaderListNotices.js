import { Box, Button, Container, ListItem, Stack, Typography } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const HeaderListNotices = () => {
  return (
    <Stack direction="row" alignItems={"center"} justifyContent={"center"} spacing={2}>
        <ListItem sx={{ display: "flex", flexDirection: "column"}}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-start", gap: "30px", marginBottom: "10px"}}>
            <MenuOutlinedIcon />
            <SearchOutlinedIcon />
        </Box>
        <Box width={"100%"}>
            <Typography component={"p"} variant='body2' fontWeight={700}>Tuesday, February 13, 2024</Typography>
            <Typography component={"p"} variant='caption'>Today's Paper</Typography>
        </Box>
        </ListItem>
        <Box width={"100%"}>
        <Typography component={"h1"} variant='h4' fontWeight={900} textAlign={"center"}>CMS Noticias</Typography>
        </Box>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: "20px", justifyContent: "flex-end"}}>
            <Box width={"fit-content"} component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <Typography mb={1} className="photo-circle" variant="h6">D</Typography>
                <Button variant="contained">Agregar Noticia</Button>
            </Box>
        </Box>
    </Stack>
  )
}
