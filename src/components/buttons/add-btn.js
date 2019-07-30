import React from 'react'
import {Button, Toast, ToastHeader,ToastBody} from 'reactstrap'
import { connect } from 'react-redux';
function Addbtn(props) {
    const {cart} = props;
    return(
       
        <Button size='sm' color='primary' onClick={()=>{
            props.addToCart(props.product);
            localStorage.setItem('cart',JSON.stringify(cart))
            }}>
            {props.cartItem ? `+` : `Add to cart`}</Button>

    )
    
}
function mapStateToProps(state) {
    return{
        cart:state.cart
    }
    
}

export default connect(mapStateToProps)(Addbtn);