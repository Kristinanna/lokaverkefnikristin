import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    userName: undefined,
  },
  getters: {
isLoggedIn(state) {
  if(state.UserName){
    return true
 }else {
    return false
 }
},
userName(state) {
  return state.userName;
}
  },
  mutations: {
   SET_USER_NAME(state, payload) {
   state.userName = payload.user;
    }
  },
  actions: {
  },
  modules: {
  }
})
