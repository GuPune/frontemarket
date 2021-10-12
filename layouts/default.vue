<template>




<div>

 

    <Nav />

<nuxt-child></nuxt-child>


      <Ads   v-if="currentRouteName == 'index'"/>
                <Categories  v-if="currentRouteName == 'index'" />

                    <Related v-if="currentRouteName == 'index'"/>
        
</div>

</template>


<script>
import Nav from "@/components/Nav"
import Ads from "@/components/Ads"
import Categories from "@/components/Categories"
import Related from "@/components/Related"
import LongFooter from "@/components/LongFooter"
import Footer from "@/components/Footer"
import { FETCH_ID_URL } from "@/store/actions.type.js";
    
    export default {
      components: {
          Nav
          },

    data: () => ({
    form:{
        url:null
    }
    }),

    computed: {
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

