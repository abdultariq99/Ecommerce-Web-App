import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search(){
    return(
        <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' style={{color: "#f5f7f8",}}>
        <p className='text-aesthetic-white'>Search</p>
        </FontAwesomeIcon>
    )
}

export default Search;