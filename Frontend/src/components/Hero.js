import React from 'react';
import heroShoe from '../assets/hero-shoe.png'

function Hero (props){
    return(
        <div className='h-screen w-screen bg-matte-black'>
            <h1>This is my shoe store.</h1>
            <img src={heroShoe} height={500} width={500}/>
        </div>
    )
}

export default Hero;