<template>


<div>
 <div class="row">
        <div class="col-12">
                            <div class="h3 text-center mt-3 mb-4" v-if="searchkeyword"> รายการจากการค้นหาคำว่า {{searchkeyword}}</div>
                              <div class="h3 text-center mt-3 mb-4" v-else> ไม่มีรายการค้นหา</div>
                        </div>
    </div>
  <div class="heading-title-relat" v-if="cate_sel.length == 0 ">
        </div>
          <div class="heading-title-relat" v-else v-for="item in cate_sel" :value="item.id">

        </div>

        <div class="product" id="product">
            <div class="row product">
                 <div class="cards cards-mobile">
                    <div class="cardproduct-first" v-for="(item, index) in lists" :key="item.id" >
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

                                                   <div class="product-footer">
                                                   <div class="addtocart">
                                                   <button type="button" title="เพิ่มลงตะกร้า" data-placement="top" class="button btn-cart" @click="addToCart(item)">
                                                   <span>
                                                   <span>เพิ่มลงตะกร้า </span></span>
                                                   </button></div></div>

                                                </div>
        </div>
        </div>
        </div>
    
          
      <b-row>
      <b-col>
        <b-pagination
          @change="onPageChanged"
          :total-rows="numberOfPages"
          :per-page="perPage"
          v-model="currentPage"

          align="center"
        />
      </b-col>
    </b-row>
      
     
    </div>
</template>


<script>
const items = [

];
import { mapGetters } from "vuex";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART } from "@/store/actions.type.js";

  export default {
    data() {
    return {
      form:{
           shop_name:null,
           url:null
           },
      paginatedItems: [],
      currentPage: 1,
      perPage: 10,
      totalRows:null,
    };
  },


     computed: {
    ...mapGetters(["cate_sel","product_shell_find","authenticated","searchkeyword"]),


      numberOfPages() {
        return this.product_shell_find.length
      },
      isUrl () {
                return this.$store.state.user.url_id;
        },

        lists () {
      const items = this.$store.getters.product_shell_find

      // Return just page of items needed
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },



        },




        created(){

        },




      async mounted() {
          this.form.url = window.location.origin;
         this.form.shop_name = this.$route.params;
      let product_by_shop = await this.$store.dispatch(FETCH_PRODUCT_BY_SHOP,this.form).then((response) => response.status == 200 ? this.success() : this.error()).catch((error) => this.error(error.response))
        this.paginatedItems = this.product_by_shop

        this.totalRows = this.product_by_shop.length
         await this.paginate(this.perPage, 0);
         },

      methods: {

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

          paginate(page_size, page_number) {
      let itemsToParse = this.product_by_shop;

      this.paginatedItems = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );


    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },


            success() {

            },
            error($text) {

           this.$router.push('/error')


            },

           async addToCart(item){




   this.$swal("เพิ่มสินค้าเรียบร้อยแล้ว", "สินค้าอยู่ตะกร้าแล้ว", "success")
  let add_producttocart = await this.$store.dispatch(ADD_CART,item);
            },
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },






        }



        }


</script>
