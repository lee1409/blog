import React from "react"
import CustomListItem from "./customListItem"

export default {
  title: "List Item",
  component: CustomListItem
}

export const Default = () => <CustomListItem title={"Introduction to network"} created_at={"2020-01-01 09:09"}/>

