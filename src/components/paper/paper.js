import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"
import Card from "@material-ui/core/Card"
import { CardContent } from "@material-ui/core"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from '@material-ui/core/styles'
import { navigate } from "gatsby"
import './style.css'


const useStyles = makeStyles({
  media: {
    height: '60%'
  },
  action: {
    height: '100%'
  },
  small: {
    boxSizing: 'border-box',
    gridRowEnd: `span 3`,
    marginBottom: 20,
  },
  large: {
    boxSizing: 'border-box',
    maxHeight: '300px',
    gridRowEnd: `span 6`,
    marginBottom: 20
  },
  content: {
    height: "40%"
  }
});

const Title = styled.h1`
  font-family: 'Roboto', san-serif;
  font-weight: 400;
  color: #707070;
  font-size: 16px;
  padding: 0;
  margin: 0;
`

const Content = styled.p`
  font-family: 'Roboto', san-serif;
  font-weight: 100;
  color: #707070;
  font-size: 12px;
  margin: 6px 0px;
  line-height: 1.5em;
  overflow: hidden;
`

// This will provide 3 different custom build based on size
export const CustomPaper = ({children, size, frontmatter }) => {
  const classes = useStyles();

  switch (size) {
    case "S":
      // Only return text
      return (
        <Card className={classes.small}>
          <a className={'post-link'} href={`/post/${frontmatter.slug}`}>
            <CardActionArea className={classes.action}>
              <CardContent>
                <Title>
                  {frontmatter.title}
                </Title>
                <Content>
                  {frontmatter.meta_description}
                </Content>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
      )
    case "L":
      return (
        <Card className={classes.large}>
          <CardActionArea className={classes.action} onClick={() => navigate(`/post/${frontmatter.slug}`)}>
            <CardMedia
              className={classes.media}
              image={frontmatter.feature_image}
              title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
              <Title>
                {frontmatter.title}
              </Title>
              <Content>
                {frontmatter.meta_description}
              </Content>
            </CardContent>
          </CardActionArea>
        </Card>
      )
    default:
      // This is probably for google ads
      if (children) {
        return (
          <Card className={classes.small}>
            <CardActionArea className={classes.action}>
              <CardContent style={{height: 130, padding: 0}}>
                {children}
              </CardContent>
            </CardActionArea>
          </Card>
        )
      } else {
        throw new Error("Children not found")
      }
  }
}

CustomPaper.propTypes = {
  children: PropTypes.node
};

export default CustomPaper
