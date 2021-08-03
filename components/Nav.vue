<template>
<header>
  <section id="Navbar">
        <nav class="main-nav">
          <div class="main-nav__inner">
          
          <div class="row">
                <div class="col-sm">
                  <a href="" class="main-nav__logo">
                    <h1>Logo</h1>
                  </a>
                </div>


                <div class="col-sm">
                  <!-- <input class="form-control inputsearch" type="text" placeholder="Search" > -->

                </div>

          
            </div>

                <input class="main-nav__mobile-checkbox" id="mobile-checkbox" type="checkbox">

                    <label class="main-nav__mobile-toggle" for="mobile-checkbox">
                      <span></span>
                      <span></span>
                      <span></span>
                    </label>

                    <ul class="main-nav__menu">
                      <li><a href="">เข้าสู่ระบบ</a></li>
                      <li><a href="">สมัครสมาชิก</a></li>
                      <li><a href="">Services</a></li>
                      <li><a href="">Contact</a></li>
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
