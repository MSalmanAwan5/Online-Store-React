import React, {Component}  from "react";
import Addbtn from '../buttons/add-btn'
import Removebtn from '../buttons/remove-btn'
import {NavLink,Link} from 'react-router-dom'
import {Spinner,Card, CardImg, CardTitle, CardText,ButtonGroup, Button, Col,Badge} from 'reactstrap'

export default class ProductListitem extends Component{
    
    render(){
    const { product, cartItem, addToCart, removeFromCart } = this.props
        
    return (
        
    <Col xs="12" sm="12" md="4" className='mb-3'>
        <Card className='p-3'>
        
        <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to={`product/detail/${product.id}`}
        >
        <CardTitle className="h2 text-center text-info">{this.props.product.title}</CardTitle>
        <CardImg
            height={200}
            width={200}
            title={this.props.product.title}
            src={this.props.product.image}
        ></CardImg>
        </NavLink>
        <CardText className="text-success">
                <span>
                {this.props.product.description}
                </span>
                <br></br>
            Price - <Badge size='lg' color='success'>Rs {this.props.product.price}</Badge> 
            </CardText>
          
        <ButtonGroup>
        <Addbtn 
            addToCart ={this.props.addToCart} 
            product={this.props.product} 
            cartItem={this.props.cartItem}
        />   
        {
            this.props.cartItem ?        
            <Button color='info' disabled>
                {this.props.cartItem.quantity}
            </Button>
            : null
        }
       { this.props.cartItem ? 
       <Removebtn
            removeFromCart ={this.props.removeFromCart} 
            cartItem={this.props.cartItem}/>        
       : null
        }
        </ButtonGroup>
       
        </Card>
    </Col>
    // </NavLink>
        
        );
    }
}