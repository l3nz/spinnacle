import {createSlice} from "@reduxjs/toolkit"

export const MODE_LOADING = "LOADING"
export const MODE_EXERCISE = "RUNNING"

export const slice = createSlice({
  name: "mp",
  initialState: {
    mode: MODE_LOADING,
    error: undefined,
    user: null,
    audio: {},
    media: {},
  },
  reducers: {
    startExercise: (state, action) => {
      state.mode = action.payload
    },
    timerTick: state => {
      console.log("Timer tick")
    },
  },
})

export const {startExercise, timerTick} = slice.actions
export const mainPageReducer = slice.reducer

export const selectMainPage = state => state
