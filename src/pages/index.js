import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Grid from "../components/grid/grid"
import PaperList from "../components/paperList/paperList"

let sample = []
for (let i = 0;i < 10; i++) {
  sample.push({title: "Neural", img: "https://picsum.photos/400", content: "Lorem Ipmsum"})
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  overflow: none;
  min-height: 100vh;
  align-items: center;
  
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
`;

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
  font-size: 1.025rem;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  
  @media screen and (min-width: 900px) {
    text-align: left;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Example {
      allGhostPost {
        edges {
          node {
            id
            title
            reading_time
            meta_description
            meta_title
            feature_image
            created_at
          }
        }
      }
    }
  `)
  // if (data.AllGhostPost) {
  //   return (
  //     <Layout>
  //       <Grid data={data.AllGhostPost.edges}/>
  //       <div>
  //         {JSON.stringify(data)}
  //       </div>
  //     </Layout>
  //   )
  // } else {
  //   console.log("hii");
  //   return <CircularProgress />
  // }
  return (
    <Layout>
      <SEO title={"notetaking"}/>
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
          <PaperList list={data.allGhostPost.edges}/>
        </WidthContainer>
      </Section>
      <Grid data={data.allGhostPost.edges} />
    </Layout>
  )
};

export default IndexPage
