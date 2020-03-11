import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"
import Card from "@material-ui/core/Card"
import { CardContent } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from '@material-ui/core/styles'


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
})

// This will provide 3 different custom build based on size
export const CustomPaper = ({children, size, title, src, content}) => {
  const classes = useStyles();

  switch (size) {
    case "S":
      // Only return text
      return (
        <Card className={classes.small}>
          <CardActionArea className={classes.action}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )
    case "L":
      return (
        <Card className={classes.large}>
          <CardActionArea className={classes.action}>
            <CardMedia
              className={classes.media}
              image={src}
              title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {content}
              </Typography>
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
              <CardContent>
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
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default CustomPaper
