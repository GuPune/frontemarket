<template>
<section class="Shopregis">
       <Nav />

                
<div class="container forms">
  <form>
      <h5 style="color: #171c24;">สมัครสมาชิกร้านค้า</h5>
    
    
    <div class="row">
            <div class="input-group input-group-icon">
        <input type="text" placeholder="ชื่อ"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>

    <div class="input-group input-group-icon">
        <input type="text" placeholder="นามสกุล"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>
      

      
    </div>




      
    <div class="row">
      
      <div class="input-group input-group-icon">
        <input type="text" placeholder="ชื่อร้านค้า"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-shopping-bag"></i></div>
      </div>

       <div class="input-group input-group-icon">
        <input type="text" placeholder="เบอร์ติดต่อ"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-phone"></i></div>
      </div>

      <div class="input-group input-group-icon">
        <input type="text" placeholder="ที่อยู่"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-map-marker"></i></div>
      </div>

    </div>





    <div class="row">

    <div class="input-group input-group-icon">
        <input type="text" placeholder="เบอร์ติดต่อ"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-phone"></i></div>
      </div>


    <div class="input-group input-group-icon">
        <input type="text" placeholder="ชื่อผู้ใช้งาน"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>

        
      
      <div class="input-group input-group-icon">
        <input type="password" placeholder="รหัสผ่าน"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-key"></i></div>
      </div>



    </div>

     <h6 style="color: #171c24;">ช่องทางการขาย</h6>
       
       <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
        <label for="vehicle1">Domain Name</label>
     
     
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
        <label for="vehicle2">Market Place</label><br>
     

    <center>
    <button class="btn btn-primary"><span>สร้างร้านค้า</span></button>
    </center>

  
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