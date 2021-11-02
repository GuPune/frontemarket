<template>
<div>

<GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>

</GmapMap>
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
      apix:'AIzaSyCmpJGPB1Vy0yZNQi2-hnNIfNI5e1qyA9U',
      IsLogin: false,
      slide: 0,
        sliding: null
    };
  },


     computed: {

        },
           

   
        created(){
             alert('1');
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
    key: x ,
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})



</script>
