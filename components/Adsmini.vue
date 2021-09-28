<template>

 <section id="Related">
 {{ads_semi}}
        <div class="row relatedweb">
                <div class="col-12 col-md-9 col-lg-9">
                   <div class="main-heading">


         <div class="container-fluid advertisement-three-container">
        <div class="row relatedweb" v-if="ads_semi" v-for="item in ads_semi" :value="item.id">
            <div class="col-12 col-lg-6 col-md-12 no-padding">
            <a><img src="https://demo.bagisto.com/marketplace-184-82-60-131/themes/velocity/assets/images/headphones.png" class="full-width" /></a>
            </div>

            <div class="col-lg-6 col-md-12 second-panel">
                <a  class="row top-container"><img src="https://demo.bagisto.com/marketplace-184-82-60-131/themes/velocity/assets/images/watch.png" class="col-12 pr0" /></a>
                <a  class="row bottom-container"><img src="https://demo.bagisto.com/marketplace-184-82-60-131/themes/velocity/assets/images/kids-2.png" class="col-12 pr0" /></a>
            </div>
    
    </div>
    
        </div>
        </div>

  
                                

                        
                    </div> 
      </div>

    </div>


                        <!-- -------------------------Mobile------------------------------ -->


    </div>

    </section>

 
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

           console.log(process.env.TEST_VARIABLE);
        this.loadcategory()


       let a = window.location.origin
       this.form.url = a;
       this.$store.dispatch(FETCH_ADS_SHOP_SEMI,this.form);
        
         },
        
  
        methods: {

        redirectTo(name) {
                    this.$router.push(name)
                  },
        loadcategory(){
          let productinshell = this.$store.dispatch(FETCH_PRODUCT_SHELL);
        },
        Checkimage(image){
        
                let a = 'http://127.0.0.1:8000/public/product/' + image;
                return a;
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