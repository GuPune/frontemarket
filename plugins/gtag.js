import Vue from 'vue'
import VueGtag from 'vue-gtag'
import axios from 'axios'

let a = window.location.origin;

axios.post('backoffice.thaionzon.com/api/gtag', {
    data: a
  }).then(res => {
 console.log('a',res.data);
 Vue.use(VueGtag, {
    config: { id: res.data }
  })
  }).catch(function(){
     
  
  
});


