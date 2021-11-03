
import { ContactService }  from "../../services/contact";
import {
    SAVE_CONTACT,GET_CAPTCHA
} from "../actions.type.js";
import {
    SET_CAPTCHA
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    captcha:[]
  
}

const getters = {
    captcha: state => {
        return state.captcha
    },
  
};


const actions = {
    async [SAVE_CONTACT](context,payload) {
        const { data } = await ContactService.save(payload);
        return data;
    },
    async [GET_CAPTCHA](context,payload) {
     
        const { data } = await ContactService.captcha(payload);
        context.commit(SET_CAPTCHA,data);

    },

};

const mutations = {
    [SET_CAPTCHA](state,data) {
        state.captcha = data.data;
    },

  
  
};

export default {
    state,
    getters,
    actions,
    mutations
};
