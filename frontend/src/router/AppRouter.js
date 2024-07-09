import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../modules/Login"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/login" element={ <LoginPage /> } />
      </Routes>
    </BrowserRouter>
  )
}