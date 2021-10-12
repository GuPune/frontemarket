
import { ProductService }  from "../../services/product";
import {
    FETCH_PRODUCT_SHELL,FETCH_PRODUCT_FIND,FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,FETCH_FIND_PRODUCT,FETCH_BY_PRODUCT_SHOP_ONE_ITEM
} from "../actions.type.js";
import {
    SET_PRODUCT_SHELL,SET_PRODUCT_BY_SHOP,SET_CATE_BY_SHOP,SET_CATE_SEC,SET_BY_PRODUCT_SHOP_ONE_ITEM
} from "../mutations.type";
import Vuex from 'vuex'

const state = {
    product_shell:[],
    product_by_shop:[],
    cate_by_shop:[],
    cate_sel:[],
    product_by_item:[],
    images: {
        thumbs: [
          {
            id: 1,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/1.jpeg"
          }
        ],
        normal_size: [
          {
            id: 1,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/1.jpeg"
          }
        ],
        large_size: [
          {
            id: 1,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/1.jpeg"
          }
        
        ]
      },
}

const getters = {
    product_shell: state => {
        return state.product_shell
    },
    cate_by_shop: state => {
        return state.cate_by_shop
    },
    product_by_shop: state => {
        return state.product_by_shop
    },
    cate_sel: state => {
        return state.cate_sel
    },
    product_by_item: state => {
        return state.product_by_item
    },
    images: state => {
        return state.images
    },
   
};


const actions = {
    async [FETCH_PRODUCT_SHELL](context) {

        const { data } = await ProductService.get();
        context.commit(SET_PRODUCT_SHELL,data);
        return data;
    },

    async [FETCH_PRODUCT_FIND](context,payload) {
        const { data } = await ProductService.find(payload);
        context.commit(SET_PRODUCT_SHELL,data);
        return data;
    },
    async [FETCH_PRODUCT_BY_SHOP](context,payload) {
        const { data } = await ProductService.getproductbyshop(payload);
        console.log('product',data);
        context.commit(SET_PRODUCT_BY_SHOP,data);
        return data;
    },
    async [FETCH_CATE_BY_SHOP](context,payload) {
        //   const { data } = await ProductService.find(payload);
        const { data } = await ProductService.getcatebyshop(payload);
        console.log('cate',data);
           context.commit(SET_CATE_BY_SHOP,data);
           return data;
       },

       async [FETCH_FIND_PRODUCT](context,payload) {
        const { data } = await ProductService.findcatebyshop(payload);
        console.log('data',data);
        context.commit(SET_CATE_SEC,payload);
        context.commit(SET_PRODUCT_BY_SHOP,data);
           return data;
       },

    async [FETCH_BY_PRODUCT_SHOP_ONE_ITEM](context,payload) {
           const { data } = await ProductService.getproductbyitem(payload);
         
       // const { data } = await ProductService.getcatebyshop(payload);
         context.commit(SET_BY_PRODUCT_SHOP_ONE_ITEM,data);
          return data;
    },   
};

const mutations = {
    [SET_PRODUCT_SHELL](state,data) {
        state.product_shell = data;
        console.log('state.product_shell',state.product_shell);
    },
    [SET_PRODUCT_BY_SHOP](state,data) {
        state.product_by_shop = data.data;
        console.log('state.product_by_shop',state.product_by_shop);
    },
    [SET_CATE_BY_SHOP](state,data) {
            state.cate_by_shop = data.data;
        console.log('state.cate_by_shop',state.cate_by_shop);
    },
    [SET_CATE_SEC](state,data) {
        
  let car = state.cate_by_shop
        for (let i = 0; i < car.length; i++) {
            if(data.cate_type == car[i].id){
                state.cate_sel = []
                state.cate_sel.push(car[i])
            }
          }
        //https://medium.com/nectec/vue-js-2-and-vuex-3-with-typescript-6f047f17ff32 find state
},
    [SET_BY_PRODUCT_SHOP_ONE_ITEM](state,data) {
        
        state.product_by_item = data.data;
        console.log('state.product_by_item',state.product_by_item);
    },


  
};

export default {
    state,
    getters,
    actions,
    mutations
};
