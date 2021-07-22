import React from 'react';
import Web from '../src/images/1.png';
import Comman from './Comman';

const Home = () =>{
    return(
        <>
        <Comman name="Grow your businness with" 
        imgsrc={Web}
         visit="/service" 
        btname="Get start"/>
        </>
    );
};
export default Home;