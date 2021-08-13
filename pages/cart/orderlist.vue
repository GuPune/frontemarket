<template>

    <section id="Orderlist">
        <Nav />

               <div class="row orderweb">
                        <div class="container orderweb">

                                            <h5><input type="checkbox" id="vehicle2" name="vehicle2" value="market"> <i class="fa fa-shopping-basket" aria-hidden="true"></i> ร้านค้าที่ 1</h5>

                                            <table id="customers">
                                                    <tr>
                                                        <th>ชื่อสินค้า</th>
                                                        <th>ราคา</th>
                                                        <th>จำนวน</th>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td><input type="checkbox" id="vehicle2" name="vehicle2" value="market"> ชื่อสินค้า...</td>
                                                        <td>80 ฿</td>
                                                        <td>2</td>
                                                        <!-- <td><button type="button" class="btn btn-danger">ลบสินค้า</button></td> -->
                                                    </tr>
                                                    <tr>
                                                        <td><input type="checkbox" id="vehicle2" name="vehicle2" value="market"> ชื่อสินค้า...</td>
                                                        <td>80 ฿</td>
                                                        <td>2</td>
                                                        <!-- <td><button type="button" class="btn btn-danger">ลบสินค้า</button></td> -->
                                                    </tr>
                                                    <tr>
                                                        <td><input type="checkbox" id="vehicle2" name="vehicle2" value="market"> ชื่อสินค้า...</td>
                                                        <td>80 ฿</td>
                                                        <td>2</td>
                                                        <!-- <td><button type="button" class="btn btn-danger">ลบสินค้า</button></td> -->
                                                    </tr>
                                    
                                                </table> <br>


                                            <hr> <br>



                                            <h5><input type="checkbox" id="vehicle2" name="vehicle2" value="market"> <i class="fa fa-shopping-basket" aria-hidden="true"></i> ร้านค้าที่ 2</h5>

                                            <table id="customers">
                                                    <tr>
                                                        <th>ชื่อสินค้า</th>
                                                        <th>ราคา</th>
                                                        <th>จำนวน</th>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td><input type="checkbox" id="vehicle2" name="vehicle2" value="market"> ชื่อสินค้า...</td>
                                                        <td>80 ฿</td>
                                                        <td>2</td>
                                                        <!-- <td><button type="button" class="btn btn-danger">ลบสินค้า</button></td> -->
                                                    </tr>
                                                    <tr>
                                                        <td><input type="checkbox" id="vehicle2" name="vehicle2" value="market"> ชื่อสินค้า...</td>
                                                        <td>80 ฿</td>
                                                        <td>2</td>
                                                        <!-- <td><button type="button" class="btn btn-danger">ลบสินค้า</button></td> -->
                                                    </tr>
                                                    <tr>
                                                        <td><input type="checkbox" id="vehicle2" name="vehicle2" value="market"> ชื่อสินค้า...</td>
                                                        <td>80 ฿</td>
                                                        <td>2</td>
                                                        <!-- <td><button type="button" class="btn btn-danger">ลบสินค้า</button></td> -->
                                                    </tr>
                                    
                                                </table><br>


                                            <hr>


                        </div>


                        <div class="container allorderweb">

                                          
                                            <table id="customers">
                                                    <tr>
                                                        <th><input type="checkbox" id="vehicle2" name="vehicle2" value="market"> เลือกสินค้าทั้งหมด</th>
                                                        <th>ยอดรวม</th>
                                                        <th></th>
                                                        
                                                    </tr>

                                                    <tr>
                                                        <td></td>
                                                        <td>- ฿</td>
                                                        <td><nuxt-link to="comfirmorder"><button type="button" class="btn btn-success">สั่งซื้อ</button></nuxt-link></td>
                                                    </tr>
                                                  
                                            </table>


                        </div>

                
               

              </div> <br>


        <Footer />
    </section>
    
</template>




<script>
  
  import Nav from "@/components/Nav";
  import Footer from "@/components/Footer";
    


    export default {
      components: {
          Nav,
          Footer
           
              },
             
        mounted() {},
       
           

     
    
    };
</script>