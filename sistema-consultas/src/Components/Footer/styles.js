import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 0em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding-bottom: 2em;
  background-color: rgb(54, 173, 190);
  text-align: center;
  color: white;
`;

export const TextoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
export const Texto = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 2.5em;
  font-weight: bold;
  margin: 0.5em 0em;
  @media screen and (max-width: 800px) {
    font-size: 5vw;
  }
`;

export const Container1 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Container2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
`;

export const Container22 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Container23 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
`;

export const Container3 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const Container33 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container4 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const ImgIcon = styled.img`
  padding: 0;
  height: 1.9em;
  margin: 0.1em 0.5em 0.1em 1em;
  filter: invert(100%);
  @media screen and (max-width: 800px) {
    height: 4.4vw;
  }
`;

export const ImgProfile = styled.img`
  padding: 0;
  padding-left: 10vw;
  height: 3em;
  margin: 0.1em 0.5em 0.1em 1em;
  filter: invert(100%);
  @media screen and (max-width: 800px) {
    height: 4.4vw;
    margin: 0.1em 0.5em 0.1em 0em;
  }
`;

export const Titulo = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 1.8em;
  margin: 0em 0em;
  @media screen and (max-width: 800px) {
    font-size: 3.3vw;
  }
`;

export const SubTexto = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 1.2em;
  margin: 0 0 0 0em;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 2.7vw;
  }
`;

export const Lista = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.7em;
  @media screen and (max-width: 800px) {
    padding-left: 3vw;
  }
`;
export const TextoLista = styled.li`
  text-align: center;
  font-family: "Urbanist", sans-serif;
  font-size: 1.5em;
  margin: 0em 0em;
  @media screen and (max-width: 800px) {
    font-size: 3.4vw;
  }
`;
