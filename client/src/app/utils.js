/**
 * Turns a two-digit number into a two-digit string.
 */
export function display2digits(n) {
  if (n > 99) {
    return "XX"
  } else if (n > 9) {
    return `${n}`
  } else {
    return `0${n}`
  }
}

/**
 * Turns a number of seconds into [hh:]mm:ss.
 *
 * @param {int} nSecs how many seconds to go
 # @returns {string} the string we want.
 */

export function sec2hms(nSecs) {
  const ss = nSecs % 60
  const mm = Math.trunc(nSecs / 60) % 60
  const hh = Math.trunc(nSecs / 3600) % 60

  const ss_2 = display2digits(ss)

  if (hh > 0) {
    const mm_2 = display2digits(mm)
    return `${hh}:${mm_2}:${ss_2}`
  } else {
    return `${mm}:${ss_2}`
  }
}

/**
 A range to be used for map()
 */
export function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt)
}

/**
 From beats-per-minute to a number of seconds.
 */
export function bpmToSeconds(bpmSpeed, nBeats) {
  if (bpmSpeed > 0) {
    return (60 / bpmSpeed) * nBeats
  } else {
    return 0
  }
}

/**
 Checks if the beat number should trigger an event.
*/
export function triggers(everyBeats, beatNumber) {
  return beatNumber % everyBeats === 0
}

/**
  When to schedule next event (in ms), given a
  certain amount of BPM and a number of sub-beats in each bpm.
  */
export function rescheduleIn(bpm, subBeats) {
  return (60 * 1000) / (bpm * subBeats)
}
