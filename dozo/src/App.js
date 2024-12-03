import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HowToPage from './pages/HowToPage';
import Login from './pages/Login';
import Register from './pages/Register';
import FindGiftPage from './pages/FindGiftPage';
import Carrito from './components/carritocomponent';
import MoreDetails from './components/MoreDetails';
import Pagos from './pages/pagos';
import MisPedidos from './components/MisPedidos';
import { CartProvider } from './components/CartContext';
import { FilterProvider } from './components/FilterContext';
import DetallesPedido from './pages/DetallesPedido';
import MinPage from './components/MainPage';
import Edituser from './components/EditUserComponent';
import Password from './components/ChangePasswordComponent';
import ForgotPassword from './components/ForgotPassword';
import NewPassword from './components/NewPassword';

import './App.css';

// Simulación de autenticación
const isAuthenticated = () => {
  // Por ejemplo, verifica si el token está en el localStorage
  return Boolean(localStorage.getItem('authToken'));
};

// Componente para rutas privadas
const PrivateRoute = ({ element: Element, ...rest }) => {
  return isAuthenticated() ? <Element {...rest} /> : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <CartProvider>
      <FilterProvider>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/howto" element={<HowToPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/findgift" element={<FindGiftPage />} />
              <Route path="/carrito" element={<PrivateRoute element={Carrito} />} />
              <Route path="/pagos" element={<PrivateRoute element={Pagos} />} />
              <Route path="/detalles/:id" element={<PrivateRoute element={MoreDetails} />} />
              <Route path="/mispedidos" element={<PrivateRoute element={MisPedidos} />} />
              <Route path="/detalles-pedido/:id" element={<PrivateRoute element={DetallesPedido} />} />
              <Route path="/minpage" element={<PrivateRoute element={MinPage} />} />
              <Route path="/edituser" element={<PrivateRoute element={Edituser} />} />
              <Route path="/password" element={<PrivateRoute element={Password} />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:userId" element={<NewPassword />} />
            </Routes>
          </div>
        </Router>
      </FilterProvider>
    </CartProvider>
  );
};

export default App;
