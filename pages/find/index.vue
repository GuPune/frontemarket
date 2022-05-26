<template>


   <div class="container col-12 col-md-9 col-sm-12" style="padding-top: 90px;">

<!-- --------------------------------store 1--------------------------------- -->

 <div class="row" style="padding-top: 40px;padding-bottom: 40px;">
    <div class="col-md-12 col-sm-12 col-lg-12 col-xl-2">
  <div class="card shopping-cart" >
<CategoriesShell/>
  </div>
    </div>



    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 ipad-order or-mob">

    </div>

  </div>

 </div>





</template>




<script>

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CategoriesShell from "@/components/CategoriesShell";
import ProductShell from "@/components/ProductShell";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP } from "@/store/actions.type.js";
import AdsShop from "@/components/AdsShop"
import { mapGetters } from "vuex";
import Adsmini from "@/components/Adsmini"
import Relation from "@/components/Relation"
import Banner from "@/components/Banner"




    export default {
      components: {
          AdsShop,
          Nav,
          Footer,
          ProductShell,
          CategoriesShell

              },

                  data() {
    return {
         loadding:true,
   form:{
shop_name:null,
url:null
   }
    };
  },

        computed: {
                ...mapGetters(["cate_by_shop","product_by_shop"]),

        },

       async mounted() {
         this.form.url = window.location.origin;
         this.form.shop_name = this.$route.params;

       //   let cate_by_shop = await this.$store.dispatch(FETCH_CATE_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
        //   let product = await this.$store.dispatch(FETCH_PRODUCT_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))

          this.loadding = false
        },

         methods: {

            success() {

            },
            success() {

            },
            error($text) {




            },
        }





    };
</script>
