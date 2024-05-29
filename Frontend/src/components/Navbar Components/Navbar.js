import React from 'react';
import Navigation from './Navigation';
import Logo from './logo';
import Cart from './Cart';
import Search from './Search';



function Navbar (props){
    return(
        <div className='fixed top-0 w-full h-12 flex flex-row items-center justify-between px-16 pt-2'>
            <Logo />
            <Navigation />
            <div className='flex flex-row items-center justify-between gap-4'>
                <Search />
                <Cart />
            </div>
        </div>
    )
}

export default Navbar;