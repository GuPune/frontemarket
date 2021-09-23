<template>
      
<div>

 
 <AdsShop/>

 <Adsmini/>
        <div id="content" class="container profileweb col-12 col-md-9">
        
            <div class="row">
                <div class="col-12">
                <div class="profile-header">
                            <div class="profile-header-cover">
                                <img class="coverimg" src="https://assets.brandinside.asia/uploads/2020/02/shutterstock_473639749.jpg" alt="" /> 
                            </div>
                            <div class="profile-header-content">
                                <div class="profile-header-img">
                                    <img class="profilepic" src="https://cache-igetweb-v2.mt108.info/uploads/2862/filemanager/b38c97ac92ed3ed7d3e53647f266608d.jpg" alt="" /> 
                                </div>
                                <div class="profile-header-info">
                                   <h4 class="m-t-sm">ชื่อร้านค้า</h4>
                                    <!-- <p class="m-b-sm">UXUI + Frontend Developer</p> -->
                                    <!-- <a href="#" class="btn btn-xs btn-primary mb-4">Edit Profile</a> -->
                                </div>
                            </div>

                            <ul class="profile-header-tab nav nav-tabs">
                                <li ><a href="#">ข้อมูลร้านค้า</a></li>
                                <li ><a href="#">สินค้ายอดนิยม</a></li>
                            
                            </ul>

                        </div><br>
   
                </div>
                </div>

                <div class="row col-12 shop-user-proudct-mobile">
  <div class="col-sm-12 col-md-3"> <Categoriesbyshop :cate_by_shop="cate_by_shop"/></div>
  <div class="col-sm-12 col-md-9"> <Productbyshop  :product_by_shop="product_by_shop"/></div>

</div>
                       <!--
                            <div class="row col-12">
                                <div class="col-sm-12 col-md-3">
                                       <Categoriesbyshop :cate_by_shop="cate_by_shop"/>
                                </div> 
                                    <div class="linevertical"></div> 
                                        <div class="col-sm-12 col-md-9">
                                        <Productbyshop  :product_by_shop="product_by_shop"/>
                                                    
                                </div>

                            
                            </div>

-->
                         
                    
                </div>




        </div>

              
               
     
                    
             
   
</template>



<script>
  
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Categoriesbyshop from "@/components/Categoriesbyshop";
import Productbyshop from "@/components/Productbyshop";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP } from "@/store/actions.type.js";
import AdsShop from "../../components/AdsShop"
import { mapGetters } from "vuex";
import Adsmini from "@/components/Adsmini"
    


    export default {
      components: {
          AdsShop,
          Nav,
          Footer,
          Categoriesbyshop,
          Adsmini
           
              },

                  data() {
    return {
   form:{
shop_name:null
   }
    };
  },

        computed: {
                ...mapGetters(["cate_by_shop","product_by_shop"]),

        },
             
       async mounted() {
          let cate_by_shop = await this.$store.dispatch(FETCH_CATE_BY_SHOP,this.$route.params).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
          let product = await this.$store.dispatch(FETCH_PRODUCT_BY_SHOP,this.$route.params).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
        },

         methods: {
     
          
            success() {
          
            },
            error($text) {

           this.$router.push('/error')

          
            },
        }
       
           

     
    
    };
</script>