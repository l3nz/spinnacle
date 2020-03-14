import React from "react"
import {RouteMap} from "./RouteMap"

//import "../App.scss"

export default {title: "RouteMap"}

export const empty = () => {
  return <RouteMap />
}

export const basic = () => {
  return (
    <RouteMap
      width={700}
      height={100}
      route={[
        {h: 10, t: 10},
        {h: 20, t: 20},
        {h: 30, t: 10, active: true},
        {h: 10, t: 20},
        {h: 80, t: 10},
      ]}
    />
  )
}
