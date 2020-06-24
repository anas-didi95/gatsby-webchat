import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { LoaderQuery } from "../graphqlTypes"
import GatsbyImage, { FixedObject } from "gatsby-image"
import { oc } from "ts-optchain"

const Loader: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query Loader {
      file(absolutePath: { regex: "/images/loader/" }) {
        childImageSharp {
          fixed(width: 128, height: 128) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="flex flex-col justify-center h-screen bg-gray-200">
      <div className="flex justify-center">
        <GatsbyImage
          fixed={oc(data).file.childImageSharp.fixed() as FixedObject}
        />
      </div>
    </div>
  )
}

export default Loader
