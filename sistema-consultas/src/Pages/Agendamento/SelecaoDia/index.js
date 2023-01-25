/* A ideia aqui é fazer um calendário que a pessoa consiga escolher entre os dias disponíveis qual ela quer marcar a consulta */

import React from "react";
import Header from "../../../Components/Header";
import { useState } from "react";
import Calendar from "react-calendar";
import "../../../../node_modules/react-calendar/dist/Calendar.css";
import {
  Button,
  CalendarContainer,
  Container,
  DataSelecionada,
} from "./styles";
import { useNavigate } from "react-router-dom";

function SelecaoDia() {
  const navigate = useNavigate();
  const [date, setDate] = useState([new Date(), new Date()]);
  console.log(date);
  console.log(date[0].value);
  console.log(date[1].toDateString());
  console.log(date[0].toDateString() === date[1].toDateString());

  function handleClick() {
    alert("Enviado!");
  }

  return (
    <>
      <Header></Header>
      <Container>
        <h1 className="text-center">
          Escolha o dia que deseja agendar a consulta
        </h1>
        <CalendarContainer>
          <Calendar onChange={setDate} value={date} selectRange={true} />
        </CalendarContainer>
        {date[0].toDateString() !== date[1].toDateString() ? (
          <>
            <DataSelecionada>
              De: {date[0].toDateString()}
              &nbsp;|&nbsp; Até: {date[1].toDateString()}
            </DataSelecionada>
          </>
        ) : (
          <>
            <DataSelecionada>
              Data selecionada: {date[0].toDateString()}
            </DataSelecionada>
          </>
        )}

        <Button
          onClick={() => {
            handleClick();
            navigate("/");
          }}
        >
          Enviar requisição
        </Button>
      </Container>
    </>
  );
}

export default SelecaoDia;
