import { Container } from "@mui/material"
import { HeaderListNotices } from "../components/HeaderListNotices"
import { GridListNotices } from "../components/GridListNotices"
import { noticesCreated } from "../data/news"

export const ListNoticies = () => {
  return (
    <Container maxWidth="xl" sx={{ margin: "10px auto 20px"}}>
        <HeaderListNotices />
        <Container maxWidth="lg" sx={{ margin: "10px auto 20px"}}>
          <GridListNotices notices={ noticesCreated } />
        </Container>
    </Container>
  )
}
