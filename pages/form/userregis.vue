<template>
<section class="Userregis">

          <Nav />

    <div class="row userregisweb">
                        <div class="container userregisweb">
                                    <div class="col-sm">
                                    <center><h4>สมัครสมาชิก</h4></center><br>
                                        <form>
                                                    <p>ชื่อ :</p>
                                                    <input class="form-control" type="text"><br>

                                                    <p>นามสกุล :</p>
                                                    <input class="form-control" type="text"><br>

                                                     <p>วันเกิด :</p>
                                                    <input class="form-control" type="date"><br>

                                                    <p>เพศ :</p>
                                                        <div class="row">
                                                            <div class="col-sm-3">
                                                                <input type="radio" name="gender" value="male"> ชาย 
                                                            </div>

                                                            <div class="col-sm-3">
                                                                <input type="radio" name="gender" value="female"> หญิง 
                                                            </div>
                                                        </div><br>


                                                     <p>เบอร์ติดต่อ :</p>
                                                    <input class="form-control" type="text"><br>


                                                     <p>ชื่อผู้ใช้งาน :</p>
                                                    <input class="form-control" type="text"><br>


                                                     <p>รหัสผ่าน :</p>
                                                    <input class="form-control" type="password"><br>

                                                        

                                                    <center><button class="btn btn-success" type="submit">สมัครสมาชิก</button><br><br>
                                                    <p>คุณมีบัญชีแล้วใช่หรือไม่ ? <nuxt-link to="login"><a href="">เข้าสู่ระบบ</a></nuxt-link></p>
                                                    
                                                    </center>


                                        



                                        




                                        </form>
                                    </div>


                        </div>

                
    </div>

<!-- 
    -------------------------------------------------Mobile------------------------------------------------ -->


    <div class="row userregismobile">
                        <div class="container userregismobile">
                                    <div class="col-sm">
                                    <center><h4>สมัครสมาชิก</h4></center><br>
                                        <form>
                                                    <p>ชื่อ :</p>
                                                    <input class="form-control" type="text"><br>

                                                    <p>นามสกุล :</p>
                                                    <input class="form-control" type="text"><br>

                                                     <p>วันเกิด :</p>
                                                    <input class="form-control" type="date"><br>

                                                    <p>เพศ :</p>
                                                        <div class="row">
                                                            <div class="col-sm-3">
                                                                <input type="radio" name="gender" value="male"> ชาย 
                                                            </div>

                                                            <div class="col-sm-3">
                                                                <input type="radio" name="gender" value="female"> หญิง 
                                                            </div>
                                                        </div><br>


                                                     <p>เบอร์ติดต่อ :</p>
                                                    <input class="form-control" type="text"><br>


                                                     <p>ชื่อผู้ใช้งาน :</p>
                                                    <input class="form-control" type="text"><br>


                                                     <p>รหัสผ่าน :</p>
                                                    <input class="form-control" type="password"><br>

                                                        

                                                    <center><button class="btn btn-success" type="submit">สมัครสมาชิก</button><br><br>
                                                    <p>คุณมีบัญชีแล้วใช่หรือไม่ ? <nuxt-link to="login"><a href="">เข้าสู่ระบบ</a></nuxt-link></p>
                                                    
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
