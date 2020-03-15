import {configureStore} from "@reduxjs/toolkit"
import {mainPageReducer} from "../redux/mainPageSlice"
import {audioReducer} from "../redux/audioSlice"

export default configureStore({
  reducer: {
    mp: mainPageReducer,
    audio: audioReducer,
  },
})
