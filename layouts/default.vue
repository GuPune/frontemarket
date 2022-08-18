<template>




<!-- <div style="contain: content;"> -->

<div style="content">
<Loader v-if="product.loading"/>
 <Nav  v-if="(currentRouteName != 'salepage-id') && (currentRouteName != 'salepage-id') && (currentRouteName != 'buy-slug') && (currentRouteName != 'buy-thankyou')  && (currentRouteName != 'line')  && (currentRouteName != 'line-id') && (currentRouteName == 'index') || (currentRouteName == 'cart-orderlist') || (currentRouteName == 'cart-comfirmorder') || (currentRouteName == 'cart-payment') || (currentRouteName == 'cart-success') || (currentRouteName == 'profile-historyorder') || (currentRouteName == 'find') || (currentRouteName == 'form-shopregis')  || (currentRouteName == 'form-userregis') || (currentRouteName == 'id-product-productdetail-slug')  || (currentRouteName == 'shoperror')"/>
 <NavShop  v-if="(currentRouteName == 'id')  || (currentRouteName == 'id-about') || (currentRouteName == 'id-new') || (currentRouteName == 'id-contact') || (currentRouteName == 'id-new-blogid')"/>



<nuxt-child></nuxt-child>


      <Ads   v-if="currentRouteName == 'index'"/>
                <!-- <Categories  v-if="currentRouteName == 'index'" /> -->
                <Test  v-if="currentRouteName == 'index'" />

<Related v-if="currentRouteName == 'index'"/>
<News v-if="currentRouteName == 'index'"/>

    <ShopRelation v-if="currentRouteName == 'index'"/>


   <LongFooter  v-if="(currentRouteName != 'salepage-id') && (currentRouteName != 'salepage-id') && (currentRouteName != 'buy-slug') && (currentRouteName != 'buy-thankyou') "/>




                <Footer  v-if="(currentRouteName != 'salepage-id') && (currentRouteName != 'salepage-id') && (currentRouteName != 'buy-slug') && (currentRouteName != 'buy-thankyou')"/>


<div class="icon-bar">
  <a href="" class="facebook" @click="language('th')"><img src="../assets/th.jpg" title="ไทย"></a>


  <a href="" class="twitter"  @click="language('en')"><img src="../assets/en.jpg" title="อังกฤษ"></a>
  <a href="" class="youtube" @click="language('ch')"><img src="../assets/ch.png" title="จีน"></a>
  <!-- <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">English</nuxt-link>
<nuxt-link v-if="$i18n.locale !== 'th'" :to="switchLocalePath('th')">ไทย</nuxt-link> -->
  <!-- <a href="#" class="google"><i class="fa fa-google"></i></a>
  <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
  <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> -->
</div>
<div>
  <button class="bt-top btn bt-top-line" onclick="window.open('https://page.line.me/?accountId=754jotpn','_blank')">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="33" height="33" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
          <g>
            <path xmlns="http://www.w3.org/2000/svg" d="m12 .5c-6.615 0-12 4.398-12 9.803 0 4.841 4.27 8.897 10.035 9.668.391.083.923.26 1.058.594.12.303.079.771.038 1.087l-.164 1.026c-.045.303-.24 1.193 1.049.649 1.291-.542 6.916-4.104 9.436-7.019 1.724-1.9 2.548-3.847 2.548-6.005 0-5.405-5.385-9.803-12-9.803zm-4.697 13.017h-2.386c-.345 0-.63-.287-.63-.633v-4.801c0-.347.285-.634.63-.634.348 0 .63.287.63.634v4.167h1.756c.348 0 .629.285.629.634 0 .346-.282.633-.629.633zm2.466-.633c0 .346-.282.633-.631.633-.345 0-.627-.287-.627-.633v-4.801c0-.347.282-.634.63-.634.346 0 .628.287.628.634zm5.741 0c0 .272-.174.513-.432.6-.064.021-.133.031-.199.031-.211 0-.391-.091-.51-.252l-2.443-3.338v2.958c0 .346-.279.633-.631.633-.346 0-.626-.287-.626-.633v-4.8c0-.272.173-.513.43-.599.06-.023.136-.033.194-.033.195 0 .375.105.495.256l2.462 3.351v-2.975c0-.347.282-.634.63-.634.345 0 .63.287.63.634zm3.855-3.035c.349 0 .63.287.63.635 0 .347-.281.634-.63.634h-1.755v1.132h1.755c.349 0 .63.285.63.634 0 .346-.281.633-.63.633h-2.386c-.345 0-.627-.287-.627-.633v-4.801c0-.347.282-.634.63-.634h2.386c.346 0 .627.287.627.634 0 .351-.281.634-.63.634h-1.755v1.132z" fill="#ffffff" data-original="#4caf50" style="filter: none;" class="">
            </path>
          </g>
        </svg>
      </button>

  </div>
<div v-if="this.pageId">





<div class="fb-customerchat"  :page_id="pageId">

</div>
  <div

    class="fb-customerchat"
    :page_id="pageId"
    theme_color="#4586ff"

  ></div>


   </div>


         <AcceptCookkie v-if="this.hide == true"/>

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
import News from "@/components/News"
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
hide:false,
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

        let language = localStorage.getItem("language");




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


//this.get_cookies_array();

        let getcook = this.$cookie.get("ssid");


        if(getcook == null){

this.hide = true;

    }else{

this.hide = false;
    }
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

      get_cookies_array() {



},
      language(e){
          let x =  localStorage.setItem("language", e);

      },
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

