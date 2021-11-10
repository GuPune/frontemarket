<template>




<div>



<Loader v-if="product.loading"/>
  

 <Nav   v-if="currentRouteName != 'salepage'"/>
<nuxt-child></nuxt-child>


      <Ads   v-if="currentRouteName == 'index'"/>
                <Categories  v-if="currentRouteName == 'index'" />

                    <Related v-if="currentRouteName == 'index'"/>
        
</div>

</template>


<script>
import Header from "@/components/Header"
import Nav from "@/components/Nav"
import Ads from "@/components/Ads"
import Categories from "@/components/Categories"
import Related from "@/components/Related"
import LongFooter from "@/components/LongFooter"
import Footer from "@/components/Footer"
import Loader from '@/components/Loader'
import { mapState } from 'vuex'
import { FETCH_ID_URL } from "@/store/actions.type.js";
    
    export default {
      components: {
          Header,
          Nav,Loader
          },

    data: () => ({
    
    form:{
        url:null
    }
    }),

    computed: {
             ...mapState({
                product: state => state.ProductShell
            }),
        currentRouteName() {

        return this.$route.name;
    },
    isUrl () {
                return this.$store.state.user.url_id;
    },

 

  
     

    },
     created() {

        
    },
    mounted() {
       
        this.form.url = window.location.origin
        let get_url = this.$store.dispatch(FETCH_ID_URL,this.form);
       // let clearalert = this.$store.dispatch(CLEARALRET);
      
    },
    methods: {
      
    }
    };
    
</script>

