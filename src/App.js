import React from 'react';
import './App.css';
import Container from './Components/Container';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Turnos from "./Components/Turnos";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Container />} />
    <Route path="/turnos" element={<Turnos />} />
  </Routes>
  );
}

export default App;
