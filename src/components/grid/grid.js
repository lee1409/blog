import React from "react"
import styled from 'styled-components';
import CustomPaper from "../paper/paper"
import media from "../../styles/media"

const GridContainer = styled.div`
  display: grid;
  grid-auto-rows: 50px;
  grid-gap: 0px 20px;
  grid-template-columns: 1fr [col-start];
  margin: 'auto';
  @media screen and (min-width: ${media.medium}px) {
     grid-template-columns: repeat(2, 1fr [col-start]);
  }
  
  @media screen and (min-width: ${media.large}px) {
    grid-template-columns: repeat(3, 1fr [col-start]);
  }
`

const a_list = ['L', "L", "L", "L", "L", "S", "S", "S", "A", "A"]

const Grid  = ({data}) => {
  return (
    <GridContainer>
      {
        data.map(el => {
          const size = a_list[Math.floor(Math.random() * 10)];
          if (size === "A") {
            return (
              <CustomPaper>
                <ins className="adsbygoogle"
                     style={{display:"block"}}
                     data-ad-format="fluid"
                     data-ad-layout-key="-gw-3+1f-3d+2z"
                     data-ad-client="ca-pub-6226350954037529"
                     data-ad-slot="3715005571"></ins>
                <script>
                  {`(adsbygoogle = window.adsbygoogle || []).push({});`}
                </script>
              </CustomPaper>
            )
          }
          return <CustomPaper size={size} {...el} />
        } )
      }
    </GridContainer>
  )
}

Grid.propTypes = {

};

export default Grid;
