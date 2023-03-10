import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Checkbox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 2em;
  height: 2em;
  border: 2px solid #222;
  border-radius: 5px;
  cursor: pointer;
  &:checked {
    text-align: center;
    background: hsl(222, 100%, 65%);
    border-color: hsl(222, 100%, 65%);
  }
  &:checked::after {
    content: "✓";
    color: white;
    font-size: 1.8em;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const Texto = styled.p`
  margin-left: 0.5rem;
  font-size: 1em;
`;
