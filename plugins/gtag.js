import Vue from 'vue'
import VueGtag from 'vue-gtag'
import axios from 'axios'

let a = window.location.origin;

axios.post('https://back.nfemarket.online/api/gtag', {
    data: a
  }).then(res => {

 Vue.use(VueGtag, {
    config: { id: res.data }
  })
  }).catch(function(){



});


