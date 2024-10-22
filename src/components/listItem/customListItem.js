import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"
import ListItem from "@material-ui/core/ListItem"
import './style.css'

const Container = styled.div`
  border-box: box-sizing;
  padding: 12px 24px 12px 24px;
  width: 100%;
`

const Title = styled.h1`
  font-family: 'Roboto', san-serif;
  font-weight: 300;
  color: #088396;
  font-size: 16px;
  padding: 0;
  margin: 0;
`

const Content = styled.p`
  font-family: 'Roboto', san-serif;
  font-weight: 100;
  color: #707070;
  font-size: 12px;
  margin: 0;
`

// List item for featured post

const CustomListItem = ({id, frontmatter, divider}) => {
  return (
    <a className={'post-link'} href={`${frontmatter.slug}`}>
      <ListItem key={id} button divider={divider}>
        <Container>
            <Title>{frontmatter.title}</Title>
            <Content>{`Created at ${frontmatter.date}`}</Content>
        </Container>
      </ListItem>
    </a>
  )
}

CustomListItem.propTypes = {
  title: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired
}

export default CustomListItem

