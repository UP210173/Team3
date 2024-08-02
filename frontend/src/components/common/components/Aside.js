import { useEffect, useRef } from "react"
import { Box, IconButton, ListItem, Stack, Typography, List } from "@mui/material"
import { useUI } from "../hooks/useUI"
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';

export const Aside = () => {

  const { asideMenu: { isOpen }, closeAsideMenu } = useUI();
  const asideRef = useRef();

  useEffect(() => {
    if ( isOpen ) {
      asideRef.current.classList.remove("aside-hidden");
      asideRef.current.classList.add("aside-show");
      document.querySelector(".cms").style.opacity = 0.5;
    } else {
      asideRef.current.classList.remove("aside-show");
      asideRef.current.classList.add("aside-hidden");
      document.querySelector(".cms").style.opacity = 1;
    }
  }, [isOpen])

  return (
    <Box ref={asideRef} component="aside" className="aside aside-hidden">
      <Box width={"100%"} component="div">
        <Stack width={"100%"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <ListItem sx={{ flex: "1" }}>
            <Typography variant="body2" textTransform={"uppercase"} letterSpacing={"1px"} fontWeight={"bold"}>Navegación</Typography>
          </ListItem>
          <ListItem sx={{ justifyContent: "flex-end" }}>
            <IconButton>
              <CloseIcon onClick={ closeAsideMenu } />
            </IconButton>
          </ListItem>
        </Stack>

        <List>
          <ListItem>
            <Box>
              <Typography>Inicio</Typography>
              <IconButton>
                <HomeIcon />
              </IconButton>
            </Box>
          </ListItem>
        </List>

      </Box>
    </Box>
  )
}
