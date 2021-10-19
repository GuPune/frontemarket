
import { BankService }  from "../../services/bank";
import {
    FETCH_BANK
} from "../actions.type.js";
import {
    SET_BANK
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    bank:null
 
}

const getters = {
    bank:state => {
        return state.bank
    },
};

const actions = {
    async [FETCH_BANK](context,payload) { 
        const { data } = await BankService.getbank(payload);
        context.commit(SET_BANK,payload);
       }, 
};

const mutations = {
    [SET_BANK](state,data) {
        state.bank = data.data
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
