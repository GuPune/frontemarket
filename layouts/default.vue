<template>




<div>
<Loader v-if="product.loading"/>
 <Nav  v-if="(currentRouteName != 'salepage-id') && (currentRouteName != 'salepage-id') && (currentRouteName != 'buy-slug') && (currentRouteName != 'buy-thankyou')  && (currentRouteName != 'line')  && (currentRouteName != 'line-id') && (currentRouteName == 'index') || (currentRouteName == 'cart-orderlist') || (currentRouteName == 'cart-comfirmorder') || (currentRouteName == 'cart-payment') || (currentRouteName == 'cart-success') || (currentRouteName == 'profile-historyorder') || (currentRouteName == 'find') || (currentRouteName == 'form-shopregis')  || (currentRouteName == 'form-userregis') || (currentRouteName == 'id-product-productdetail-slug')  || (currentRouteName == 'shoperror')"/>
 <NavShop  v-if="(currentRouteName == 'id')  || (currentRouteName == 'id-about') || (currentRouteName == 'id-new') || (currentRouteName == 'id-contact') || (currentRouteName == 'id-new-blogid')"/>
<nuxt-child></nuxt-child>


      <Ads   v-if="currentRouteName == 'index'"/>
                <!-- <Categories  v-if="currentRouteName == 'index'" /> -->
                <Test  v-if="currentRouteName == 'index'" />
               
<Related v-if="currentRouteName == 'index'"/>
    
    <ShopRelation v-if="currentRouteName == 'index'"/>


   <LongFooter  v-if="(currentRouteName != 'salepage-id') && (currentRouteName != 'salepage-id') && (currentRouteName != 'buy-slug') && (currentRouteName != 'buy-thankyou') "/>


            <div class="footer ema-footer" v-if="(currentRouteName != 'salepage-id') && (currentRouteName != 'salepage-id') && (currentRouteName != 'buy-slug') && (currentRouteName != 'buy-thankyou') ">
                      <div class="col-sm">
                            <small>Copyright © 2022 ID ID-Market Place. All rights reserved Beta 12/1/2565</small>
                        </div>
                </div>


<div class="fb-customerchat"
 page_id="1697883653756763">
</div>
        
</div>

</template>


<script>
import NavShop from "@/components/NavbarShop"
import Nav from "@/components/Nav"
import Ads from "@/components/Ads"
import Categories from "@/components/Categories"
import Related from "@/components/Related"
import ShopRelation from "@/components/ShopRelation"
import Test from "@/components/Test"
import LongFooter from "@/components/LongFooter"
import Footer from "@/components/Footer"
import Loader from '@/components/Loader'
import { mapState } from 'vuex'
import { FETCH_ID_URL } from "@/store/actions.type.js";
import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'
 
Vue.use(VueFbCustomerChat, {
  page_id: '4578428388940773', //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})


    export default {
      components: {
          NavShop,
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
console.log('this.$route.name',this.$route.name);
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

