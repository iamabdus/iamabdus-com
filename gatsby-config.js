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
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'YOUR SITE URL',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: 'CLIENT SECRET',
          wpcom_app_clientId: 'CLIENT ID',
          wpcom_user: 'USERNAME',
          wpcom_pass: 'PASSWORD',
        },
        verboseOutput: false,
      },
    },
    'gatsby-plugin-offline',
  ],
}
