
import { ShippingService }  from "../../services/shipping";
import {
    CHOOSE_DELIVERY,SAVE_DELIVERY,CHECK_DELIVERY,DELIVERY_DATA,GET_PROVINCES,GET_DISTRICTS,GET_SUBDISTRICTS
} from "../actions.type.js";
import {
    SET_DELIVERY,SET_SAVEDELIVERY,SET_CHECKDELIVERY,SELECT_DELIVERY,SET_PROVINCES 
} from "../mutations.type";
import Vuex from 'vuex'



const state = {
    delivery:null,
    delivery_shipping:null,
    formorder:{
        selectDel:null
    },
    provinces:[]
}

const getters = {
    delivery: state => {
        return state.delivery
    },
    delivery_shipping: state => {
        return state.delivery_shipping
    },
    formorder: state => {
        return state.formorder
    },
    provinces: state => {
        return state.provinces
    },
    


};


const actions = {
    async [CHOOSE_DELIVERY](context,payload) { 
     context.commit(SELECT_DELIVERY,payload);
    },
    async [SAVE_DELIVERY](context,payload) { 
        context.commit(SET_SAVEDELIVERY,payload);
    },
    async [CHECK_DELIVERY](context,payload) { 
        context.commit(SET_CHECKDELIVERY,payload);
    },
    async [DELIVERY_DATA](context,payload) { 
        const { data } = await ShippingService.getdatashipping(payload);
       
        context.commit(SET_DELIVERY,data);
        return data.data;
    },
    async [GET_PROVINCES](context,payload) { 
        const { data } = await ShippingService.getprovinces();
        context.commit(SET_PROVINCES,data);
        return data.data;
    },
    async [GET_DISTRICTS](context,payload) { 
    
        const { data } = await ShippingService.getdistricts(payload);
     //   context.commit(SET_PROVINCES,data);
        return data.data;
    },
    async [GET_SUBDISTRICTS](context,payload) { 
        console.log(payload);
        const { data } = await ShippingService.getsubdistricts(payload);
        return data.data;
    },


};

const mutations = {

 
    [SET_PROVINCES](state,data) {
        state.provinces = data.data
    },
    [SET_DELIVERY](state,data) {
        state.delivery = data.data
    },
    [SET_SAVEDELIVERY](state,data) {
     //
     let setstatus = localStorage.setItem('statusorder','T');
    },
    [SET_CHECKDELIVERY](state,data) {
    //   let check = localStorage.getItem('delivery');
   //    console.log('check',check);
       },
    [SET_CHECKDELIVERY](state,data) {
  
        let check = localStorage.getItem('delivery');
    },  
    [SELECT_DELIVERY](state,data) {
        let setdelivery = localStorage.setItem('delivery',data);
    
    }, 


        

  
  
};

export default {
    state,
    getters,
    actions,
    mutations
};
