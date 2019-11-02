
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Header = () => {
  return (
      
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}

      render={data => (
        <header>
          <h1>{data.site.siteMetadata.title}</h1>
        </header>
      )}
    />
  )
}
export default Header