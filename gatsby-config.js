module.exports = {
  siteMetadata: {
    title: 'Title from config',
    description: 'description from config'
  },

  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cache',

    {
      resolve: "gatsby-remark-embed-spotify",
      options: {
        width: 800, // default is "100%"
        height: 600 // default is 400
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      }
    },
  ]
  
}

