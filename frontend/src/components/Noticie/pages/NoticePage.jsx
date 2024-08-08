import { Container, Typography } from "@mui/material"
import { Header } from "../../common"

export const NoticePage = () => {
  return (
    <div>
      <Header />
      <Container sx={{ margin: "50px auto" }} maxWidth={"xl"}>
        <Typography>Título de la Noticia</Typography>
      </Container>
    </div>
  )
}
