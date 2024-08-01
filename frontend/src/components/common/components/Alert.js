import { Box, Typography } from "@mui/material"
import { useUI } from "../hooks"

export const Alert = () => {

  const { message } = useUI();
  

  return (
    <Box className="alert alert-hidden" component='div'>
      <Typography component='p' variant="body1">heelo</Typography>
    </Box>
  )
}
