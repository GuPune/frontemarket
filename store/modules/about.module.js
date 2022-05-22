
import { AboutService }  from "../../services/about";
import {
    GET_ABOUT,GET_NEWE
} from "../actions.type.js";
import {
    SET_ABOUT,SET_NEWEMAR
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    about:null,
    newe:null
}

const getters = {
    about: state => {
        return state.about
    },
    newe: state => {
      return state.newe
  },


};


const actions = {
    async [GET_ABOUT](context,payload) {
        const { data } = await AboutService.getabout(payload);

        context.commit(SET_ABOUT,data);
    },

    async [GET_NEWE](context) {

      const { data } = await AboutService.getnewe();


      return data;

      context.commit(SET_NEWEMAR);
  },




};

const mutations = {
    [SET_ABOUT](state,data) {

        state.about = data.data.details;
    },
    [SET_NEWEMAR](state,data) {

      state.newe = data;
  }


};

export default {
    state,
    getters,
    actions,
    mutations
};
