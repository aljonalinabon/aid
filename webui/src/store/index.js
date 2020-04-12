import Vue from 'vue'
import Vuex from 'vuex'
import applications from './modules/application'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    applications
  }
})
