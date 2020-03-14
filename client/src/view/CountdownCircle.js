import React from "react"
import PropTypes from "prop-types"
import {sec2hms} from "../app/utils"
/**
## A circle, specifying the time left.

Esempio:

```
  <CountdownCircle
       width={100}
       value={23}
       maxVal={100}
       color="red"
       />
```
***/

/*
function resizeFont(a, b, c) {
  return a
}
*/

/*
export class CountdownCircle_ extends React.Component {
  render() {
    const p = this.props
    //console.log( "Red", this.props.redAlarm, isRed, "Yel", this.props.yellowAlarm, isYel)

    const perc = p.maxVal > 0 ? p.value / p.maxVal : 0

    const stroke = p.strokeWidth
    const strokeLite = stroke / 2
    const oradius = this.props.width / 2
    const radius = this.props.width / 2 - stroke / 2
    const viewBox = `0 0 ${this.props.width} ${this.props.width}`
    const dashArray = radius * Math.PI * 2
    var dashOffset = dashArray - dashArray * perc
    if (dashOffset > dashArray) {
      dashOffset = dashArray
    } else if (dashOffset < 0) {
      dashOffset = 0
    }
    //console.log( "Array", dashArray, "Offset", dashOffset, " props ", this.props);

    let strokecolor = this.props.color
    let secondaryStrokeColor = this.props.color

    const style = {
      stroke: {
        transition: "stroke-dashoffset .5s ease-in-out",
        stroke: strokecolor,
        strokeDasharray: dashArray,
        strokeDashoffset: dashOffset,
      },
      doubleColor: {
        stroke: secondaryStrokeColor,
        fill: "none",
      },
    }

    // il valore - come va mostrato
    let unit = this.props.unit
    const displayVal = sec2hms(this.props.value)

    //questo è il controllo se serve un secondo cerchio
    const  bgCircle = (
        <circle
          className="bg"
          cx={oradius}
          cy={oradius}
          r={radius}
          strokeWidth={`${strokeLite}px`}
        />
      );

    const textClass = "cippa"
    const fontWeight = resizeFont(30, displayVal, 0.05)
    // per debug mostra max
    //unit =  unit + " - max:" + this.props.maxVal
    //unit = unit + "/A:" + p.alarmColor



    return (
      <svg viewBox={viewBox} width={this.props.width} height={this.props.width}>
        {bgCircle}

        <circle
          className="fg"
          style={style.stroke}
          cx={oradius}
          cy={oradius}
          r={radius}
          strokeWidth={`${stroke}px`}
          transform={`rotate(-90 ${oradius} ${oradius})`}
        />

        <text
          className={textClass}
          style={{color: "red"}}
          x={oradius}
          y={oradius}
          textAnchor="middle"
          fontSize={5000}>
          <tspan dy=".4em">{displayVal}</tspan>
        </text>
        <text
          className="unit"
          //                    style={style.unit}
          x={oradius}
          y={oradius}
          textAnchor="middle"
          fontSize={6}>
          <tspan dy="4em">{unit}</tspan>
        </text>
      </svg>
    )
  }
}
*/

export default class CountdownCircle extends React.Component {
  render() {
    const p = this.props
    const prc = (p.value / p.maxVal) * 100
    const hms = sec2hms(p.value)
    return (
      <div>
        {hms} - {prc}%
      </div>
    )
  }
}

CountdownCircle.propTypes = {
  value: PropTypes.number,
  maxVal: PropTypes.number,
  strokeWidth: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.number,
}

CountdownCircle.defaultProps = {
  value: 0,
  maxVal: 100,
  strokeWidth: 13,
  color: "gold",
  width: 100,
}
