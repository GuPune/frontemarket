
import { AdsService }  from "../../services/ads";
import {
    CHOOSE_DELIVERY,SAVE_DELIVERY,CHECK_DELIVERY
} from "../actions.type.js";
import {
    SET_DELIVERY,SET_SAVEDELIVERY,SET_CHECKDELIVERY
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    delivery:null
}

const getters = {
    delivery: state => {
        return state.delivery
    },

};


const actions = {
    async [CHOOSE_DELIVERY](context,payload) { 
        context.commit(SET_DELIVERY,payload);
    },
    async [SAVE_DELIVERY](context,payload) { 
        context.commit(SET_SAVEDELIVERY,payload);
    },
    async [CHECK_DELIVERY](context,payload) { 
        context.commit(SET_CHECKDELIVERY,payload);
    },
};

const mutations = {
    [SET_DELIVERY](state,data) {
state.delivery = data
    },
    [SET_SAVEDELIVERY](state,data) {
       localStorage.setItem('delivery','ems');
    },
    [SET_CHECKDELIVERY](state,data) {
       let check = localStorage.getItem('delivery');
       console.log('check',check);
       },
        

  
  
};

export default {
    state,
    getters,
    actions,
    mutations
};
