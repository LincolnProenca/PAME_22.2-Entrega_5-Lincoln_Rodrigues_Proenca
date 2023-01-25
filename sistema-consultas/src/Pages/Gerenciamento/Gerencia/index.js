import React from "react";
import CheckboxInput from "../../../Components/CheckboxInput";
import Header from "../../../Components/Header";
import { Checklist, Container, Dados, InputContainer } from "./styles";

function Gerencia() {
  const ListaEtapaAgendamento = [
    "Receber Documentos Do Paciente",
    "Verificar Ficha",
    "Fazer Ficha / Acessar Ficha",
    "Colocar a Ficha na fila",
    "Encaminhar o Paciente",
    "Receber as informações de pagamento após a consulta",
    "Validar o Pagamento",
    "Agendar a Próxima Consulta",
  ];
  return (
    <>
      <Header></Header>
      <Container>
        <Checklist>
          <h1>Checklist de atendimento</h1>
          <InputContainer>
            {ListaEtapaAgendamento.map(function (texto) {
              return <CheckboxInput texto={texto}></CheckboxInput>;
            })}
          </InputContainer>
        </Checklist>
        <Dados></Dados>
      </Container>
    </>
  );
}

export default Gerencia;
