import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Card from "../components/TOCCard";

import "./index.css";

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomepageTOC {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
          }
        }
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
          edges {
            node {
              id
              frontmatter {
                order
                path
                title
              }
            }
          }
        }
      }
    `}
    render={props => (
      <div className="index">
        <div className="BootcampHero" />

        <Card
          title="Table of Contents"
          content={props.allMarkdownRemark.edges}
        />
      </div>
    )}
  />
);

export default IndexPage;
