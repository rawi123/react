import React, { Component } from 'react'
import { BrowserRouter,Route,Link } from 'react-router-dom'
import Header from './header'
import HomePage from './HomePage'
import Products from './products'
import "./style.css"
export default class Container extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/products”" exact component={Products}/>
                        <Route path="/" component={Header}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
