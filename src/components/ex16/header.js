import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <Link to="/">home</Link>
            <Link to="/products”">asd</Link>
        </div>
    )
}
