import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  display: inline-block;
  justify-content: center;
  border: 1px solid black;
  width: 29vw;
  padding: 1.7vw;
  margin: 0.3vw;
  background: linear-gradient(white, gray);
  @media screen and (max-width: 768px) {
    display: flex;
    margin: 1.5vw;
    width: 94%;
  }
`;
export const Image = styled.img`
  max-width: 20vw;
  @media screen and (max-width: 768px) {
  }
`;
export const P = styled.p`
  font-size: 1vw;
  @media screen and (max-width: 768px) {
    font-size: 3vw;
  }
`;
export const H2 = styled.h2`
  color: white;
  font-size: 3vw;
  padding-left: 9vw;
  text-decoration: gray;
  @media screen and (max-width: 768px) {
    padding-left: 2vw;
    font-size: 5vw;
  }
`;
export const H4 = styled.h4`
  color: white;
  font-size: 2.5vw;
  text-decoration: gray;
  &:hover {
    color: rgb(38, 235, 20);
  }
  @media screen and (max-width: 768px) {
    font-size: 3.6vw;
    margin: 5vw 0 0 3vw;
  }
`;
export const ImageC = styled.img`
  width: 23vw;
  max-height: 23vw;
  @media screen and (max-width: 768px) {
    width: 80%;
    max-height: 75vw;
    margin: 0 0 5vw 0;
  }
`;
export const ImageCard = styled.div`
  display: flex;
  justify-content: center;
`;
export const Linken = styled.a`
  color: white;
  text-decoration: gray;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2.5vw;
  padding: 0 3vw 3vw 0;
  @media screen and (max-width: 768px) {
    font-size: 7vw;
    display: flex;
    justify-content: flex-end;
    padding: 0 6vw 6vw 0;
  }
`;
export const LinkTitle = styled(Link)`
  color: black;
  text-decoration: gray;
  font-size: 2vw;
  &:hover {
    color: rgb(38, 235, 20);
  }
  @media screen and (max-width: 768px){
    margin: 4vw 0 0 0;
    padding: 4vw 0 0 3vw;
    font-size: 4vw;
  }
}
`;
