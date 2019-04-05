import React from 'react'
import Link from "gatsby-link"

const Menu = () => (
    <div className="MenuWrapper">
        <div className="menu">
            <Link to="/about" className="menuItem">about page</Link> 
            <Link to="/about" className="menuItem">about page</Link> 
            <Link to="/about" className="menuItem">about page</Link> 
        </div>
    </div>
)

export default Menu
