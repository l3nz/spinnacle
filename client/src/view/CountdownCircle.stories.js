import React from "react"
import CountdownCircle from "./CountdownCircle"

//import "../App.scss"

export default {title: "CountdownCircle"}

export const normale = () => {
  return <CountdownCircle value={23} max={100} />
}
