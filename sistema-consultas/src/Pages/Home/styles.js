import styled from "styled-components";
import img from "./assets/med.webp";
import { Colors } from "../../Constants/theme";

export const BgContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: min(100vh);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  position: absolute;
  z-index: -100;
  width: 100%;
  height: 100%;
  background: url(${img});
  background-position: center;
  background-blend-mode: multiply;
  background-size: cover;
  filter: blur(4px);
  transform: scale(1.02);
`;

export const Middle = styled.div`
  width: 70%;
  height: 75%;
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  padding: 4em;
`;

export const Texto = styled.div`
  width: 100%;
  font-size: 3.3em;
  text-align: center;
  margin-bottom: 1em;

  @media screen and (max-width: 800px) {
    font-size: max(3.3vw, 40px);
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 3vw;
  align-items: center;
  justify-content: center;
`;
