import React, {Component}  from "react";
import Addbtn from '../components/buttons/add-btn'
import Removebtn from '../components/buttons/remove-btn'
import {NavLink} from 'react-router-dom'
import {CardHeader,CardBody,Container, Row, Spinner,Card, CardImg, CardTitle, CardText,ButtonGroup, Button, Col,Badge, Modal} from 'reactstrap'
import axios from 'axios'
import {connect} from 'react-redux'


class ProductsDetailsModal extends Component{

    constructor(props) {
        super(props);
    }
    
    
   
    render(){
        const {product, cart, addToCart, removeFromCart, removeAllFromCart} = this.props
        const cartItem = cart.filter((cartItem)=>cartItem.id === product.id)[0]
        
        return (
            <Container>
                <Row>
                    <Col sm='6'>
                        <img height={350} widht={350} src ={product.image}/>
                    </Col>
                <Col sm='6'>
                    <Card body outline inverse color='success' className='p-3'>
                            <CardTitle className="h2 text-center text-info">{product.title}</CardTitle>
                                
                            <CardText className="text-success">
                                    <span>
                                    {product.description}
                                    </span>
                                    <br></br>
                                Price - <Badge size='lg' color='success'>Rs {product.price}</Badge> 
                                
                                </CardText>
                            
                                <ButtonGroup>
                                <Addbtn 
                                addToCart ={addToCart} 
                                product={product} 
                                cartItem={cartItem}
                                />   
                                {
                                    cartItem ?        
                                    <Button color='info' disabled>
                                        {cartItem.quantity}
                                    </Button>
                                    : null
                                }
                                { cartItem ? 
                                <Removebtn
                                        removeFromCart ={removeFromCart} 
                                        cartItem={cartItem}/>        
                                : null
                                    }
                                </ButtonGroup>
                        </Card>
                        
                        {cartItem ?
                        <Card style={{marginTop:20}}>
            
                                <ButtonGroup>
                                <NavLink className="float-left" to='/cart'>
                                    <Button color='success'>
                                        Go to Cart
                                    </Button>
                                </NavLink>
                                <Button color='danger'onClick={()=>removeAllFromCart(cartItem)}>Remove all from cart</Button>
                                <NavLink className="float-right" to='/checkout'>
                                    <Button color='success'>
                                        Chekcout
                                    </Button>
                                </NavLink>
                                </ButtonGroup>
                           
                        </Card>
                        
                            
                         
                            : null}
                </Col>
                </Row>
            </Container>
        )
    }
}


function mapStateToProps(state, ownProps){
    console.log("id",ownProps.match.params.id)
    console.log("products",state.products)
    const product = state.products.filter((prod) => prod.id.toString() === `${ownProps.match.params.id}`)[0]
    console.log("product",product)
    // console.log(typeof(ownProps.match.params.id))
    return{
        cart:state.cart,
        product
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: (products)=>{
            dispatch({type:'LOAD', payload:products})
        },
        addToCart: (item)=>(
        dispatch ({type:'ADD', payload:item}

        )
        ),
        removeFromCart:(item)=>(
            dispatch({type:'REMOVE',payload:item})
        ),
        removeAllFromCart:(item)=>(
            dispatch({type:'REMOVE_ALL',payload:item})
        ),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsDetailsModal)