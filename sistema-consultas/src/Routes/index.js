import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Agendamento from "../Pages/Agendamento";
import Gerenciamento from "../Pages/Gerenciamento";

function Rotas() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/agendamento" element={<Agendamento />} />
        <Route
          exact
          path="/funcionarios/atendimentos"
          element={<Gerenciamento />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
