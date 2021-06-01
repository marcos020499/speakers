import { Link } from "react-router-dom";
import styled from "styled-components";
import { Carousel } from "3d-react-carousal";
export const Container = styled.div`
  display: initial;
`;
export const Title = styled.h1`
  font-size: 4vw;
  padding: 20px 0 0 0;
  color: white;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 8vw;
    display: flex;
    justify-content: center;
    padding: 0;
  }
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  margin: 0 0 5vw 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Linken = styled(Link)`
  font-size: 2.1vw;
  font-weigth: bold;
  margin: 1.5vw 6vw 0 6vw;
  color: white;
  text-decoration: none;
  &:hover {
    color: rgb(38, 235, 20);
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    font-size: 4.3vw;
    margin-bottom: 4px;
    text-align: center;
  }
`;
export const ImageCrousel = styled.img`
  min-width: 19vw;
  min-height: 19vw;
  max-width: 19vw;
  max-height: 19vw;
  justify-content: center;
  @media screen and (max-width: 768px) {
    min-width: 54vw;
    min-height: 54vw;
    max-width: 54vw;
    max-height: 54vw;
  }
`;
export const Carous = styled.h2`
  min-width: 16vw;
  min-height: 16vw;
  max-width: 16vw;
  max-height: 16vw;
  color: white;
  background: gray;
  font-size: 1.8vw;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    min-width: 46vw;
    min-height: 46vw;
    max-width: 46vw;
    max-height: 46vw;
    font-size: 4.8vw;
  }
`;
export const Carousels = styled(Carousel)`
  padding: 3vw;
`;
