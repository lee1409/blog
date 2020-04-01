import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import "../static/screen.css"
import { Router } from "@reach/router"
import api from "../ghost"
import { CircularProgress } from "@material-ui/core"
import SEO from "../components/seo"
import Header from "../components/header/header"
import {navigate} from "gatsby";
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  overflow: none;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  
  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`

const Content = ({ slug }) => {
  const [data, setData] = useState()

  useEffect(() => {
    api.posts.read({ slug: slug }, { formats: ["html", "plaintext"] }).then((resp) => setData(resp))
  }, [])

  if (data) {
    return (
      <>
        <SEO
          title={data.title}
          description={data.meta_description}
          meta={[
            { name: "canonical_url", content: data.canonical_url },
          ]}/>
        <Header
          title={"Notetaking"}
          onClick={() => navigate('/')}/>
          <section className={'content'}>
            <h4 className={'content-title'}>{data.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: data.html }}/>
          </section>
      </>
      )
  }
  return <Section><CircularProgress style={{color: '#004D80'}}/></Section>
}


const Post = () => {
  return (
    <Layout>
      <Router>
        <Content path={"/post/:slug"}/>
      </Router>
    </Layout>
  )
}

export default Post
