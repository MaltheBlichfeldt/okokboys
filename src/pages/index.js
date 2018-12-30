import React from "react"
import Link from "gatsby-link"
import Podcast from "../components/podcast" 
import '../layouts/index.scss'

export default () => (

    <div 
    style={{
    background: 'blue',
    textAlign: 'center',
    fontSize: '40px',
    }}>
        <h1>forside</h1>
        <Link to="/about">about page</Link> 

    <Podcast>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
    </Podcast>
    <Podcast>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
    </Podcast>

        
    </div>
)