import Vue from 'vue'
import axios from 'axios'
import authHeader from './auth-header';
import AuthService from '../services/auth-service'
import VueAxios from 'vue-axios'




Vue.use(VueAxios, axios)
const API_URLs = 'http://127.0.0.1:8000/api/';


function logout() {
    // remove user from local storage to log user out
    console.log('ออก');
    localStorage.removeItem('user');
}

const ApiService = {

    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = { API_URL }; // SET URL API
        Vue.axios.defaults.xsrfCookieName = 'csrftoken'
        Vue.axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
      },

      setHeader() {
        Vue.axios.defaults.headers.common[
          "Authorization"
        ] = `Token ${JwtService.getToken()}`;
      },


     get(resource, slug = "") {
        // console.log('เข้า getxxxxxxxxxx','http://127.0.0.1:8000/api/admin/auth/'+resource)
       return axios.get('http://127.0.0.1:8000/api/'+resource , { headers: authHeader()}).catch(function(error) {
               AuthService.logout();
              // location.reload(true);

          });
    },
    post(resource, params) {
        return axios.post(API_URLs+resource,params, { headers: authHeader() }).catch(function(error) {
            AuthService.logout();
         //   location.reload(true);

        });

    },

    put(resource, params) {
        return axios.put(`http://127.0.0.1:8000/api/`+resource+`/${params}`,params, { headers: authHeader() }).catch(function(error) {
          //  AuthService.logout();
          // location.reload(true);

        });

    },


    show(resource, params) {
        // console.log('เข้า getxxxxxxxxxx','http://127.0.0.1:8000/api/admin/auth/'+resource)
        return axios.get('http://127.0.0.1:8000/api/'+resource+'/'+params, { headers: authHeader()}).catch(function(error) {
         //   AuthService.logout();
         //   location.reload(true);

        });
    },

    delete(resource, params) {

        return axios.delete('http://127.0.0.1:8000/api/'+resource + `/${params}`, { headers: authHeader() }).catch(function(error) {

        });
    },

    
    find(resource, params) {
        return Vue.axios.post('http://127.0.0.1:8000/api/'+resource, params,{ headers:authHeader() });
        },

    forgot(resource, params) {
      return Vue.axios.post('http://127.0.0.1:8000/api/'+resource, params,{ headers:authHeader() });
      },
    register(resource, params) {
        return Vue.axios.post('http://127.0.0.1:8000/api/'+resource, params,{ headers:authHeader() });
    },
    registerbyshop(resource, params) {
      return Vue.axios.post('http://127.0.0.1:8000/api/'+resource, params,{ headers:authHeader() 
    });

      

      
  },


    mutations: {
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        }
    }
};



export default ApiService;

