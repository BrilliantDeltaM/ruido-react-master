import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Página de inicio sin Layout
import Layout from './assets/layout.jsx'; // Componente Layout
import Murales from './pages/Murales.jsx';
import Tienda from './pages/Tienda.jsx';
import Eventos from './pages/Eventos.jsx';
import Mural24 from './pages/Mural24.jsx';
import Mural23 from './pages/Mural2023.jsx';
import SeccionImagen from './assets/SeccionImagen.jsx';

function App() {
  const isGitHubPages = import.meta.env.MODE === "production" && import.meta.env.BASE_URL !== "/";
  const basename = isGitHubPages ? "/ruido-react-master" : "/";

  return (
    <Router basename={basename}>
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