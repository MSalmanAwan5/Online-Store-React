import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux'
import Components from './cart'
class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:null,
      password:null,
      address:null,
      address2:null,
      city:null,
      state:null,
      zip:null,
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(event)
  {
    this.setState({[event.target.name]:event.target.value},()=>console.log("form state",this.state))
    
  }
  render() {
    return (
      <div>
        <Row>
      <Col sm='6'>
      <Form>
        
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input onBlur = {(e)=>this.onChange(e)} type="email" name="email" id="email" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input onBlur = {(e)=>this.onChange(e)} type="password" name="password" id="password" placeholder="password placeholder" />
            </FormGroup>
          </Col>
        </Row>
        
        <Row>
          <Col md='6'>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input onBlur = {(e)=>this.onChange(e)} type="text" name="address" id="address" placeholder="1234 Main St"/>
            </FormGroup>
            </Col>
            <Col md='6'>
            <FormGroup>
              <Label for="address2">Address 2</Label>
              <Input onBlur = {(e)=>this.onChange(e)} type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input onBlur = {(e)=>this.onChange(e)} type="text" name="city" id="city"/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="state">State</Label>
              <Input onBlur = {(e)=>this.onChange(e)} type="text" name="state" id="state"/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="zip">Zip</Label>
              <Input onBlur = {(e)=>this.onChange(e)} type="text" name="zip" id="zip"/>
            </FormGroup>  
          </Col>
          </Row>
        <Row>
          <Col md='12'>
            <FormGroup check>
            <Input onChange = {(e)=>this.onChange(e)} type="checkbox" name="check" id="check"/>
            <Label for="check" check>Check me out</Label>
            </FormGroup>
            <Button>Sign in</Button>
          </Col>
        </Row>
     
      </Form>
      </Col>
      <Col sm='6'>
        <h1>Manage your order</h1>
        <Components.Cart/> 
        </Col>
        </Row>
      </div>
    );
  }
}
function mapStateToProps(state)
{
    return {
        cart: state.cart,
    }
}
function mapDispathToProps(item){
    return{
        
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Checkout);