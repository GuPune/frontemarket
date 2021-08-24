<template>

<header class="section-header">

    <section class="header-main border-bottom webnav">
        <div class="container-fluid">
            <div class="row mx-auto col-sm-9">
                <div class="col-sm-4"> 
                  <a href="#" class="brand-wrap" data-abc="true">
                        <!-- <img class="logo" src="http://ampexamples.com/data/upload/2017/08/bootstrap2_logo.png"> --> 
                        <span class="logo">
                          E-MARKET PLACE
                          <!-- <img class="imglogo" src="../assets/logohori2.png"> -->
                          </span> 
                  </a> 
                </div>

                <div class="col-sm-4">
                    <form action="#" class="search-wrap">
                        <div class="input-group w-100"> 
                          <input type="text" class="form-control search-form" style="width:55%;" placeholder="Search">
                            <div class="input-group-append"> 
                              <button class="btn btn-primary search-button" type="submit"> <i class="fa fa-search"></i> </button> 
                            </div>
                        </div>
                        
                    </form>

                </div>
                <div class="col-sm-4">
                    <div class="d-flex justify-content-end"> 

                            <span class="vl"></span> 
                            <a class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login" style="font-size:14px;">{{authenticated}}</span>
                            </a>


                            <span class="vl"></span> 
                            <nuxt-link to="form/shopregis" class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login" style="font-size:14px;" >ขายสินค้ากับเรา</span>
                            </nuxt-link>

                            <nuxt-link to="cart/orderlist"  class="nav-link widget-header"> 
                              <i class="fas fa fa-cart-plus" aria-hidden="true"></i>
                            </nuxt-link><span class="vl"></span>



                            <span class="vl"></span> 
                            <a class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login">
                                <div class="dropdown"><i class="fas fa fa-user-circle-o" aria-hidden="true"></i>
                                  <div class="dropdown-content">
                                  <div v-if="isLogins">
                                  <nuxt-link to="profile/userprofile">จัดการบัญชี</nuxt-link>
                                 <a href="#"  @click.prevent="logout">ออกจากระบบ</a>
                                  </div>

                                  <div v-else="!isLogins">
                                  <nuxt-link to="form/login">เข้าสู่ระบบ</nuxt-link>
                                  <nuxt-link to="form/userregis">สมัครสมาชิก</nuxt-link>
                                  <nuxt-link to="profile/userprofile">จัดการบัญชี</nuxt-link>
                                  </div>
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








<!--------------------------------------------------- MOBILE ------------------------------------------------------------------>






    <section class="header-main border-bottom mobilenav">
        <div class="container-fluid">
            <div class="row mx-auto">
                <div class="col-sm-4"> 
                  <a href="#" class="brand-wrap" data-abc="true">
                        <!-- <img class="logo" src="http://ampexamples.com/data/upload/2017/08/bootstrap2_logo.png"> --> 
                        <span class="logo">
                          E-MARKET PLACE
                          <!-- <img class="imglogo" src="../assets/logohori2.png"> -->
                          </span> 
                  </a> 
                </div>

                <div class="col-sm-4">

                    <form action="#" class="search-wrap">
          
                        <div class="input-group w-100"> 
                          <input type="text" class="form-control search-form" style="width:55%;" placeholder="Search">
                            <div class="input-group-append"> 
                              <button class="btn btn-primary search-button" type="submit"> <i class="fa fa-search"></i> </button> 
                            </div>
                        </div>
                        
                    </form>

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

     


</template>




<script>
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
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
        }
           

        },
        created(){
           
        },
        

    
        
      mounted() {
          let checker = localStorage.getItem("user");
  

          if(checker){
            this.IsLogin = true;
               this.$store.dispatch('auth/userstorage');
          }else{
            this.IsLogin = false;
          }
         },

      methods: {


          logout() {
    this.$auth.logout()
     }
        }


           
        }


</script>
