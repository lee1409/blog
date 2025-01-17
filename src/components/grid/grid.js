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

const a_list = ['L', "L", "L", "L", "L", "S", "S", "S", "S", "S"]

const Grid  = ({data}) => {
  return (
    <GridContainer>
      {
        data.map(el => {
          const size = a_list[Math.floor(Math.random() * 10)];
          // Add google ads
          if (size === "A") {
            return (
              // min-width:400px;max-width:970px;width:100%;height:90px
              <React.Fragment>
                <CustomPaper>
                  <ins className="adsbygoogle"
                       style={{display:"block", minWidth: 180, maxWidth: 600, width: '100%', height: 130}}
                       data-ad-client="ca-pub-6226350954037529"
                       data-ad-slot="2297674631"
                       data-ad-format="auto"
                       data-full-width-responsive="true" />
                  <script>
                    {`(adsbygoogle = window.adsbygoogle || []).push({});`}
                  </script>
                </CustomPaper>
                <CustomPaper size={"L"} {...el.node} />
              </React.Fragment>
            )
          }
          return <CustomPaper size={size} {...el.node} />
        } )
      }
    </GridContainer>
  )
}

Grid.propTypes = {

};

export default Grid;
