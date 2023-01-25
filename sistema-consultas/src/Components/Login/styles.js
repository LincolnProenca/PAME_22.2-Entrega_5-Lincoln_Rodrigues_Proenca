import styled from "styled-components";
import { Colors } from "../../Constants/theme";

export const Pcursor = styled.p`
  cursor: pointer;
  color: hsl(230, 100%, 12%);
`;

export const Cont = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  margin: 5em;
  height: 60vh;
  width: 80%;
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 820px) {
    height: 100%;
    margin: 5vw;
  }
`;

export const Login2Cont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: ${(props) => (props.cadastro ? "100vw" : "80vw")};
  }
`;

export const CadastroCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5em;
  background-color: rgb(245, 245, 245);
  flex: 1;
  align-items: flex-start;
  margin-left: 0.8em;
  margin-right: 0.8em;
  @media screen and (max-width: 820px) {
    padding: 10vw;
  }
`;

export const EntrarCont = styled.div`
  height: 42%;
  background-color: hsl(233, 100%, 98%);
  flex: 1;
  padding: 5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.8em;
  margin-right: 0.8em;
  @media screen and (max-width: 820px) {
    padding: 10vw;
  }
`;

export const Texto = styled.h1`
  color: ${Colors.dark_blue};
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const Input = styled.input`
  margin: 0.2em;
  height: 1.8em;
  width: 100%;
  padding: 0.2em;
  border-radius: 0;
  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-color: ${Colors.dark_blue};
  &::placeholder {
    color: ${Colors.dark_blue};
  }
`;

export const Button = styled.button`
  margin: 1em 0em;
  padding: 1em 3em;
  border-radius: 0;
  background-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(66, 66, 66);
  color: rgb(66, 66, 66);
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.06em;
  transition: 0.2s;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  &:hover {
    background-color: #bfc9ff;
    color: white;
    border-color: #bfc9ff;
  }

  @media screen and (max-width: 820px) {
    width: 70%;
  }
`;
