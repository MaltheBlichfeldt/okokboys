module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-spotify",
            options: {
              width: 800, // default is "100%"
              height: 600 // default is 400
            }
          }
        ]
      }
    }  
    
  ]
}
