import styled from "styled-components";

export const Button = styled.button`
  flex: 1;
  border-radius: 2rem;
  border: none;
  background-color: rgb(30, 70, 125);
  height: 100%;
  width: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc((10vw+10vh) / 2);

  &:hover {
    transition: 0.2s;
    background-color: rgb(60, 100, 155);
  }

  @media screen and (max-height: 517px) {
    padding-top: 1vh;
  }
`;

export const Img = styled.img`
  margin-top: 8%;
  min-height: 5em;
  height: 10vw;
  width: auto;

  @media screen and (max-width: 1160px) {
    flex: auto;
    height: 20vw;
  }
`;

export const Texto = styled.div`
  flex: 1;
  padding-top: 6vh;
  color: white;
  font-size: 3vw;
  font-weight: bold;
`;
