module.exports = {
  siteMetadata: {
    title: `Notetaking`,
    description: `Take notes that matter`,
    author: `@lee1409`,
    siteUrl: `https://mlnotataking.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
          apiUrl: `https://admin.mlnotetaking.com`,
          contentApiKey: `658c906de3496ccc0907d157c5`,
          version: `v3` // Ghost API version, optional, defaults to "v3".
                        // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      }
   },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif', 'Roboto']
        }
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        // 1 query for each data type
        query: `
            {
                allGhostPost {
                    edges {
                        node {
                            id
                            slug
                            updated_at
                            feature_image
                        }
                    }
                }
            }`,
        mapping: {
          // Each data type can be mapped to a predefined sitemap
          // Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
          // The default sitemap - if none is passed - will be pages
          allGhostPost: {
            sitemap: `posts`,
          },
        },
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
          `/my-excluded-page`,
          /(\/)?hash-\S*/, // you can also pass valid RegExp to exclude internal tags for example
        ],
        createLinkInHead: true, // optional: create a link in the `<head>` of your site
        addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
        additionalSitemaps: [ // optional: add additional sitemaps, which are e. g. generated somewhere else, but need to be indexed for this domain
          {
            url: `https://mlnotetaking.com/sitemap.xml`,
          },
        ],
      }
    }
  ],
}
