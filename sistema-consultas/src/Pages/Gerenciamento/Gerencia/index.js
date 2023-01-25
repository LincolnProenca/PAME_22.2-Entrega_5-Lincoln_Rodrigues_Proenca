import React from "react";
import CheckboxInput from "../../../Components/CheckboxInput";
import Header from "../../../Components/Header";
import {
  Checklist,
  Container,
  Dados,
  DadosContainer,
  Enviar,
  InputContainer,
  InputContainer2,
  InputInsumo,
  InputQtd,
  InputIF,
  Texto,
} from "./styles";

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
        <Dados>
          <DadosContainer>
            <h1>Entradas e Saídas</h1>
            <InputContainer2>
              <Texto>Entradas</Texto>
              <InputInsumo placeholder="Insumo"></InputInsumo>
              <InputQtd placeholder="Quantidade"></InputQtd>
              <Enviar>Enviar</Enviar>
            </InputContainer2>
            <InputContainer2>
              <Texto>Saídas</Texto>
              <InputInsumo placeholder="Insumo"></InputInsumo>
              <InputQtd placeholder="Quantidade"></InputQtd>
              <Enviar>Enviar</Enviar>
            </InputContainer2>
            <InputContainer2>
              <Texto>Consulta</Texto>
              <InputInsumo placeholder="Paciente"></InputInsumo>
              <InputIF placeholder="Início"></InputIF>
              <InputIF placeholder="Fim"></InputIF>
              <Enviar>Enviar</Enviar>
            </InputContainer2>
          </DadosContainer>
        </Dados>
      </Container>
    </>
  );
}

export default Gerencia;
