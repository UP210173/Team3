import { Box, Typography } from "@mui/material"
import { useUI } from "../hooks"
import { useEffect, useRef } from "react";
import InfoIcon from '@mui/icons-material/Info';

export const Alert = () => {

  const { message: { isOpen, content, type }, closeAlert } = useUI();
  const alertRef = useRef();

  useEffect(() => {

    if ( isOpen ) {
      alertRef.current.classList.remove('alert-hidden');
      alertRef.current.classList.add('alert-show');
    } else {
      alertRef.current.classList.remove('alert-show');
      alertRef.current.classList.add('alert-hidden')
    }

    setTimeout(() => {
      closeAlert();
    }, 3000 );

  }, [isOpen]);

  return (
    <Box ref={ alertRef } className={`alert alert-hidden ${ type === 'error' ? 'alert-error' : 'alert-success' }`} component='div'>
      <InfoIcon />
      <Typography fontWeight={'bold'} component='p' variant="caption">{ content }</Typography>
    </Box>
  )
}
