export const state = () => ({
  Principles: [false, false, false, false, false],
})
export const mutations = {
  setPrinciples(state, payload) {
    state.Principles[payload.itemIndex] = payload.isChecked
  },
}
