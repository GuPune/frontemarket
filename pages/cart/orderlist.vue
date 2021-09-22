<template>

   
   <div class="container col-12" style="padding-top: 40px;">

<!-- --------------------------------store 1--------------------------------- -->
 <div class="row">
    <div class="col-md-9 col-sm-12">
      <div class="card shopping-cart">
                  <h2 class="title-shoping-cart bg-order bg-order-mobile"><span>สินค้าในตะกร้า</span></h2>
               
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="cart-row cart-row-top hidden-xs cart-row-order-mobile">
                        <div class="row cart-mobile-dis">
                            <div class="col-xs-12 col-sm-5 col-md-6 col-lg-6">
                                <div class="row">
                                    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3"><div class="title-top h4">รูปภาพ</div></div>
                                    <div class="col-xs-6 col-sm-12 col-md-7 col-lg-7">
                                        <div class="title-top h4">ชื่อสินค้า</div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-2 col-lg-2">
                                        <div class="title-top h4">ชื่อร้าน</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="row">
                                    <div class="col-xs-3 col-sm-12 col-md-3 col-lg-3">
                                        <div class="title-top h4">ราคา</div>
                                    </div>
                                    <div class="col-xs-3 col-sm-12 col-md-4 col-lg-4">
                                        <div class="title-top h4">จำนวน</div>
                                    </div>
                                    <div class="col-xs-3 col-sm-12 col-md-4 col-lg-4">
                                        <div class="title-top h4">ทั้งหมด</div>
                                    </div>
                                    <div class="col-xs-3 col-sm-12 col-md-2 col-lg-2"></div>
                                </div>
                            </div>
                        </div>

  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
    <div class="cart-row"  v-for="(item, index) in cart" :key="cart.id">
        <div class="row">
            <div class="col-xs-12 col-sm-5 col-md-6 col-lg-6 shop-name-order-pc">
                <div class="row">
                    <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3 text-mobile">
                        <a href="https://www.svgroup.co.th/c-dial-pro-4.html" title="C-DIAL PRO 4 ตัวควบคุม 4 สถานี 9 V. รุ่นใช้ในร่ม" class="product-image"><img class="img-responsive lazy order-picture-mobile"  :src="Checkimage(item.img_product)" width="100" height="100" alt="C-DIAL PRO 4 ตัวควบคุม 4 สถานี 9 V. รุ่นใช้ในร่ม" /></a>
                        </div>
                    <div class="col-xs-6 col-sm-8 col-md-7 col-lg-7 text-mobile">
                        <h5 class="order-name">{{item.name_en}}</h5></div>
                        <div class="col-xs-6 col-sm-8 col-md-2 col-lg-2 text-mobile shop-name-order-pc">
                        <h5 class="order-name">{{item.name_en}}</h5></div>
                </div>
            </div>
        
            <div class="col-xs-12 col-sm-7 col-md-6 col-lg-6">
                <div class="row shop-name-order-pc">
                    <div class="col-xs col-sm-3 col-md-3 col-lg-3">
                                 <div class="tax-excl text-mobile"><span class="cart-price"><span class="price">฿{{item.price}}
                                 </span></span></div></div>
                    <div class="col-md-3 col-lg-3">
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
                    <div class="visible-xs-block clearfix"></div>
                    <div class="col-xs col-sm-3 col-md-4 col-lg-4">
                                                <div class="total-tax-excl">
                                                            <span class="cart-price"><span class="price">฿{{item.totalPrice}}</span></span>
                                                    </div>
                                                                    </div>
                        <div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 text-mobile">
                        <div class="remove-item-cart"  @click="RemoveToCart(index)">
                            <i class="fa fa-trash"></i>
                        </div>
                    </div>
                </div>
         <div class="row shop-name-order-mobile">
    
            <div class="row">
               
                <div class="col-10 shop-name-order">
                        <h5>ชื่อร้าน : xxxxxx</h5>
                 </div>
           
            <div class="col-2 shop-name-order trash-mobile">
                        <div class="remove-item-cart"  @click="RemoveToCart(index)">
                                         <i class="fa fa-trash"></i>
                                     </div>
                 </div>
                <div class="col-5 shop-name-order">
                                                <a href="https://www.svgroup.co.th/c-dial-pro-4.html" title="C-DIAL PRO 4 ตัวควบคุม 4 สถานี 9 V. รุ่นใช้ในร่ม" class="product-image"><img class="img-responsive lazy"  :src="Checkimage(item.img_product)" width="125" height="125" alt="C-DIAL PRO 4 ตัวควบคุม 4 สถานี 9 V. รุ่นใช้ในร่ม" /></a>

                </div>
                <div class="col-7 shop-name-order">
                     <div class="col-12 shop-name-order">
                            <div class="row">
                                <div class="col-12 shop-name-order order-name-mobile-font">
                                        <div>{{item.name_en}}</div>
                                </div>    
                                <div class="col-12 shop-name-order order-price-mobile-font">
                                        <div>฿{{item.price}}</div>
                                </div>   
                                <div class="col-12 shop-name-order">
                              
                                         <span class="visible-xs-inline-block">ทั้งหมด </span>
                                                                            <span class="price">฿{{item.totalPrice}} -</span>       
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
</div>




  
    
    </div>
    </div>
    </div>
    </div>
    <div class="col-md-3">
     <div class="col-md-12 sm-12 order-mod">
        <div class="card shopping-cart">
                  <h2 class="title-shoping-cart bg-order"><span>ยอดรวมตะกร้าสินค้า</span></h2>
                        <div class="card-body">
                        <div class="table table-responsive">
                        <table width="100%" cellspacing="0" cellpadding="3" border="0" class="table table-responsive table-hover">
                        <tr>
                        <td class="text-left"  width="100%">รวมทั้งหมด (บาท)</td>
                        <td class='text-right'>{{PriceToTal}}.00</td></tr>
                        <tr>
                        <td class="text-left">ส่วนลด (บาท)</td>
                        <td class='text-right'>0.00</td>
                        </tr>
                        <tr>
                        <td class="text-left" style="color:red;">ราคาสุทธิที่ต้องชำระ (บาท)</td>
                        <td class="text-right">
                        <span style="  border-bottom: 1px solid #cdcdcd;">
                        <span style="  border-bottom: 1px solid #cdcdcd;padding-bottom:2px;">
                        <span style="color:red">
                        0.00 </span>
                        </span>
                        </span>
                        </td>
                        </tr>
                        </table>
                        </div>
                        </div>    
            </div>
            </div>
<br>
            <div class="col-md-12">
        <div class="card shopping-cart">
                  <h2 class="title-shoping-cart bg-order"><span>คูปองส่วนลด</span></h2>
                        <div class="card-body">
                        <div class="table table-responsive">
                          <table width="100%" cellspacing="0" cellpadding="3" border="0" class="table table-responsive table-hover">
                        <tr>
                        <td class="text-left"  width="100%"><input type="text" name="coupon_discount" id="coupon_discount" class="form-control required" placeholder="กรอกรหัสเพื่อรับส่วนลด" title="กรอกรหัสเพื่อรับส่วนลด" value="" /></td>
                        <td class='text-right'><button type="button" class="btn btn-primary">ยืนยัน</button></td></tr>
                      
                    
                        </table>
                        </div>
                        </div>    
            </div>
            </div>
            
    </div>
   
  </div>

 </div>


    
                
    
</template>




<script>
  
  import Nav from "@/components/Nav";
  import Footer from "@/components/Footer";
import { FETCH_PRODUCT_BY_SHOP,FETCH_CATE_BY_SHOP,ADD_CART,REMOVE_CART,ADD_UP,ADD_DOWN,ADD_INPUT } from "@/store/actions.type.js";


    export default {
      components: {
          Nav,
          Footer
           
              },

               computed: {
    
        cart () {
        return this.$store.state.Cart.cart
        },
        PriceToTal () {
        return this.$store.state.Cart.PriceToTal
        }
           

        },
             
        mounted() {},

       methods: {
        Checkimage(image){
        
                let a = 'http://127.0.0.1:8000/public/product/'+image;
                return a;
        },
        RemoveToCart(item){
    this.$swal("Remove Product!", "Remove Product From Cart!", "success")
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
            let keytext = 'เพิ่มสินค้าเรียร้อย!'
            await this.success(keytext);

        },
        async Adddown(item){
            if(item.quantity == 1){
                this.error()
            }else{
                let Add_down = await this.$store.dispatch(ADD_DOWN,item);
                let keytext = 'ลดสินค้าเรียบร้อย!'
                await this.success(keytext);
            }
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