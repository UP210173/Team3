import { Navigation } from "./components/Navigation"
import { Header } from "./components/Header"
import { Container } from "@mui/material"
import { Aside } from "./components/Aside"

export const LayoutCMS = ({ children }) => {
  return (
    <>
      <div className="cms">
        <Header />
        <Navigation />

        <Container maxWidth="xl">
          { children }
        </Container>
      </div>
      <Aside />
    </>
  )
}
