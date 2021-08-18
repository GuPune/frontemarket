<template>
<section class="Userregis">

          <Nav />

          
<div class="container forms">
  <form>
    <div class="row">
      <h5 style="color: #171c24;">สมัครสมาชิก</h5>
      <div class="input-group input-group-icon">
        <input type="text" class="form-control" placeholder="ชื่อ"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>

       <div class="input-group input-group-icon">
        <input type="text" class="form-control" placeholder="นามสกุล"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>

    </div>
    
    <div class="row">
      <div class="col-half">
        <h6 style="color: #171c24;">วันเกิด</h6>
        <div class="input-group">
          <div class="col-third">
            <input type="text"  class="form-control" placeholder="วัน"/>
          </div>
          <div class="col-third">
            <input type="text" class="form-control" placeholder="เดือน"/>
          </div>
          <div class="col-third">
            <input type="text" class="form-control" placeholder="ปี"/>
          </div>
        </div>
      </div>
      <div class="col-half">
        <h6 style="color: #171c24;">เพศ</h6>
        <div class="input-group">
          <input class="form-control" id="gender-male" type="radio" name="gender" value="male"/>
          <label for="gender-male">ชาย</label>
          <input class="form-control" id="gender-female" type="radio" name="gender" value="female"/>
          <label for="gender-female">หญิง</label>
        </div>
      </div>
    </div>


    <div class="row">

    <div class="input-group input-group-icon">
        <input type="text" class="form-control" placeholder="เบอร์ติดต่อ"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-phone"></i></div>
      </div>


    <div class="input-group input-group-icon">
        <input type="text" class="form-control" placeholder="ชื่อผู้ใช้งาน"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>

        
      
      <div class="input-group input-group-icon">
        <input type="password" class="form-control" placeholder="รหัสผ่าน"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-key"></i></div>
      </div>


    </div>

    <center>
    <button class="btn btn-primary"><span>สมัครสมาชิก</span></button>
    <p>คุณมีบัญชีแล้วใช่หรือไม่ ? <nuxt-link to="login"><a href="">เข้าสู่ระบบ</a></nuxt-link></p></center>

  
  </form>
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
