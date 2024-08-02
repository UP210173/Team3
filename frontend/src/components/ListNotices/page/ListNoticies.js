import { Container } from "@mui/material"
import { HeaderListNotices } from "../components/HeaderListNotices"

export const ListNoticies = () => {
  return (
    <Container maxWidth="xl" sx={{ margin: "10px auto 20px"}}>
        <HeaderListNotices />
    </Container>
  )
}
