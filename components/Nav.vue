<template>
<!--
<header class="section-header">
    <section class="header-main border-bottom webnav">
        <div class="container-fluid">
            <div class="row mx-auto col-sm-9">
                <div class="col-sm-4"> 
                  <a href="#" class="brand-wrap" data-abc="true">
                       
                        <span class="logo">
                          E-MARKET PLACE {{authenticated}}
                          
                          </span> 
                  </a> 
                </div>

                <div class="col-sm-3">
                  

                </div>
                <div class="col-sm-5">
                    <div class="d-flex justify-content-end"> 

                            <div class="nav-link nav-user-img">
                               <img src="http://www.dgtfarm.com/images/thai-flag.png" alt="" height="20px" width="20px">ไทย
                            </div>

                                 
                            <div class="nav-link nav-user-img">
                               <img src="http://www.dgtfarm.com/images/eng-flag.png" alt="" height="20px" width="20px">อังกฤษ
                            </div>

                            <span class="vl"></span> 
                            <div  @click="redirectTo('/form/shopregis')" class="nav-link nav-user-img">
                              <span class="login" style="font-size:14px;" >ขายสินค้ากับเรา</span>
                            </div>

                            <nuxt-link to="cart/orderlist"  class="nav-link widget-header"> 
                              <i class="fas fa fa-cart-plus" aria-hidden="true"></i>
                              <span> ({{ cartTotal }}) </span>
                            </nuxt-link><span class="vl"></span>

                            <span class="vl"></span> 
                           
                            <div class="nav-link nav-user-img">
                              <span class="login">
                                <div class="dropdown"><i class="fas fa fa-user-circle-o" aria-hidden="true"></i>
                                  <div class="dropdown-content">
                                  <div v-if="isLogins">
                                   <div  @click="redirectTo('/profile/userprofile')" class="nav-link nav-user-img text-login">
                                         <span>จัดการบัญชี</span>
                                       </div>
                                 <a href="#"  @click.prevent="logout">ออกจากระบบ</a>
                                  </div>

                                  <div v-else="!isLogins">
                                        <div  @click="redirectTo('/form/login')" class="nav-link nav-user-img text-login">
                                         <span>เข้าสู่ระบบ</span>
                                       </div>
                                        <div  @click="redirectTo('/form/userregis')" class="nav-link nav-user-img text-login">
                                         <span>สมัครสมาชิก</span>
                                       </div>
                                  </div>
                                  </div>
                                </div>
                              </span>
                            </div>



                            
                            <span class="vl"></span> 
                            <a class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login">
                                <div class="dropdown"> <i class="fas fa fa-globe" aria-hidden="true"></i>
                                  <div class="dropdown-content">
                                  <a href="#">ภาษาไทย</a>
                                  <a href="#">ENGLISH</a>
                                  </div>
                                </div>
                              </span>
                            </a>




                   


                    </div>
                    
                </div>

            </div>
        </div>
    </section>








-->



<!--------------------------------------------------- MOBILE ----------------------------------------------------------------


    <section class="header-main border-bottom mobilenav">
        <div class="container-fluid">
            <div class="row mx-auto">
                <div class="col-sm-4"> 
                  <a href="#" class="brand-wrap" data-abc="true">
                       
                        <span class="logo">
                          E-MARKET PLACE
                       
                          </span> 
                  </a> 
                </div>

                <div class="col-sm-4">

                </div>
                <div class="col-sm-4">
                    <div class="d-flex justify-content-end"> 

                            <span class="vl"></span> 
                            <a class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login" style="font-size:14px;">หน้าหลัก</span>
                            </a>


                            <span class="vl"></span> 
                            <nuxt-link to="form/shopregis" class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login" style="font-size:14px;" >ขายสินค้ากับเรา</span>
                            </nuxt-link>

                            <nuxt-link to="cart/orderlist"  class="nav-link widget-header"> 
                              <i class="fas fa fa-cart-plus" aria-hidden="true"></i>
                                <span> (5) </span>
                            </nuxt-link><span class="vl"></span>



                            <span class="vl"></span> 
                            <a class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login">
                                <div class="dropdown"><i class="fas fa fa-user-circle-o" aria-hidden="true"></i>
                                  <div class="dropdown-content">
                                  <nuxt-link to="form/login">เข้าสู่ระบบ</nuxt-link>
                                  <nuxt-link to="form/userregis">สมัครสมาชิก</nuxt-link>
                                  <nuxt-link to="profile/userprofile">จัดการบัญชี</nuxt-link>
                                  <a href="#">ออกจากระบบ</a>
                                  </div>
                                </div>


                              </span>
                            </a>



                            
                            <span class="vl"></span> 
                            <a class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login">
                                <div class="dropdown"> <i class="fas fa fa-globe" aria-hidden="true"></i>
                                  <div class="dropdown-content">
                                  <a href="#">ภาษาไทย</a>
                                  <a href="#">ENGLISH</a>
                                  </div>
                                </div>


                              </span>
                            </a>




                   


                    </div>
                    
                </div>

            </div>
        </div>
    </section>
   
</header>
-->

<div>
    <nav id="navbar" class="navbar navbar-expand-lg fixed-top navbar-dark bg-alpha">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="assets/image/logo.png" width="35" height="35" class="d-inline-block align-top" alt="">
                Emarket Place
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarKey" aria-controls="navbarKey" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarKey">
                <ul class="navbar-nav ml-auto text-center">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>


</template>




<script>
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART,GET_CART } from "@/store/actions.type.js";
  export default {
    data() {
    return {
      IsLogin: false,

    };
  },


     computed: {
         ...mapGetters(["authenticated"]),
			
        isLogins () {
                return this.$store.state.auth.loggedIn;
        },
        cartTotal () {
        return this.$store.state.Cart.cartTotal
        }
           

        },
        created(){
           
        },
        

    
        
      async mounted() {
          let checker = await localStorage.getItem("user");
          let cart = await this.$store.dispatch(GET_CART);

          if(checker){
            this.IsLogin = true;
               this.$store.dispatch('auth/userstorage');
          }else{
            this.IsLogin = false;
          }
         },

      methods: {
            redirectTo(name) {
  
                let path = this.$route.path
                if (path !== name) {
            
                    this.$router.push(name)
                }
            },


          logout() {
    this.$auth.logout()

    
     }
        }


           
        }


</script>
