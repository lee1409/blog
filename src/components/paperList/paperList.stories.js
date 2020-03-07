import React from "react"
import PaperList from "./paperList"

export default {
  title: "Paper List",
  component: PaperList
}

export const emptyList = () => <PaperList title={"Example"} list={[]}/>

