import React from "react"
import PropTypes from 'prop-types';


export const Paper = () => {
  return (
    <div>
      This is a paper.
    </div>
  )
}

Paper.propTypes = {
  title: PropTypes.string
};

export default Paper
