import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        headerImg: file(relativePath: { eq: "header-image.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return (
        <div>
            <h1>All content is pulled in using a layout component.</h1>
            <Img fluid={data.headerImg.childImageSharp.fluid} />
        </div>
    )
}
export default Header