import { Container } from "@mui/material"
import { HeaderListNotices } from "../components/HeaderListNotices"
import { GridListNotices } from "../components/GridListNotices"
import { noticesCreated } from "../data/news"

export const ListNoticies = () => {
  return (
    <Container maxWidth="xl" sx={{ margin: "10px auto 20px"}}>
        <HeaderListNotices />
        <GridListNotices noticies={ noticesCreated } />
    </Container>
  )
}
