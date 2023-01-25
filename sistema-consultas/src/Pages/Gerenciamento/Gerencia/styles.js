import styled from "styled-components";

export const Container = styled.div`
  margin: 3em;
  width: calc(100vw - 6em);
  min-height: calc(100vh -14em);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Checklist = styled.div`
  height: 100%;
  width: 50%;
`;

export const Dados = styled.div`
  background-color: rgb(255, 0, 0);
  height: 80px;
  width: 50%;
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
