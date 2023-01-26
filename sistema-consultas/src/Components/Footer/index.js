import React from "react";
import img1 from "./assets/cartao.png";
import img2 from "./assets/list.svg";
import img3 from "./assets/medkit.png";
import img4 from "./assets/local.png";
import img5 from "./assets/Telefone.png";
import img6 from "./assets/mail.png";
import img7 from "./assets/med.png";
import img8 from "./assets/user.png";

import {
  Container1,
  Container2,
  Container22,
  Container3,
  Container33,
  Container34,
  Container4,
  FooterContainer,
  ImgIcon,
  Texto,
  SubTexto,
  TextoContainer,
  Lista,
  TextoLista,
  Titulo,
  ImgProfile,
} from "./styles";

function Footer() {
  const convenios = [
    "Unimed",
    "Sulamerica",
    "Bradesco Saúde TOP",
    "Assim Saúde",
    "Brasil Assistência",
  ];
  return (
    <FooterContainer>
      <TextoContainer>
        <Texto>Clínica Pediátrica</Texto>
      </TextoContainer>
      <Container1>
        <Container2>
          <Container3>
            <ImgIcon src={img1}></ImgIcon>
            <Titulo>Convênios</Titulo>
          </Container3>
          <Lista>
            {convenios.map(function (convenio, index) {
              return <TextoLista key={index}>{convenio}</TextoLista>;
            })}
          </Lista>
        </Container2>
        <Container22>
          <Container3>
            <ImgIcon src={img2}></ImgIcon>
            <Titulo>Informações Gerais</Titulo>
          </Container3>
          <Lista style={{ margin: "1em 0 1em -2.5em" }}>
            <Container4>
              <Container3>
                <ImgIcon src={img3}></ImgIcon>
                <TextoLista>Especialidade</TextoLista>
              </Container3>
              <SubTexto style={{ margin: "0 0 0 -3.5em" }}>Pediatria</SubTexto>
            </Container4>
            <Container4>
              <Container3>
                <ImgIcon src={img4}></ImgIcon>
                <TextoLista>Endereço</TextoLista>
              </Container3>
              <SubTexto>São Paulo (SP)</SubTexto>
            </Container4>
            <Container4>
              <Container3>
                <ImgIcon src={img5}></ImgIcon>
                <TextoLista>Telefone</TextoLista>
              </Container3>
              <SubTexto>(11)99999-9999</SubTexto>
            </Container4>
            <Container4>
              <Container34>
                <ImgIcon style={{ margin: 0 }} src={img6}></ImgIcon>
                <TextoLista>E-mail</TextoLista>
              </Container34>
              <SubTexto>pediatria@gmail.com</SubTexto>
            </Container4>
          </Lista>
        </Container22>
        <Container2>
          <Container3>
            <ImgIcon src={img7}></ImgIcon>
            <Titulo>Equipe Médica</Titulo>
          </Container3>
          <Lista style={{ gap: "2.2em" }}>
            <Container33>
              <ImgProfile src={img8}></ImgProfile>
              <Titulo>Dr. 1</Titulo>
            </Container33>
            <Container33>
              <ImgProfile src={img8}></ImgProfile>
              <Titulo>Dra. 2</Titulo>
            </Container33>
            <Container33>
              <ImgProfile src={img8}></ImgProfile>
              <Titulo>Dr. 3</Titulo>
            </Container33>
          </Lista>
        </Container2>
      </Container1>
    </FooterContainer>
  );
}

export default Footer;
