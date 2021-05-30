import 'font-awesome/css/font-awesome.min.css';
import React, { useEffect, useState } from 'react';
import { Container, Title, Navbar, Linken, ImageCrousel, ImageBanner, H2, Carous, Carousels} from './style'


let slides = [
  <ImageCrousel  src="https://res.cloudinary.com/marcos020499/image/upload/v1621777641/react_b5b5zs.svg" alt="1" />,
  <Carous>More than 103300k users, more than 300 speakers in 7 lenguages.</Carous>,
  <ImageCrousel  src="https://res.cloudinary.com/marcos020499/image/upload/v1622251008/atom_ieed0i.png" alt="2" />  ,
  <Carous>The most important comunity for programmers, with support in all world.</Carous>
];

  const index = (props) => {
   return (
      <Container>
          <Title>THE BIGGEST REACT CONFERENCE WORLDWIDE</Title>
          <Navbar>
            <Linken to='/'>HOME</Linken>
            <Linken to='/about'>ABOUT US</Linken>
            <Linken to='/speakers'>SPEAKERS</Linken>
            <Linken to='/contact'>CONTACT</Linken>
          </Navbar>
          <Carousels slides={slides} autoplay={true} interval={3500}/>
      </Container>
   )
};
export default index;

