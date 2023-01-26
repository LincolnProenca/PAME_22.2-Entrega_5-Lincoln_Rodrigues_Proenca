import styled from "styled-components";
import { Colors } from "../../../Constants/theme";

export const Container = styled.div`
  margin: 0;
  border: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const CalendarContainer = styled.div`
  margin: 0 auto;
  border: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  width: 100%;
`;
export const TimePickerContainer = styled.div`
  margin: 1em 0 0 0;
  border: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  width: 100%;
`;

export const DataSelecionada = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 40%;
  height: 10%;
  padding: 0.7em;
  border: none;
  border-radius: 2em;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  background-color: rgb(54, 173, 190);
  color: ${Colors.dark_blue};
  cursor: pointer;
  &:hover {
    transition: 0.1s;
    background-color: rgb(94, 223, 230);
    color: ${Colors.white};
  }

  @media screen and (max-width: 750px) {
    width: 60%;
  }
  @media screen and (max-width: 300px) {
    font-size: 7vw;
  }
`;
