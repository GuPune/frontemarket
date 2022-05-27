<template>
<div>
   <b-navbar   style="background-color:colors" class="banav nav-shop-tops">
    <b-navbar-brand href="#"></b-navbar-brand>
         <img :src="Checkimage(objectslayoutshop.logo)"  alt=""  class="icon-mobile">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>



    <b-collapse id="nav-collapse" is-nav>
   <b-col cols="8" md="8"  sm="3" class="nav-form-search nav-search">
        <b-form-input placeholder="Find a good product ?" v-model="form.search" v-if ="this.language == 'en'"></b-form-input>
              <b-form-input placeholder="寻找好的产品 ?" v-model="form.search" v-if ="this.language == 'ch'"></b-form-input>
              <b-form-input placeholder="ค้นหาสินค้าอะไรดี ?" v-model="form.search" v-if ="this.language == 'th' || this.language == null"></b-form-input>
      </b-col>
       <b-col cols="4" md="2"  sm="3" class="nav-form-search">
  <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
             <b-col cols="1" md="1"  sm="1" class="nav-form-search">


  <b-button variant="outline-primary ic-nav-bg-white" @click="Search()">   <i class="fas fa  fas fa-search ic-nav-black" aria-hidden="true"></i></b-button>

      </b-col>

      <!-- Right aligned nav items -->

      <b-navbar-nav class="ml-auto">


     <b-nav-item :href="objectslayoutshop.link_social_face"  target="_blank"><img  :src="Checkimage(objectslayoutshop.image_face)"  alt="" height="20px" width="20px"></b-nav-item>
     <b-nav-item  :href="objectslayoutshop.link_social_line"><img  :src="Checkimage(objectslayoutshop.image_line)" alt="" height="20px" width="20px"></b-nav-item>
    <b-nav-item  :href="objectslayoutshop.link_social_instr"><img  :src="Checkimage(objectslayoutshop.image_intra)" alt="" height="20px" width="20px"></b-nav-item>

      </b-navbar-nav>


    </b-collapse>



  </b-navbar>





   <b-navbar toggleable="sm"   style="{'background-color':colors}"  class="banav navbar-fixed-top navshop-mobiles" :fixed="position" v-on:scroll.native="handleScroll">
    <b-navbar-brand href="#"><div class="shop-name-nav-mobile">
       <!-- <img :src="Checkimage(objectslayoutshop.logo)" alt=""  class="icon-mobile"> -->
    </div>
    </b-navbar-brand>
      <b-navbar-brand href="#" class="navshop-mobile-search">
        <b-row>
     <b-col cols="10" md="8"  sm="12" class="nav-form-search nav-search">
              <b-form-input placeholder="Find a good product ?" v-model="form.search" v-if ="this.language == 'en'"></b-form-input>
              <b-form-input placeholder="寻找好的产品 ?" v-model="form.search" v-if ="this.language == 'ch'"></b-form-input>
              <b-form-input placeholder="ค้นหาสินค้าอะไรดี ?" v-model="form.search" v-if ="this.language == 'th' || this.language == null"></b-form-input>

      </b-col>
     <b-col cols="2" md="8"  sm="12" class="nav-form-search nav-search">
                         <b-button variant="outline-primary ic-nav-bg-white" @click="Search()">   <i class="fas fa  fas fa-search ic-nav-black" aria-hidden="true"></i></b-button>

      </b-col>
  </b-row>


    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


    <b-navbar-nav>
      <b-nav-item href="#" v-for="(item, index) in menu" :key="item.id"  @click="redirectTolink(item.link)"  :class="{'rkknoob': checkPath(item.link)}">{{item.name}}</b-nav-item>

    </b-navbar-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
     <!-- <b-nav-item href="#"><img src="http://www.dgtfarm.com/images/thai-flag.png" alt="" height="20px" width="20px"></b-nav-item>
     <b-nav-item href="#"><img src="http://www.dgtfarm.com/images/eng-flag.png" alt="" height="20px" width="20px"></b-nav-item> -->
     <b-nav-item href="#">{{objectslayoutshop.textsellermyshop}}</b-nav-item>
     <b-nav-item href="#" @click="redirectTo('cart-orderlist')"><i class="fas fa fa-cart-plus"  :style="{'color':objectslayoutshop.icon_color}" aria-hidden="true"></i>
                    <span  :style="{'color':objectslayoutshop.text_login_color}"> ({{ cartTotal }}) </span></b-nav-item>

   <b-nav-item  v-if="!isLogins" @click="redirectTo('form-login')"><span   :style="{'color':objectslayoutshop.text_login_color}">{{objectslayoutshop.textlogin}}</span></b-nav-item>
          <b-nav-item-dropdown right  v-if="isLogins">
          <!-- Using 'button-content' slot -->
          <template #button-content>
             <em>{{objects.name}} </em>
          </template>
          <b-dropdown-item href="#" @click="redirectTo('profile-userprofile')">Profile</b-dropdown-item>
          <b-dropdown-item href="#"  @click.prevent="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</div>
</template>




<script>


import { mapGetters,mapState } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART,GET_CART,GET_MENU,GET_SHOP_BY_ITEM,FETCH_GET_PROFILE,GET_PRODUCT_SHELL_FIND } from "@/store/actions.type.js";
  export default {
    data() {
    return {
      placeholder_sereach:'',
      placeholder_login:'',
      placeholder_logout:'',
      placeholder_mysell:'',
      placeholder_profile:'',
      language:'',
      colors:'#F5ECEA',
      IsLogin: false,
      position:'',
      selected: 'a',
            shopitem:null,
     form:{
        search:"",
      },

      options: [
          { value: 'a', text: 'สินค้า'},
        ]
    };
  },


     computed: {
         ...mapGetters(["authenticated","menu"]),

             ...mapState({
                objects: state => state.user.profile,
                objectslayoutshop: state => state.Layout.navbar_shop,
             }),





        isLogins () {
                return this.$store.state.auth.loggedIn;
        },

        isUrl () {
                return this.$store.state.user.url_id;
        },


        cartTotal () {
        return this.$store.state.Cart.cartTotal
        }


        },
     async created () {

            window.addEventListener('scroll', this.handleScroll);


                   this.language = localStorage.getItem("language");

        if(this.language == 'en'){
         this.placeholder_sereach = 'Find a good product ?';
         this.options[0].text = 'Product';
         this.placeholder_login = 'Login';
        this.placeholder_mysell = 'Sell products with us';
        this.placeholder_profile = 'Profile';
        this.placeholder_logout = 'Logout';
        }
        if(this.language == 'ch'){
          this.placeholder_sereach = '寻找好的产品';
          this.options[0].text = '产品';
          this.placeholder_login = '登入';
          this.placeholder_mysell = '和我们一起卖';
          this.placeholder_profile = 'Profile';
          this.placeholder_logout = 'Logout';
        }
        if(this.language == 'th' || this.language == null){
          this.placeholder_sereach = 'ค้นหาสินค้าอะไรดี ?';
          this.options[0].text = 'สินค้า';
          this.placeholder_login = 'เข้าสู่ระบบ';
          this.placeholder_mysell = 'ขายสินค้ากับเรา';
          this.placeholder_profile = 'โปรไฟล์';
          this.placeholder_logout = 'ออกจากระบบ';
        }

    },
    destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
    },




      async mounted() {
    let a = this.$store.dispatch(FETCH_GET_PROFILE)
          let checker = await localStorage.getItem("user");
          let cart = await this.$store.dispatch(GET_CART);


                    this.form.url = window.location.origin;
         this.form.shop_name = this.$route.params;
     let menu = await this.$store.dispatch(GET_MENU,this.form);

       let shopby = await this.$store.dispatch(GET_SHOP_BY_ITEM,this.form);
        this.shopitem = shopby;


          if(checker){
            this.IsLogin = true;
               this.$store.dispatch('auth/userstorage');
          }else{
            this.IsLogin = false;
          }

       //   this.colors = this.objectslayoutshop.navbar_menu_color;
         },

      methods: {

               async Search(){
  if(this.form.search == ''){
  return   this.$router.push('/');

  }

          let productfind = await this.$store.dispatch(GET_PRODUCT_SHELL_FIND,this.form);



                        let path = this.$route.path
  this.$router.push({ name: 'find' })




        },

            Checkimage(image){
                let public_images = process.env.ImageSoc+image;

                return public_images;
          },

        handleScroll(event) {
      // Any code to be executed when the window is scrolled

      if(window.scrollY > 100){
     this.colors = '#EF7318';

        this.position = 'top'
      }else {
     this.colors = '#F5ECEA';
      this.position = '-'
      }


            },
            redirectTo(names) {

                let path = this.$route.path
                if (path !== names) {



            //  this.$router.push({ path: `/1/${name}` }) // -> /user/123
                //   this.$router.push({ params: { id: '1' } ,name: name})
                   this.$router.push({ name: names})
                }
            },
                    redirectTolink(names) {
              let path = this.$route.path
               if (path !== names) {
               const Shopid = this.$route.params.id;

             this.$router.push({ name: names, params: { id: Shopid }})
                }
        },

            checkPath(name) {
                let path = this.$nuxt.$route.name


 if (name === path) {

                        return true
                    } else {
                        return false
                    }
              //  return (name === path)
            },



          logout() {
    this.$auth.logout()


     }
        }



        }


</script>
