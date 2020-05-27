import React from "react"
import Layout from "../components/layout/layout"
import "../static/screen.css"
import SEO from "../components/seo"
import Header from "../components/header/header"
import { graphql, navigate } from "gatsby"

export default function Template({data}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Layout>
        <SEO title={frontmatter.title}></SEO>
          <Header onClick={() => navigate("/")} title={"Notetaking"}/>
          <section className={"content"}>
            <div id={'data-content'} dangerouslySetInnerHTML={{ __html: html }}/>
          </section>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

