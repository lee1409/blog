import React from "react"
import PaperList from "./paperList"

export default {
  title: "Paper List",
  component: PaperList
}

const a_list = [
  {
    created_at: 2019,
    title: "Inroduction to neural"
  },
  {
    created_at: 2018,
    title: "JI"
  }
]

export const Default = () => <PaperList list={a_list} />

