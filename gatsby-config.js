module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}