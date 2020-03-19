import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import "../static/screen.css";
import { Router } from "@reach/router";
import api from "../ghost"
import { CircularProgress } from "@material-ui/core"

const Content = ({slug}) => {
  const [data, setData] = useState();

  useEffect(() => {
    api.posts.read({slug: slug}, {formats: ['html', 'plaintext']}).then((resp) => setData(resp));
  }, []);

  if (data) {
    return <>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.html}} /></>
  }
  return <CircularProgress/>
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
