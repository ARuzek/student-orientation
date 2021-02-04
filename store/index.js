export const state = () => ({
  audio: false,
  Principles: {
    page0: true,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  },
  Rules: {
    page0: true,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
    page6: false,
  },
  Health: {
    page0: true,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  },
})
export const mutations = {
  setPrinciples(state, payload) {
    state.Principles[payload.itemIndex] = payload.isChecked
  },
  setRules(state, payload) {
    state.Rules[payload.itemIndex] = payload.isChecked
  },
  setHealth(state, payload) {
    state.Health[payload.itemIndex] = payload.isChecked
  },
  setAudio(state, payload) {
    state.audio = !state.audio
  },
}
export const getters = {
  getPrinciples: (state) => (page) => {
    return state.Principles[page]
  },
  getRules: (state) => (page) => {
    return state.Rules[page]
  },
  getHealth: (state) => (page) => {
    return state.Health[page]
  },
}
