import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';

function Logo(){
    return(
        <div className='flex flex-row gap-2 items-center justify-center'>
        <span className='text-aesthetic-white text-lg sm:text-3xl font-Main font-extrabold'>Stride</span>    
        <FontAwesomeIcon icon={faShoePrints} rotation={270} size="xl" style={{color: "#f5f7f8",}} />
        </div>
    )
}

export default Logo;