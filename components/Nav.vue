<template>

<header class="section-header">
    <section class="header-main border-bottom">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-sm-4"> <a href="#" class="brand-wrap" data-abc="true">
                        <!-- <img class="logo" src="http://ampexamples.com/data/upload/2017/08/bootstrap2_logo.png"> --> <span class="logo"><img class="imglogo" src="../assets/logohori2.png"></span> </a> </div>
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
                              <span class="login">หน้าหลัก</span>
                            </a>


                            <span class="vl"></span> 
                            <a class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login">ขายสินค้ากับเรา</span>
                            </a>

                            <a target="_blank" href="#" data-abc="true" class="nav-link widget-header"> 
                              <i class="fas fa fa-cart-plus" aria-hidden="true"></i>
                            </a><span class="vl"></span>



                            <span class="vl"></span> 
                            <a class="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true">
                              <span class="login">
                                <div class="dropdown"><i class="fas fa fa-user-circle-o" aria-hidden="true"></i>
                                  <div class="dropdown-content">
                                  <a href="#">เข้าสู่ระบบ</a>
                                  <a href="#">สมัครสมาชิก</a>
                                  <a href="#">จัดการบัญชี</a>
                                  <a href="#">ออกจากระบบ</a>
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
import { mapGetters,mapState } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
  export default {
    data() {
    return {
      IsLogin: false,

    };
  },


     computed: {
           

        },
        created(){
           
        },
        

    
        
        mounted() {
          let checker = localStorage.getItem("user");
          if(checker){
            this.IsLogin = true;
          }else{
            this.IsLogin = false;
          }
         },
        


    }
</script>
