import React from "react"
import { graphql } from "gatsby"
import { LoaderQuery } from "../graphqlTypes"
import GatsbyImage, { FixedObject } from "gatsby-image"
import { oc } from "ts-optchain"

const Loader: React.FC<{ data: LoaderQuery }> = ({ data }) => (
  <div className="flex flex-col justify-center h-screen bg-gray-200">
    <div className="flex justify-center">
      <GatsbyImage
        fixed={oc(data).file.childImageSharp.fixed() as FixedObject}
      />
    </div>
  </div>
)

export const query = graphql`
  query Loader {
    file(absolutePath: { regex: "/images/loader/" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Loader
