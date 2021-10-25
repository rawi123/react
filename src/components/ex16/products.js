import React from 'react'
import { Link } from 'react-router-dom';
import Store from './store'


export default function Products() {
    return (
        <div className="home">
            {Store.map((val, i) => (
                <div key={i} className="card">
                    <Link to={`/product/${i + 1}`}>{val.name}</Link>
                </div>
            ))}
        </div>
    )
}
