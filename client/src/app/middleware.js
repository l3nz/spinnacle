import {rescheduleIn} from "./utils"
import {timerTick} from "../redux/mainPageSlice"

export const MIDDLEWARE_TIMER_CHANGE = "MIDDLEWARE_TIMER_CHANGE"

// See https://github.com/matpaul/redux-timer-middleware/blob/master/src/index.js
/**
 * Il middleware che invia un beat periodico.
 */
export function bpmMiddleware({getState, dispatch}) {
  let timer = null
  return function(next) {
    return function(action) {
      if (action.type === MIDDLEWARE_TIMER_CHANGE) {
        console.log("M", action)

        if (timer) {
          console.log("Clear timer", timer)
          clearInterval(timer)
        }
        if (action.payload.bpm > 0) {
          const periodMs = rescheduleIn(action.payload.bpm, action.payload.divisions)
          timer = setInterval(() => dispatch(timerTick()), periodMs)
          console.log("Create timer", timer, "Period", periodMs)
        }
      }
      return next(action)
    }
  }
}
