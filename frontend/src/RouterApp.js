import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './components/Login/pages/LoginPage'
import { RegisterPage } from './components/Login/pages/RegisterPage'

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={ <LoginPage /> } />
        <Route path='registrar' element={ <RegisterPage /> } />
      </Routes>
    </BrowserRouter>
  )
}
