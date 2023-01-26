import React, { useState } from "react";
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
  ListaInsumos,
  TextoInsumos,
  InputQtd,
  InputIF,
  Texto,
  ListaInsumosCont,
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

  const Insumos = [
    { name: "Insumo1", Qtd: 15 },
    { name: "Insumo2", Qtd: 17 },
    { name: "Insumo3", Qtd: 12 },
    { name: "Insumo4", Qtd: 5 },
    { name: "Insumo5", Qtd: 35 },
    { name: "Insumo6", Qtd: 45 },
    { name: "Insumo7", Qtd: 15 },
    { name: "Insumo8", Qtd: 42 },
    { name: "Insumo9", Qtd: 21 },
    { name: "Insumo10", Qtd: 17 },
    { name: "Insumo11", Qtd: 16 },
    { name: "Insumo12", Qtd: 29 },
    { name: "Insumo13", Qtd: 6 },
    { name: "Insumo14", Qtd: 13 },
    { name: "Insumo15", Qtd: 2 },
    { name: "Insumo16", Qtd: 51 },
    { name: "Insumo17", Qtd: 32 },
    { name: "Insumo18", Qtd: 43 },
  ];

  const [InsumosState, SetInsumos] = useState(Insumos);
  const threePartIndex = Math.ceil(Insumos.length / 3);

  function handleClick(Tipo) {
    if (Tipo === "Entrada") {
      const Insumo = document.getElementById("entradaIns").value;
      const Qtd = document.getElementById("entradaQtd").value;
      SetInsumos(function (old) {
        let anterior = old;
        let index = 0;
        for (let i = 0; i < InsumosState.length; i++) {
          if (old.name === Insumo) {
            index = i;
            break;
          }
        }
        console.log(index);
        anterior[index].Qtd += parseInt(Qtd);
        console.log(anterior);
        return anterior;
      });
      console.log(InsumosState);
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
          <h1>Principais Insumos</h1>
          <DadosContainer>
            <ListaInsumosCont>
              <ListaInsumos>
                {InsumosState.map(function (texto, index) {
                  return (
                    <TextoInsumos key={index}>
                      {texto.name} : {texto.Qtd}
                    </TextoInsumos>
                  );
                })}
              </ListaInsumos>
              <ListaInsumos>
                {InsumosState.map(function (texto, index) {
                  return (
                    <TextoInsumos key={index}>
                      {texto.name} : {texto.Qtd}
                    </TextoInsumos>
                  );
                })}
              </ListaInsumos>
              <ListaInsumos>
                {InsumosState.map(function (texto, index) {
                  return (
                    <TextoInsumos key={index}>
                      {texto.name} : {texto.Qtd}
                    </TextoInsumos>
                  );
                })}
              </ListaInsumos>
            </ListaInsumosCont>
          </DadosContainer>
        </Dados>
      </Container>
    </>
  );
}

export default Gerencia;
