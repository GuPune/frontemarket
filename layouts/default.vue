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




<div class="fb-customerchat" page_id="110934761475251"  :page_id="pageId"></div>
        
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
import { FETCH_ID_URL,FETCH_FACEBOOK } from "@/store/actions.type.js";
import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'
 


    export default {
      components: {
          NavShop,
          Nav,Loader
          },

    data: () => ({
      
    pageId: Checkimage(),
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
    async created() {
        this.form.url = window.location.origin
        let get_face = await this.$store.dispatch(FETCH_FACEBOOK,this.form);
       this.pageId = "1697883653756763";
   //     get_face.facebook
    },
     
    async mounted() {
       
        this.form.url = window.location.origin
        let get_url = this.$store.dispatch(FETCH_ID_URL,this.form);


       // let clearalert = this.$store.dispatch(CLEARALRET);
      
    },
    methods: {

Checkimage(){

     this.pageId = "1697883653756763";

   return this.pageId;
}
    }

 
    };
    
</script>

