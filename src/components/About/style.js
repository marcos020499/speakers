import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerAbout = styled.div `
   display: flex;
   justify-content: center;
   flex-direction: column;
   @media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;
export const P = styled.p `
   font-size: 2vw;
   color: white;
   text-align: center;
   margin: 0 3vw 1.2vw 3vw;
   @media screen and (max-width: 768px){
    font-size: 3.7vw;
  }
`;
export const H2 = styled.h2 `
  color: white;
  font-size: 3vw;
  text-align: center;
  @media screen and (max-width: 768px){
    padding-left: 2vw;
    font-size: 5vw;
  }
`;
export const H4 = styled.h4 `
  color: white;
  font-size: 2.5vw;
  text-decoration: none;
  &:hover {
    color: rgb(38, 235, 20);
 }
 @media screen and (max-width: 768px){
  font-size: 3.6vw;
  margin: 5vw 0 0 3vw;
}
`;
export const ImageC = styled.img `
  width: 25vw;
  max-height: 23vw;
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px){
    width: 50%;
  }
`;
export const ImageContain = styled.div `
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;
export const ImageCard = styled.div `
  display: flex;
  justify-content: center;
`;
export const Linken = styled.a `
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px){
    font-size: 7vw;
    display: flex;
    justify-content: flex-end;
    padding: 0 6vw 6vw 0;
  }
`;
export const LinkTitle = styled(Link) `
  color: black;
  text-decoration: none;
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