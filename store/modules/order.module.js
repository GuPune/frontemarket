
import { OrderService }  from "../../services/order";
import {
    SAVE_ORDER,GET_ORDER_LOCAL,GET_ORDER_DATA,GET_ORDER_ALL
} from "../actions.type.js";
import {
    SET_ORDER,SET_GETORDER
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    order:null
 
}

const getters = {
    order:state => {
        return state.order
    },
};

const actions = {
    async [SAVE_ORDER](context,payload) { 
         const { data } = await OrderService.saveorder(payload);
         context.commit(SET_ORDER,data);
        // return data.data;
       }, 
     async [GET_ORDER_LOCAL](context,payload) { 
        context.commit(SET_GETORDER);
      },  
      async [GET_ORDER_DATA](context,payload) { 
        const { data } = await OrderService.fetchorder(payload);
        return data.data
      },
      async [GET_ORDER_ALL](context,payload) { 
         
        const { data } = await OrderService.fetchorderall(payload);
        console.log('payload',data.data);
        return data.data
      },

      
};

const mutations = {
    [SET_ORDER](state,data) {
        state.order = data.data
        localStorage.removeItem("bank");
        localStorage.removeItem("delivery");
        localStorage.removeItem("cart");
        let buyorder = localStorage.setItem("listorder", data.data);

    },
    [SET_GETORDER](state,data) {
        let getorder = localStorage.getItem('listorder');
        state.order = getorder
     
   
    },
 
};

export default {
    state,
    getters,
    actions,
    mutations
};
