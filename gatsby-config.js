module.exports = {

plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/path/to/markdown/files`,
      name: "markdown-pages",
    },
  },
  `gatsby-plugin-netlify-cms`,
  `gatsby-transformer-remark`,
]
}