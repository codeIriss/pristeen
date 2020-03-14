require('dotenv').config({
  path:`.env.development`,
})

module.exports = {
  siteMetadata: {
    title: `LearnCodeOnline Youtube project`,
    description: `amazing awesome youtube people`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
       
      },
      
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'qgkwgrbn4rdb',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: '6xlAwFCzLAGJL31mONxVClJtMKCOZUNY0BLNLvyeKAQ',
      },
    },
    {
			resolve: "gatsby-plugin-snipcart",
			options: {
        apiKey: 'OTI5M2E5OGItMGViNy00YzljLWI1NTUtZGY5MTk5ODAxNzc2NjM3MTk2MTM1NTM3NTE2MTc4',
        autopop: true,
			},
		},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
