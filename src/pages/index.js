import React from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Grid from "../components/grid/grid"
import PaperList from "../components/paperList/paperList"
import media from "../styles/media"
import { graphql } from "gatsby"


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

const fade = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`

const WidthContainer = styled.div`
  width: 100%;
  animation: ${fade} 1s ease-in;
  justify-content: center;
  margin: 100px 0px;
  
  @media screen and (min-width: 900px) {
    width: 50%;
  }
`

const Title = styled.p`
  color: #004D80;
  font-family: 'Roboto', san-serif;
  font-size: 3em;
  margin-bottom: 16px;
  text-align: center;
  
  @media screen and (min-width: 900px) {
    text-align: left;
  }
  
  @media screen and (max-width: 900px) {
    margin-top: 100px;
  }
}
`

const Quote = styled.p`
  color: #707070;
  font-family: 'Roboto', san-serif;
  font-size: 13px;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  
  @media screen and (min-width: 900px) {
    text-align: left;
  }
`
const Content = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
  
  @media screen and (min-width: ${media.medium}px) {
    width: 80%;
    maxWidth: 1000px;
  }
`

export default function ({data}) {
  const { allMarkdownRemark } = data;

  return (
    <Layout>
      <SEO title={"Notetaking"}/>
      <Content>
        <Section>
          <WidthContainer>
            <Title>
              Notetaking
            </Title>
            <Quote>
              Take notes that matter
            </Quote>
          </WidthContainer>
          <WidthContainer>
            <PaperList list={allMarkdownRemark.edges}/>
          </WidthContainer>
        </Section>
        <Grid data={allMarkdownRemark.edges}/>
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query allMarkdown {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`
