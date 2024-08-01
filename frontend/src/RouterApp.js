import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from './components/Login/pages/LoginPage'
import { RegisterPage } from './components/Login/pages/RegisterPage'
import { InicioPage } from './components/Inicio/pages/InicioPage';
import { ClimaPage } from './components/Clima/pages/ClimaPage';
import { PoliticaPage } from './components/Politica/pages/PoliticaPage'
import { DeportesPage } from './components/Deportes/pages/DeportesPage'
import { TendenciasPage } from './components/Tendencias/pages/TendenciasPage'
import { EntretenimientoPage } from './components/Entretenimiento/pages/EntretenimientoPage';
import { useLogin } from './components/Login/hooks/useLogin';

export const RouterApp = () => {
  
  const { status } = useLogin();
  
  return (
    <BrowserRouter>
      <Routes>

        { 
          status === 'authorized'
          ? (
            <>
              <Route path='inicio' element={ <InicioPage /> } />
              <Route path='clima' element={ <ClimaPage/> } />
              <Route path='entretenimiento' element={ <EntretenimientoPage /> } />
              <Route path='politica' element={ <PoliticaPage /> } />
              <Route path='deportes' element={ <DeportesPage /> } />
              <Route path='tendencias' element={ <TendenciasPage /> } />
              <Route path='Entretenimiento' element={ <EntretenimientoPage /> } />
              <Route path='clima' element={ <ClimaPage /> } />
              <Route path="/*" element={ <Navigate to="/inicio" />} />
            </>
          )
          : (
            <>
              <Route path='login' element={ <LoginPage /> } />
              <Route path='registrar' element={ <RegisterPage /> } />
            </>
          )
        }

        <Route path="/*" element={ <Navigate to="/login" />} />
        
      </Routes>
    </BrowserRouter>
  )
}