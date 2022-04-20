<template>


   <div class="container col-9" style="padding-top: 90px;">
  <Nav />
<!-- --------------------------------store 1--------------------------------- -->
<div class="row" style="padding-top: 40px;">
    <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12">
      <div class="card shopping-cart" >
                  <h2 class="title-shoping-fav bg-order bg-order-mobile">
                  <span>{{placeholder_cart}}</span>
                  </h2>

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="cart-row cart-row-top hidden-xs cart-row-order-mobile">
                        <div class="row cart-aamob-dis">

                            <div class="col-xs-12 col-sm-5 col-md-12 col-lg-12">
                                <div class="row">
                                       <div class="card-body">
                            <div id="divCartList">
                                <div class="divEmptyStatus" id="divEmptyStatus">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="text-center">
                                                <i class="fa fa-cart-plus fa-3x"></i>
                                                <p class="text-muted fs-24 mt-3">ไม่มีสินค้าโปรด</p>
                                                <button type="button" class="btn btn-lg-auto btn-style" id="buttonReturnShopping" @click="redirectToroot('index')" >
                                                    กลับไปสั่งซื้อสินค้า                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                </div>
                            </div>

                        </div>

                                     <div class="row cart-mobile-dis orderlist-center-deskop"  v-if="cart.length > 0">
                            <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                                <div class="row">
                                    <div class="col-xs-6 col-sm-4 col-md-6 col-lg-6"><div class="title-top h4">{{placeholder_pic}}</div></div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                                        <div class="title-top h4">{{placeholder_nameproduct}}</div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                                <div class="row">
                                    <div class="col-xs-3 col-sm-12 col-md-6 col-lg-6">
                                        <div class="title-top h4">{{placeholder_shop}}</div>
                                    </div>
                                    <div class="col-xs-3 col-sm-12 col-md-3 col-lg-3">
                                        <div class="title-top h4">{{placeholder_price}}</div>
                                    </div>

                                    <div class="col-xs-3 col-sm-12 col-md-3 col-lg-3">
                                          <div class="title-top h4">เพิ่มสินค้าในตะกร้า</div>

</div>
                                </div>
                            </div>
                        </div>


                         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 orderlist-center-deskop" >
    <div class="cart-row"  v-for="(item, index) in cart" :key="cart.id" :style="[index % 2 == 0 ? null : { 'background-color': '#F5F5F5' } ]">
        <div class="row">
            <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5 shop-name-order-pc">
                <div class="row">
                    <div class="col-xs-12 col-sm-4 col-md-6 col-lg-6 text-mobile">
                        <a href="#"  class="product-image"><img class="img-responsive lazy order-picture-mobile"  :src="Checkimage(item.img_product)" width="120" height="120" alt="C-DIAL PRO 4 ตัวควบคุม 4 สถานี 9 V. รุ่นใช้ในร่ม" /></a>
                        </div>
                    <div class="col-xs-6 col-sm-8 col-md-6 col-lg-6 text-mobile" style="text-align: left;">
 <div class="row">
    <h5 class="order-name text-ord">{{item.name_th}}</h5>
                        </div>

                          <div class="row" style="font-size:12px;">
        <div class="remove-item-cart"  @click="RemoveToCart(index)">

<span style="color: brown;">ลบรายการสินค้า</span>
                        </div>

                          </div>

                        </div>

                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 ipad-site">
                <div class="row shop-name-order-pc">
                    <div class="col-xs col-sm-3 col-md-6 col-lg-6">
                                 <div class="tax-excl text-mobile "><span class="cart-price"><span class="price  text-ord">{{item.shop_name_title}}
                                 </span></span>
                                 </div>
                                 </div>

                    <div class="visible-xs-block clearfix"></div>
                    <div class="col-xs col-sm-3 col-md-3 col-lg-3">
                                                <div class="total-tax-excl text-desktop">
                                                            <span class="cart-price"><span class="price  text-ord">50</span></span>
                                                    </div>
                                                                    </div>
                        <div class="col-xs-4 col-sm-4 col-md-2 col-lg-3 text-mobile">
                        <div class="remove-item-cart"  @click="RemoveToCart(index)">

                                      <button type="button" title="เพิ่มลงตะกร้า" data-placement="top" class="button">
                                                   <span>
                                                   <span style="font-size: 15px;">{{placeholder_buy}}</span>
                                                   </span>
                                                   </button>

                        </div>
                    </div>
                </div>
         <div class="row shop-name-order-mobile">
            <div class="row">
                <div class="col-10 shop-name-order">
                        <h5>ชื่อร้าน : {{item.shop_name_title}}</h5>
                 </div>

            <div class="col-2 shop-name-order trash-mobile">
                        <div class="remove-item-cart"  @click="RemoveToCart(index)">

                                         <img  src="../../assets/delete2.png" width="40" height="40" />
                                     </div>
                 </div>
                <div class="col-5 shop-name-order">
                                                <a href="https://www.svgroup.co.th/c-dial-pro-4.html" title="C-DIAL PRO 4 ตัวควบคุม 4 สถานี 9 V. รุ่นใช้ในร่ม" class="product-image"><img class="img-responsive lazy"  :src="Checkimage(item.img_product)" width="125" height="125" alt="C-DIAL PRO 4 ตัวควบคุม 4 สถานี 9 V. รุ่นใช้ในร่ม" /></a>

                </div>
                <div class="col-7 shop-name-order">
                     <div class="col-12 shop-name-order">
                            <div class="row">
                                <div class="col-12 shop-name-order order-name-mobile-font">
                                        <div>{{item.name_th}}</div>
                                </div>
                                <div class="col-12 shop-name-order order-price-mobile-font">
                                        <div>฿{{formatPrice(item.price)}}</div>
                                </div>
                                <div class="col-12 shop-name-order">

                                         <span class="visible-xs-inline-block">ทั้งหมด </span>
                                         <span class="price">฿{{formatPrice(item.totalPrice)}} -</span>
                                </div>
                                <div class="col-12 shop-name-order input-number-order">
                                      <b-input-group>
                                        <b-input-group-prepend>
                                        <b-btn variant="outline-info" v-on:click='Adddown(item)'>-</b-btn>
                                        </b-input-group-prepend>
                                        <b-form-input type="text" min="0" class="text-number-order"  :disabled="true" :value="item.quantity" maxlength=2 v-on:keypress="isNumber($event, item)" v-on:input="addEvent($event, item)"></b-form-input>
                                        <b-input-group-append>
                                        <b-btn variant="outline-secondary" v-on:click='Addup(item)'>+</b-btn>
                                        </b-input-group-append>
                                        </b-input-group>
                                </div>
                            </div>
                     </div>
                </div>
            </div>
            </div>
        </div>
        </div>


    </div>
     <div class="row">
     <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 button-order-spac">

    </div>
    </div>
</div>





    </div>
    </div>

    </div>

    </div>



    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 ipad-order or-mob">

<br>




    </div>

  </div>


  <div class="row">
    </div>
   </div>





</template>




<script>

  import Nav from "@/components/Nav";
  import Footer from "@/components/Footer";

import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART,ADD_UP,ADD_DOWN,ADD_INPUT,REMOVIE_ALL,GET_FAVALL,FETCH_GET_PROFILE } from "@/store/actions.type.js";


    export default {
            data() {
      return {
          background:true,
          test:0,
            items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald', x: 'Macdonald', a: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw', x: 'Macdonald', a: 'Macdonald' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' , x: 'Macdonald', a: 'Macdonald' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' , x: 'Macdonald', a: 'Macdonald' }
        ]
      }
    },
      components: {
          Nav,
          Footer,


              },

               computed: {

        isUrl () {
                return this.$store.state.user.url_id;
        },

        cart () {
        return this.$store.state.Cart.cart
        },
        PriceToTal () {
        return this.$store.state.Cart.PriceToTal
        }


        },

        mounted() {

        },

        async created(){
        this.language = localStorage.getItem("language");
        if(this.language == 'en'){
          this.placeholder_cart = 'Product in Cart';
          this.placeholder_pic = 'Picture';
          this.placeholder_nameproduct = 'Product Name';
          this.placeholder_shop = 'Shop';
          this.placeholder_price = 'Price';
          this.placeholder_q = 'Quantity';
          this.placeholder_total = 'Total';
          this.placeholder_del_cart = 'Remove all items in the cart';
          this.placeholder_buy_cart = 'Continue shopping';
          this.placeholder_buy_order = 'Place an order';
          this.placeholder_buy = 'เพิ่มสินค้าลงในตะกร้า';
        }
        if(this.language == 'ch'){
          this.placeholder_cart = '大车';
          this.placeholder_pic = '图片';
          this.placeholder_nameproduct = '产品名称';
          this.placeholder_shop = '店铺名称';
          this.placeholder_price = '价钱';
          this.placeholder_q = '数量';
          this.placeholder_total = '全部';
          this.placeholder_del_cart = '删除购物车中的所有物品';
          this.placeholder_buy_cart = '继续购物';
          this.placeholder_buy_order = '下订单';
          this.placeholder_buy = 'เพิ่มสินค้าลงในตะกร้า';

        }
        if(this.language == 'th' || this.language == null){
          this.placeholder_cart = 'รายการสินค้าโปรด';
          this.placeholder_pic = 'รูปภาพ';
          this.placeholder_nameproduct = 'ชื่อสินค้า';
          this.placeholder_shop = 'ชื่อร้าน';
          this.placeholder_price = 'ราคาขาย';
          this.placeholder_q = 'จำนวน';
          this.placeholder_total = 'ทั้งหมด';
          this.placeholder_del_cart = 'ลบสินค้าในตะกร้าทั้งหมด';
          this.placeholder_buy_cart = 'ซื้อสินค้าต่อ';
          this.placeholder_buy_order = 'สั่งซื้อสินค้า';
          this.placeholder_buy = 'เพิ่มสินค้าลงในตะกร้า';

        }


       if(!this.$auth.user){

       }else{
        let a = await this.$store.dispatch(FETCH_GET_PROFILE);
        this.form.id = a.id;

      let getfavall = await this.$store.dispatch(GET_FAVALL,this.form);
      console.log('getfavall',getfavall);

       }


        },

       methods: {

        redirectToroot(root) {

         this.$router.push({ name: root})
        },

        redirectTo(names) {

            if(this.cart.length == 0){

                return   this.$swal({
                    icon: 'error',
                    title: 'สินค้า',
                    text: 'ไม่มีสินค้า!',
                    showConfirmButton: true,
                    reverseButtons: true
                });
            }




        this.$router.push({ name: names})
        },
        reverseMessage(){


this.test == 0 ? true : false;


  //return { backgroundColor: 'white' };
        },
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

        RemoveToCart(item){
    this.$swal("ลบสินค้าเรียบร้อยแล้ว", "ลบสินค้าออกจากตะกร้าเรียบร้อยแล้ว", "success")
    let remove_producttocart =  this.$store.dispatch(REMOVE_CART,item);
        },

        addEvent (target,item) {
            item.quantityinput = target
   let add_cart =  this.$store.dispatch(ADD_INPUT,item);
        },
        async isNumber(event, message) {

                if (!/\d/.test(event.key) &&
                    (event.key !== "." || /\./.test(message))
                    )
                return event.preventDefault();


        },
        async Addup(item){
            //// logic // จำนวนสินค้าที่มี
            let Add_up = await this.$store.dispatch(ADD_UP,item);
            let keytext = 'เพิ่มลงตะกร้าเรียร้อย!'
          //  await this.success(keytext);

        },
        async Adddown(item){
            if(item.quantity == 1){
                this.error()
            }else{
                let Add_down = await this.$store.dispatch(ADD_DOWN,item);
                let keytext = 'ลดสินค้าเรียบร้อย!'
              //  await this.success(keytext);
            }
        },
        async RemoveToCartAll(){

        let Remove = await this.$store.dispatch(REMOVIE_ALL);
        },
        formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        return val;
        },
        error() {
                this.$swal({
                    icon: 'error',
                    title: 'สินค้า',
                    text: 'สินค้าไม่สามารถลดได้แล้ว!',
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

       }




    };
</script>
