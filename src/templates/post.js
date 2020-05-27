import React from "react"
import Layout from "../components/layout/layout"
import "../static/screen.css"
import { Router } from "@reach/router"
import SEO from "../components/seo"
import Header from "../components/header/header"
import { graphql, navigate } from "gatsby"

export default function Template({data}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  console.log(html)
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
  {/*if (data) {*/
  }
  {/*  return (*/
  }
  {/*    <>*/
  }
  {/*      <SEO*/
  }
  {/*        title={data.title}*/
  }
  {/*        description={data.meta_description}*/
  }
  {/*        canonical_url={data.canonical_url}/>*/
  }
  {/*      <Header*/
  }
  {/*        title={"Notetaking"}*/
  }
  {/*        onClick={() => navigate('/')}/>*/
  }
  {/*      <section className={'content'}>*/
  }
  {/*        <h4 className={'content-title'}>{data.title}</h4>*/
  }
  {/*        <div id={'data-content'} dangerouslySetInnerHTML={{ __html: data.html }}/>*/
  }
  {/*      </section>*/
  }
  {/*    </>*/
  }
  {/*    )*/
  }
  {/*}*/
  }
  {/*return <Section>*/
  }
  {/*  <CircularProgress style={{color: '#004D80'}}/>*/
  }
  {/*  <p>Loading</p>*/
  }
  {/*</Section>*/
  }
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

