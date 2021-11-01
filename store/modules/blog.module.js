
import { BlogService }  from "../../services/blog";
import {
    FETCH_BLOG
} from "../actions.type.js";
import {
    SET_BLOG
} from "../mutations.type";
import Vuex from 'vuex'


const state = {
    blog:[]
}

const getters = {
    blog: state => {
        return state.blog
    },
};


const actions = {
    async [FETCH_BLOG](context,payload) {

        const { data } = await BlogService.getblog(payload);
        context.commit(SET_BLOG,data);
        return data;
    },
};

const mutations = {
    [SET_BLOG](state,data) {
        
    }
  
};

export default {
    state,
    getters,
    actions,
    mutations
};
