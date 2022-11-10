import React from "react";
import "./App.css";
import Container from "./Components/Container";
import { Routes, Route } from "react-router-dom";
import Turnos from "./Components/Turnos";
import Validacion from "./Components/Validacion";
import Calculador from "./Components/Calculador/Calculador";
import Servicios from "./Components/Servicios";
import Servicios2 from "./Components/Servicios2/Servicios2";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios2" element={<Servicios2 />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/validacion" element={<Validacion />} />
        <Route path="/calculador" element={<Calculador />} />
      </Route>
    </Routes>
  );
}

export default App;
