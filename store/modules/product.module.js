
import { ProductService }  from "../../services/product";
import {
    FETCH_PRODUCT_SHELL,FETCH_PRODUCT_FIND,FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,FETCH_FIND_PRODUCT,FETCH_BY_PRODUCT_SHOP_ONE_ITEM,GET_PRODUCR_SELLER,GET_PRODUCR_NEW,GET_PRODUCR_RECOM,FETCH_IMAGE_PRODUCT,GET_PRODUCT_FIND,GET_PRODUCT_SHELL_FIND,GET_FAV,DEL_FAV,ADD_FAV,GET_FAVALL
} from "../actions.type.js";
import {
    SET_PRODUCT_SHELL,SET_PRODUCT_BY_SHOP,SET_CATE_BY_SHOP,SET_CATE_SEC,SET_BY_PRODUCT_SHOP_ONE_ITEM,SET_LOADER,SET_IMAGES,SET_PRODUCTSHELL_FIND,SET_SHELL_CATE,SET_KEYWORD,SET_FAV
} from "../mutations.type";
import Vuex from 'vuex'
import Vue from 'vue'



const state = {
    searchkeyword:null,
    loading:false,
    product_shell:[],
    product_shell_find:[],
    product_by_shop:[],
    cate_by_shop:[],
    cate_sel:[],
    fav:[],
    shell_cate:null,
    product_by_item:[],
    purchase: {
        product: null,
        customer: null,
        quantity: null
      },
    images: {

      },
}

const getters = {
    product_shell: state => {
        return state.product_shell
    },
    product_shell_find: state => {
        return state.product_shell_find
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
    loading: state => {
        return state.loading
    },
    shell_cate: state => {
        return state.shell_cate
    },
    searchkeyword: state => {
        return state.searchkeyword
    },
    fav: state => {
      return state.fav
    },


};


const actions = {
    async [FETCH_PRODUCT_SHELL](context,payload) {
        context.commit(SET_LOADER);
        const { data } = await ProductService.getshell(payload);
        context.commit(SET_PRODUCT_SHELL,data);

        return data;
    },

    async [FETCH_PRODUCT_FIND](context,payload) {
        const { data } = await ProductService.find(payload);

        context.commit(SET_PRODUCT_SHELL,data);
        context.commit(SET_SHELL_CATE,payload);
        return data;
    },
    async [FETCH_PRODUCT_BY_SHOP](context,payload) {
        const { data } = await ProductService.getproductbyshop(payload);

        context.commit(SET_PRODUCT_BY_SHOP,data);
        return data;
    },
    async [GET_PRODUCT_FIND](context,payload) {
        const { data } = await ProductService.getproductshellfind(payload);
       context.commit(SET_PRODUCT_BY_SHOP,data);
        return data;
    },
    async [GET_PRODUCT_SHELL_FIND](context,payload) {
        console.log('payload',payload);
        const { data } = await ProductService.getproductshellfind(payload);

        context.commit(SET_KEYWORD,payload);
       context.commit(SET_PRODUCTSHELL_FIND,data);
        return data;
    },



    async [FETCH_CATE_BY_SHOP](context,payload) {
        //   const { data } = await ProductService.find(payload);
        const { data } = await ProductService.getcatebyshop(payload);

           context.commit(SET_CATE_BY_SHOP,data);
           return data;
       },

       async [FETCH_FIND_PRODUCT](context,payload) {

        const { data } = await ProductService.findcatebyshop(payload);

        context.commit(SET_CATE_SEC,payload);
        context.commit(SET_PRODUCT_BY_SHOP,data);
           return data;
       },

    async [FETCH_BY_PRODUCT_SHOP_ONE_ITEM](context,payload) {
           const { data } = await ProductService.getproductbyitem(payload);

   console.log(data);
         context.commit(SET_BY_PRODUCT_SHOP_ONE_ITEM,data);
          return data;
    },
    async [GET_PRODUCR_SELLER](context,payload) {
        const { data } = await ProductService.getproductbyseller(payload);

        return data;

    },
    async [GET_PRODUCR_NEW](context,payload) {
        const { data } = await ProductService.getproductbynew(payload);

        return data;

    },
    async [GET_PRODUCR_RECOM](context,payload) {
        const { data } = await ProductService.getproductbyrecom(payload);

        return data;
    },
    async [FETCH_IMAGE_PRODUCT](context,payload) {
        const { data } = await ProductService.getimages(payload);
        context.commit(SET_IMAGES,data);
        return data;
    },
    async [GET_FAV](context,payload) {
        const { data } = await ProductService.getfav(payload);
        return data;
    },
    async [ADD_FAV](context,payload) {
        const { data } = await ProductService.addfav(payload);
        return data;
    },
    async [DEL_FAV](context,payload) {
        const { data } = await ProductService.delfav(payload);
        return data;
    },
    async [GET_FAVALL](context,payload) {
      const { data } = await ProductService.getfavall(payload);
      context.commit(SET_FAV,data);
      return data;
  }



};

const mutations = {
    [SET_IMAGES](state,data) {



    },
    [SET_LOADER](state,isLoading = true) {
        state.loading = isLoading
    },
    [SET_PRODUCT_SHELL](state,data) {


      state.product_shell = data;
   let b = state.product_shell
        state.loading = false

        // const rkknoob = {
        //     'id': 1,
        //     'desc': 1
        //   }

        for (let i = 0; i < b.length; i++) {



            Vue.set(b[i], 'fav', 0);



        // Vue.set(item, 'quantity', 1);
        // Vue.set(item, 'totalPrice', item.price);

          }
          console.log('c',state.product_shell);

    },
    [SET_PRODUCT_BY_SHOP](state,data) {
        state.product_by_shop = data.data;
        state.loading = false

    },
    [SET_CATE_BY_SHOP](state,data) {
            state.cate_by_shop = data.data;
            state.loading = false

    },
    [SET_SHELL_CATE](state,data) {

        state.shell_cate = data.cat;

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
        state.loading = false;
        state.images.thumbs = state.product_by_item.thumbs
        state.images.normal_size = state.product_by_item.normal_size
        state.images.large_size = state.product_by_item.large_size


    },

    [SET_PRODUCTSHELL_FIND](state,data) {
        state.product_shell_find = data;
        console.log('state.product_shell_find',state.product_shell_find);
    },

    [SET_KEYWORD](state,data) {
        state.searchkeyword = data.search;
        console.log('state.searchkeyword',state.searchkeyword);
    },
    [SET_FAV](state,data) {
      console.log('state.fav',data);
      state.fav = data.fav;
      console.log('state.fav',state.fa);

  },








};

export default {
    state,
    getters,
    actions,
    mutations
};
