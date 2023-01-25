import React from "react";
import { useState } from "react";
import Login from "../../Components/Login";
import SelecaoDia from "./SelecaoDia";

function Agendamento() {
  const [etapa, setEtapa] = useState(0);
  switch (etapa) {
    case 0:
      return (
        <Login
          setEtapa={setEtapa}
          texto1={"Entre ou cadastre-se"}
          texto2={"Fazer Login"}
          cadastro={true}
        />
      );
    case 1:
      return <SelecaoDia />;
    default:
      return <h1>Erro</h1>;
  }
}

export default Agendamento;
