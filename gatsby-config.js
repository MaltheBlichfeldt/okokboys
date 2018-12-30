module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-embed-spotify"]
      }
    }
    
  ]
}
