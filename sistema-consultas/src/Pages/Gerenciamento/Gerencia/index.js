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

  function handleClick(Tipo) {
    if (Tipo === "Entrada") {
      const Insumo = document.getElementById("entradaIns").value;
      const Qtd = document.getElementById("entradaQtd").value;
      let string = `Inserida(s) ${Qtd} unidade(s) de ${Insumo}`;
      alert(string);
    } else if (Tipo === "Saida") {
      const Insumo = document.getElementById("saidaIns").value;
      const Qtd = document.getElementById("saidaQtd").value;
      let string = `Retirada(s) ${Qtd} unidade(s) de ${Insumo}`;
      alert(string);
    } else if (Tipo === "Consulta") {
      const Paciente = document.getElementById("Paciente").value;
      const Inicio = document.getElementById("Inicio").value;
      const Fim = document.getElementById("Fim").value;
      let string = `Consulta de ${Paciente} com inicio em ${Inicio} e término em ${Fim} enviada`;
      alert(string);
    }
  }

  return (
    <>
      <Header></Header>
      <Container>
        <Checklist>
          <h1>Checklist de atendimento</h1>
          <InputContainer>
            {ListaEtapaAgendamento.map(function (texto, index) {
              return <CheckboxInput key={index} texto={texto}></CheckboxInput>;
            })}
          </InputContainer>
        </Checklist>
        <Dados>
          <DadosContainer>
            <h1>Entradas e Saídas</h1>
            <InputContainer2>
              <Texto>Entradas</Texto>
              <InputInsumo id="entradaIns" placeholder="Insumo"></InputInsumo>
              <InputQtd id="entradaQtd" placeholder="Quantidade"></InputQtd>
              <Enviar onClick={() => handleClick("Entrada")}>Enviar</Enviar>
            </InputContainer2>
            <InputContainer2>
              <Texto>Saídas</Texto>
              <InputInsumo id="saidaIns" placeholder="Insumo"></InputInsumo>
              <InputQtd id="saidaQtd" placeholder="Quantidade"></InputQtd>
              <Enviar onClick={() => handleClick("Saida")}>Enviar</Enviar>
            </InputContainer2>
            <InputContainer2>
              <Texto>Consulta</Texto>
              <InputInsumo id="Paciente" placeholder="Paciente"></InputInsumo>
              <InputIF id="Inicio" placeholder="Início"></InputIF>
              <InputIF id="Fim" placeholder="Fim"></InputIF>
              <Enviar onClick={() => handleClick("Consulta")}>Enviar</Enviar>
            </InputContainer2>
          </DadosContainer>
        </Dados>
      </Container>
    </>
  );
}

export default Gerencia;
