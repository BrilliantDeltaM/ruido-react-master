import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Página de inicio dentro del Layout
import Layout from './assets/Layout.jsx';
import Murales from './pages/Murales.jsx';
import Tienda from './pages/Tienda.tsx';
import Eventos from './pages/Eventos.tsx';
import SeccionImagen from './assets/SeccionImagen.jsx';
import { AuthProvider } from './context/AuthContext.tsx';
import { CarritoProvider } from './context/CarritoContext.tsx';

function App() {
  const isGitHubPages = import.meta.env.MODE === "production" && import.meta.env.BASE_URL !== "/";
  const basename = isGitHubPages ? "/ruido-react-master" : "/";

  return (
    <AuthProvider>
      <CarritoProvider>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> 
            <Route path="murales" element={<Murales />} />
            <Route path="murales/:id" element={<SeccionImagen />} />
            <Route path="tienda" element={<Tienda />} />
            <Route path="tienda/:categoria" element={<Tienda />} />
            <Route path="tienda/:categoria/:producto" element={<Tienda />} />
            <Route path="eventos" element={<Eventos />} />
            <Route path="eventos/:seccion" element={<Eventos />} />
          </Route>

          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </Router>
      </CarritoProvider>
      
    </AuthProvider>
  );
}

export default App;
