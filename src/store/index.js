import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home_model:'Crossformer',
    server_model:'Crossformer',
    refrige_model:'Crossformer',
    tempe_model:'Crossformer',
    pue_model:'Crossformer',
  },
  mutations: {
    setHomeModel(state, model) {
      state.home_model = model
    },
    setServerModel(state, model) {
      state.server_model = model
    },
    setRefrigeModel(state, model) {
      state.refrige_model = model
    },
    setTempeModel(state, model) {
      state.tempe_model = model
    },
    setPueModel(state, model) {
      state.pue_model = model
    },
  },
  actions: {
    // your actions here
  },
  modules: {
    // your modules here
  }
})