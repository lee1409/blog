import React from "react"
import Grid from "./grid"

export default {
  title: "Grid",
  component: Grid
}

let data = []
for (let i = 0;i < 10; i++) {
  data.push({title: "Neural", src: "https://picsum.photos/400", content: "Lorem Ipmsum"})
}

export const Default = () => <Grid data={data}/>
