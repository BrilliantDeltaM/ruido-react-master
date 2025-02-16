import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Página de inicio sin Layout
import Layout from './assets/Layout'; // Componente Layout
import Murales from './pages/Murales';
import Tienda from './pages/Tienda';
import Eventos from './pages/Eventos';
import Mural24 from './pages/Mural24';
import Mural23 from './pages/Mural2023';
import SeccionImagen from './assets/SeccionImagen';

function App() {
  return (
    <Router basename="/ruido-react-master">
      <Routes>
        {/* Ruta para la página de inicio (sin Layout) */}
        <Route path="/" element={<Home />} />

        {/* Rutas que usan el Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="murales" element={<Murales />} />
          <Route path="murales/:id" element={<SeccionImagen />} />
          <Route path="tienda" element={<Tienda />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="eventos/circuito-mural" element={<Mural24 />} />
          <Route path="eventos/corte-circuito-2023" element={<Mural23 />} />
        </Route>

        {/* Ruta para errores 404 */}
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;