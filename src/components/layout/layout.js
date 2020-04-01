/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import "./layout.css"
import media from "../../styles/media"
import github from "../../images/github.svg";
import linkedIn from "../../images/linkedin.svg";

const Content = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
  
  @media screen and (min-width: ${media.medium}px) {
    width: 80%;
    maxWidth: 1000px;
  }
`

const Footer = styled.footer`
  color: white;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 10px grey;
  background-color: #004D80;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 12px;
`

const Copyright = styled.p`
  font-family: 'Roboto', san-serif;
  margin: 0;
  font-size: 13px;
`



const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer>
        <Content>
          <FooterContent>
            <Copyright>© {new Date().getFullYear()}, Lee Yee Run</Copyright>
            <div>
              <a href={"https://github.com/lee1409"} target={"_blank"} rel={"noopener noreferrer"}>
                <img style={{width: 36, margin: 12}} src={github} alt="github.com/lee1409"/>
              </a>
              <a href={"https://www.linkedin.com/in/lee-yee-run-026a36151/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img style={{width: 36, margin: 12}} src={linkedIn} alt="linkedin.com/in/lee-yee-run-026a36151/"/>
              </a>
            </div>
          </FooterContent>
        </Content>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
