import React, {Component} from 'react';
import Router from './Router'

import Navigation from './components/Navigation'


class App extends Component{
    render(){
        return (
            <div>
                <Navigation/>
            <div className='page-container'>
                <Router/>
            </div>
            </div>
        );
    }
}

export default App;
/*
*/