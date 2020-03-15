import {rescheduleIn} from "./utils"
import {timerTick} from "../redux/mainPageSlice"
import {DRUM_SNARE, DRUM_KICK, DRUM_CRASH} from "../redux/audioSlice"

export const MIDDLEWARE_TIMER_CHANGE = "MIDDLEWARE_TIMER_CHANGE"
export const MIDDLEWARE_TIMER_TICK = "MIDDLEWARE_TIMER_TICK"

/**
 * Il middleware che invia un beat periodico.
 *
 * See https://github.com/matpaul/redux-timer-middleware/blob/master/src/index.js
 */
export function bpmMiddleware({getState, dispatch}) {
  let timer = null
  let nBeat = 0
  let nDivisions = 0
  return function(next) {
    return function(action) {
      if (action.type === MIDDLEWARE_TIMER_CHANGE) {
        //console.log("M", action)

        if (timer) {
          console.log("Clear timer", timer)
          clearInterval(timer)
          nBeat = 0
        }
        if (action.payload.bpm > 0) {
          const periodMs = rescheduleIn(action.payload.bpm, action.payload.divisions)
          nBeat = 0
          nDivisions = action.payload.divisions
          dispatch(doTick(nBeat++, nDivisions))
          timer = setInterval(() => {
            dispatch(doTick(nBeat++, nDivisions))
          }, periodMs)
          console.log("Create timer", timer, "Period", periodMs)
        }
      }
      return next(action)
    }
  }
}

function doTick(nBeat, divisions) {
  const rightOn = nBeat % divisions === 0
  return timerTick({nBeat: nBeat, rightOn: rightOn})
}

export function actionSetBpmTimer(bpm, subbeats) {
  return {type: MIDDLEWARE_TIMER_CHANGE, payload: {bpm: bpm, divisions: subbeats}}
}

export function actionStopBpmTimer() {
  return actionSetBpmTimer(0, 0)
}

/// ----------------------

/**
Just plays an audio sample.
Multiple samples can/will play at once.
*/
export const MIDDLEWARE_AUDIO_PLAY = "MIDDLEWARE_AUDIO_PLAY"

export function audioMiddleware({getState, dispatch}) {
  return function(next) {
    return function(action) {
      if (action.type === MIDDLEWARE_AUDIO_PLAY) {
        const audio = new Audio(action.payload.url)
        audio.load()
        audio.play()
      }
      return next(action)
    }
  }
}

export function actionPlayAudioUrl(url) {
  return {type: MIDDLEWARE_AUDIO_PLAY, payload: {url: url}}
}

/**
Like a built-in nano tracker.

On first beat of a tempo change, play crash.
Play kick on first division, snare on others.
*/

export function trackerMiddleware({dispatch}) {
  return function(next) {
    return function(action) {
      if (action.type === timerTick.toString()) {
        const {nBeat, rightOn} = action.payload

        if (rightOn === true) {
          dispatch(actionPlayAudioUrl(DRUM_KICK))
        } else {
          dispatch(actionPlayAudioUrl(DRUM_SNARE))
        }

        if (nBeat === 0) dispatch(actionPlayAudioUrl(DRUM_CRASH))
      }
      return next(action)
    }
  }
}
