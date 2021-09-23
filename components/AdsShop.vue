<template>
<div class="asd-shop" style="padding-top:32px">
<div>
  <img loading="lazy" src="https://demo.bagisto.com/marketplace-184-82-60-131/themes/velocity/assets/images/banner.png" class="col-12 no-padding banner-icon" style="display: block;padding: 0;">
</div>
</div>
</template>


<script>
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import { FETCH_ADS } from "../store/actions.type.js";
  export default {
    data() {
    return {
      IsLogin: false,
      slide: 0,
        sliding: null
    };
  },


     computed: {
      ...mapGetters(["ads"]),
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
        
                let a = 'https://demo.bagisto.com/marketplace-184-82-60-131/themes/velocity/assets/images/banner.png';
                return a;
        }

        }


           
        }


</script>
