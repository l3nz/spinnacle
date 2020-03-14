import React from "react"
import PropTypes from "prop-types"
import {sec2hms} from "../app/utils"

export function TimeLeft({seconds}) {
  const secs_left = sec2hms(seconds)
  return <div>Mancano {secs_left}</div>
}

TimeLeft.propTypes = {
  seconds: PropTypes.number,
}

TimeLeft.defaultProps = {
  seconds: 0,
}
