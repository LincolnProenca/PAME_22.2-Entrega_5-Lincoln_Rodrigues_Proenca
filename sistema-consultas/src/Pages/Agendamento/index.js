import React from "react";
import { useState } from "react";
import Login from "./Login";
import SelecaoDia from "./SelecaoDia";

function Agendamento() {
  const [etapa, setEtapa] = useState(0);
  switch (etapa) {
    case 0:
      return <Login setEtapa={setEtapa} />;
    case 1:
      return <SelecaoDia />;
    default:
      return <h1>Erro</h1>;
  }
}

export default Agendamento;
