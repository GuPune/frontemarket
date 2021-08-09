<template>
    <section id="Userprofile">
        <Nav />

        <div class="row profieweb">
            <div class="container profieweb">

                
                            <div class="profiletitle">
                                        <table id="customers">
                                                    <tr>
                                                        <th width="100"><img class="profile" src="https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a"></th>
                                                         <th><h4>Supawadee Swns.</h4></th>
                                                 
                                                        
                                                    </tr>

                                                    
                                                   
                                    
                                        </table>


                                      
                            </div>

                              <div class="rt-container">
                                        <div class="col-rt-12">
                                            <div class="Scriptcontent">

                                            <section class="tabs-container">
                                                <label for="tab1"> ตั้งค่าบัญชี </label>
                                                <label for="tab2"> ที่อยู่</label>
                                                <label for="tab3"> เปลี่ยนรหัสผ่าน </label>
                                                <label for="tab4"> สถานะ </label>
                                                <label > ออกจากระบบ</label>
                                              
                                                </section>

                                                <input name="tab" id="tab1" type="radio" checked />
                                                <section class="tab-content">
                                                <h6> ตั้งค่าบัญชี </h6><br>
                                                              
                                                                        
                                                        <div class="row">
                                                            <div class="col-sm-5">
                                                                <p>ชื่อผู้ใช้งาน :</p>
                                                                <input type="password" class="form-control"><br>
                                                                <p>รูปโปรไฟล์ :</p>
                                                                <input type="file" ><br><br>
                                                                <button type="submit" class="btn btn-info">บันทึก</button>
                                                            </div>
                                                        </div>
                                                              
                                                                
                                                          

                                                    


                                             

                                                </section>


                                                <input name="tab" id="tab2" type="radio" />
                                                <section class="tab-content">
                                                        <h6>ที่อยู่ของฉัน</h6>   <button type="submit" class="btn btn-info">เพิ่มที่อยู่</button>

                                                        <hr>

                                                        <div class="row">
                                                            <div class="col-sm">
                                                                <p>200/217 ถนน ชัยพฤกษ์ ตำบลในเมือง อำเภอเมืองขอนแก่น ขอนแก่น 40000</p>
                                                            </div>
                                                            <div class="col-sm">
                                                                 <button type="submit" class="btn btn-warning">แก้ไข</button>
                                                                 <button type="submit" class="btn btn-danger">ลบ</button>
                                                            </div>
                                                        </div>

                                                        <hr>

                                                        <div class="row">
                                                            <div class="col-sm">
                                                                <p>200/217 ถนน ชัยพฤกษ์ ตำบลในเมือง อำเภอเมืองขอนแก่น ขอนแก่น 40000</p>
                                                            </div>
                                                            <div class="col-sm">
                                                                 <button type="submit" class="btn btn-warning">แก้ไข</button>
                                                                 <button type="submit" class="btn btn-danger">ลบ</button>
                                                            </div>
                                                        </div>

                                                         <hr>


                                                </section>


                                                <input name="tab" id="tab3" type="radio" />
                                                <section class="tab-content">
                                                        <h6>เปลี่ยนรหัสผ่าน</h6><br>

                                                         <div class="row">
                                                            <div class="col-sm-5">
                                                                <p>รหัสผ่านเก่า :</p>
                                                                <input type="password" class="form-control"><br>
                                                                <p>รหัสผ่านใหม่ :</p>
                                                                <input type="password" class="form-control"><br>
                                                                <button type="submit" class="btn btn-info">บันทึก</button>
                                                            </div>
                                                        </div>
                                                        
                                                </section>


                                                <input name="tab" id="tab4" type="radio" />
                                                <section class="tab-content">

                                                    <div class="tap">
                                                        <input type="radio" name="tap" id="block-1" checked />
                                                        <label for="block-1" >การชำระเงิน</label>
                                                        
                                                        <input type="radio" name="tap" id="block-2"/>
                                                        <label for="block-2">สถานะพัสดุ</label>

                                                         <input type="radio" name="tap" id="block-3"/>
                                                        <label for="block-3">ให้คะแนน</label>
                                                        
                                                        <div class="content" id="content-1">  
                                                            
                                                            <h5>รายการสั่งซื้อ</h5>
                                                                <div class="row paycheck">
                                                                    <div class="col-sm">
                                                                        <h6>ชื่อร้านค้า</h6>
                                                                    </div>
                                                                    <div class="col-sm">
                                                                        <p>รายการสินค้า</p>

                                                                    </div>

                                                                    <div class="col-sm">
                                                                        <h6>สถานะการชำระเงิน</h6>
                                                                          <small>กำลังตรวจสอบ</small>
                                                                    </div>
                                                                       <hr>
                                                                </div>

                                                                <div class="row paycheck">
                                                                    <div class="col-sm">
                                                                         <h6>ชื่อร้านค้า</h6>
                                                                    </div>
                                                                    <div class="col-sm">
                                                                        <p>รายการสินค้า</p>

                                                                    </div>

                                                                    <div class="col-sm">
                                                                        <h6>สถานะการชำระเงิน</h6>
                                                                        <small>ยืนยันการชำระเงิน</small>
                                                                    </div>
                                                                       <hr>
                                                                </div>


                                                                <div class="row paycheck">
                                                                    <div class="col-sm">
                                                                         <h6>ชื่อร้านค้า</h6>
                                                                    </div>
                                                                    <div class="col-sm">
                                                                        <p>รายการสินค้า</p>

                                                                    </div>

                                                                    <div class="col-sm">
                                                                        <h6>สถานะการชำระเงิน</h6>
                                                                        <small>ยืนยันการชำระเงิน</small>
                                                                    </div>
                                                                       <hr>
                                                                </div>


                                                                <div class="row paycheck">
                                                                    <div class="col-sm">
                                                                         <h6>ชื่อร้านค้า</h6>
                                                                    </div>
                                                                    <div class="col-sm">
                                                                        <p>รายการสินค้า</p>

                                                                    </div>

                                                                    <div class="col-sm">
                                                                        <h6>สถานะการชำระเงิน</h6>
                                                                         <small>กำลังตรวจสอบ</small>
                                                                    </div>
                                                                       <hr>
                                                                </div>

                                                               

                                                                  <!-- <table id="customers">
                                                                        <tr>
                                                                            <th>ร้านค้า</th>
                                                                            <th>รายการสินค้า</th>
                                                                            <th>สถานะ</th>
                                                                        </tr>

                                                                          <tr>
                                                                            <td>ชื่อร้านค้า</td>
                                                                            <td><p>รายการสินค้า</p>
                                                                            <p>รายการสินค้า</p>
                                                                            <p>รายการสินค้า</p></td>

                                                                            <td>กำลังตรวจสอบ</td>
                                                                        </tr>
                                                                        <hr>
                                                                </table> -->

                                                        </div>


                                                        
                                                        <div class="content" id="content-2">
                                                            <h5>รายการสั่งซื้อ</h5>
                                                                <div class="row paycheck">
                                                                    <div class="col-sm">
                                                                        <h6>ชื่อร้านค้า</h6>
                                                                    </div>
                                                                    <div class="col-sm">
                                                                        <p>รายการสินค้า</p>

                                                                    </div>

                                                                    <div class="col-sm">
                                                                          <a href="" style="color:#33b16c;">ตรวจสอบสถานะพัสดุ</a>
                                                                    </div>
                                                                       <hr>
                                                                </div>


                                                                <div class="row paycheck">
                                                                    <div class="col-sm">
                                                                        <h6>ชื่อร้านค้า</h6>
                                                                    </div>
                                                                    <div class="col-sm">
                                                                        <p>รายการสินค้า</p>

                                                                    </div>

                                                                    <div class="col-sm">
                                                                          <a href="" style="color:#33b16c;">ตรวจสอบสถานะพัสดุ</a>
                                                                    </div>
                                                                       <hr>
                                                                </div>

                                                        </div>


                                                        

                                                        <div class="content" id="content-3">
                                                             <h5>ให้คะแนนสินค้าและบริการ</h5>
                                                            
                                                                <div class="row paycheck">
                                                                    <div class="col-sm">
                                                                        <h6>ชื่อร้านค้า</h6>
                                                                        <p>รายการสินค้า</p>
                                                                    </div>
                                                                    <div class="col-sm">
                                                                         <img style="width:100px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/3_stars.svg/535px-3_stars.svg.png">
                                                                    </div>

                                                                    <div class="col-sm">
                                                                          <a class="button" href="#popup1">ความคิดเห็น</a>
                                                                    </div>
                                                                       <hr>
                                                                </div>


                                                                   <div class="row paycheck">
                                                                    <div class="col-sm">
                                                                        <h6>ชื่อร้านค้า</h6>
                                                                        <p>รายการสินค้า</p>
                                                                    </div>
                                                                    <div class="col-sm">
                                                                         <img style="width:100px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/3_stars.svg/535px-3_stars.svg.png">
                                                                    </div>

                                                                    <div class="col-sm">
                                                                          <a class="button" href="#popup1">ความคิดเห็น</a>
                                                                    </div>
                                                                       <hr>
                                                                </div>

                                                            
                                                        </div>
                                                    
                                                    </div>


                                                </section>

                                                
                                            

                                            
                                        
                                            </div>
                                        </div>
                                    </div>


            </div>

        </div> <br>

  <div id="popup1" class="overlay">
            <div class="popup">
                <h6>ความคิดเห็น</h6>
                <a class="close" href="#">&times;</a><br>
                <div class="content">
                    <textarea type="text" class="form-control"></textarea><br>
                    <button type="submit" class="btn btn-info">ส่ง</button>
                </div>
            </div>
        </div>

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