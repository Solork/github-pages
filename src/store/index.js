import { createStore } from 'vuex'
import blabbing from './blabbing/index.js'

const store = new createStore({
  modules: {
      blabbing
  }
})

export default store;