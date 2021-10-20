
import { OrderService }  from "../../services/order";
import {
    SAVE_ORDER
} from "../actions.type.js";
import {
    SET_ORDER
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    order:null
 
}

const getters = {
    order:state => {
        return state.bank
    },
};

const actions = {
    async [SAVE_ORDER](context,payload) { 
         const { data } = await OrderService.saveorder(payload);
         context.commit(SET_ORDER,data);
         return data.data;
       }, 
    
};

const mutations = {
    [SET_ORDER](state,data) {
        //state.order = data.data
    },
 
};

export default {
    state,
    getters,
    actions,
    mutations
};
