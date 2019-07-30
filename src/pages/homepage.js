import React from 'react'
import ProductListing from '../components/product-listing/ProductListing'
// import data from '../data/products.json' 
import ProductsCarousel from '../components/ProductsCarousel'

export default function Homepage(props){
    return <div>
        
        <ProductsCarousel/>
        <ProductListing />
    </div>
}