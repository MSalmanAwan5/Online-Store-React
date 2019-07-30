import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, ButtonGroup, Button} from 'reactstrap'
import Addbtn from './buttons/add-btn'
import Removebtn from './buttons/remove-btn'
import {NavLink} from 'react-router-dom'
import {Alert,Badge} from 'reactstrap'
function totalQuantity(props) {
    var count = 0;
    props.cart.map(items=>count=count+items.quantity)
    return count;
}

class Cart extends Component{
    constructor(props) {
        super(props);
        this.state = {
        total:0,
        }
    }
    
    render(){
        const sort = (items) =>{
            return items.sort((a, b)=>a.id-b.id)     
     }
        return (
            this.props.cart.length === 0 ? 
            <Alert color='primary'><h1 className='display-4 text-center'>Your cart is empty. Continue Shopping!</h1></Alert>
            :
        <div>
            <Table bordered hover>
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </thead>
                <tbody>
                   { sort(this.props.cart).map((item,index) =>(
                    <tr>
                        <th key={item.id} scope='row'>{index+1}</th>
                        
                        <td>
                           
                            <NavLink to={`product/detail/${item.id}`}>
                              
                                    <img style={{padding:'5px',float:'left'}}width={32} height={32} src={item.image}></img>
                                    <span style={{fontWeight:"bold"}}>{item.title}</span>
                                    <Badge style={{float:'right'}} pill>{item.quantity}</Badge>
                               
                                
                            </NavLink>
                        </td>
                        
                        <td>
                        <ButtonGroup>
                        <Button color='info' disabled>{item.quantity}</Button>
                        <Addbtn
                            addToCart ={this.props.addToCart} 
                            product={item} 
                            cartItem={item} />
                        
                        <Removebtn
                            removeFromCart={this.props.removeFromCart}
                            cartItem={item}
                        />
                        <Button 
                            className='left'
                            color='danger'
                            onClick={()=>this.props.removeAllFromCart(item)}>
                            Remove all
                        </Button>
                        </ButtonGroup>
                        </td>
                        <td>{item.price}</td>
                    </tr>
                   
                    ))
                }
                </tbody>
            </Table>
            <h3><Badge size='lg' color='info' className='float-right'>Total - Rs {
                this.props.cart.reduce((acc, curr)=> (acc += parseFloat(curr.price*curr.quantity)),0)
            }</Badge></h3>
            <br></br>
            <div className="clearfix m-2">
            <Button className='float-left' onClick={()=>this.props.clearCart()} color='danger'>Clear Cart</Button>
            
            <NavLink className='float-right' to='/checkout'><Button color='success'>Checkout</Button></NavLink>
            </div>
        </div>
        )
    }
}




function mapStateToProps(state){
    return{
        cart:state.cart
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item)=>{
        dispatch ({type:'ADD', payload:item})
        
        }
        ,
        removeFromCart:(item)=>(
            dispatch({type:'REMOVE',payload:item})
        ),
        removeAllFromCart:(item)=>(
            dispatch({type:'REMOVE_ALL',payload:item})
        ),
        clearCart:(item)=>(
            dispatch({type:'CLEAR_CART',payload:item})
        )
        
    }
}

export default {
    Cart: connect(mapStateToProps,mapDispatchToProps)(Cart),
    TotalQuantity: connect(mapStateToProps)(totalQuantity)
  }