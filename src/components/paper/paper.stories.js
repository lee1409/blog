import React from 'react';
import Paper from "./paper"
import styled from "styled-components"

const Test = styled.p`
  font-family: 'Roboto', san-serif;
  font-size: 50px;
`

export default {
  title: 'Paper',
  component: Paper,
};

export const Blank = () => <Paper><Test>What the fuck</Test></Paper>
