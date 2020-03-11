import React from "react"
import PaperList from "./paperList"
import {Paper} from "@material-ui/core"

export default {
  title: "Paper List",
  component: PaperList
}

export const emptyList = () => <PaperList title={"Example"} list={[]}/>

export const sample = () => <AutoPaper>Hii</AutoPaper>
