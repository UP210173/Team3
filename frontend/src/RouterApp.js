import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './components/Login'
import { InicioPage } from './components/Inicio'
import { PoliticaPage } from './components/Politica'
import { InicioPage } from './components/Inicio'
import { DeportesPage } from './components/Deportes'

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={ <LoginPage /> } />
        <Route path='inicio' element={ <InicioPage /> } />
        <Route path='politica' element={ <PoliticaPage /> } />
        <Route path='deportes' element={ <DeportesPage /> } />
      </Routes>
    </BrowserRouter>
  )
}
