import React, { Component } from 'react'
import { BrowserRouter, Route,Link } from 'react-router-dom'
import Header from './header'
import HomePage from './HomePage'
import Products from './products'
import "./style.css"
import store from './store'

export default class Container extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={HomePage} />
                        <Route path="/products" exact component={Products} />
                        {store.map((val, i) => (<Route path={`/products/${i+1}`} exact component={
                            () =>
                                <div className="card">
                                    <h2>{val.name}</h2>
                                    <h4>price: {val.price}</h4>
                                    <div>
                                        {val.images.map(imageUrl => <img alt="img" key={imageUrl} className="image" src={imageUrl}></img>)}
                                    </div>
                                    <Link to="/products"><input type="submit" value="back"/></Link>
                                </div>
                        } />
                        ))}
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
