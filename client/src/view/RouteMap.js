/******
A route map displaying the elevation and  the current point.

I build it with stoopid VuMeters for now.


<RouteMap
   route=[{h: 10, t:30},{h:20, t:20, active:  true}]
   width={500}
   height={100}
   />

******/

import React from "react"
import PropTypes from "prop-types"
import {VuMeter} from "./VuMeter"

export function RouteMap(pp) {
  //const cssCol = {float: "left", width: prc}
  const widthInUnits = pp.route.reduce((a, v) => v.t + a, 0)
  const scaleFactor = pp.width / widthInUnits

  const allMeters = pp.route.map((v, i) => {
    const color = v.active ? "red" : "pink"

    return (
      <VuMeter
        key={i}
        leds={10}
        value={v.h}
        max={100}
        width={v.t * scaleFactor}
        height={pp.height}
        ledOff="lightGray"
        ledOn={color}
      />
    )
  })

  const styleContainer = {
    width: pp.width,
    height: pp.height,
  }

  return <div style={styleContainer}>{allMeters}</div>
}

RouteMap.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

RouteMap.defaultProps = {
  route: [],
  width: 40,
  height: 100,
}
