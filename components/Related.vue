<template>


    <section id="Related">
        <div class="row relatedweb">
                <div class="col-9">
                   <div class="main-heading">
        <div class="heading-title">
            <h2><span>PRODUCT  AGRICULTURAL</span>
	<em class="">สินค้าเกษตรกร</em>
			</h2>
        </div>
        <div class="product" id="product">
            <div class="row product">
                 <div class="cards">
                    <div class="cardproduct" v-for="(item, index) in product_shell" :key="product_shell.id">
                                                        <img class="imgproduct" height="200px" src="https://www.svgroup.co.th/media/catalog/product/cache/5/small_image/500x500/9df78eab33525d08d6e5fb8d27136e95/d/o/download_3.jpg">
                                                            <div class="product-name">{{item.name_th}}</div>
                                                            <p class="price">฿{{item.price}}.00</p>
                                                   <div class="product-footer">
                                                   <div class="addtocart">
                                                   <button type="button" title="Add To Cart" data-placement="top" class="button btn-cart" @click="CheckLogin(item)">
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

        <div class="item-inner">
                <div class="product-item">
                     <div class="content products-list">
                        <div class="product-show">
                     
                        </div>
                     </div>

                     
                </div>
        </div>

                                

                        
                    </div> 
      </div>

    </div>


                        <!-- -------------------------Mobile------------------------------ -->

            <div class="row relatedmobile">
                <div class="col-12">
                        <h4>สินค้าแนะนำ</h4>
                        

                              <div class="product" id="product">
                                        <div class="row product">
                                            <div class="cards">
                                              <div class="cardproduct" >
                                                        <img class="imgproduct"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYB4yOhfM-93z9SCPAv3CZIdJCQDNOcPg1w&usqp=CAU">
                                                            <h6 style="margin-top:10px;">เมล็ดพันธุ์ผักบุ้งแก้ว</h6>
                                                            <p class="price">10 ฿</p>
                                                            <p>รายละเอียดสินค้า</p>
                                                            <p><button class="addcart">เพิ่มลงตะกร้า</button></p>    
                                                    </div> 
                                              


                                            
                                                    <div class="cardproduct">
                                                        <img class="imgproduct" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwQ_-l2AuQpoBqeJdoVe2E9CZjFog3k5umw&usqp=CAU">
                                                            <h6 style="margin-top:10px;">เมล็ดพันธุ์ผักบุ้งแก้ว</h6>
                                                            <p class="price">10 ฿</p>
                                                            <p>รายละเอียดสินค้า</p>
                                                            <p><button class="addcart">เพิ่มลงตะกร้า</button></p>
                                                    </div> 
                                            

                                          
                                                    <div class="cardproduct">
                                                          <img class="imgproduct" src="https://www.vkkarnkaset.com/uploads/4596/images/2325.jpg">
                                                            <h6 style="margin-top:10px;">เมล็ดพันธุ์ผักบุ้งแก้ว</h6>
                                                            <p class="price">10 ฿</p>
                                                            <p>รายละเอียดสินค้า</p>
                                                            <p><button class="addcart">เพิ่มลงตะกร้า</button></p>
                                                      
                                                    </div> 
                                            

                                                
                                                    <div class="cardproduct">
                                                           <img class="imgproduct" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZc1mNJh9yRFfEanTveuI3oy5Cp0sVBYU2w&usqp=CAU">
                                                            <h6 style="margin-top:10px;">เมล็ดพันธุ์ผักบุ้งแก้ว</h6>
                                                            <p class="price">10 ฿</p>
                                                            <p>รายละเอียดสินค้า</p>
                                                            <p><button class="addcart">เพิ่มลงตะกร้า</button></p>
                                                    </div> 
                                             

                                            
                                                    <div class="cardproduct">
                                                          <img class="imgproduct" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbk8qJmYEzplxjedVKMqt6WYGTVD6zXNMxw&usqp=CAU">
                                                            <h6 style="margin-top:10px;">เมล็ดพันธุ์ผักบุ้งแก้ว</h6>
                                                            <p class="price">10 ฿</p>
                                                            <p>รายละเอียดสินค้า</p>
                                                            <p><button class="addcart">เพิ่มลงตะกร้า</button></p>

                                                        
                                                        
                                                    </div> 
                                              



                                              
                                                    <div class="cardproduct">
                                                            <img class="imgproduct" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZc1mNJh9yRFfEanTveuI3oy5Cp0sVBYU2w&usqp=CAU">
                                                            <h6 style="margin-top:10px;">เมล็ดพันธุ์ผักบุ้งแก้ว</h6>
                                                            <p class="price">10 ฿</p>
                                                            <p>รายละเอียดสินค้า</p>
                                                            <p><button class="addcart">เพิ่มลงตะกร้า</button></p>

                                                    </div> 
                                              


                                                    <div class="cardproduct">
                                                          <img class="imgproduct" src="https://www.vkkarnkaset.com/uploads/4596/images/2325.jpg">
                                                            <h6 style="margin-top:10px;">เมล็ดพันธุ์ผักบุ้งแก้ว</h6>
                                                            <p class="price">10 ฿</p>
                                                            <p>รายละเอียดสินค้า</p>
                                                            <p><button class="addcart">เพิ่มลงตะกร้า</button></p>

                                                        
                                                    </div> 
                                             


                                                
                                                    <div class="cardproduct">
                                                         <img class="imgproduct" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwQ_-l2AuQpoBqeJdoVe2E9CZjFog3k5umw&usqp=CAU">
                                                            <h6 style="margin-top:10px;">เมล็ดพันธุ์ผักบุ้งแก้ว</h6>
                                                            <p class="price">10 ฿</p>
                                                            <p>รายละเอียดสินค้า</p>
                                                            <p><button class="addcart">เพิ่มลงตะกร้า</button></p>

                                                    </div> 
                                              

                                       
                                                    <div class="cardproduct">
                                                            <img class="imgproduct" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYB4yOhfM-93z9SCPAv3CZIdJCQDNOcPg1w&usqp=CAU">
                                                            <h6 style="margin-top:10px;">เมล็ดพันธุ์ผักบุ้งแก้ว</h6>
                                                            <p class="price">10 ฿</p>
                                                            <p>รายละเอียดสินค้า</p>
                                                            <p><button class="addcart">เพิ่มลงตะกร้า</button></p>

                                                    </div> 
                                          


                                            </div>
                                            


                                        </div>

            

                        
                    </div> 
      </div>

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
        
                let a = ImageURL+image;
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