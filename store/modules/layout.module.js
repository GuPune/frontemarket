
import { LayoutService }  from "../../services/layout";
import {
    GET_NAVBAR
} from "../actions.type.js";
import {
    SET_NAVBAR 
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    navbar:null
}

const getters = {
    navbar: state => {
        return state.navbar
    },

};


const actions = {
    async [GET_NAVBAR](context,payload) {
        const { data } = await LayoutService.navbar(payload);
      
        await context.commit(SET_NAVBAR,data);  
        return data.data
    
    },

   
};

const mutations = {
  
    [SET_NAVBAR](state,data) {
        state.navbar = data.data;
      
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
