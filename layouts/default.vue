<template>




<div style="contain: content;">
    <!--  <AcceptCookkie/>  -->
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


   

                <Footer  v-if="(currentRouteName != 'salepage-id') && (currentRouteName != 'salepage-id') && (currentRouteName != 'buy-slug') && (currentRouteName != 'buy-thankyou')"/>

<div v-if="this.pageId">

<div class="fb-customerchat"  :page_id="pageId">
 
</div>
  <div

    class="fb-customerchat"
    :page_id="pageId"
    theme_color="#4586ff"

  ></div>


   </div>    
   
</div>

</template>

 <script>
 </script>

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
import { FETCH_ID_URL,FETCH_FACEBOOK,GET_FOOTER } from "@/store/actions.type.js";
import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'
import axios from 'axios';
import AcceptCookkie from "@/components/AcceptCookkie"

 

//      const s = null;
  
//                 console.log('public_images',public_images);



      let checker = localStorage.getItem("pageId");

      Vue.use(VueFbCustomerChat, {
  page_id: checker, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})


  

    export default {
      components: {
          NavShop,
          Nav,Loader,AcceptCookkie
          },

    data: () => ({
      
    pageId:null,
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

          checkCookie() {
             let checkcookie = this.$store.getters.checkcook;

              return checkcookie;
            },

 

  
     

    },

    beforeCreate(){

    },
    async created() {

// console.log('a',a);
// let b = a.toString;

//     Vue.use(VueFbCustomerChat, {
//   page_id: "110934761475251", //  change 'null' to your Facebook Page ID,
//   theme_color: '#333333', // theme color in HEX
//   locale: 'en_US', // default 'en_US'
// })

        this.form.url = window.location.origin
        let get_face = await this.$store.dispatch(FETCH_FACEBOOK,this.form);
     //  this.abc = 1697883653756763;
   //     get_face.facebook

   localStorage.setItem("pageId", get_face.facebook);
    },
     
    async mounted() {
       alert('test');
        let getcook = this.$cookie.get("ssid");
        this.form.url = window.location.origin
        let get_url = this.$store.dispatch(FETCH_ID_URL,this.form);


    
this.footer();
       // let clearalert = this.$store.dispatch(CLEARALRET);

        // if(this.$store.state.auth.user){
        //       let a = await this.$store.dispatch(FETCH_GET_PROFILE)
        // }
        // console.log('this.$store.state.auth.user',this.$store.state.auth.user);
      
    },
    methods: {
 footer(){
   
    this.form.url = window.location.origin;
         this.form.shop_name = this.$route.params;
    
     let footer = this.$store.dispatch(GET_FOOTER,this.form);

},
  


Checkimage(){

     this.pageId = "1697883653756763";

   return "1697883653756763";
}
    }

 
    };
    
</script>

