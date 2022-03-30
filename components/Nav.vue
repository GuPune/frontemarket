<template>

<div>

  <b-container class="bv-example-row nav-first-s nav-desktop-last" v-if="objectslayout">
  <b-row>

    <b-navbar toggleable="sm" type="dark"   :style="{'background-color':objectslayout.color}" class="banav navbar-fixed-top" fixed="top">
    <b-navbar-brand  @click="redirectTo('index')">
   <img src="../assets/123-01-remo.png"  alt=""  class="icon-mobile nav-icon-desktop">
     <img src="../assets/log.png"  alt=""  class="icon-mobile nav-icon-mobile">
    </b-navbar-brand>
              <b-navbar-brand href="#" class="nav-sell"  @click="redirectTo('form-shopregis')" >{{objectslayout.textsellermyshop}}</b-navbar-brand>

    <b-navbar-brand href="#" class="cart-mobi"  @click="redirectTo('cart-orderlist')"><i class="fas fa fa-cart-plus" aria-hidden="true"></i><span> ({{ cartTotal }})  ตะกร้าสินค้า </span></b-nav-item></b-navbar-brand>

      <b-navbar-nav>

   <b-nav-item  class="cart-mobi"  v-if="!isLogins" @click="redirectTo('form-login')">{{objectslayout.textlogin}}</b-nav-item>

      </b-navbar-nav>

                <b-nav-item-dropdown right   class="cart-mobi" v-if="isLogins" no-caret>
          <!-- Using 'button-content' slot -->
          <template #button-content>

            <em   style="color:beige;">{{ objects.name.substring(0,7)+".." }}</em>

          </template>
          <b-dropdown-item href="#" @click="redirectTo('profile-userprofile')">โปรไฟล์</b-dropdown-item>
          <b-dropdown-item href="#"  @click.prevent="logout">ออกจากระบบ</b-dropdown-item>
        </b-nav-item-dropdown>



      <b-col cols="8" md="3"  sm="3" class="nav-form-search nav-search">
              <b-form-input placeholder="Find a good product ?" v-model="form.search" v-if ="this.language == 'en'"></b-form-input>
              <b-form-input placeholder="寻找好的产品 ?" v-model="form.search" v-if ="this.language == 'ch'"></b-form-input>
              <b-form-input placeholder="ค้นหาสินค้าอะไรดี ?" v-model="form.search" v-if ="this.language == 'th' || this.language == null"></b-form-input>
      </b-col>
       <b-col cols="3" md="1"  sm="3" class="nav-form-search">
  <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
             <b-col cols="1" md="1"  sm="1" class="nav-form-search">


  <b-button variant="outline-primary ic-nav-bg-white" @click="Search()">   <i class="fas fa  fas fa-search ic-nav-black" aria-hidden="true"></i></b-button>

      </b-col>




       <b-col cols="1" md="1"  sm="2" xl="1" class="px-2 nav-regishop-ipad" style="max-width: 16.7777%">
          <b-navbar-brand href="#"  @click="redirectTo('form-shopregis')" style="font-size: 14px;">


              <div v-if ="this.language == 'en'" class="regishover" > {{this.placeholder_mysell}} </div>
             <div v-if ="this.language == 'ch'"  class="regishover" > {{this.placeholder_mysell}}</div>
              <div v-if ="this.language == 'th' || this.language == null" class="regishover" > {{this.placeholder_mysell}} </div>

            </b-navbar-brand>
      </b-col>
        <b-col cols="2" md="1"  sm="1" class="nav-regishop-mobile px-2">
          <b-navbar-brand href="#"   @click="redirectTo('cart-orderlist')"><i class="fas fa fa-cart-plus fa-w-18 icon-size-nav regishover" aria-hidden="true"></i><span class="numitem "> {{ cartTotal }}  </span><span class="descquickmenu regishover">{{placeholder_cart}}</span>

          </b-navbar-brand>
      </b-col>

          <b-col cols="2" md="1"  sm="1" class="nav-regishop-mobile px-2">
          <b-navbar-brand href="#">
            <i class="fa fa-heart-o regishover" aria-hidden="true"></i><span class="descquickmenu regishover" >สินค้าโปรด</span>



          </b-navbar-brand>
      </b-col>







      <b-col cols="2" md="2"  sm="1" class="nav-form-search px-2 nav-regishop-mobile login-size-ipad">
          <b-navbar-brand href="#"   v-if="!isLogins">


            <!-- <div v-if ="this.language == 'en'" > {{this.placeholder_login}} </div>
             <div v-if ="this.language == 'ch'" > {{this.placeholder_login}}</div>
              <div v-if ="this.language == 'th' || this.language == null" > {{this.placeholder_login}} </div> -->
                 <i class="fa fa-user-circle-o" aria-hidden="true"></i><span class="descquickmenu">
                   <span @click="redirectTo('form-userregis')" class="regishover">{{placeholder_regis}}  </span>| <span @click="redirectTo('form-login')" class="regishover">{{this.placeholder_login}}</span></span>
            </b-navbar-brand>


                <b-navbar-nav class="ml-auto cart-desktop">
          <b-nav-item-dropdown right  v-if="isLogins">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>  <i class="fa fa-user-circle-o" aria-hidden="true"></i><span class="descquickmenu" style="color:#ffffff">คุณ{{ objects.name}}</span></em>
          </template>
          <b-dropdown-item href="#" @click="redirectTo('profile-userprofile')">
            <div>

              <div v-if ="this.language == 'en'" > {{this.placeholder_profile}} </div>
             <div v-if ="this.language == 'ch'" > {{this.placeholder_profile}}</div>
              <div v-if ="this.language == 'th' || this.language == null" > {{this.placeholder_profile}} </div>
            </div>
          </b-dropdown-item>
          <b-dropdown-item href="#"  @click.prevent="logout">
               <div v-if ="this.language == 'en'" > {{this.placeholder_logout}} </div>
             <div v-if ="this.language == 'ch'" > {{this.placeholder_logout}}</div>
              <div v-if ="this.language == 'th' || this.language == null" > {{this.placeholder_logout}} </div>

          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      </b-col>



  </b-navbar>



  </b-row>
</b-container>


<b-container class="bv-example-row nav-first-s nav-mobile-last" v-if="objectslayout">
  <b-row>

    <b-navbar toggleable="sm" type="dark"   :style="{'background-color':objectslayout.color}" class="banav navbar-fixed-top" fixed="top">
    <b-navbar-brand class="nav_mobie_fisrt">
       <b-row>
           <b-col cols="2" md="2"  sm="2" xl="3" >
           <img src="../assets/log.png"  alt=""  class="icon-mobile nav-icon-mobile">
            </b-col>
       <b-col cols="2" md="2"  sm="2" lg="2" xl="1" class="px-2">
          <b-navbar-brand href="#"  @click="redirectTo('form-shopregis')">


              <div v-if ="this.language == 'en'" class="descquickmenu regishover" > {{this.placeholder_mysell}} </div>
             <div v-if ="this.language == 'ch'"  class="descquickmenu regishover" > {{this.placeholder_mysell}}</div>
              <div v-if ="this.language == 'th' || this.language == null" class="descquickmenu regishover" > {{this.placeholder_mysell}} </div>

            </b-navbar-brand>
      </b-col>

       <b-col cols="2" md="2"  sm="2" class="px-2">
          <b-navbar-brand href="#"   @click="redirectTo('cart-orderlist')"><i class="fas fa fa-cart-plus fa-w-18 icon-size-nav regishover" aria-hidden="true"></i><span class="numitem "> {{ cartTotal }}  </span><span class="descquickmenu regishover">ตะกร้าสินค้า</span>

          </b-navbar-brand>
      </b-col>

          <b-col cols="2" md="2"  sm="2" lg="2" class="px-2">
          <b-navbar-brand href="#">
            <i class="fa fa-heart-o regishover" aria-hidden="true"></i><span class="descquickmenu regishover" >สินค้าโปรด</span>



          </b-navbar-brand>
      </b-col>

      <b-col cols="4" md="4"  sm="4" lg="3" class="nav-form-search px-2 login-size-ipad">
          <b-navbar-brand href="#"   v-if="!isLogins">
                 <i class="fa fa-user-circle-o" aria-hidden="true"></i><span class="descquickmenu">
                   <span @click="redirectTo('form-userregis')" class="regishover">{{placeholder_regis}} </span>| <span @click="redirectTo('form-login')" class="regishover">{{this.placeholder_login}}</span></span>
            </b-navbar-brand>


                      <b-navbar-nav class="ml-auto cart-desktop">
          <b-nav-item-dropdown right  v-if="isLogins">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>  <i class="fa fa-user-circle-o" aria-hidden="true"></i><span class="descquickmenu" style="color:#ffffff">คุณ{{ objects.name}}</span></em>
          </template>
          <b-dropdown-item href="#" @click="redirectTo('profile-userprofile')">
            <div>

              <div v-if ="this.language == 'en'" > {{this.placeholder_profile}} </div>
             <div v-if ="this.language == 'ch'" > {{this.placeholder_profile}}</div>
              <div v-if ="this.language == 'th' || this.language == null" > {{this.placeholder_profile}} </div>
            </div>
          </b-dropdown-item>
          <b-dropdown-item href="#"  @click.prevent="logout">
               <div v-if ="this.language == 'en'" > {{this.placeholder_logout}} </div>
             <div v-if ="this.language == 'ch'" > {{this.placeholder_logout}}</div>
              <div v-if ="this.language == 'th' || this.language == null" > {{this.placeholder_logout}} </div>

          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
            </b-col>
       </b-row>


        <b-row>
     <b-col cols="8" md="8"  sm="8" lg="8" class="nav-form-search nav-search search-mobile">
              <b-form-input placeholder="Find a good product ?" v-model="form.search" v-if ="this.language == 'en'"></b-form-input>
              <b-form-input placeholder="寻找好的产品 ?" v-model="form.search" v-if ="this.language == 'ch'"></b-form-input>
              <b-form-input placeholder="ค้นหาสินค้าอะไรดี ?" v-model="form.search" v-if ="this.language == 'th' || this.language == null"></b-form-input>
      </b-col>
     <b-col cols="3" md="3"  sm="3" lg="3" class="nav-form-search">
  <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col cols="1" md="1"  sm="1" lg="1" class="nav-form-search">


  <b-button variant="outline-primary ic-nav-bg-white" @click="Search()">   <i class="fas fa  fas fa-search ic-nav-black" aria-hidden="true"></i></b-button>

      </b-col>
  </b-row>
    </b-navbar-brand>


  </b-navbar>

  </b-row>
</b-container>



<b-container class="bv-example-row nav-first-s nav-mobile-smal-last" v-if="objectslayout">
  <b-row>

    <b-navbar toggleable="sm" type="dark"   :style="{'background-color':objectslayout.color}" class="banav navbar-fixed-top" fixed="top">
    <b-navbar-brand class="nav_mobie_fisrt" @click="redirectTo('index')">
       <b-row>
           <b-col cols="2" md="2"  sm="2" xl="3" >
           <img src="../assets/log.png"  alt=""  class="icon-mobile nav-icon-mobile">
            </b-col>


        <b-col cols="3" md="2"  sm="2" class="px-2">
          <b-navbar-brand href="#"   @click="redirectTo('form-shopregis')"><span class="descquickmenumobile regishover">{{this.placeholder_mysell}} | </span>

          </b-navbar-brand>
      </b-col>


       <b-col cols="3" md="2"  sm="2" class="px-2">
          <b-navbar-brand href="#"   @click="redirectTo('cart-orderlist')"><i class="fas fa fa-cart-plus fa-w-18 icon-size-nav regishover" aria-hidden="true"></i><span class="numitem "> {{ cartTotal }}  </span><span class="descquickmenumobile regishover"> ตะกร้าสินค้า |</span>

          </b-navbar-brand>
      </b-col>



      <b-col cols="4" md="4"  sm="4" lg="3" class="nav-form-search px-2 login-size-ipad descquickmenumobile-login nav-tp-pad">
          <b-navbar-brand href="#"   v-if="!isLogins">
                 <i class="fa fa-user-circle-o" aria-hidden="true"></i><span class="descquickmenumobile">
                   <span @click="redirectTo('form-login')" class="regishover">  {{this.placeholder_login}}</span></span>
            </b-navbar-brand>


                      <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right  v-if="isLogins">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>  <i class="fa fa-user-circle-o" aria-hidden="true"></i><span class="descquickmenumobile" style="color:#ffffff"> คุณ{{ objects.name}}</span></em>
          </template>
          <b-dropdown-item href="#" @click="redirectTo('profile-userprofile')" class="xdasdasd">
            <div>

              <span @click="redirectTo('profile-userprofile')">  {{this.placeholder_profile}}</span>

            </div>
          </b-dropdown-item>
          <b-dropdown-item href="#"  @click.prevent="logout">
               <div v-if ="this.language == 'en'" > {{this.placeholder_logout}} </div>
             <div v-if ="this.language == 'ch'" > {{this.placeholder_logout}}</div>
              <div v-if ="this.language == 'th' || this.language == null" > {{this.placeholder_logout}} </div>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
            </b-col>
       </b-row>


        <b-row>
     <b-col cols="8" md="8"  sm="8" lg="8" class="nav-form-search nav-search search-mobile">
              <b-form-input placeholder="Find a good product ?" v-model="form.search" v-if ="this.language == 'en'"></b-form-input>
              <b-form-input placeholder="寻找好的产品 ?" v-model="form.search" v-if ="this.language == 'ch'"></b-form-input>
              <b-form-input placeholder="ค้นหาสินค้าอะไรดี ?" v-model="form.search" v-if ="this.language == 'th' || this.language == null"></b-form-input>
      </b-col>
     <b-col cols="3" md="3"  sm="3" lg="3" class="nav-form-search">
  <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col cols="1" md="1"  sm="1" lg="1" class="nav-form-search">


  <b-button variant="outline-primary ic-nav-bg-white" @click="Search()">   <i class="fas fa  fas fa-search ic-nav-black" aria-hidden="true"></i></b-button>

      </b-col>
  </b-row>
    </b-navbar-brand>


  </b-navbar>

  </b-row>
</b-container>


<b-container class="bv-example-row nav-first-s nav-mobile-smal-last375" v-if="objectslayout">
  <b-row>

    <b-navbar toggleable="sm" type="dark"   :style="{'background-color':objectslayout.color}" class="banav navbar-fixed-top" fixed="top">
    <b-navbar-brand class="nav_mobie_fisrt" @click="redirectTo('index')">
       <b-row>
           <b-col cols="2" md="2"  sm="2" xl="3" >
           <img src="../assets/log.png"  alt=""  class="icon-mobile nav-icon-mobile last375">
            </b-col>


        <b-col cols="4" md="2"  sm="2" class="px-2">
          <b-navbar-brand href="#"   @click="redirectTo('form-shopregis')"><span class="descquickmenumobile375 regishover">{{this.placeholder_mysell}} | </span>

          </b-navbar-brand>
      </b-col>


       <b-col cols="2" md="2"  sm="2" class="px-2">
          <b-navbar-brand href="#"   @click="redirectTo('cart-orderlist')"><i class="fas fa fa-cart-plus fa-w-18 icon-size-nav regishover" aria-hidden="true"></i><span class="numitem ">{{ cartTotal }} </span>
       <span class="descquickmenumobile375" style="padding-left:15px;"> |  </span>

          </b-navbar-brand>
      </b-col>

          <b-col cols="2" md="2"  sm="2" lg="2" class="px-2">
          <b-navbar-brand href="#">
            <i class="fa fa-heart-o regishover" aria-hidden="true"></i>
                  <span class="descquickmenumobile375" style="padding-left:15px;"> |  </span>
          </b-navbar-brand>
      </b-col>


      <b-col cols="2" md="4"  sm="4" lg="3" class="nav-form-search px-2 login-size-ipad descquickmenumobile-login">
          <b-navbar-brand href="#"   v-if="!isLogins">
                 <i class="fa fa-user-circle-o" aria-hidden="true" @click="redirectTo('form-login')"></i><span class="descquickmenumobile">
                   <span class="regishover"></span></span>
            </b-navbar-brand>


                      <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right  v-if="isLogins">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>  <i class="fa fa-user-circle-o" aria-hidden="true"></i><span class="descquickmenumobile" style="color:#ffffff"> คุณ{{ objects.name}}</span></em>
          </template>
          <b-dropdown-item href="#" @click="redirectTo('profile-userprofile')" class="xdasdasd">
            <div>

              <span @click="redirectTo('profile-userprofile')">  {{this.placeholder_profile}}</span>

            </div>
          </b-dropdown-item>
          <b-dropdown-item href="#"  @click.prevent="logout">
               <div v-if ="this.language == 'en'" > {{this.placeholder_logout}} </div>
             <div v-if ="this.language == 'ch'" > {{this.placeholder_logout}}</div>
              <div v-if ="this.language == 'th' || this.language == null" > {{this.placeholder_logout}} </div>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
            </b-col>
       </b-row>


        <b-row>
     <b-col cols="8" md="8"  sm="8" lg="8" class="nav-form-search nav-search search-mobile">
              <b-form-input placeholder="Find a good product ?" v-model="form.search" v-if ="this.language == 'en'"></b-form-input>
              <b-form-input placeholder="寻找好的产品 ?" v-model="form.search" v-if ="this.language == 'ch'"></b-form-input>
              <b-form-input placeholder="ค้นหาสินค้าอะไรดี ?" v-model="form.search" v-if ="this.language == 'th' || this.language == null"></b-form-input>
      </b-col>
     <b-col cols="3" md="3"  sm="3" lg="3" class="nav-form-search">
  <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col cols="1" md="1"  sm="1" lg="1" class="nav-form-search">


  <b-button variant="outline-primary ic-nav-bg-white" @click="Search()">   <i class="fas fa  fas fa-search ic-nav-black" aria-hidden="true"></i></b-button>

      </b-col>
  </b-row>
    </b-navbar-brand>


  </b-navbar>

  </b-row>
</b-container>




</div>







</template>




<script>
import { mapGetters,mapState } from "vuex";
import { CHECK_LOGIN,GET_NAVBAR,GET_MENU,GET_SHOP_BY_ITEM } from "../store/actions.type.js";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART,GET_CART,FETCH_GET_PROFILE,GET_PRODUCT_SHELL_FIND } from "@/store/actions.type.js";
  export default {
    data() {
    return {
      placeholder_sereach:'',
      placeholder_login:'',
      placeholder_logout:'',
      placeholder_mysell:'',
      placeholder_profile:'',
      language:'',
      IsLogin: false,
      loggedIn: this.$auth.loggedIn,
      name:{},
      form:{
        search:"",
      },
      selected: 'a',
      color:null,
        options: [
          { value: 'a', text: 'สินค้า'},
        ]

    };
  },


     computed: {
         ...mapGetters(["authenticated"]),

          ...mapState({
                objects: state => state.user.profile,
                objectslayout: state => state.Layout.navbar,
             }),

        isLogins () {
                return this.$store.state.auth.loggedIn;
        },

        isUrl () {
                return this.$store.state.user.url_id;
        },
        user () {
                return this.$auth.user;
        },




        cartTotal () {
        return this.$store.state.Cart.cartTotal
        }


        },
        async created(){
            this.form.url = window.location.origin
                let getnav = await this.$store.dispatch(GET_NAVBAR,this.form);


        this.language = localStorage.getItem("language");

        if(this.language == 'en'){
         this.placeholder_sereach = 'Find a good product ?';
         this.options[0].text = 'Product';
         this.placeholder_login = 'Login';
        this.placeholder_mysell = 'Sell products with us';
        this.placeholder_profile = 'Profile';
        this.placeholder_cart = 'Cart';
         this.placeholder_regis = 'Registered';
        this.placeholder_logout = 'Logout';
        }
        if(this.language == 'ch'){
          this.placeholder_sereach = '寻找好的产品';
          this.options[0].text = '产品';
          this.placeholder_login = '登入';
          this.placeholder_mysell = '和我们一起卖';
          this.placeholder_cart = 'Cart';
           this.placeholder_regis = 'Registered';
          this.placeholder_profile = 'Profile';
          this.placeholder_logout = 'Logout';
        }
        if(this.language == 'th' || this.language == null){
          this.placeholder_sereach = 'ค้นหาสินค้าอะไรดี ?';
          this.options[0].text = 'สินค้า';
          this.placeholder_login = 'เข้าสู่ระบบ';
          this.placeholder_mysell = 'ขายสินค้ากับเรา';
          this.placeholder_profile = 'โปรไฟล์';
          this.placeholder_cart = 'ตะกร้าสินค้า';
          this.placeholder_regis = 'สมัครสมาชิก';
          this.placeholder_logout = 'ออกจากระบบ';
        }

        },




      async mounted() {
          let checker = await localStorage.getItem("user");
              //    let a = await this.$store.dispatch(FETCH_GET_PROFILE)

        this.form.url = window.location.origin
          let cart = await this.$store.dispatch(GET_CART);
         //    let getnav = await this.$store.dispatch(GET_NAVBAR,this.form);
          // this.color = getnav.color;
           //    console.log('payload',getnav);
          // let profile = await this.$store.dispatch(FETCH_GET_PROFILE);
          // this.name = profile['name']
          // console.log('profile',profile['name']);






          if(checker){
            this.IsLogin = true;

               this.$store.dispatch('auth/userstorage');
          }else{
            this.IsLogin = false;
          }
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

        Checkstring(x){





return x;
        },
            redirectTo(names) {

                let path = this.$route.path
                if (path !== names) {

 const Shopid = 1;

            //  this.$router.push({ path: `/1/${name}` }) // -> /user/123
                //   this.$router.push({ params: { id: '1' } ,name: name})
                   this.$router.push({ name: names })
                }
            },


          logout() {
            localStorage.removeItem("shipping");
            localStorage.removeItem("listorder");
            localStorage.removeItem("delivery");
          localStorage.removeItem("cart");


    this.$auth.logout()
     setTimeout(function () {
            location.reload();
            }, 1000);




     }
        }



        }


</script>
