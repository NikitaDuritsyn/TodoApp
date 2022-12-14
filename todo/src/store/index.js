import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    userToken: '',
    user:{}
  },
  mutations: {
    serToken (state, token) {
      state.userToken = token
    },
    setUser(state, user){
      state.user = user
    }
  },
  actions: {
  },
  getters : {
  }
})