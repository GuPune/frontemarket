
import { AdsService }  from "../../services/ads";
import {
    ADD_CART,REMOVE_CART,GET_CART,ADD_UP,ADD_DOWN,ADD_INPUT,REMOVIE_ALL,CART_SUCCESS
} from "../actions.type.js";
import {
    SET_CART,SET_REMOVECART,SET_GET_CART,SET_TOTAL,SET_ADDUP,SET_ADDDOWN,SET_ADD_INPUT,SET_REMOVE_ALL,SET_CART_SUCCESS
} from "../mutations.type";
import Vuex from 'vuex'
import Vue from 'vue'

const state = {
    cartTotal: 0,
    cart: [],
    Price:0,
    PriceToTal:{
        quantitys:0,
        PriceToTals:0
    }
}

const getters = {
    cartTotal: state => {
        return state.cartTotal
    },
    cart: state => {
        return state.cart
    },
    PriceToTal: state => {
        return state.PriceToTal
    },
 
};


const actions = {
    async [ADD_CART](context,payload) {

        await context.commit(SET_CART,payload);
        await context.commit(SET_TOTAL);   
    },

    async [REMOVE_CART](context,payload) {
       await context.commit(SET_REMOVECART,payload);
       await context.commit(SET_TOTAL);   
    },
    async [GET_CART](context) {
      
        await context.commit(SET_GET_CART);  
        await context.commit(SET_TOTAL);    
    },
    async [ADD_UP](context,payload) {
      
        await context.commit(SET_ADDUP,payload);  
        await context.commit(SET_TOTAL);  
         
    },
    async [ADD_DOWN](context,payload) {
        await context.commit(SET_ADDDOWN,payload);  
        await context.commit(SET_TOTAL);   
    },
    async [ADD_INPUT](context,payload) {
      await context.commit(SET_ADD_INPUT,payload);  
      await context.commit(SET_TOTAL);   
    },

    async [REMOVIE_ALL](context,payload) {
        await context.commit(SET_REMOVE_ALL);   
      //  await context.commit(SET_TOTAL);   
    },
    async [CART_SUCCESS](context,payload) {
        await context.commit(SET_CART_SUCCESS);   
      //  await context.commit(SET_TOTAL);   
    },

    
};

const mutations = {
   
    addToCart (state, item) {
        console.log('addcart',item);
        state.cartTotal++
        if (item.slug in state.cart) {
          state.cart[item.slug].count++
        } else {
          let stateItem = Object.assign({}, item)
          stateItem.count = 1
          state.cart[item.slug] = stateItem
        }
      },


      [SET_TOTAL](state){
        let cart = localStorage.setItem("cart", JSON.stringify(state.cart));
        if(this.cart.length){
            let sum = 0;
            let total = 0;
            Object.keys(this.cart).forEach(key => {
                sum += parseInt(this.cart[key].totalPrice)
                total += this.cart[key].quantity;
           
         
            })
            state.PriceToTal.PriceToTals = sum
            state.PriceToTal.quantitys = total
       
           
        }else {
            state.PriceToTal.PriceToTals = 0        
        }

      },
      [SET_REMOVECART](state,item) {
       
        state.cartTotal--
        state.cart.splice(item, 1); 
       
      },
      [SET_GET_CART](state) {
        this.cart = JSON.parse(localStorage.getItem("cart"));
        console.log('cart',this.cart.length);
        state.cartTotal = this.cart.length
        state.cart = this.cart
      },
      [SET_CART](state,item) {

  
///เช็คสินค้าว่ามีอยู่ใน cart ไหม
// ถ้า  ให้ + จำนวน
// ถ้าไม่มีให้ Add
// if (data in state.cart) {
//     state.cart[data].count++
//     console.log('if',state.cart);
//   } else {
//     let stateItem = Object.assign(data)
//     stateItem.count = 1
//     state.cart[data] = stateItem

//     console.log('else');
//   }

// let found = state.cart.find(product => product.id == item.id);
//let found  = state.cart.push(product);
// console.log('found',state.cart);

// state.cartCount++;

// if()

let found = state.cart.find(product => product.id == item.id);
console.log('state.cart',state.cart);


if (found) {
 console.log('if');

 found.quantity ++;
 found.totalPrice = found.quantity * found.price;
} else {
    state.cart.push(item);

    Vue.set(item, 'quantity', 1);
    Vue.set(item, 'totalPrice', item.price);
    state.cartTotal++;
}
let a = localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    [SET_ADDUP](state,item) {


    let found = state.cart.find(product => product.id == item.id);



if (found) {
 console.log('if');

 found.quantity ++;
 found.totalPrice = found.quantity * found.price;
} else {
    state.cart.push(item);

    Vue.set(item, 'quantity', 1);
    Vue.set(item, 'totalPrice', item.price);
    state.cartTotal++;
}
let a = localStorage.setItem("cart", JSON.stringify(state.cart));

    },
    [SET_ADDDOWN](state,item) {

        let found = state.cart.find(product => product.id == item.id);



        if (found) {
         found.quantity --;
         found.totalPrice = found.quantity * found.price;
        } else {
            // state.cart.push(item);
        
            // Vue.set(item, 'quantity', 1);
            // Vue.set(item, 'totalPrice', item.price);
            // state.cartTotal++;
        }
     let a = localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    [SET_ADD_INPUT](state,item){
        let found = state.cart.find(product => product.id == item.id);



        if (found) {
         found.quantity = item.quantityinput
         found.totalPrice = found.quantity * found.price;
      
        } else {
            // state.cart.push(item);
        
            // Vue.set(item, 'quantity', 1);
            // Vue.set(item, 'totalPrice', item.price);
            // state.cartTotal++;
        }
    let a = localStorage.setItem("cart", JSON.stringify(state.cart));

    },

    [SET_REMOVE_ALL](state) {


        state.cart = [];
        let a = localStorage.setItem("cart", JSON.stringify(state.cart));

        state.PriceToTal = 0  
  
 
    },
    [SET_CART_SUCCESS](state) {

        state.cartTotal = 0,
        state.cart = []
    },
    
};

export default {
    state,
    getters,
    actions,
    mutations
};
