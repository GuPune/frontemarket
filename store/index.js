
import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../store/auth';
import user from './modules/user'
import { alert } from '../store/modules/alert.module';
import validations from '../store/modules/validation';

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    user,alert,validations,auth
  }
})

export default store
