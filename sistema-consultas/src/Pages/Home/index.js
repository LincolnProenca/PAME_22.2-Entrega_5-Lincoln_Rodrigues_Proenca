import React from "react";
import {
  Background,
  BgContainer,
  ButtonContainer,
  Middle,
  Texto,
} from "./styles";
import Button from "../../Components/MainButton";

import img1 from "./assets/img1.svg";
import img2 from "./assets/img2.svg";

function Home() {
  return (
    <BgContainer>
      <Background></Background>
      <Middle>
        <Texto>Bem vindo ao sistema de agendamento de consultas!</Texto>
        <ButtonContainer>
          <Button img={img1} text="Agendamento" link="/agendamento"></Button>
          <Button
            img={img2}
            text="Gerenciamento"
            link="/gerenciamento"
          ></Button>
        </ButtonContainer>
      </Middle>
    </BgContainer>
  );
}

export default Home;
