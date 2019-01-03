import React from "react"
import Link from "gatsby-link"
import Podcast from "../components/podcast" 
import '../layouts/index.scss'


export default () => (

    <div>
        <div className="logo">

        </div>
        
        <Link to="/about">about page</Link> 

        {/* <Podcast className="podcast">
            <h1>About CSS Modules</h1>
            <p>CSS Modules are cool</p>
            <p>CSS Modules are cool</p>
        </Podcast>
        
        <Podcast>
            <h1>About CSS Modules</h1>
            <p>CSS Modules are cool</p>
        </Podcast> */}

        
    </div>
)