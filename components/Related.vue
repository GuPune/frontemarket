<template>


    <section id="Related">
        <div class="row relatedweb" style="margin-bottom: -25px;">
                <div class="col-12 col-md-9 col-lg-9">
                   <div class="main-heading">
        <div class="heading-title-relat">

        <div>
        </div>


            <h2 v-if="shell_cate"><span>PRODUCT  {{shell_cate.name_th}}</span>
	<em class="">สินค้าทั้งหมด</em>
			</h2>

       <h2 v-else><span>PRODUCT  TOTAL</span>
	<em class="">สินค้าทั้งหมด</em>
			</h2>
        </div>

        <div class="product" id="product">
            <div class="row product">
                 <div class="cards cards-mobile">
                    <div class="cardproduct-first" v-for="(item, index) in product_shell" :key="product.id"  v-on:mouseover="mouseover(index)" v-on:mouseleave="mouseleave(index)">
                                                        <img class="imgproduct-product related-images" :src="Checkimage(item.img_product)" @click="Shop(item)">
                                                            <div class="product-name-first">{{item.name_th}}</div>
                                                              <div class="row">
                                                              <div class="col"> <div class="price rela-left">฿{{formatPrice(item.price)}}</div></div>
                                                              <!--
                                                              <div class="col">
                                                               <div class="price price-mini">
                                                             <span class="price-mini-decoration">฿{{item.price}}.00</span>
                                                             <span>-56%</span>
                                                             </div>
                                                              </div>

                                                              -->
                                                              </div>


                                                              <div class="ratings rating-rela">


						</div>

      <div class="row prdoc-rela">

    <div class="col" style="font-size:10px" v-if="item.start_rated > 0">
        <svg v-for="i in item.start_rated" :key="i"  class="svg-inline--fa fa-star fa-w-18 start-check" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>


        </svg><!-- <i class="fas fa-star"></i> -->

         <svg v-for="x in (5 - item.start_rated)" :key="x"  class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>

        </svg><!-- <i class="fas fa-star"></i> -->
    </div>

        <div class="col" style="font-size:10px" v-else>

         <svg  class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <i class="fas fa-star"></i> -->

         <svg  class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <i class="fas fa-star"></i> -->

         <svg  class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <i class="fas fa-star"></i> -->

         <svg  class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <i class="fas fa-star"></i> -->

         <svg  class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <i class="fas fa-star"></i> -->





    </div>



                            <!-- <i class="fa fa-heart heart heart-rel active"  aria-hidden="true" title="เพิ่มในรายการที่ชอบ" @click="addfav(index)" v-if =" == '1'"></i>
                                                        <i class="fa fa-heart heart heart-rel"  aria-hidden="true" title="ลบในรายการที่ชอบ" @click="addfav(index)" v-else></i> -->

       <!-- <i class="fa fa-exchange" aria-hidden="true"></i> -->
    <div class="col">
      <div class="price rela-left">
         <div class="product_view" style="text-align: center;"><img src="https://img.advice.co.th/images_nas/advice/oneweb/images/views-2.png" class="view_eye"> 786
         </div>
</div>
</div>

  </div>





                                                   <div class="product-footer">
                                                   <div class="addtocart">
                                                   <button type="button" title="เพิ่มลงตะกร้า" data-placement="top" class="button btn-cart" @click="addToCart(item)">
                                                   <span>
                                                   <span>{{placeholder_buy}} </span>
                                                   </span>
                                                   </button>
                                                   </div></div>

                                                </div>
        </div>
        </div>
        </div>





                    </div>
      </div>

    </div>


                        <!-- -------------------------Mobile------------------------------ -->




    <br>
    </section>

</template>


<script>
  import { mapGetters,mapState } from "vuex";
  import { FETCH_PRODUCT_SHELL } from "../store/actions.type.js";
  import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART } from "@/store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";

  export default {
    data() {
      return {
        rating:3,
        active_el:1,
        activeItem:null,
        placeholder_buy: "",
        language:"",
        isHovered: false,
         message: 'Hover Me!',
        product: {},
        a:['297','298'],
        form:{
          cate:null
        }
      }
    },
     computed: {

     ...mapGetters(["product_shell","authenticated","shell_cate"]),

          ...mapState({
                objects: state => state.ProductShell.shell_cate,
            }),


         isUrl () {
                return this.$store.state.user.url_id;
        },

        isLogins () {
                return this.$store.state.auth.loggedIn;
        },




        },

        async created() {

        this.language = localStorage.getItem("language");
        if(this.language == 'en'){
         this.placeholder_buy = 'Add To Cart';

        }
        if(this.language == 'ch'){
          this.placeholder_buy = '添加到購物車';
        }
         if(this.language == 'th' || this.language == null){
          this.placeholder_buy = 'เพิ่มลงตะกร้า';

        }

        this.product_shell
        console.log(this.product_shell);
    },

        mounted() {
        //  this.$store.dispatch(ToogleAction);

           //     let a = this.$store.dispatch(FETCH_PRODUCT_SHELL);


        this.loadcategory()

         },


        methods: {

          checkactive(e){
          console.log(e);

              return false;
          },

          addfav(index){

this.activeItem = index;





          },
          removefav(el){

          },
      mouseover(index){





      },
    mouseleave(index){


      },



        redirectTo(name) {
                    this.$router.push(name)
                  },
       async loadcategory(){



        },
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },
        async addToCart(item){

           let add_producttocart = await this.$store.dispatch(ADD_CART,item);
                 await this.$swal("เพิ่มสินค้าเรียบร้อยแล้ว", "สินค้าอยู่ตะกร้าแล้ว", "success")
        },
        async CheckLogin(item){
       if(!this.authenticated){

                         let path = this.$route.path

const names = 'id-form-login'
 const Shopid = this.isUrl.id;



return false;
            //  this.$router.push({ path: `/1/${name}` }) // -> /user/123
                //   this.$router.push({ params: { id: '1' } ,name: name})
                   this.$router.push({ name: names, params: { id: Shopid }})

              //  this.$router.push('/form/login')
       }else{
        this.addToCart(item);
       }
        },
       async Shop(item){


  let name = item.shop_name+'/product/productdetail/'+item.id;

    this.$router.push(name)
        },
        formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        return val;
        },

        },


        components: {

        },

    }
</script>
