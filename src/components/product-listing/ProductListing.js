import React from 'react'
import ProductListItem from './ProductListItem'
import Pages from './pagination'
import { connect } from 'react-redux';
import {cartItemsWithQuantity} from '../cart.js'
import {Row,Container, Pagination, PaginationItem,PaginationLink} from 'reactstrap'
import fetchApi from '../../modules/fetch-api';
import axios from 'axios';


class ProductListing extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.fetchProducts = this.fetchProducts.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.setCurrentIndex = this.setCurrentIndex.bind(this);
        this.state={
            currentPage:1,
            pagesCount:1,
        }
    }
    setCurrentIndex(page)
    {
        sessionStorage.setItem('currentPage',page)
        this.setState({currentPage:page},()=> 
                this.fetchProducts(this.state.currentPage)
        )
    }
    handleNextClick()
    {
        this.setCurrentIndex(this.state.currentPage+1)
    }
    handlePageClick(e, i)
    {
        e.preventDefault();
        this.setCurrentIndex(i+1);
    }
    handlePreviousClick()
    {
      
        this.setCurrentIndex(this.state.currentPage-1)
    }
    fetchProducts = (currentPage)=>{
        const {loadProducts} = this.props;
        var base_url = 'https://msalman.pythonanywhere.com'

        var data = null

        try{
            data = JSON.parse(sessionStorage.getItem(`${currentPage}`))
        }
        catch(err)
        {
            
            //ignore for now
        }

        if(data===null){
            axios(`${base_url}/products/api/products/?page=${currentPage}`)
            .then(result=>{
                data = result.data
                
                if(currentPage === 1){
                    this.setState({pagesCount:Math.ceil(data.count/data.results.length)},()=>{
                    sessionStorage.setItem(`pagesCount`,this.state.pagesCount)
                    })
                }
                loadProducts(data.results)
               
                try{

                sessionStorage.setItem(`${currentPage}`,JSON.stringify(this.props.products))
                }
                catch(err)
                {
                    console.log(err)
                }
            }
            ).catch(error=>{})
        }
        else{
            loadProducts(data)
        }

        
    }
   
    
    
    componentDidMount()
    {
        const currentPage = sessionStorage.getItem('currentPage');
        const pagesCount = sessionStorage.getItem('pagesCount');
        this.setState({pagesCount:parseInt(pagesCount)},()=>{
            currentPage!==null ?
            this.setCurrentIndex(parseInt(currentPage))
            :   
            this.setCurrentIndex(1);
        })
       
    }
    render()
    {
        const {products,addToCart, removeFromCart, cart}=this.props
        return (
        <Container>
            
            <h1 id="products" className='display-2 text-center p-5 mb-3'>Products</h1>
            <Row className='m-3 p-5'>
            {products.map(product=>
                <ProductListItem 
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartItem={cart.filter(cartItem=> cartItem.id === product.id)[0]}
                />
                )}
            </Row>
            <Pages 
            currentPage={this.state.currentPage} 
            pagesCount={this.state.pagesCount || 3} 
            handlePreviousClick={this.handlePreviousClick} 
            handlePageClick={this.handlePageClick} 
            handleNextClick={this.handleNextClick}/>
        </Container>
        )
    }
}
function mapStateToProps(state){
    return{
        cart:state.cart,
        products:state.products,
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
        )
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)