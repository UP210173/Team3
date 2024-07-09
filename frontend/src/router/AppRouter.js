import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../modules/Login"
import { InicioPage } from "../modules/Inicio"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/login" element={ <LoginPage /> } />
        <Route path="/cms" element={ <InicioPage /> } />
      </Routes>
    </BrowserRouter>
  )
}