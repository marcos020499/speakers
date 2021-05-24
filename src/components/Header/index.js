import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { Container, Title, Navbar, Linken, ImgDiv, ImageBanner} from './style'
const index = () => {
   return (
      <Container>
          <Title>THE BIGGEST REACT CONFERENCE WORLDWIDE</Title>
          <Navbar>
            <Linken to='/'>HOME</Linken>
            <Linken to='/'>ABOUT US</Linken>
            <Linken to='/speakers'>SPEAKERS</Linken>
            <Linken to='/contact'>CONTACT</Linken>
            <Linken to='/' className='fa fa-user' style={{fontSize: '3vw'}}></Linken>
          </Navbar>
          <ImgDiv>
            <ImageBanner src={'https://res.cloudinary.com/marcos020499/image/upload/v1621777641/react_b5b5zs.svg'}/>
          </ImgDiv>
      </Container>
   )
};
export default index;

