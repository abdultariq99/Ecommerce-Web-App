import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Cart(){
    return(
        <FontAwesomeIcon icon={faCartShopping} size='lg' style={{color: "#f5f7f8",}}>
        </FontAwesomeIcon>
    )
}

export default Cart;