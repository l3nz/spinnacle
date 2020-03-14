import React from "react"
import PropTypes from "prop-types"
import {range} from "../app/utils"

export function VuMeter(pp) {
  const nLedsOn = Math.floor((pp.value / pp.max) * pp.leds)
  const nLedsOff = pp.leds - nLedsOn
  const height = Math.floor(pp.height / pp.leds)

  const ledsOff = range(nLedsOff).map(n => {
    return <ALed key={n + 1000} color={pp.ledOff} height={height} />
  })

  const ledsOn = range(nLedsOn).map((n, i) => {
    return <ALed key={n} color={pp.ledOn} height={height} />
  })

  return (
    <div style={{width: pp.width, height: pp.height, float: "left"}}>
      {ledsOff}
      {ledsOn}
    </div>
  )
}

export function ALed({color, height}) {
  return <div style={{backgroundColor: color, height: height}}></div>
}

VuMeter.propTypes = {
  leds: PropTypes.number,
  value: PropTypes.number,
  max: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  ledOff: PropTypes.string,
  ledOn: PropTypes.string,
}

VuMeter.defaultProps = {
  leds: 6,
  value: 0,
  max: 100,
  width: 40,
  height: 100,
  ledOff: "lightgray",
  ledOn: "black",
}
