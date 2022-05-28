<template>


   <div class="container col-12">
 <div class="row" style="padding-top: 40px;">
    <div class="col-md-12 col-sm-12 col-lg-12 col-xl-8">
      <div class="card pos" >
                  <div class="row">
                                  <div class="col-xs-12 col-sm-5 col-md-3 pos" v-for="i in index" :key="i.id" style="padding-right:1px;"  @click="addproduct(i)">
<div class="card">
  <img class="card-img-top" src="https://picsum.photos/300/300/?image=41" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title {{i.id}}</p>

  </div>
  <div v-if="item"  v-for="is in item" :key="is.id">
  <div v-if="is.id == i.id">
    {{i.qty}}
    </div>
    </div>
</div>
</div>
</div>
</div>
</div>
<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 ipad-order or-mob">
            <SumPos/>
    </div>
  </div>
 </div>
</template>




<script>
 import { mapGetters,mapState } from "vuex";
  import Nav from "@/components/Nav";
  import Footer from "@/components/Footer";
  import Coupon from "@/components/Coupon";
  import SumPos from "@/components/SumPos";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART,ADD_UP,ADD_DOWN,ADD_INPUT,REMOVIE_ALL,ADD_ITEM } from "@/store/actions.type.js";


    export default {
            data() {
      return {
          background:true,
          test:0,
          selected:[],
            index: [
          {id:1,age: 40, description: 'Dickerson', unitprice: 'Macdonald', code: 'Macdonald', qty: 1,image:'https://picsum.photos/300/300/?image=41' },
          {id:2,age: 40, description: 'Dickerson', unitprice: 'Macdonald', code: 'Macdonald', qty: 1,image:'https://picsum.photos/300/300/?image=41' },
          {id:3,age: 40, description: 'Dickerson', unitprice: 'Macdonald', code: 'Macdonald', qty: 1,image:'https://picsum.photos/300/300/?image=41' },
          {id:4,age: 40, description: 'Dickerson', unitprice: 'Macdonald', code: 'Macdonald', qty: 1,image:'https://picsum.photos/300/300/?image=41' },
          {id:5,age: 40, description: 'Dickerson', unitprice: 'Macdonald', code: 'Macdonald', qty: 1,image:'https://picsum.photos/300/300/?image=41' },
          {id:6,age: 40, description: 'Dickerson', unitprice: 'Macdonald', code: 'Macdonald', qty: 1,image:'https://picsum.photos/300/300/?image=41' },

        ]
      }
    },

      components: {
          Nav,
          Footer,
          Coupon

              },

               computed: {
   ...mapGetters(["product_shell","authenticated","shell_cate","item"]),

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

        }
        if(this.language == 'th' || this.language == null){
          this.placeholder_cart = 'สินค้าในตะกร้า';
          this.placeholder_pic = 'รูปภาพ';
          this.placeholder_nameproduct = 'ชื่อสินค้า';
          this.placeholder_shop = 'ชื่อร้าน';
          this.placeholder_price = 'ราคา';
          this.placeholder_q = 'จำนวน';
          this.placeholder_total = 'ทั้งหมด';
          this.placeholder_del_cart = 'ลบสินค้าในตะกร้าทั้งหมด';
          this.placeholder_buy_cart = 'ซื้อสินค้าต่อ';
          this.placeholder_buy_order = 'สั่งซื้อสินค้า';
        }

        },

       methods: {

        async addproduct(id){




      let add_item = await this.$store.dispatch(ADD_ITEM,id);

         },

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
