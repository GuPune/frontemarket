<template>
<div class="c-map">
<div class="container">
<GmapMap
   v-bind:center="center"
  :zoom="15"
  map-type-id="terrain"
  style="width: 650; height: 450px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
  
</div>
</div>

    
</template>


<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import { FETCH_ADS } from "../store/actions.type.js";
import axios from '@nuxtjs/axios'
  export default {
    data() {
    return {
      center : { lat: 16.4435101, lng:102.8583772},
      markers: [
    {
      position : { lat : 16.4435101, lng: 102.8583772}
    }
      ],
      apix:'AIzaSyCmpJGPB1Vy0yZNQi2-hnNIfNI5e1qyA9U',
      IsLogin: false,
      slide: 0,
        sliding: null
    };
  },


     computed: {

        },
           

   
        created(){
   
        },
        

    
        
      mounted() {
     
       this.$store.dispatch(FETCH_ADS);
         },

      methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      Checkimage(image){
        
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

        }


           
        }

  let x  = localStorage.getItem("map");
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCmpJGPB1Vy0yZNQi2-hnNIfNI5e1qyA9U' ,
    libraries: 'places', 

  },
 

})



</script>
