import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const Container = styled.div `
display: initial;
`;
export const Title = styled.h1 `
font-size: 4vw;
padding: 20px 0 0 0;
color: white;
text-align: center;
@media screen and (max-width: 768px){
   font-size: 8vw;
   display: flex;
   justify-content: center;
   padding: 0;
}
`;
export const Navbar = styled.nav `
display: flex;
justify-content: center;
@media screen and (max-width: 768px){
   flex-direction: column;
}
`;
export const Linken = styled(Link) `
font-size: 2.1vw;
font-weigth: bold;
margin: 0 6vw 0 6vw;
color: white;
text-decoration: none;
&:hover {
   color: rgb(38, 235, 20);
   font-weight: bold;
}
@media screen and (max-width: 768px){
   font-size: 4.3vw;
   margin-bottom: 4px;
   text-align: center;
}
`;
export const ImgDiv = styled.div `
display: flex;
justify-content: center;
`;
export const ImageBanner = styled.img `
width: 35vw;
`;