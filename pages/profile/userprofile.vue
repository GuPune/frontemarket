<template>
    <section id="Userprofile">
        <Nav />


        <div class="container">
            <div class="main-body">
            

                <!-- /Breadcrumb -->
            
                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                        <div class="d-flex flex-column align-items-center text-center">
                            <img src="https://www.arianagrande.com/sites/g/files/aaj12746/f/styles/suzuki_breakpoints_image_tablet/public/positions-final_0.jpg" alt="Admin" class="rounded-circle profile" width="150">
                            <div class="mt-3">
                            <h4>Ariana Grande</h4>
                            <p class="text-secondary mb-1">
                                <strong>ประเภท</strong>
                                <small class="text-muted">โปรไฟล์ผู้ซื้อ</small></p>
                            <button class="btn btn-primary">อัปโหลดรูปภาพ</button>
                            <a href="#changepassword" class="btn btn-outline-primary">เปลี่ยนรหัสผ่าน</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card mt-3">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0"><i class="fa fa-map-marker" aria-hidden="true"> :</i> ที่อยู่</h6>
                            <span class="text-secondary">ถนน ชัยพฤกษ์ ตำบลในเมือง อำเภอเมืองขอนแก่น ขอนแก่น 40000</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0"><i class="fa fa-phone" aria-hidden="true"> :</i> เบอร์โทร</h6>
                            <span class="text-secondary">0854476635</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0"><i class="fa fa-envelope" aria-hidden="true"> :</i> อีเมลล์</h6>
                            <span class="text-secondary">ariana@mail.com</span>
                        </li>
                       
                        </ul>
                    </div>
                    </div>
                    <div class="col-md-8">
                    <div class="card mb-3">
                        <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                            <h6 class="mb-0">ชื่อ</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                            <input type="text" class="form-control" id="inputFirstName" placeholder="Ariana">
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                            <h6 class="mb-0">นามสกุล</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                            <input type="text" class="form-control" id="inputLastName" placeholder="Grande">
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                            <h6 class="mb-0">วันเกิด</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                        <div class="input-group">
                                                                <div class="col-third">
                                                                    <small>วัน</small>
                                                                    <input type="text"  class="form-control" placeholder="26"/>
                                                                </div>
                                                                <div class="col-third">
                                                                    <small>เดือน</small>
                                                                    <input type="text" class="form-control" placeholder="6"/>
                                                                </div>
                                                                <div class="col-third">
                                                                    <small>ปี</small>
                                                                    <input type="text" class="form-control" placeholder="2536"/>
                                                                </div>
                                        </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                            <h6 class="mb-0">เบอร์ติดต่อ</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                            <input type="text" class="form-control" id="inputAddress"  placeholder="0854476635">
                            </div>
                        </div>
                        <hr>
                    
                        <hr>
                        <div class="row">
                            <div class="col-sm-12">
                            <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">บันทึกการเปลี่ยนแปลง</a>
                            </div>
                        </div>
                        </div>
                    </div>

                 
                         <div class="card">
                 
                       
               
                             <div class="worko-tabs">

                             

  
                                <input class="state" type="radio" title="tab-one" name="tabs-state" id="tab-one" checked />
                                <input class="state" type="radio" title="tab-two" name="tabs-state" id="tab-two" />
                                <input class="state" type="radio" title="tab-three" name="tabs-state" id="tab-three" />
                                <input class="state" type="radio" title="tab-four" name="tabs-state" id="tab-four" />

                                <div class="tabs flex-tabs">
                                    <label for="tab-one" id="tab-one-label" class="tab"><i class="fa fa-map-marker" aria-hidden="true"></i> ที่อยู่</label>
                                    <label for="tab-two" id="tab-two-label" class="tab"><i class="fa fa-money" aria-hidden="true"></i> สถานะการชำระเงิน</label>
                                    <label for="tab-three" id="tab-three-label" class="tab"><i class="fa fa-plane" aria-hidden="true"></i> สถานะพัสดุ</label>
                                    <label for="tab-four" id="tab-four-label" class="tab"><i class="fa fa-comment" aria-hidden="true"></i> ให้คะแนนสินค้า/บริการ</label>

                                    <!-- ---------------------tab 1------------------- -->
                                    <div id="tab-one-panel" class="panel active">
                                         <a href="#addlocation"><i class="fa fa-plus" aria-hidden="true"></i> เพิ่มที่อยู่</a><br>

                                                <table id="tables">
                                                    
                                                    <tr>
                                                        <td>ถนน ชัยพฤกษ์ ตำบลในเมือง อำเภอเมืองขอนแก่น ขอนแก่น 40000</td>
                                                        <td><a class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                        <a class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>ถนน ชัยพฤกษ์ ตำบลในเมือง อำเภอเมืองขอนแก่น ขอนแก่น 40000</td>
                                                        <td><a class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                        <a class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
                                                  
                                                    </tr>
                                                    <tr>
                                                        <td>ถนน ชัยพฤกษ์ ตำบลในเมือง อำเภอเมืองขอนแก่น ขอนแก่น 40000</td>
                                                        <td><a class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                        <a class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
                                                    </tr>
                                                 
                                                </table>

                                    </div>

                                    <!-- ---------------------tab 2------------------- -->

                                    <div id="tab-two-panel" class="panel">

                                         
                                                        
                                                            <div class="row p-2 bg-white border rounded">
                                                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://luna360.com/wp-content/uploads/2020/02/1080.png"></div>
                                                                <div class="col-md-6 mt-1">
                                                                    <h6>product</h6>
                                                                 
                                                                    <div class="mt-1 mb-1 spec-1"><span>500฿</span></div>
                                                                    <p class="text-justify text-truncate para mb-0">รายละเอียดสินค้า</p>
                                                                </div>
                                                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                    <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">ชำระเงินแล้ว</button></div>
                                                                </div>
                                                            </div>

                                                             <div class="row p-2 bg-white border rounded">
                                                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://luna360.com/wp-content/uploads/2020/02/1080.png"></div>
                                                                <div class="col-md-6 mt-1">
                                                                    <h6>product</h6>
                                                                 
                                                                    <div class="mt-1 mb-1 spec-1"><span>500฿</span></div>
                                                                    <p class="text-justify text-truncate para mb-0">รายละเอียดสินค้า</p>
                                                                </div>
                                                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                    <div class="d-flex flex-column mt-4"><button class="btn btn-outline-primary btn-sm mt-2" type="button">ยังไม่ชำระเงิน</button></div>
                                                                </div>
                                                            </div>

  
                                                         
                                                          
                                                          
                                                           
                                    </div>
                                                   
                        
                                    <!-- ---------------------tab 3------------------- -->


                                    <div id="tab-three-panel" class="panel">

                                                             <div class="row p-2 bg-white border rounded">
                                                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://luna360.com/wp-content/uploads/2020/02/1080.png"></div>
                                                                <div class="col-md-6 mt-1">
                                                                    <h6>product</h6>
                                                                 
                                                                    <div class="mt-1 mb-1 spec-1"><span>500฿</span></div>
                                                                    <p class="text-justify text-truncate para mb-0">รายละเอียดสินค้า</p>
                                                                </div>
                                                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                    <div class="d-flex flex-column mt-4"><button class="btn btn-info btn-sm" type="button">เช็คสถานะพัสดุ</button></div>
                                                                </div>
                                                            </div>

                                                             <div class="row p-2 bg-white border rounded">
                                                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://luna360.com/wp-content/uploads/2020/02/1080.png"></div>
                                                                <div class="col-md-6 mt-1">
                                                                    <h6>product</h6>
                                                                 
                                                                    <div class="mt-1 mb-1 spec-1"><span>500฿</span></div>
                                                                    <p class="text-justify text-truncate para mb-0">รายละเอียดสินค้า</p>
                                                                </div>
                                                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                    <div class="d-flex flex-column mt-4"><button class="btn btn-info btn-sm" type="button">เช็คสถานะพัสดุ</button></div>
                                                                </div>
                                                            </div>


                                       
                                    </div>


                                    <!-- ---------------------tab 4------------------- -->


                                    <div id="tab-four-panel" class="panel">
                                       
                                       
                                                        <div class="row p-2 bg-white border rounded">
                                                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://luna360.com/wp-content/uploads/2020/02/1080.png"></div>
                                                                <div class="col-md-6 mt-1">
                                                                    <h6>product</h6>
                                                                 
                                                                    <div class="mt-1 mb-1 spec-1"><span>500฿</span></div>
                                                                    <p class="text-justify text-truncate para mb-0">รายละเอียดสินค้า</p>
                                                                </div>
                                                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                    <div class="star-wrapper">
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                    </div><br>

                                                                    <a href="#comment" class="btn btn-info btn-sm" type="button">ความคิดเห็น</a>

                                                
                                                                </div>
                                                            </div>


                                                             <div class="row p-2 bg-white border rounded">
                                                                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://luna360.com/wp-content/uploads/2020/02/1080.png"></div>
                                                                <div class="col-md-6 mt-1">
                                                                    <h6>product</h6>
                                                                 
                                                                    <div class="mt-1 mb-1 spec-1"><span>500฿</span></div>
                                                                    <p class="text-justify text-truncate para mb-0">รายละเอียดสินค้า</p>
                                                                </div>
                                                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                                                       <div class="star-wrapper">
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                        <i href="#" class="fa fa-star" aria-hidden="true"></i>
                                                                    </div><br>

                                                                    <a href="#comment" class="btn btn-info btn-sm" type="button">ความคิดเห็น</a>

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



        <div id="changepassword" class="overlay">
            <div class="popup">
                <h6>เปลี่ยนรหัสผ่าน</h6><br>
                <a class="close" href="#">&times;</a>
                <div class="content">

                    <label for="inputPasswordCurrent">รหัสผ่านเดิม</label>
                    <input type="password" class="form-control" placeholder="รหัสผ่านเดิม" ><br>
                    <label for="inputPasswordCurrent">รหัสผ่านใหม่</label>
                    <input type="password" class="form-control" placeholder="รหัสผ่านใหม่" ><br>
                    <input type="password" class="form-control" placeholder="ยืนยันรหัสผ่าน" ><br>
                    <button type="submit" class="btn btn-info">บันทึกการเปลี่ยนแปลง</button>
                </div>
            </div>
        </div>



        <div id="addlocation" class="overlay">
            <div class="popup">
                <h6>เพิ่มที่อยู่</h6><br>
                <a class="close" href="#">&times;</a>
                <div class="content">

                    <textarea class="form-control"></textarea><br>
                    <button type="submit" class="btn btn-info">บันทึก</button>
                </div>
            </div>
        </div>
       
   
                
 
           <div id="comment" class="overlay">
            <div class="popup">
                <h6>ความคิดเห็น/แนะนำ</h6><br>
                <a class="close" href="#">&times;</a>
                <div class="content">

                    <textarea class="form-control"></textarea><br>
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