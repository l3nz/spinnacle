import {startExercise, mainPageReducer, MODE_LOADING, MODE_EXERCISE} from "./mainPageSlice"

describe("actions", () => {
  it("should start the exercise - created by our reducer", () => {
    const expectedAction = {
      type: startExercise.toString(),
      payload: MODE_LOADING,
    }
    expect(startExercise(MODE_LOADING)).toEqual(expectedAction)
  })
})

describe("reducer", () => {
  it("should start the exercise - created by our reducer", () => {
    expect(mainPageReducer({}, startExercise(MODE_EXERCISE))).toEqual({mode: MODE_EXERCISE})
  })
})
