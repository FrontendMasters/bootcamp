import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

import "bootstrap/dist/css/bootstrap.css";
import "prismjs/themes/prism-solarizedlight.css";
import "code-mirror-themes/themes/monokai.css";
import "./index.css";

const TemplateWrapper = props => (
  <StaticQuery
    render={data => (
      <div id="pgBackground">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description
            },
            {
              name: "keywords",
              content: data.site.siteMetadata.keywords.join(", ")
            }
          ]}
        />
        <div className="navbar navbar-light transparent">
          <Link to="/" className="navbar-brand">
            <span className="logo">
              <img
                alt="Frontend Masters logo"
                src="https://frontendmasters.github.io/bootcamp/layout/fm-vector-optimized.svg"
              />
            </span>
            <h2>BootCamp</h2>
          </Link>
        </div>
        <div className="main">{props.children}</div>
        <div id="pageBGFooter" />
      </div>
    )}
    query={graphql`
      {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
          }
        }
      }
    `}
  />
);

export default TemplateWrapper;
