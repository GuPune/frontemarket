
import { AdsService }  from "../../services/ads";
import {
    FETCH_ADS
} from "../actions.type.js";
import {
    SET_ADS
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    ads:null
}

const getters = {
    ads: state => {
        return state.ads
    },
};


const actions = {
    async [FETCH_ADS](context) {
        const { data } = await AdsService.get();
        context.commit(SET_ADS,data);
        return data;
    },
};

const mutations = {
    [SET_ADS](state,data) {
        
        state.ads = data;
    }
  
  
};

export default {
    state,
    getters,
    actions,
    mutations
};
