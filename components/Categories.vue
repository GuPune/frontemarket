<template>
  <section id="categories">
    <div class="row categoryweb">
      <div class="col-8">
              <hr class="hrsection">
              <h3>ประเภทสินค้า</h3>
              <img src="https://www.kubota.com/products/tractor/images/img_hero.jpg" class="imgads"> 

              

                   

                    


              <hr class="hrsection">

      </div>

    </div>


<!-- <------------Mobile---------------------------->

    <div class="row categorymobile">
      <div class="col-12">
              <hr class="hrsection">
              <h5>ประเภทสินค้า</h5>
               <img src="https://www.kubota.com/products/tractor/images/img_hero.jpg" class="imgads"> 
             



              <hr class="hrsection">

      </div>

    </div>





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