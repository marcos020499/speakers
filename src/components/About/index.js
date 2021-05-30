import React, { useEffect, useState } from 'react';
import  firebase  from '../firebase/firebase';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { ImageContain, ContainerAbout, P, H2, H4, ImageC, ImageCard, LinkTitle,  Linken, Image } from './style'

const About = () => {

    return (
      <ContainerAbout>
        <ImageContain>
          <ImageC src={'https://res.cloudinary.com/marcos020499/image/upload/v1622417151/images_nnprgl.jpg'}/>
        </ImageContain>
        <H2>The Event</H2>
        <P>React Summit is an annual conference on all things React, gathering thousands of Front-end and Full-stack engineers from around the world. Our stage regularly hosts the stars of the community as well as emerging leaders working on the next big thing in React.</P>
        <P>Originally exclusively in-person, React Summit now offers a hybrid format with both remote and in-person participation.</P>
        <P>We are currently figuring out the dates of the future event in order to ensure a safe and healthy environment for our community. Stay tuned!</P>
      </ContainerAbout>
    );
  }
export default About;


