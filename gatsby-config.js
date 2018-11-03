module.exports = {
  siteMetadata: {
    title: "Frontend Masters Bootcamp",
    subtitle: "JavaScript",
    description: "Learn JavaScript by building projects with Frontend Masters",
    keywords: ["javascript", "coding", "intro", "web development", "front end"]
  },
  pathPrefix: "/bootcamp",
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-klipse",
      options: {
        klipseSettings: {
          selector_eval_js: ".language-javascript",
          selector_eval_html: ".language-html",
          codemirror_options_in: {
            lineWrapping: true,
            lineNumbers: true
          },
          codemirror_options_out: {
            lineWrapping: true,
            lineNumbers: true
          }
        }
      }
    }
  ]
};
