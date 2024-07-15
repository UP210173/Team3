import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './components/Login'

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={ <LoginPage /> } />
      </Routes>
    </BrowserRouter>
  )
}
