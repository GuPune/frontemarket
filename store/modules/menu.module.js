
import { MenuService }  from "../../services/menu";
import {
    GET_MENU,HIDECOOKIEFIRST
} from "../actions.type.js";
import {
    SET_MENU,SETHIDECOOKIEFIRST
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    menu:null,
    hidecookiebanner:1
}

const getters = {
    menu: state => {
        return state.menu
    },
    hidecookiebanner(state) {
      return state.hidecookiebanner;
  },

};



const actions = {
    async [GET_MENU](context,payload) {
        const { data } = await MenuService.getmenu(payload);
        context.commit(SET_MENU,data);
    },

    async [HIDECOOKIEFIRST](context) {

      context.commit(SETHIDECOOKIEFIRST);

     },


};

const mutations = {
    [SET_MENU](state,data) {
        state.menu = data.data;
        console.log('state.menu',state.menu);
    },
    [SETHIDECOOKIEFIRST](state, data) {
      state.hidecookiebanner = true;
             // state.about = data;
              // console.log('state.about',state.about);
          }
};

export default {
    state,
    getters,
    actions,
    mutations
};
