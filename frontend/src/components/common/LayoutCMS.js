import { Navigation } from "./components/Navigation"
import { Header } from "./components/Header"
import { Container } from "@mui/material"

export const LayoutCMS = ({ children }) => {
  return (
      <>
        <Header />
        <Navigation />

        <Container maxWidth="xl">
          { children }
        </Container>
      </>
  )
}
