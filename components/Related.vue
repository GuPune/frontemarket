<template>
    <section id="Related">
        <div class="row relatedweb">
                <div class="col-9">
                        <h4>สินค้าแนะนำ</h4>
                   
                        

                        <div class="product" id="product">
                           
                                        <div class="row product">
                                            <div class="cards">
                                                    <div class="cardproduct" v-for="(item, index) in product_shell" :key="product_shell.id">
                                                        <img class="imgproduct" height="200px" :src="Checkimage(item.img_product)">
                                                            <h6 style="margin-top:10px;">{{item.name_th}}</h6>
                                                            <p class="price">{{item.price}} ฿</p>
                                                            <p>รายละเอียดสินค้า</p>
                                                            <p><nuxt-link to="product/productdetail"><button class="addcart">เพิ่มลงตะกร้า</button></nuxt-link></p>
                                                                                                                
                                                   
                                                  
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
  export default {
     computed: {
           
     ...mapGetters(["product_shell"]),

        },
        
        mounted() {
        //  this.$store.dispatch(ToogleAction);

           //     let a = this.$store.dispatch(FETCH_PRODUCT_SHELL);
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
        
                let a = 'http://127.0.0.1:8000/public/product/'+image;
                return a;
        }

        },
  

        components: {

        },

    }
</script>