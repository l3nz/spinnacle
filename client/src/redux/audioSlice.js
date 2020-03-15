/**
The "audio" slice contains an map of Audio objects, hopefully fully loaded,
and indexed by URL.
*/
import {createSlice} from "@reduxjs/toolkit"

export const FILE_LUNGO = "https://wav-sounds.com/wp-content/uploads/2017/09/Funny-01.wav"
export const FILE_CORTO = "https://wav-sounds.com/wp-content/uploads/2017/09/Funny-03.wav"

export const DRUM_SNARE =
  "http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_K4-Snr05.mp3"
export const DRUM_KICK =
  "http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_ElecK01-Kick02.mp3"
export const DRUM_CRASH =
  "http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_Crash-03.mp3"

export const slice = createSlice({
  name: "audio",
  initialState: {
    allLoaded: true,
    error: null,
    media: {},
  },
  reducers: {
    audioLoading(state, action) {
      state.allLoaded = false
      const url = action.payload.url
      state.media[url] = false
    },
    audioLoaded(state, action) {
      // Check all media files
      const url = action.payload.url
      state.media[url] = true

      // check if they all are loaded at once
      state.allLoaded = Object.values(state.media).reduce((a, v) => a && v, true)
    },
  },
})

export const {audioLoading, audioLoaded} = slice.actions
export const audioReducer = slice.reducer

/**
Caches an audio resource unless already loaded.

When started, sends a message "audioLoading";  when through (and the  file
is available, therefore cached), sends "audioLoaded"



https://stackoverflow.com/questions/9337300/html5-audio-load-event/24880037

https://gist.github.com/nickytonline/069fc006d1946279a31fed10a61d08c5


*/
export const cacheAudioAsync = url => async (dispatch, getState) => {
  console.log("PR", getState())

  if (getState().audio.media[url] === true) {
    console.log("Resource already cached")
    return
  }

  const myUrl = url // + "?cbr=" + (new Date()).getTime()
  const resource = {url: myUrl}

  dispatch(audioLoading(resource))

  // Create an onjevt an follow up when cached
  const audioObject = new Audio(myUrl)
  audioObject.addEventListener(
    "canplaythrough",
    async () => {
      dispatch(audioLoaded(resource))
    },
    false
  )

  const res = await audioObject.load()
  console.log("Started to fetch", res)

  //dispatch(audioLoaded())
}
