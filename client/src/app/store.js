import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import {mainPageReducer} from "../redux/mainPageSlice"
import {audioReducer} from "../redux/audioSlice"
import {bpmMiddleware, audioMiddleware, trackerMiddleware} from "./middleware"

export default configureStore({
  reducer: {
    mp: mainPageReducer,
    audio: audioReducer,
  },
  middleware: [...getDefaultMiddleware(), bpmMiddleware, audioMiddleware, trackerMiddleware],
})
