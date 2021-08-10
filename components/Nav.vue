<template>
<header>
  <section id="Navbar">
        <nav class="main-nav">
          <div class="main-nav__inner">
          
          <div class="row">
              
                  <a href="" class="main-nav__logo">
                    <img @click="redirectTo('/')"  class="logo" src="../assets/logohori2.png">
                  </a>   &nbsp;&nbsp;
               


                  <input class="form-control inputsearchweb" type="text" placeholder="เมล็ดแตงโม..." >
                  <input class="form-control inputsearchmobile" type="text" placeholder="เมล็ดแตงโม..." >

                  
                  
                  
                  
                  
               

            

          
            </div>

            <a href=""><img class="iconcart" src="https://image.flaticon.com/icons/png/512/891/891407.png"></a>
            <!-- <a href=""><img class="iconuser" src="https://img-premium.flaticon.com/png/512/552/premium/552909.png?token=exp=1628151637~hmac=d8574c1edc0bede6abc14c25a47c02bb"></a> -->
            

            

                <input class="main-nav__mobile-checkbox" id="mobile-checkbox" type="checkbox">

                    <label class="main-nav__mobile-toggle" for="mobile-checkbox">
                      <span></span>
                      <span></span>
                      <span></span>
                    </label>

                    
                  
                    <ul class="main-nav__menu">

                      
                      
                      <nuxt-link to="form/login"><li><a href="">เข้าสู่ระบบ</a></li></nuxt-link>
                      <nuxt-link to="form/shopregis"><li><a href="">ขายสินค้ากับเรา</a></li></nuxt-link>
                      <nuxt-link to="profile/userprofile"><li><a href="">บัญชี</a></li></nuxt-link>
                      
                      
                      <!-- <li><a href=""></a></li> -->
                      <!-- <li><a href="">Contact</a></li> -->
                    </ul>

                    
            


          </div>

          

          
        </nav><br>

        
    </section> 
</header>

</template>




<script>
  export default {

     computed: {
           
   

        },
        
        mounted() {
        //  this.$store.dispatch(ToogleAction);
        
         },
        
  
        methods: {

      redirectTo(name) {
                    this.$router.push(name)
                  }

        },

        components: {

        },

    }
</script>
