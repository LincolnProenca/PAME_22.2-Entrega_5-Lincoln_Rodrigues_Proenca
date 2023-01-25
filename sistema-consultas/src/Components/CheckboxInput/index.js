import React from "react";
import { Container, Checkbox, Texto } from "./styles";

function CheckboxInput(props) {
  return (
    <Container>
      <Checkbox type="checkbox"></Checkbox>
      <Texto>{props.texto}</Texto>
    </Container>
  );
}

export default CheckboxInput;
