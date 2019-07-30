import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/homepage'
import Cartpage from './pages/cartpage'
import CheckoutPage from './pages/checkoutpage';
import ProductsDetailModal from './pages/productsDetailPage'

const Router = () => (
    <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/cart' component={Cartpage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/product/detail/:id' component={ProductsDetailModal} name='detail'/>
    </Switch>
)

export default Router;