
import { UserService }  from "../../services/user.service";
import {
    CHECK_LOGIN,FORGOTEMAIL,CLEARALRET,REGISSHOP,REGISTER,FETCH_GET_PROFILE,SAVE_PROFILE,FETCH_ADDRESS,FETCH_ADDRESS_BY_ID,SAVE_ADDRESS_BY_ID,DEL_ADDRESS_BY_ID,UPDATE_ADDRESS_BY_ID,LOGOUT

} from "../actions.type.js";
import {
    SET_CHECK_LOGIN,SET_ALERT,SET_CLEARALERT,SET_PROFILE,SET_ADDRESS

} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    typeforgot:null,
    messageforgot: null,
    form: {
        name: "1",
    },
    profile:[],
    address:[]
};

const getters = {
    profile: state => {
        return state.profile
    },
    address: state => {
        return state.address
    },


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
     async [REGISSHOP](context,payload) {
      const { data } = await UserService.register(payload);

      return data;
     },

     async [REGISTER](context,payload) {
      
        const { data } = await UserService.registerbyshop(payload);
        return data;
       },

       async [FETCH_GET_PROFILE](context) {
        const { data } = await UserService.getprofile();
        context.commit(SET_PROFILE,data);
       
        return data;
       },

       async [SAVE_PROFILE](contex,payload) {
      
      const { data } = await UserService.saveprofile(payload);
     // return data;
    },
    async [FETCH_ADDRESS](context,payload) {
     
      const { data } = await UserService.address(payload);
    if(data.status){
            this.$auth.logout();
    }

   
      

      context.commit(SET_ADDRESS,data);
      return data;
    },

    async [FETCH_ADDRESS_BY_ID](context,payload) {
        const { data } = await UserService.address_by_id(payload);
     //   context.commit(SET_ADDRESS,data);
     return data;
      },

      async [SAVE_ADDRESS_BY_ID](context,payload) {

        const { data } = await UserService.save_by_id(payload);
     //   context.commit(SET_ADDRESS,data);
     return data;
      },

      
      async [DEL_ADDRESS_BY_ID](context,payload) {
        const { data } = await UserService.del_by_id(payload);
     //   context.commit(SET_ADDRESS,data);
     return data;
      },

      async [UPDATE_ADDRESS_BY_ID](context,payload) {
     const { data } = await UserService.update_by_id(payload);
     //   context.commit(SET_ADDRESS,data);
        return data;
      },

      async [LOGOUT](context,payload) {

     
    

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
     },
     [SET_PROFILE](state,data) {
        state.profile = data;
      
     },
     [SET_ADDRESS](state,data) {
        state.address = data;
      
     }
};

export default {
    state,
    getters,
    actions,
    mutations
};
