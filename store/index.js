
import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../store/auth';
import user from './modules/user'
import CategoryShell from './modules/category.module'
import ProductShell from './modules/product.module'
import Cart from './modules/cart.module'
import Profile from './modules/profile.module'
import Ads from './modules/ads.module'
import { alert } from '../store/modules/alert.module';
import validations from '../store/modules/validation';

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    user,alert,validations,auth,CategoryShell,ProductShell,Ads,Cart
  }
})

export default store
