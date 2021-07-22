import React from 'react';
import Web from '../src/images/ABOUT.jpg';
import Comman from './Comman';

const About = () =>{
    return(
        <> 
       <Comman name="This is information of" 
        imgsrc={Web}
         visit="/contact" 
        btname="contact now"/>
        </>
    );
};
export default About;