
import { ProductService }  from "../../services/product";
import {
    FETCH_PRODUCT_SHELL
} from "../actions.type.js";
import {
    SET_PRODUCT_SHELL
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    product_shell:[]
}

const getters = {
    product_shell: state => {
        return state.product_shell
    },
};


const actions = {
    async [FETCH_PRODUCT_SHELL](context) {

        const { data } = await ProductService.get();
        context.commit(SET_PRODUCT_SHELL,data);
        return data;
    },
};

const mutations = {
    [SET_PRODUCT_SHELL](state,data) {
        state.product_shell = data;
        console.log('state.product_shell',state.product_shell);
    }
  
};

export default {
    state,
    getters,
    actions,
    mutations
};
