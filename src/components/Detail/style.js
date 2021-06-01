import styled from "styled-components";
import { Link } from "react-router-dom";
export const ContainerDetails = styled.div``;
export const ImageDetails = styled.img`
  max-width: 35vw;
  max-height: 35vw;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5vw;
`;
export const H3 = styled.h3`
  font-size: 1.8vw;
  color: white;
  margin: 1vw 8vw 0 8vw;
  @media screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;
export const Linken = styled.a`
  font-size: 1.3vw;
  color: rgb(38, 235, 20);
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
export const Small = styled.small`
  font-size: 1.4vw;
  color: rgb(38, 235, 20);
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
