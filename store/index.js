
import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../store/auth.module';
import user from './modules/user'
import { alert } from '../store/modules/alert.module';
Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    auth,user,alert
  }
})

export default store
