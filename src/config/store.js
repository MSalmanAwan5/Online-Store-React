import { createStore, combineReducers } from "redux";
import cartReducer from '../reducers/cartReducer'
import productsReducer from '../reducers/productsReducer'
import {loadState, saveState} from '../localStorage'


const persistedState = loadState();
const rootRedicer = combineReducers({
    cart : cartReducer,
    products:productsReducer 
})

const store =createStore(
    rootRedicer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


store.subscribe(()=>{
    saveState({
        cart: store.getState().cart,
        products: store.getState().products
    })
})


export default store;