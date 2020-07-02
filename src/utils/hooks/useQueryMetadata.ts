import { useStaticQuery, graphql } from "gatsby"
import { MetadataQuery } from "../../graphqlTypes"
import { oc } from "ts-optchain"

type TQueryMetadata = {
  title: string
  description: string
  author: string
}

const useQueryMetadata = (): TQueryMetadata => {
  const data: MetadataQuery = useStaticQuery(
    graphql`
      query Metadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return {
    author: oc(data).site.siteMetadata.author(""),
    description: oc(data).site.siteMetadata.description(""),
    title: oc(data).site.siteMetadata.title(""),
  }
}

export default useQueryMetadata
