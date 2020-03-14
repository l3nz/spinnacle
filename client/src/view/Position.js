import React from "react"
import PropTypes from "prop-types"

export function Position(pp) {
  const style = {
    width: pp.width,
    height: pp.height,
    textAlign: "center",
  }

  if (pp.number) {
    return (
      <div style={style}>
        Position <br /> <h1>{pp.number}</h1>
      </div>
    )
  } else {
    return <div style={style} />
  }
}

Position.propTypes = {
  //number: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
}

Position.defaultProps = {
  number: undefined,
  width: 100,
  height: 100,
}
