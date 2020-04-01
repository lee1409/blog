import React, { useEffect, useState } from 'react'
import './style.css';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton'

const Header = ({title, onClick}) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY / 70 * 255);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const headerColor = `rgba(0, 77, 128, ${scroll/255}`
  const contentColor = `rgba(${scroll+50}, ${scroll+50}, ${scroll+50})`

  return (
    <React.Fragment>
      <div className={"header header-effect"}
           style={{backgroundColor: headerColor}}>
        <IconButton>
          <span style={{color: contentColor}} className="material-icons icon" onClick={onClick}>
          home
          </span>
        </IconButton>

        <div style={{color: contentColor}} className={'header-title'}>{title}</div>
      </div>
      <div className={"header"}/>
    </React.Fragment>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Header
