import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {startExercise, selectMainPage, MODE_EXERCISE} from "./mainPageSlice"
import {
  cacheAudioAsync,
  FILE_LUNGO,
  FILE_CORTO,
  DRUM_SNARE,
  DRUM_KICK,
  DRUM_CRASH,
} from "./audioSlice"
import {actionSetBpmTimer, actionStopBpmTimer, actionPlayAudioUrl} from "../app/middleware"

export function MainPage() {
  const state = useSelector(selectMainPage)
  const dispatch = useDispatch()
  //const [incrementAmount, setIncrementAmount] = useState("2")

  //console.log(state, dispatch)

  return (
    <div>
      State {state.mp.mode}
      <hr />
      <button onClick={() => dispatch(startExercise(MODE_EXERCISE))}>Start</button>
      <button
        onClick={() => {
          dispatch(cacheAudioAsync(FILE_LUNGO))
        }}>
        Audio Lungo
      </button>
      <button onClick={() => dispatch(cacheAudioAsync(FILE_CORTO))}>Audio Corto</button>
      <button
        onClick={() => [DRUM_SNARE, DRUM_KICK, DRUM_CRASH].map(f => dispatch(cacheAudioAsync(f)))}>
        Preload
      </button>
      <hr />
      {/** Timer **/}
      <button onClick={() => dispatch(actionSetBpmTimer(30, 4))}>Start 30/4</button>
      <button onClick={() => dispatch(actionSetBpmTimer(50, 4))}>Start 50/4</button>
      <button onClick={() => dispatch(actionSetBpmTimer(100, 2))}>Start 100/2</button>
      <button onClick={() => dispatch(actionStopBpmTimer())}>Stop</button>
      {/** Play audio **/}
      <button onClick={() => dispatch(actionPlayAudioUrl(DRUM_SNARE))}>Sn</button>
      <button onClick={() => dispatch(actionPlayAudioUrl(DRUM_KICK))}>Ki</button>
      <button onClick={() => dispatch(actionPlayAudioUrl(DRUM_CRASH))}>Cr</button>
    </div>
  )
}
