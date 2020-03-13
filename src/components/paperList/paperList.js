import React from "react"
import PropTypes from 'prop-types'
import styled from "styled-components"
import Paper from "@material-ui/core/Paper"
import CustomListItem from "../listItem/customListItem"

export const PaperList = ({list}) => {
  list = list.slice(0,5);
  return (
    <Paper>
      <Title>
        Featured Posts
      </Title>
      {
        list.map(function(el) {
          // node
          // el.node
          return <CustomListItem divider created_at={el.node.created_at} title={el.node.title}/>
        })
      }
    </Paper>

  )
}

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 1.6em;
  font-weight: 100;
  padding: 24px 0px;
  height: 40%;
  color: #004D80;
  text-align: center;
  margin: 0px;
`

PaperList.propTypes = {
  list: PropTypes.array.isRequired
}

export default PaperList;
