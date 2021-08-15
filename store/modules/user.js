
import { UserService }  from "../../services/user.service";
import {
    CHECK_LOGIN,FORGOTEMAIL,CLEARALRET

} from "../actions.type.js";
import {
    SET_CHECK_LOGIN,SET_ALERT,SET_CLEARALERT

} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    typeforgot:null,
    messageforgot: null,
    form: {
        name: "1",
    }
 
};

const getters = {
    

};

const actions = {
    async [CHECK_LOGIN](context) {

        context.commit(SET_CHECK_LOGIN);
    },
    async [FORGOTEMAIL](context,payload) {
       const { data } = await UserService.forgot(payload);
       context.commit(SET_ALERT,data);
    },
    async [CLEARALRET](context,payload) {
        context.commit(SET_CLEARALERT);
     },

};

const mutations = {
    [SET_CHECK_LOGIN](state) {
        
    },
     [SET_ALERT](state,data) {
       if(data.code_return == 200){
        state.typeforgot = 'alert alert-success';
        state.messageforgot = 1;
       }else{
        state.typeforgot = 'alert alert-danger';
        state.messageforgot = 1;
       }
       
    },
    [SET_CLEARALERT](state) {
        state.messageforgot = null;
     }
};

export default {
    state,
    getters,
    actions,
    mutations
};
