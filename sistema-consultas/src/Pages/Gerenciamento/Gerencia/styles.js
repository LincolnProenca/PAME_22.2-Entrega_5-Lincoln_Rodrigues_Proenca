import styled from "styled-components";

export const Container = styled.div`
  margin: 3em;
  width: calc(100vw - 6em);
  min-height: calc(100vh -14em);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1065px) {
    flex-direction: column;
  }
`;

export const Checklist = styled.div`
  height: 100%;
  width: 50%;
  background-color: hsl(222, 100%, 95%);
  margin: 2.5em;
  padding: 2.5em;
  @media screen and (max-width: 1065px) {
    width: 90%;
    margin-bottom: 0.5em;
  }
  @media screen and (max-width: 730px) {
    margin: 0.5em;
  }
`;

export const Dados = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: hsl(255, 100%, 97%);
  margin: 2.5em;
  padding: 2.5em;
  @media screen and (max-width: 1065px) {
    width: 90%;
    margin-top: 0.5em;
  }
  @media screen and (max-width: 730px) {
    margin: 0.5em;
  }
`;

export const InputContainer = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled.input`
  font-size: 1em;
`;

export const DadosContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const InputContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.8em;
`;

export const InputInsumo = styled.input`
  border: 2px solid #333;
  margin-left: 1em;
  width: 80%;
  height: 1.7em;
`;
export const InputQtd = styled.input`
  margin-left: 0.5em;
  width: 80px;
  height: 1.7em;
  @media screen and (max-width: 730px) {
    width: 80%;
  }
`;

export const InputIF = styled.input`
  margin-left: 0.5em;
  width: 32px;
  height: 1.7em;
  @media screen and (max-width: 730px) {
    width: 80%;
  }
`;

export const Enviar = styled.button`
  margin-left: 1em;
  background-color: transparent;
  height: 2.18em;
  width: auto;
  border: 2px solid #333;
  font-weight: bold;
  &:hover {
    color: #fff;
    background-color: hsl(230, 100%, 75%);
    border-color: hsl(230, 100%, 75%);
  }
  @media screen and (max-width: 730px) {
    width: 80%;
  }
`;

export const Texto = styled.div`
  margin-left: 1em;
  width: 7em;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 730px) {
    width: 80%;
    font-size: 3.2vw;
  }
`;

export const ListaInsumosCont = styled.div`
  margin-left: 1em;
  display: flex;
  align-items: space-between;
  justify-content: center;
`;

export const ListaInsumos = styled.div`
  height: 100%;
  margin-left: 1em;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 0.5em;
`;

export const TextoInsumos = styled.div`
  margin-left: 1em;
  width: 7em;
  font-size: 1.2em;

  @media screen and (max-width: 730px) {
    width: 80%;
    font-size: 3.2vw;
  }
`;
