import styled from 'styled-components';
export const Title = styled.h1 `
   text-align: center;
   font-size: 2vw;
`;
export const ContainerContact = styled.div `
   border: 1px solid black;
   margin: 1vw 15vw 1vw 15vw;
   padding: 0vw 3vw 0vw 3vw ;
   font-size: 1.8vw;
`;
export const Input = styled.input `
   font-size: 1.5vw;
   padding: 0.7vw 42vw 0.7vw 2vw;
   border-radius: 5px;
`;
export const InputMessage = styled.input `
   font-size: 1.5vw;
   padding: 0.7vw 42vw 10vw 2vw;
   border-radius: 5px;
`;
export const Button = styled.button `
   font-size: 2.1vw;
   background: white;
   color: gray;
   padding: 1vw;
   border:1px solid black;
   &:hover {
    background-color: purple;
    color: white;
 }
`;