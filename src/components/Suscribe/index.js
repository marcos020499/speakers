import React, { useEffect, useState } from 'react';
import  firebase  from '../firebase/firebase';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { H2, ContainerSuscribe, ButtonSuscribe, Image, Linken, ButtonDiv, ImageContainer} from './style'

const useItems = (props) => {
  const {initialMinute = 30,initialSeconds = 49} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });
    return (
      <ContainerSuscribe>
        <Link to='/contact'>
          { minutes === 0 && seconds === 0
            ? null
            : <H2>Will Start Soon {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</H2> 
          }
          <ImageContainer>
            <Linken href="/"><Image className='fa fa-youtube'></Image></Linken> 
            <Linken href="/"><Image className='fa fa-google'></Image></Linken>
            <Linken href="/"><Image className='fa fa-twitter'></Image></Linken> 
            <Linken href="/"><Image className='fa fa-twicht'></Image></Linken>
          </ImageContainer>
          <ButtonDiv>
            <ButtonSuscribe>Suscribe now!!</ButtonSuscribe>
          </ButtonDiv>
        </Link>
      </ContainerSuscribe>
    );
  }
export default useItems;


