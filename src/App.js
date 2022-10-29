import React from "react";
import "./App.css";
import Container from "./Components/Container";
import { Routes, Route } from "react-router-dom";
import Turnos from "./Components/Turnos";
import Validacion from "./Components/Validacion";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/validacion" element={<Validacion />} />
      </Route>
    </Routes>
  );
}

export default App;
