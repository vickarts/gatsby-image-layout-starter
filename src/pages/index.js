import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"


export default props => {
    return (
        <Layout>
            <Img fluid={props.data.indexImg.childImageSharp.fluid} />
        </Layout>
    )
}

export const query = graphql`
  query {
    indexImg: file(relativePath: { eq: "index-image.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`