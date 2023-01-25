/* A ideia aqui é fazer um calendário que a pessoa consiga escolher entre os dias disponíveis qual ela quer marcar a consulta */

import React from "react";
import Header from "../../../Components/Header";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

import {
  Button,
  CalendarContainer,
  Container,
  DataSelecionada,
  TimePickerContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

function SelecaoDia() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("12:00");
  console.log(time);

  /* Traduzindo data */
  const dictDia = {
    Mon: "Seg",
    Tue: "Ter",
    Wed: "Qua",
    Thu: "Qui",
    Fri: "Sex",
    Sat: "Sáb",
    Sun: "Dom",
  };

  const dictMes = {
    Jan: "Jan",
    Feb: "Fev",
    Mar: "Mar",
    Apr: "Abr",
    May: "Maio",
    Jun: "Jun",
    Jul: "Jul",
    Aug: "Ago",
    Sep: "Set",
    Oct: "Out",
    Nov: "Nov",
    Dec: "Dez",
  };

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
          <Calendar onChange={setDate} value={date} selectRange={false} />
        </CalendarContainer>
        <TimePickerContainer>
          <TimePicker
            style={{ transform: "scale(1.5)" }}
            placeholder="Selecione a Hora"
            format="HH:mm"
            use12Hours={false}
            focusOnOpen={true}
            showSecond={false}
            onChange={(e) => setTime(e.format("HH:mm"))}
          />
        </TimePickerContainer>

        <DataSelecionada>
          Data selecionada:{" "}
          {date
            .toDateString()
            .split(" ")
            .map(function (str) {
              if (dictDia[str]) {
                return dictDia[str];
              } else if (dictMes[str]) {
                return dictMes[str];
              } else {
                return str;
              }
            })
            .join(" ")}
          {" | "}
          {time}
        </DataSelecionada>
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
