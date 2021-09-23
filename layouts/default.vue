<template>




<div>

 
{{currentRouteName}}
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
    
    export default {
      components: {
          Nav
          },

    data: () => ({
    
    }),

    computed: {
        currentRouteName() {
       console.log('this.$route.name',this.$route.name);
        return this.$route.name;
    },
  
     

    },
    created() {

    },
    mounted() {
       // let clearalert = this.$store.dispatch(CLEARALRET);
      
    },
    methods: {
      
    }
    };
    
</script>

