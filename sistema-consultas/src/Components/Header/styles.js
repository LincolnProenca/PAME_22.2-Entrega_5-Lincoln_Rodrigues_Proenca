import styled from "styled-components";
import { Colors } from "../../Constants/theme";

export const HeaderCont = styled.div`
  width: 100vw;
  height: 8em;
  background-color: ${Colors.dark_blue};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  padding: 0.5em;
  height: 100%;
  width: auto;
  filter: brightness(0) invert(99%) sepia(3%) saturate(4560%) hue-rotate(63deg)
    brightness(103%) contrast(103%);
  cursor: pointer;
`;
