export const state = () => ({
  Principles: {
    page0: false,
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
}
