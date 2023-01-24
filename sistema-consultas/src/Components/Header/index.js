import React from "react";
import { HeaderCont, Img } from "./styles";
import img from "./assets/heart.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderCont>
      <Img src={img} onClick={() => navigate("/")}></Img>
    </HeaderCont>
  );
}

export default Header;
