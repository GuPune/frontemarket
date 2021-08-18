<template>
  <section id="categories">
    
 
    <center>       
      <section class="section-slider web">
            <div class="slider col-9">
                <img class="img-slider" src="../assets/cate1.png">
                <img class="img-slider" src="../assets/cate2.png">
                <img class="img-slider" src="../assets/cate3.png">
                <img class="img-slider" src="../assets/cate1.png">
                <img class="img-slider" src="../assets/cate2.png">
                <img class="img-slider" src="../assets/cate3.png">
                <img class="img-slider" src="../assets/cate2.png">
                <img class="img-slider" src="../assets/cate3.png">
                <img class="img-slider" src="../assets/cate1.png">
            </div>
          </section>
    </center>



    <center>       
      <section class="section-slider mobile">
            <div class="slider col-12">
                <img class="img-slider" src="../assets/cate1.png">
                <img class="img-slider" src="../assets/cate2.png">
                <img class="img-slider" src="../assets/cate3.png">
                <img class="img-slider" src="../assets/cate1.png">
                <img class="img-slider" src="../assets/cate2.png">
                <img class="img-slider" src="../assets/cate3.png">
                <img class="img-slider" src="../assets/cate2.png">
                <img class="img-slider" src="../assets/cate3.png">
                <img class="img-slider" src="../assets/cate1.png">
            </div>
          </section>
    </center>








<br>
  </section>

    
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