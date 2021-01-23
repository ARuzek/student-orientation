export const state = () => ({
  Principles: {
    page0: true,
    page1: false,
    page2: false,
    page3: true,
    page4: false,
  },
})
export const mutations = {
  setPrinciples(state, payload) {
    state.Principles[payload.itemIndex] = payload.isChecked
  },
}
export const getters = {
  getPrinciples: (state) => (page) => {
    return state.Principles[page]
  },
}
