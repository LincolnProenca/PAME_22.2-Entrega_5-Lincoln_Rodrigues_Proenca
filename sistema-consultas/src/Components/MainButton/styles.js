import styled from "styled-components";

export const Button = styled.button`
  border-radius: 2rem;
  border: none;
  background-color: rgb(30, 70, 125);
  height: auto;
  width: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10%;
`;

export const Img = styled.img`
  margin-top: 8%;
  height: 10vw;
  width: auto;

  @media screen and (max-width: 820px) {
    height: 10vh;
  }
`;

export const Texto = styled.div`
  padding-top: 6vh;
  color: white;
  font-size: 3vw;
  font-weight: bold;
`;
