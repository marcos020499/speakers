import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div `
   display: inline-block;
   justify-content: center;
   border:1px solid black;
   width: 30vw;
   padding: 1vw;
   margin: 0.3vw;
   background: linear-gradient(white, gray);
   @media screen and (max-width: 768px){
   }
`;
export const Image = styled.img `
   max-width: 20vw;
   @media screen and (max-width: 768px){
   }
`;
export const P = styled.p `
   font-size: 1vw;
   @media screen and (max-width: 768px){
   }
`;
export const H2 = styled.h2 `
  color: white;
  font-size: 3vw;
  padding-left: 9vw;
`;
export const H4 = styled.h4 `
  color: white;
  font-size: 2.5vw;
  text-decoration: none;
  &:hover {
    color: rgb(38, 235, 20);
 }
`;
export const ImageC = styled.img `
  width: 23vw;
  max-height: 23vw;
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
`;
export const LinkTitle = styled(Link) `
  color: black;
  text-decoration: none;
  font-size: 2vw;
  &:hover {
    color: rgb(38, 235, 20);
 }
`;