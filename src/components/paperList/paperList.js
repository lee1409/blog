import React from "react"
import PropTypes from 'prop-types'
import styled from "styled-components"
import Paper from "../paper/paper"

export const PaperList = ({title, list}) => {




  const ListItemTitle = styled

  return (
    <Paper>
      <Title>
        {title}
      </Title>

      <List>
        <li>
          <a>
            <ListItem className="list-item">
              <h4>
                Introduction to Neural Network
              </h4>
              <p>
                Created at 2019-01
              </p>
            </ListItem>
          </a>
        </li>
        <li>
          <a>
            <div className="list-item">
              <h4>
                Introduction to Neural Network
              </h4>
              <p>
                Created at 2019-01
              </p>
            </div>
          </a>
        </li>
      </List>
      <p>
        This is a paperlist
      </p>
    </Paper>

  )
}

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 44px;
  font-weight: 100;
  color: #004D80;
  display: block;
`
const List = styled.ul`
  list-style-type: none;
  padding: 0;
`


const ListItem = styled.div`
  padding-top: 12px;
  padding-left: 36px;
  padding-bottom: 12px;
`

PaperList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default PaperList;
