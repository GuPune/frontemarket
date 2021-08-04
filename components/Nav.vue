<template>
<header>
  <section id="Navbar">
        <nav class="main-nav">
          <div class="main-nav__inner">
          
          <div class="row">
                <div class="col-sm">
                  <a href="" class="main-nav__logo">
                    <h1 @click="redirectTo('/')">Logo</h1>
                  </a>
                </div>


                  <input class="form-control inputsearchweb" type="text" placeholder="เมล็ดแตงโม..." >
                  <input class="form-control inputsearchmobile" type="text" placeholder="เมล็ดแตงโม..." >

                  <a href=""><img class="icon" src="https://image.flaticon.com/icons/png/512/891/891407.png"></a>
                  
                  
               

            

          
            </div>

            

                <input class="main-nav__mobile-checkbox" id="mobile-checkbox" type="checkbox">

                    <label class="main-nav__mobile-toggle" for="mobile-checkbox">
                      <span></span>
                      <span></span>
                      <span></span>
                    </label>

                    
                  
                    <ul class="main-nav__menu">

                      
                      
                      <nuxt-link to="form/login"><li><a href="">เข้าสู่ระบบ</a></li></nuxt-link>
                      <nuxt-link to="form/shopregis"><li><a href="">ขายสินค้ากับเรา</a></li></nuxt-link>
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
