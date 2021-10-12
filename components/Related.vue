<template>


    <section id="Related">
        <div class="row relatedweb">
                <div class="col-12 col-md-9 col-lg-9">
                   <div class="main-heading">
        <div class="heading-title-relat">
            <h2><span>PRODUCT  AGRICULTURAL</span>
	<em class="">สินค้าเกษตรกร</em>
			</h2>
        </div>
        <div class="product" id="product">
            <div class="row product">
                 <div class="cards">
                    <div class="cardproduct" v-for="(item, index) in product_shell" :key="product_shell.id">
                
                                                        <img class="imgproduct" height="200px" :src="Checkimage(item.img_product)" @click="Shop(item)">
                                                            <div class="product-name">{{item.name_th}}</div>
                                                            <p class="price">฿{{item.price}}.00</p>
                                                   <div class="product-footer">
                                                   <div class="addtocart">
                                                   <button type="button" title="Add To Cart" data-placement="top" class="button btn-cart" @click="addToCart(item)">
                                                   <span>
                                                   <span>Add To Cart</span></span>
                                                   </button></div></div>
                                                   <div class="ratings">
                                                   <div class="rating-box">
                                                   <div class="rating" style="width:%"></div>
                                                   </div>
						</div>
                                                </div>
        </div>
        </div>
        </div>

  
                                

                        
                    </div> 
      </div>

    </div>


                        <!-- -------------------------Mobile------------------------------ -->


    </div>

    <br>
    </section>
    
</template>


<script>
  import { mapGetters,mapState } from "vuex";
  import { FETCH_PRODUCT_SHELL } from "../store/actions.type.js";
  import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART } from "@/store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";
  
  export default {
     computed: {
           
     ...mapGetters(["product_shell","authenticated"]),


         isUrl () {
                return this.$store.state.user.url_id;
        },  
  

        },
        
        mounted() {
        //  this.$store.dispatch(ToogleAction);

           //     let a = this.$store.dispatch(FETCH_PRODUCT_SHELL);

           console.log(process.env.TEST_VARIABLE);
        this.loadcategory()
        
         },
        
  
        methods: {

        redirectTo(name) {
                    this.$router.push(name)
                  },
        loadcategory(){
          let productinshell = this.$store.dispatch(FETCH_PRODUCT_SHELL);
        },
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },
        async addToCart(item){
           let add_producttocart = await this.$store.dispatch(ADD_CART,item);
                 await this.$swal("Add Product!", "Product To Cart!", "success")
        },
        async CheckLogin(item){
       if(!this.authenticated){

                         let path = this.$route.path
            
const names = 'id-form-login'
 const Shopid = this.isUrl.id;




            //  this.$router.push({ path: `/1/${name}` }) // -> /user/123
                //   this.$router.push({ params: { id: '1' } ,name: name})
                   this.$router.push({ name: names, params: { id: Shopid }})
               
              //  this.$router.push('/form/login')
       }else{
        this.addToCart(item);
       }
        },
       async Shop(item){
       let name = item.shop_id+'/product/productdetail/'+item.id;

    this.$router.push(name)
        },

        },
  

        components: {

        },

    }
</script>