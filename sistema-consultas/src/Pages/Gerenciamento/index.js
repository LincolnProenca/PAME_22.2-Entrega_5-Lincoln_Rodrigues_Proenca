import React from "react";
import { useState } from "react";
import Login from "../../Components/Login";

function Gerenciamento() {
  const [etapa, setEtapa] = useState(0);
  switch (etapa) {
    case 0:
      return (
        <Login
          setEtapa={setEtapa}
          texto1={"Essa é uma área restrita para funcionários!"}
          texto2={"Fazer Login como funcionário"}
          cadastro={false}
        />
      );
    case 1:
      return;
    default:
      return <h1>Erro</h1>;
  }
}

export default Gerenciamento;
