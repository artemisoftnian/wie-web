/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
require('dotenv').config()

const gatsbyConfig = {
  siteMetadata: {
    title: `Wie-Care`,
    description: `Work Initiative And Entrepreneurship`,
    author: `Waldemar Medina`,
    menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`,
      },
      {
        name: `Page 2`,
        link: `/page-2`,
        subMenu: [
          {
            name: `Sub 1`,
            link: `/sub-1`,
          },
          {
            name: `Sub 2`,
            link: `/sub-2`,
          },
        ],
      },
      {
        name: `Page 3`,
        link: `/page-3`,
      },
      
    ],    
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-NOT-SET-YET`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        purgeOnly: [`components/`, `/main.css`, `bootstrap/`, `css/`], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },    
    //{
    //  resolve: `gatsby-plugin-favicon`,
    //  options: {
    //    logo: `${__dirname}/src/images/favicon.png`,
    //  },
    //},

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Slab\:100,300,400,700`,
          `Open Sans\:300,300i,400,400i,800`,
          `Lato\:100,300,400,700,900`,
        ],
        display: 'swap'
      }
    }
 
  ],
  pathPrefix: "/"
}


/*
const contentfulConfig = {
  resolve: `gatsby-source-contentful`,
  options: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //
    // * We currently have a master environment and a development environment in contentful.
    // * The master environment is for our production environment that is used on the live app.
    // * The development environment enables the ability to develop features without
    // * interrupting the production environment. Make sure you have set this environment variable
    // * if you need to use the development environment.
    // 
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  },
}
*/

if (process.env.NODE_ENV === 'production' || process.env.DISPLAY_BLOG) {
 // gatsbyConfig.plugins.push(contentfulConfig)
}


module.exports = gatsbyConfig
