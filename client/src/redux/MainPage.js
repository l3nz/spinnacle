import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {startExercise, selectMainPage, MODE_EXERCISE} from "./mainPageSlice"
import {cacheAudioAsync, FILE_LUNGO, FILE_CORTO} from "./audioSlice"

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
          dispatch(cacheAudioAsync(FILE_LUNGO))
        }}>
        Audio
      </button>
      <button onClick={() => dispatch(cacheAudioAsync(FILE_CORTO))}>Audio Corto</button>
    </div>
  )
}
