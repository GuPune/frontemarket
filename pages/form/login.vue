<template>






<section id="Loginform">

    <Nav />
    
            <div class="row loginformweb">
                        <div class="container loginformweb">
                            <div class="col-sm">
                            <center><h4>กรุณาเข้าสู่ระบบ</h4></center><br>
                                <form>
                                            <p>ชื่อผู้ใช้งาน :</p>
                                            <input class="form-control" type="text"><br>

                                            <p>รหัสผ่าน :</p>
                                            <input class="form-control" type="password"><br>

                                            <center><button class="btnn" type="submit">เข้าสู่ระบบ</button><br><br>
                                            <p>คุณยังไม่มีบัญชีใช่หรือไม่ ? <nuxt-link to="userregis"><a href="">สมัครสมาชิก</a></nuxt-link></p>
                                            
                                            </center>


                                



                                




                                </form>
                        </div>


                        </div>

                
               

              </div>


                <!-- ----------------------------------------Mobile-------------------------------------------------------- -->


              <div class="row loginformmobile">

                       <div class="container loginformmobile">
                            <div class="col-sm">
                            <center><h4>กรุณาเข้าสู่ระบบ</h4></center><br>
                                <form>
                                            <p>ชื่อผู้ใช้งาน :</p>
                                            <input class="form-control" type="text"><br>

                                            <p>รหัสผ่าน :</p>
                                            <input class="form-control" type="password"><br>

                                            

                                            <center><button class="btn btn-success" type="submit">เข้าสู่ระบบ</button><br><br>
                                            <p>คุณยังไม่มีบัญชีใช่หรือไม่ ? <nuxt-link to="userregis"><a href="">สมัครสมาชิก</a></nuxt-link></p>
                                            
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

