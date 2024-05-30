import React from 'react';
import { useState } from 'react';
import NavLinks from './NavLinks';
import Logo from './logo';
import Cart from './Cart';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar (props){
    const [isOpen, setOpen] = useState(false)

    const toggleNavbar = () =>{
        setOpen(!isOpen)
    }

    return(
        <div className='fixed top-0 w-full h-12 flex flex-row items-center justify-between px-16 pt-2'>
            <div>
            <Logo />
            </div>
            
            <div>
             <NavLinks />   
            </div>
            <div className='md:hidden'>
            <button onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} size='lg' style={{color: "#f5f7f8",}} />
            </button>
            </div>

           <div className='flex flex-row items-center justify-between gap-4'>
                <Search />
                <Cart />
            </div>
        </div>
    )
}

export default Navbar;