
import { SalePageService }  from "../../services/salepage";
import {
    FETCH_SALEPAGE
} from "../actions.type.js";
import {

} from "../mutations.type";
import Vuex from 'vuex'


const state = {

  
}

const getters = {

  
};


const actions = {
    async [FETCH_SALEPAGE](context,payload) {
        const { data } = await SalePageService.getsale(payload);
        return data;
    },

};

const mutations = {
  

  
  
};

export default {
    state,
    getters,
    actions,
    mutations
};
