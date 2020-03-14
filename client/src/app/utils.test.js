import {display2digits, sec2hms, bpmToSeconds} from "./utils"

describe("utils", () => {
  describe("display2digits", () => {
    it("vari", () => {
      expect(display2digits(0)).toEqual("00")
      expect(display2digits(1)).toEqual("01")
    })
  })

  describe("sec2hms", () => {
    it("corto", () => {
      expect(sec2hms(0)).toEqual("0:00")
      expect(sec2hms(1)).toEqual("0:01")
    })
    it("medio", () => {
      expect(sec2hms(5 * 60 - 1)).toEqual("4:59")
    })
    it("lungo", () => {
      expect(sec2hms(3 * 3600 + 5 * 60 - 1)).toEqual("3:04:59")
    })
  })

  describe("bpmToSeconds", () => {
    it("all", () => {
      expect(bpmToSeconds(60, 10)).toEqual(10)
      expect(bpmToSeconds(120, 10)).toEqual(5)
      expect(bpmToSeconds(0, 10)).toEqual(0)
      expect(bpmToSeconds(57, 20)).toBeCloseTo(21.05, 2)
    })
  })
})
