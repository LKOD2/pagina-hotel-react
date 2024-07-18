import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/Comp.css';
import './styles/Clima.css';

import Header from './components/MiHeader';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import Somos from './components/Somos';
import Contacto from "./components/Contacto";
import Reservar from "./components/Reservar";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [sesionActiva, setSesionActiva] = useState(() => {
    const savedUser = localStorage.getItem('sesionActiva');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (sesionActiva) {
      localStorage.setItem('sesionActiva', JSON.stringify(sesionActiva));
    } else {
      localStorage.removeItem('sesionActiva');
    }
  }, [sesionActiva]);

  const handleLogin = (user) => {
    setSesionActiva(user);
  };

  const handleLogout = () => {
    setSesionActiva(null);
  };

  return (
    <div className="App">
      <Router>
        <Header setShowLogin={setShowLogin} sesionActiva={sesionActiva} handleLogout={handleLogout}/>
        {showLogin && <Login setShowLogin={setShowLogin} handleLogin={handleLogin} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/somos" element={<Somos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/reservar" element={<Reservar />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
