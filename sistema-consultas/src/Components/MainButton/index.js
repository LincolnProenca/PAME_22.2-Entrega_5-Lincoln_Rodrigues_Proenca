import React from "react";
import { Button, Img, Texto } from "./styles";
import { useNavigate } from "react-router-dom";

function MainButton(props) {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(props.link)}>
      <Img src={props.img}></Img>
      <Texto>{props.text}</Texto>
    </Button>
  );
}

export default MainButton;
