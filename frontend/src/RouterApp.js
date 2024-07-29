import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './components/Login'
import { InicioPage } from './components/Inicio'
import { PoliticaPage } from './components/Politica'
import { DeportesPage } from './components/Deportes'
import { TendenciasPage } from './components/Tendencias'
import { EntretenimientoPage } from './components/Entretenimiento'
import { ClimaPage } from './components/Clima'

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={ <LoginPage /> } />
        <Route path='inicio' element={ <InicioPage /> } />
        <Route path='politica' element={ <PoliticaPage /> } />
        <Route path='deportes' element={ <DeportesPage /> } />
        <Route path='tendencias' element={ <TendenciasPage /> } />
        <Route path='Entretenimiento' element={ <EntretenimientoPage /> } />
        <Route path='clima' element={ <ClimaPage /> } />
      </Routes>
    </BrowserRouter>
  )
}