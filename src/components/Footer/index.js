import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
const index = () => {
   return (
      <>
         <ContainerFooter>
            <Section>
               <Titles>About Us</Titles>
               <P>Curabitur non nulla sit amet nislinit tempus convallis quis ac lectus. lac inia eget consectetur sed, convallis at tellus. Nulla porttitor accumsana tincidunt.</P> 
            </Section>
            <Section>
               <Titles>Contact Us</Titles>  
               <ImageContainer>
                  <A href="/"><Image className='fa fa-facebook'></Image></A> 
                  <A href="/"><Image className='fa fa-google'></Image></A>
                  <A href="/"><Image className='fa fa-instagram'></Image></A>
                  <A href="/"><Image className='fa fa-linkedin'></Image></A>
               </ImageContainer>
            </Section>
            <Section>
               <Titles>Get in touch</Titles> 
               <H3 >Location :</H3>
               <H3 >0926k 4th block building, king Avenue, New York City.</H3>
               <H3 >Contact :</H3>
               <H3 >Phone : +121 098 8907 9987</H3>
               <H3 >Email : info@example.com</H3>
            </Section>
         </ContainerFooter>
         <Right>© 2021 Marcos shoes. All Rights Reserved | Design by Marcos Manzo Torres</Right>
      </>
   )
}
export default index;
const ContainerFooter = styled.div `
   display: flex;
   @media screen and (max-width: 768px){
      display: inline-block;
   }
`;
const Section = styled.div `
   margin: 2vw;
   width: 30%;
   @media screen and (max-width: 768px){
      margin: 6vw;
   }
`;
const Titles = styled.h2 `
   color: white;
   font-size: 3vw;
   @media screen and (max-width: 768px){
      font-size: 6vw;
      display: flex;
      justify-content: center;
   }
`;
const H3 = styled.h3 `
   color: white;
   font-size: 1.8vw;
   @media screen and (max-width: 768px){
      font-size: 4vw;
      display: flex;
      justify-content: center;
   }
`;
const P = styled.p `
   color: white;
   font-size: 1.6vw;
   @media screen and (max-width: 768px){
      font-size: 4vw;
      display: flex;
      justify-content: center;
      text-align: justify;
   }
`;
const Image = styled.li`
   margin: 0 5vw 0 0;
   color: white;
   &:hover {
      color: rgb(45, 2, 113);
   }
`;
const A = styled(Link)`
   font-size: 2.4vw;
   @media screen and (max-width: 768px){
      font-size: 6vw;
      justify-content: space-between;
   }
`;
const Right = styled.h4 `
   font-size: 2vw;
   display: flex;
   justify-content: center;
   @media screen and (max-width: 768px){
      font-size: 4vw;
      text-align: center;
      padding-bottom: 10px;
   }
`;
const ImageContainer = styled.div `
   @media screen and (max-width: 768px){
      display: flex;
      justify-content: space-between;
   }
`;