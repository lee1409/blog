import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"

export const Paper = ({children}) => {
  const Div = styled.div`
    padding: 12px;
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.16);
  `
  return (
    <Div>
      {children}
    </Div>
  )
}

Paper.propTypes = {
  children: PropTypes.node
};

export default Paper
