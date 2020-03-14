import React from "react"
import {Position} from "./Position"

//import "../App.scss"

export default {title: "Position"}

export const empty = () => {
  return <Position />
}

export const one = () => {
  return <Position number={1} />
}
