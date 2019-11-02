module.exports = {
  siteMetadata: {
    title: 'Title from config',
    description: 'description from config'
  },

  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-transformer-remark',
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
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      },
    }
  ]
  
}
