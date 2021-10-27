<template>

         <div id="top-area">
                    <div id="top-mb">
                <div class="container">
                    <div class="row no-gutters">
                        <div class="col col-lg text-center">
                            <div id="logotop" class="hoverOverlay d-inline-flex">
                                <span class="navbar-brand">
                                    <a href="/" style="text-decoration: none;">
           
    <img src="https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/DefaultData/logo_2.png?v=202012190947" alt="logo" title="logo" class="d-inline-block img-logo"/>
                                    </a>
                                </span>
                            </div>
                        </div>

                        <b-container class="bv-example-row">
  <b-row>
  <b-col sm="12" md="12">
  <b-nav>
    <b-nav-item>หน้าหลัก</b-nav-item>
    <b-nav-item>บทความ</b-nav-item>
    <b-nav-item>เกี่ยวกับเรา</b-nav-item>
    <b-nav-item>ติดต่อเรา</b-nav-item>
  </b-nav>
  </b-col>
  
  </b-row>
</b-container>
                    </div>
                </div>
            </div>
            <div class="topwidget-menu">
</div>
            </div>

 
</template>


<script>
  import { mapGetters,mapState } from "vuex";
  import { FETCH_PRODUCT_SHELL } from "../store/actions.type.js";
  import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CAR,FETCH_ADS_SHOP_SEMI } from "@/store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";
  export default {
    data() {
    return {
      form:{

      },
    };
  },

     computed: {
           
        ...mapGetters(["product_shell","authenticated","ads_semi"]),

        },
        
        mounted() {
        //  this.$store.dispatch(ToogleAction);

           //     let a = this.$store.dispatch(FETCH_PRODUCT_SHELL);

        
        this.loadcategory()


       let a = window.location.origin
       this.form.url = a;
    
       this.$store.dispatch(FETCH_ADS_SHOP_SEMI,this.form);
        
         },
        
  
        methods: {

        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

        redirectTo(name) {
                    this.$router.push(name)
                  },
        loadcategory(){
          let productinshell = this.$store.dispatch(FETCH_PRODUCT_SHELL);
        },
 
        async addToCart(item){
                 await this.$swal("Add Product!", "Product To Cart!", "success")
        },
        async CheckLogin(item){
       if(!this.authenticated){
               this.$router.push('/form/login')
       }else{
        this.addToCart(item);
       }
        },

        },
  

        components: {

        },

    }
</script>