<template>


    <section id="Related">
        <div class="row relatedweb">
                <div class="col-12 col-md-9 col-lg-9">
                   <div class="main-heading">

          <div class="heading-title-relat">
            <h2><span>Top Hit Shop</span>
	<em class="">ร้านค้าสุดฮิต</em>
			</h2>
        </div>
 <div>

  </div>

     <VueSlickCarousel v-bind="slickOptions"  v-if="items.length">

    <div v-for="(i, index) in items" class="img-wrapper">

             <div class="card c-shopinmy">
                    <div class="cardproduct">
                 <img class="imgproduct imgproduct-test related-images imgproductmyshop im-rela-mobile" :src="Checkimage(i.icon)">
                                                   <div class="product-footer">
                                                   <div class="addtocart">
                                                       <b-button  variant="success shop-relation" size="sm" @click="redirectTo(i.shop_name)">{{placeholder_shop}}</b-button>
                                                   </div></div>

                                                </div>
        </div>
      </div>


    </VueSlickCarousel>
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
  import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART,GET_SHOP } from "@/store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'



  export default {
        data() {
      return {
        placeholder_shop:null,
            form:{
          shop_name:null,
            url:null
          },
          items: [],
        //   items: [
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/cocacala-logo.jpg',
        //   },
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/colgate-logo.jpg',
        //   },
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/foremost-logo.jpg',
        //   },
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/entranccdd.png',
        //   },
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/logo-p-g-196x196px.jpg',
        //   },
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/pepsi-logo-brand-20210301-1.jpg',
        //   },
        //   {
        //     src: 'https://static.bigc.co.th/media/bannerads/images/unicharmm.png',
        //   },
        // ],


  slickOptions:{
  "dots": true,
  "infinite": false,
  "arrows": false,
  "speed": 500,
  "slidesToShow": 6,
  "slidesToScroll": 4,
  "initialSlide": 0,
   "autoplay": false,
  "speed": 500,
  "autoplaySpeed": 500,
  "responsive": [
      {
      "breakpoint": 1300,
      "settings": {
        "slidesToShow": 4,
        "slidesToScroll": 4,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3
      }
    },
        {
      "breakpoint": 375,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3
      }
    }
  ]
}

      }
    },

     computed: {

     ...mapGetters(["product_shell","authenticated"]),


         isUrl () {
                return this.$store.state.user.url_id;
        },


        },

            async created() {

        this.language = localStorage.getItem("language");
        if(this.language == 'en'){
         this.placeholder_shop = 'Shop now';

        }
        if(this.language == 'ch'){
          this.placeholder_shop = '現在去購物';
        }
         if(this.language == 'th' || this.language == null){
          this.placeholder_shop = 'ช้อปเลย';

        }



    },

       async mounted() {


      let product = await this.$store.dispatch(GET_SHOP);


      this.items = product;



        this.loadcategory()

         },


        methods: {

        redirectTo(name) {

                    this.$router.push(name)
                  },
        loadcategory(){
        //  let productinshell = this.$store.dispatch(FETCH_PRODUCT_SHELL);
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
