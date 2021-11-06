
import { OrderService }  from "../../services/order";
import {
    SAVE_ORDER,GET_ORDER_LOCAL,GET_ORDER_DATA,GET_ORDER_ALL
} from "../actions.type.js";
import {
    SET_ORDER,SET_GETORDER,SET_ORDERALL
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    order:null,
    orderall:null
 
}

const getters = {
    order:state => {
        return state.order
    },
    orderall:state => {
        return state.orderall
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
   
        context.commit(SET_ORDERALL,data);
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
    [SET_ORDERALL](state,data) {
     
        state.orderall = data.data
    },
 
};

export default {
    state,
    getters,
    actions,
    mutations
};
