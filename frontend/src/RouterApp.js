import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './components/Login'
<<<<<<< Updated upstream
import { InicioPage } from './components/Inicio'
import { PoliticaPage } from './components/Politica'
=======
import { PoliticaPage } from './components/Politica'
import { InicioPage } from './components/Inicio'
>>>>>>> Stashed changes

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={ <LoginPage /> } />
        <Route path='inicio' element={ <InicioPage /> } />
        <Route path='politica' element={ <PoliticaPage /> } />
      </Routes>
    </BrowserRouter>
  )
}
