import React from "react"
import {useSelector} from "react-redux"

/**
Prints out a JSON representation of the state as a single PRE block.
*/

export function StateJSON() {
  const state = useSelector(state => state)

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}
