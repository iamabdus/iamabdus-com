module.exports = {
  siteMetadata: {
    title: 'I am Abdus',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'I am Abdus',
        short_name: 'iamabdus',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mfjs8tchxh1g`,
        accessToken: `0c428a3f436ad539c6edfc286f853a2aa5391714974c8c24f5b31695899460ee`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
