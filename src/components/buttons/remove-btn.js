import React from 'react'
import {Button} from 'reactstrap'
function Removebtn(props) {
    return(
        <Button color='secondary' onClick={()=>props.removeFromCart(props.cartItem)}>
            -
            </Button>
    )
}

export default Removebtn;