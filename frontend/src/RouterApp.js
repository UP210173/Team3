import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './components/Login'
import { InicioPage } from './components/Inicio'
import { PoliticaPage } from './components/Politica'
import { TendenciasPage } from './components/Tendencias'
import { DeportesPage } from './components/Deportes'

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={ <LoginPage /> } />

        <Route path='inicio' element={ <InicioPage /> } />
        <Route path='politica' element={ <PoliticaPage /> } />
        <Route path='deportes' element={ <DeportesPage /> } />
        <Route path='tendencias' element={ <TendenciasPage /> } />
      </Routes>
    </BrowserRouter>
  )
}
