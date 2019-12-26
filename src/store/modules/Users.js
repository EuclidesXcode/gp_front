import axios from 'axios'
export default {
  namespaced: true,
  state: {
   example : ''
  },
  mutations: {

    setExample (state, payload) {
      state.example = payload
    }
  },
  actions: {
    example ({ commit }, payload) {
      commit('setExample', payload)
    },
    }
}
