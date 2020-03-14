import React from "react"
import {TimeLeft} from "./TimeLeft"

//import "../App.scss"

export default {title: "TimeLeft"}

export const sec10 = () => {
  return <TimeLeft seconds={10} />
}

export const noDefault = () => {
  return <TimeLeft />
}
