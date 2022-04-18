<template>

<section id="Productdetail" class="product-details">
<div class="container product-details-in productItemDetail" style="background-color: white;">
<div v-if="loadding">

<Loader/>
</div>
       <div class="row">
            <div class="col-sm-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
                                                    <li class="breadcrumb-item "  itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                                                    <a itemscope itemtype="https://schema.org/Thing" itemprop="item" href="/"
                                       alt="คลิกไปที่ หน้าแรก" title="คลิกไปที่ หน้าแรก" id="1">
                                        <span itemprop="name">หน้าแรก</span>
                                    </a>
                                    <meta itemprop="position" content="1">
                                                            </li>
                                                    <li class="breadcrumb-item "  itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                                                    <a itemscope itemtype="https://schema.org/Thing" itemprop="item"
                                       alt="คลิกไปที่ สินค้าทั้งหมด" title="คลิกไปที่ สินค้าทั้งหมด" id="2">
                                        <span itemprop="name"  @click="redirectTo(product_by_item.shop_name)">{{product_by_item.shop_name_title}}</span>
                                    </a>


                                    <meta itemprop="position" content="4">
                                                            </li >
                                            </ol>
                </nav>
            </div>
        </div>
<div class="row no-margin" v-if="isHidden" hidden>
   <div class="left col-lg-5 col-md-6 col-sm-6">

   <div >

      <!-- <no-ssr>
       <ProductZoomer
    :base-images="images"
    :base-zoomer-options="zoomerOptions"
  />
    </no-ssr> -->
     <product-zoomer :base-images="images"></product-zoomer>
   </div>
   </div>



<div class="col-12 col-md-12 col-lg-12 col-xl-7 col-sm-12 product-detail-ipad" hidden>
            <div class="marginInner">
            <h2 class="productName-detail">{{product_by_item.name_th}}</h2>
            </div>
            <div class="row">
                <div class="col-md-12">
                <div class="form-group">
                <div class="marginInner">
                   <h1 class="product-detail-title">{{product_by_item.description}}</h1>
                <div class="ratings">
                <div class="rating-box-detail">
                <div class="rating" style="width:%">
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                                    <div class="marginInner mb-4 mb-md-4"><div class="dividerFix"></div></div>
                                    <div class="row ">
                <div class="col-12">
                    <div class="form-group">
                        <div class="marginInner">
                            <div class="productPrice">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

                            <input type="hidden" class="hiddenAttributeSelected" name="hiddenAttributeSelected[]" value="0" />
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group h5">
                        <div class="marginInner mb-4 mb-md-4">
                            <p class="productPrice"> ฿{{formatPrice(product_by_item.price)}}</p>

                        </div>
                    </div>
                </div>
            </div>

              <div class="row">

             <div class="col-md-2 attrHeader form-group">{{placeholder_q}} </div>


                <div class="col-md-4 col-sm-4">
                    <div class="group-product-number">
                           <b-input-group size="sm">
                                        <b-input-group-prepend>
                                        <b-btn variant="outline-info" v-on:click='Adddown(product_by_item.stock)'>-</b-btn>
                                        </b-input-group-prepend>
                                        <b-form-input type="text" min="0" class="text-number-order productde-text-ce"  v-model="add"   @keypress="validateNumber"  :disabled="selected === 0"></b-form-input>
                                        <b-input-group-append>
                                        <b-btn variant="outline-secondary"  v-on:click='Addup(product_by_item.stock)'>+</b-btn>
                                        </b-input-group-append>
                                        </b-input-group>
                    </div>
                </div>
                  <div class="col-md-4 attrHeader form-group">{{placeholder_qtotal}}  {{product_by_item.stock}}  </div>
            </div>





 <div class="marginInner mb-4 mb-md-4">
 <div class="dividerFix">
 </div>
 </div>
 <div class="row">
                <div class="col-md-12">
                    <div class="form-group h5">
                        <div class="marginInner mb-4 mb-md-4">
                            <p >{{placeholder_detail}}
</p>
                       <h1 class="product-mini">{{product_by_item.product_details}}</h1>
                        </div>
                    </div>
                </div>
            </div>



             <div class="row">
                <div class="col-md-4 col-sm-12 pta-detau">
      <b-button size="lg" variant="outline-success" class="pro-des-btt" @click="addToCart(product_by_item)"><i class="fa fa-shopping-cart fa-1x">&nbsp;</i>{{placeholder_buy}}</b-button>

                </div>

                  <!-- <div class="col-md-4 col-sm-12 pta-detau">
    <b-button size="md" variant="danger" class="pro-des-btt" @click="redirect('cart-orderlist')">ซื้อสินค้า</b-button>
                </div> -->
            </div>





              </div>
                    </div>








<div class="row">
  <div class="col-12 col-md-5 col-sm-12">
    <div class="row">
        <div v-if="action">

    <div v-if="type == 'N'">
        <img class="zoompos"  :src="action" alt=""/>
      </div>
      <div class="yoom" v-else>
          <iframe class="yor"
                            src="https://www.youtube.com/embed/4FZKdEZ4T5E?&controls=0&autoplay=1&loop=1&mute=1&rel=0"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            >
                        </iframe>

        </div>
</div>
    </div>
      <div class="row zoomthu" v-if="isHidden">

      <div v-for="(item, index) in xx.normal_size" class="zoomporr">

      <div v-if="item.type == 'N'">
          <img class="zoompor hosve"  :src="item.url" alt=""   @mouseover="mouseOver(item)"/>
      </div>
       <div v-else  @mouseover="mouseOver(item)" class="zoompor hosve">
                  <iframe class="zoompor"
                            src="https://www.youtube.com/embed/4FZKdEZ4T5E?&controls=0&1&loop=1&mute=1&rel=0"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            >
                    </iframe>
      </div>
      </div>
</div>
  </div>
<div class="col-12 col-md-12 col-lg-7 col-xl-7 col-sm-12 product-detail-ipad pro_des_pad_mobile">
            <div class="marginInner">
            <h2 class="productName-detail">{{product_by_item.name_th}}</h2>
            </div>
            <div class="row">
                <div class="col-md-10">
                <div class="form-group">
                <div class="marginInner">
                   <h1 class="product-detail-title">{{product_by_item.description}}</h1>
                <div class="ratings">
                <div class="rating-box-detail">
                <div class="rating" style="width:%">
                </div>

                </div>
                </div>
                </div>
                </div>
                </div>


                </div>
                                    <div class="marginInner mb-4 mb-md-4"><div class="dividerFix"></div></div>
                                    <div class="row ">
                <div class="col-12">
                    <div class="form-group">
                        <div class="marginInner">
                            <div class="productPrice">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

                            <input type="hidden" class="hiddenAttributeSelected" name="hiddenAttributeSelected[]" value="0" />
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group h5">
                        <div class="marginInner mb-4 mb-md-4">
                            <p class="productPrice"> ฿{{formatPrice(product_by_item.price)}}</p>

                        </div>
                    </div>
                </div>
            </div>

              <div class="row">
             <div class="col-md-2 attrHeader form-group">{{placeholder_q}} </div>
                <div class="col-md-4 col-sm-4">
                    <div class="group-product-number">
                           <b-input-group size="sm">
                                        <b-input-group-prepend>
                                        <b-btn variant="outline-info" v-on:click='Adddown(product_by_item.stock)'>-</b-btn>
                                        </b-input-group-prepend>
                                        <b-form-input type="text" min="0" class="text-number-order productde-text-ce"  v-model="add"   @keypress="validateNumber"  :disabled="selected === 0"></b-form-input>
                                        <b-input-group-append>
                                        <b-btn variant="outline-secondary"  v-on:click='Addup(product_by_item.stock)'>+</b-btn>
                                        </b-input-group-append>
                                        </b-input-group>
                    </div>
                </div>
                  <div class="col-md-4 attrHeader form-group">{{placeholder_qtotal}}  {{product_by_item.stock}}  </div>
            </div>





 <div class="marginInner mb-4 mb-md-4">
 <div class="dividerFix">
 </div>
 </div>
 <div class="row">
                <div class="col-md-12">
                    <div class="form-group h5">
                        <div class="marginInner mb-4 mb-md-4">
                            <p >{{placeholder_detail}}
</p>
                       <h1 class="product-mini">{{product_by_item.product_details}}</h1>
                        </div>
                    </div>
                </div>
            </div>
  <div class="marginInner mb-4 mb-md-4"><div class="dividerFix"></div></div>

             <div class="row">
                <div class="col-md-8">
                    <div class="form-group h5">
                        <div class="marginInner mb-4 mb-md-4">
                            <p >ร้านค้า : {{product_by_item.shop_name_title}}
</p>


                        </div>
                    </div>
                </div>

                                <div class="col-md-4">
                    <div class="form-group h5">
                        <div class="marginInner mb-4 mb-md-4">
                            <p >สินค้าโปรด


                                         <i class="fa fa-heart heart heart-rel active"  aria-hidden="true" title="เพิ่มในรายการที่ชอบ" @click="removeaddfav()" v-if ="active_el == '1'"></i>
                                                        <i class="fa fa-heart heart heart-rel"  aria-hidden="true" title="ลบในรายการที่ชอบ" @click="addfav()" v-else></i>

</p>


                        </div>
                    </div>
                </div>

            </div>
            <div class="row">


            </div>

<div class="marginInner mb-4 mb-md-4"><div class="dividerFix"></div></div>


  <div class="row">
  <div class="col-1 col-sm-3">
    <div class="share">แชร์: </div>
  </div>
  <div class="col-1 col-sm-1">

    <div class="share social">
<div class="fb-share-button" :data-href="sharefacebook()" data-layout="button_count" data-mobile-iframe="true">
<a target="_blank" onclick="goclicky(this); return false;" href="https://www.facebook.com/sharer/sharer.php?u=https://emarketplace.idtest.work/SHOPEMARKET09022022000195/product/productdetail/184">
<img src="https://www.thailandpostmart.com/templates/images/icon-type/ic_facebook.png" width="35" height="35">
</a>
<div id="fb-root"></div>
</div>
</div>
  </div>
  <div class="col-1 col-sm-1">

    <div class="share">
<a href="//lineit.line.me/share/ui?url=https://emarketplace.idtest.work/SHOPEMARKET09022022000195/product/productdetail/184" target="_blank">
<img src="https://www.thailandpostmart.com/templates/images/icon-type/ic_line.png" width="35" height="35">
</a>
</div>
  </div>
  <div class="col-1 col-sm-1">

             <div class="share">
<a href="https://twitter.com/intent/tweet?text=test&amp;tw_p=tweetbutton&amp;url=https://emarketplace.idtest.work/SHOPEMARKET09022022000195/product/productdetail/184" target="_blank">
<img src="https://www.thailandpostmart.com/templates/images/icon-type/ic_twitter.png" width="35" height="35">
</a>
</div>
  </div>
</div>

<br>


             <div class="row">
                <div class="col-md-4 col-sm-12 pta-detau">
      <b-button size="md" variant="outline-success" class="pro-des-btt" @click="addToCart(product_by_item)"><i class="fa fa-shopping-cart fa-1x">&nbsp;</i>{{placeholder_buy}}</b-button>
                </div>

                  <!-- <div class="col-md-4 col-sm-12 pta-detau">
    <b-button size="md" variant="danger" class="pro-des-btt" @click="redirect('cart-orderlist')">ซื้อสินค้า</b-button>
                </div> -->
            </div>





              </div>

</div>


                    <div class ="row">
<div class="col-12">

                    <b-tabs class="product-detail-tab"><b-tab active>
                    <template #title><b-spinner type="grow" small></b-spinner>
                    {{placeholder_info}}
                    </template><p class="p-3" >
                    <p><span v-html="product_by_item.details"></span></p></p>
                    </b-tab></b-tabs>
                  </div>
                    </div>






    </div>



</section>


</template>
<style>
.thumb-list{
  height: unset!important;
  width:76.6px;

  visibility:visible !important;
}
.preview-box {
height: 300px!important;
width: 300px!important;
}

.choosed-thumb{
  height: 100px!important;
width: 100px!important;
}
</style>

<script>
  import { mapGetters,mapState } from "vuex";
  import { FETCH_BY_PRODUCT_SHOP_ONE_ITEM,FETCH_IMAGE_PRODUCT,ADD_CART,ADD_PRODETAIL,FETCH_GET_PROFILE } from "@/store/actions.type.js";
  import ProductZoomer from 'vue-product-zoomer'
  import Nav from "@/components/Nav";
  import Footer from "@/components/Footer";



    export default {
 head() {
      return {
        title: 'Home page',
      };
    },
      data() {
        return {
           title: 'Home page',
          active_el:0,
          type:null,
          action:null,
           xx: {
        normal_size: [
          {
            id: 1,
            'url': 'https://assets.brandinside.asia/uploads/2020/02/shutterstock_473639749.jpg',
            type:'v'
          },
          {
            id: 2,
            'url': 'https://assets.brandinside.asia/uploads/2020/02/shutterstock_473639749.jpg',
            type:'p'
          },
          {
            id: 3,
             'url': 'https://assets.brandinside.asia/uploads/2020/02/shutterstock_473639749.jpg',
             type:'p'
          },
          {
            id: 4,
              'url': 'https://assets.brandinside.asia/uploads/2020/02/shutterstock_473639749.jpg',
              type:'p'
          },
          {
            id: 5,
              'url': 'https://assets.brandinside.asia/uploads/2020/02/shutterstock_473639749.jpg',
              type:'p'
          },
            {
            id: 6,
              'url': 'https://assets.brandinside.asia/uploads/2020/02/shutterstock_473639749.jpg',
              type:'p'
          }
        ],

      },
 ima: {
          thumbs: [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/thumbs/1.jpeg'
            }
          ],
          normal_size: [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/normal_size/1.jpeg'
            }

          ],
          large_size: [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/large_size/1.jpeg'
            },
          ]
      },


  key:0,
  isHiddenzoom:false,
        isHidden:false,
    loadding:true,
      zoomerOptions: {
      zoomFactor: 3,
      pane: "pane",
      hoverDelay: 300,
      namespace: "zoomer-bottom",
      move_by_click: false,
      scroll_items: 4,
      choosed_thumb_border_color: "#dd2c00",
      scroller_position: "bottom",
      zoomer_pane_position: "right"

      },
      selected: 0,


            form:{

            },
  add:1
    };
  },
      components: {
          Nav,
          Footer

              },

                 computed: {


        ...mapGetters(["product_by_item","images","cart","authenticated"]),

        },

     async created () {


                   this.language = localStorage.getItem("language");

  if(this.language == 'en'){
         this.placeholder_buy = 'Add To Cart';
         this.placeholder_q = 'Quantity';
          this.placeholder_qtotal = 'Product Total';
          this.placeholder_detail = 'Details';
           this.placeholder_info = 'Information';
        }
        if(this.language == 'ch'){
          this.placeholder_buy = '添加到購物車';
          this.placeholder_q = '数量';
           this.placeholder_qtotal = '有所有产品';
           this.placeholder_detail = '细节';
           this.placeholder_info = '产品信息';
        }
         if(this.language == 'th' || this.language == null){
          this.placeholder_buy = 'เพิ่มลงในตะกร้าสินค้า';
          this.placeholder_q = 'จำนวน';
           this.placeholder_qtotal = 'มีสินค้าจำนวนทั้งหมด';
           this.placeholder_detail = 'รายละเอียด';
           this.placeholder_info = 'ข้อมูลสินค้า';
        }


    },

       async mounted() {

this.form.product_id = this.$route.params.slug;
this.form.shop_name = this.$route.params.id;
this.form.url = window.location.origin

let productshop_item = await this.$store.dispatch(FETCH_BY_PRODUCT_SHOP_ONE_ITEM,this.form);

this.xx.normal_size = productshop_item.data.normal_size;
this.action = this.xx.normal_size[0].url
this.type = this.xx.normal_size[0].type
     this.ima.thumbs = productshop_item.data.thumbs;
     this.ima.large_size = productshop_item.data.large_size;
     this.ima.normal_size = productshop_item.data.normal_size;
let images_product = await this.$store.dispatch(FETCH_IMAGE_PRODUCT,this.form);



    this.key++





     this.zoom(productshop_item);
      let a = await this.$store.dispatch(FETCH_GET_PROFILE)

           this.loadding = false;
        },


        methods: {

           mouseOver: function(e){

      this.action = e.url
      this.type = e.type
      console.log(e);
    },

            redirect(names) {

                let path = this.$route.path
                if (path !== names) {



            //  this.$router.push({ path: `/1/${name}` }) // -> /user/123
                //   this.$router.push({ params: { id: '1' } ,name: name})
                   this.$router.push({ name: names})
                }
            },

         async addfav(){

       if(!this.$auth.user){
            this.$router.push('/form/login')
       }else{
         this.active_el = 1;
       }



          },
        async removeaddfav(){

  if(!this.$auth.user){
   this.$router.push('/form/login')
  }else{
    this.active_el = 0;
  }

          },
          async sharefacebook(){

return 'https://emarketplace.idtest.work/SHOPEMARKET05022022000166/product/productdetail/297';

          },
        async addToCart(item){



item.add = this.add

let add_producttocart = await this.$store.dispatch(ADD_PRODETAIL,item);
   this.$swal("เพิ่มสินค้าเรียบร้อยแล้ว", "สินค้าอยู่ตะกร้าแล้ว", "success")

            },
     validateNumber: (event) => {
      let keyCode = event.keyCode;
      console.log('keyCode',event.target.value);
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }

    },
       formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")

        return val;
        },

        redirectTo(user_id) {

                this.$router.push('/'+user_id)
                  },




        Checkimage(image){

                let public_images = process.env.ImageURL+image;

                return public_images;
        },
        async Addup(stock){
            //// logic // จำนวนสินค้าที่มี
          //  let Add_up = await this.$store.dispatch(ADD_UP,item);
          if(this.add == stock){
        let keytext = 'สินค้ามีไม่เพียงพอ!'
            return await this.error(keytext);
          }
            this.add += 1;
        },
        async Adddown(){
            if(this.add == 0){

            let keytext = 'สินค้าจำกัดจำนวนไม่ต่ำกว่า 0!'

                return await this.error(keytext);
            }
          this.add -= 1;

        },

        error(keytext) {
                this.$swal({
                    icon: 'error',
                    title: 'สินค้า',
                    text: keytext,
                    showConfirmButton: true,
                    reverseButtons: true
                });
        },
        success(keytext) {

                 this.$swal({
                    icon: 'success',
                    title: 'สินค้า',
                    text: keytext,
                    showConfirmButton: true,
                    reverseButtons: true
                });

        },
         sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
},
        zoom(productshop_item) {
      //      console.log('productshop_itemxxxxxxxxxxxxx',productshop_item.data.thumbs)
// large_size
// normal_size
// thumbs


    //  this.ima.thumbs = productshop_item.data.thumbs,
    //  this.ima.large_size = productshop_item.data.large_size,
    //  this.ima.normal_size = productshop_item.data.normal_size,
  this.loadding = false;
  this.showImg = true;
this.isHiddenzoom = true;
  console.log(this.ima);


        //       this.images.thumbs = [
        // {
        //     id: 0,
        //     url:
        //       "http://127.0.0.1:8000/images/100.jpeg"
        //   },
        //   {
        //     id: 1,
        //     url:
        //       "http://127.0.0.1:8000/images/100.jpeg"
        //   },
        //     {
        //     id: 2,
        //     url:
        //       "http://127.0.0.1:8000/images/100.jpeg"
        //   }
        //   ],
        //      this.images.normal_size = [
        //   {
        //     id: 0,
        //     url:
        //       "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/4.jpeg"
        //   },
        //   {
        //     id: 1,
        //     url:
        //       "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/4.jpeg"
        //   },
        //    {
        //     id: 2,
        //     url:
        //       "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/4.jpeg"
        //   },
        //   ],

        //  this.images.large_size = [
        //     {
        //     id: 0,
        //     url:
        //       "http://127.0.0.1:8000/images/800.jpeg"
        //   },
        //   {
        //     id: 1,
        //     url:
        //     "http://127.0.0.1:8000/images/800.jpeg"
        //   },
        //    {
        //     id: 2,
        //     url:
        //     "http://127.0.0.1:8000/images/800.jpeg"
        //   }
        //   ]



                   this.loadding = false;
                    this.isHidden = true;

        },


       }





    };
</script>
