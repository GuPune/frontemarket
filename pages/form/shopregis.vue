<template>
<section class="Shopregis">
       <Nav />

       <div class="row shopregisweb">
                        <div class="container shopregisweb">
                                    <div class="col-sm">
                                    <center><h4>สมัครสมาชิกร้านค้า</h4></center><br>
                                        <form>

                                                   
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                 <p>ชื่อ :</p>
                                                                <input class="form-control" type="text"><br>
                                                            </div>

                                                            <div class="col-sm-6">
                                                                <p>นามสกุล :</p>
                                                                <input class="form-control" type="text"><br>
                                                            </div>
                                                        </div><br>

                                                           <div class="row">
                                                            <div class="col-sm-6">
                                                                 <p>ชื่อร้านค้า :</p>
                                                                <input class="form-control" type="text"><br>
                                                            </div>

                                                            <div class="col-sm-6">
                                                                <p>เบอร์ติดต่อ :</p>
                                                                <input class="form-control" type="text"><br>
                                                            </div>
                                                        </div><br>

                                                   
                                                        <p>ที่อยู่ :</p>
                                                        <textarea class="form-control" ></textarea><br>
                                                        

                                                     <div class="row">
                                                            <div class="col-sm-6">
                                                                 <p>ชื่อผู้ใช้งาน :</p>
                                                                <input class="form-control" type="text"><br>
                                                            </div>

                                                            <div class="col-sm-6">
                                                                <p>รหัสผ่าน :</p>
                                                                <input class="form-control" type="text"><br>
                                                            </div>
                                                        </div><br>


                                                 <input type="checkbox" id="vehicle1" name="vehicle1" value="domain">
                                                <label for="vehicle1">Domain</label>  <input type="text" placeholder="Domain name..."> .com<br><br>

                                                <input type="checkbox" id="vehicle2" name="vehicle2" value="market">
                                                <label for="vehicle2">Market Place</label><br><br>


                                                    <center><button class="btn btn-success" type="submit">สร้างร้านค้า</button>
                                                  
                                                    
                                                    </center>


                                        </form>
                                    </div>


                        </div>

                
        </div>


            <!---------------------------------------------------Mobile-------------------------------------------------------->

                <div class="row shopregismobile">
                                <div class="container shopregismobile">
                                            <div class="col-sm">
                                            <center><h4>สมัครสมาชิกร้านค้า</h4></center><br>
                                                <form>

                                                        
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p>ชื่อ :</p>
                                                                        <input class="form-control" type="text"><br>
                                                                    </div>

                                                                    <div class="col-sm-6">
                                                                        <p>นามสกุล :</p>
                                                                        <input class="form-control" type="text"><br>
                                                                    </div>
                                                                </div><br>

                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p>ชื่อร้านค้า :</p>
                                                                        <input class="form-control" type="text"><br>
                                                                    </div>

                                                                    <div class="col-sm-6">
                                                                        <p>เบอร์ติดต่อ :</p>
                                                                        <input class="form-control" type="text"><br>
                                                                    </div>
                                                                </div><br>

                                                        
                                                                <p>ที่อยู่ :</p>
                                                                <textarea class="form-control" ></textarea><br>
                                                                

                                                            <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p>ชื่อผู้ใช้งาน :</p>
                                                                        <input class="form-control" type="text"><br>
                                                                    </div>

                                                                    <div class="col-sm-6">
                                                                        <p>รหัสผ่าน :</p>
                                                                        <input class="form-control" type="text"><br>
                                                                    </div>
                                                                </div><br>


                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                                                        <label for="vehicle1">Domain</label>  <input type="text" placeholder="Domain name..."> .com<br><br>

                                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                                                        <label for="vehicle2">Market Place</label><br><br>


                                                            <center><button class="btn btn-success" type="submit">สร้างร้านค้า</button>
                                                        
                                                            
                                                            </center>


                                                </form>
                                            </div>


                                </div>

                        
                </div>

</section>
    
</template>



<script>
  
  import Nav from "@/components/Nav";
    


    export default {
      components: {
          Nav,
           
              },
             
        mounted() {},
       
           

     
    
    };
</script>