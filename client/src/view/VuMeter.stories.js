import React from "react"
import {VuMeter} from "./VuMeter"

//import "../App.scss"

export default {title: "VuMeter"}

export const all_default = () => {
  return <VuMeter />
}

export const half_6_segments = () => {
  return <VuMeter leds={6} value={15} max={30} />
}

export const most_12_segments = () => {
  return <VuMeter leds={12} value={70} max={100} ledOff="black" ledOn="red" />
}

export const full_8_segments = () => {
  return <VuMeter leds={8} value={30} max={30} />
}
