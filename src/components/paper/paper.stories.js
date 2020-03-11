import React from 'react';
import CustomPaper from "./paper";
import styled from "styled-components"

const Test = styled.p`
  font-family: 'Roboto', san-serif;
  font-size: 1em;
`

export default {
  title: 'Paper',
  component: CustomPaper,
};

export const Default = () => <CustomPaper title={"Neural Network"}><div>Hii</div></CustomPaper>

export const Large = () => <CustomPaper title={"Neural Network"} size={"L"} src={"https://picsum.photos/400"} content={"Lorem Ipsum"} />

export const Small = () => <CustomPaper title={"Neural Network"} size={"S"} content={"Lorem Ipsum"} />
