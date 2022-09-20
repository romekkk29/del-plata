import './App.css';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './vistas/home';
import CrearCuenta from './vistas/crearCuenta';
import IniciarSesion from './vistas/inciarSesion';
import Sucursales from './vistas/sucursales';
import Organizacional from './vistas/organizacional';
import Servicios from './vistas/servicios';
import Profesionales from './vistas/profesionales';

function App() {
  return (
   <>
     
     <BrowserRouter>
        <Routes>
              <Route path="/del-plata" element={<Home></Home>}/>
              <Route path="/iniciar-sesion" element={<IniciarSesion/>}/>
              <Route path="/crear-cuenta" element={<CrearCuenta></CrearCuenta>}/>
              <Route path="/sucursales" element={<Sucursales></Sucursales>}/>
              <Route path="/servicios" element={<Servicios></Servicios>}/>
              <Route path="/profesionales" element={<Profesionales></Profesionales>}/>
              <Route path="/organizacional" element={<Organizacional></Organizacional>}/>
              <Route path="*" element={<Navigate to='/del-plata'></Navigate>}/>

       </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
