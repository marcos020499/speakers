import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerSuscribe = styled.div `
   font-size: 5vw;
   display: flex;
   justify-content: center;
   margin:5vw;
   border: 7px solid #ccff00;
   background: linear-gradient(purple, black);
   opacity: 70%;
`;
export const ButtonSuscribe = styled.button `
   font-size: 2vw;
   padding: 2vw;
   border-radius: 6px;
   display: flex;
   justify-content: center;
   border: 1px solid gray;
   &:hover {
    font-weight: bold;
    background: rgb(45, 2, 113);
    color: white;
   }
   @media screen and (max-width: 768px){
      font-size: 3vw;
   } 
`;
export const H2 = styled.h2 `
   font-size: 4vw;
   text-align: center;
   border-radius: 15px;
   margin: 2vw 19vw 2vw 19vw;
   padding: 2vw;
   color: #ccff00;
   background: linear-gradient(gray, gray)
   @media screen and (max-width: 768px){
      font-size: 5vw;
   } 
`;
export const ButtonDiv = styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 0 10vw 2 vw 0;
`;
export const Image = styled.li`
   color: #ccff00;
   &:hover {
      color: rgb(45, 2, 113);
   }
`;
export const Linken = styled(Link)`
   font-size: 2.4vw;
   padding: 2vw;
   @media screen and (max-width: 768px){
      font-size: 6vw;
      justify-content: space-between;
   }
`;
export const ImageContainer = styled.div `
   display: flex;
   justify-content: center;
   @media screen and (max-width: 768px){
      display: flex;
      justify-content: space-between;
   }
`;