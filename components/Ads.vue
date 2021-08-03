<template>

<section id="Ads">
    <center>
    <div class="row adsweb col-8">

                <div class="col-sm">
                   <img src="https://www.kubota.com/products/tractor/images/img_hero.jpg" class="imgads">
                   
   
                        


                </div>

               



                <div class="col-sm">
                    <img src="https://www.kubota.com/products/tractor/images/img_hero.jpg" class="imgads"> 
                   
   
            
                         




                </div>

    </div>





    </center>

    <!-- <-----------------------------------------------------Mobile-------------------------------------------------->

    <center>
    <div class="row adsmobile">
        <div class="col-12">

                <div class="col-sm">
                   <img src="https://www.kubota.com/products/tractor/images/img_hero.jpg" class="imgads">
                   
   
                        


                </div>

               



                <div class="col-sm">
                    <img src="https://www.kubota.com/products/tractor/images/img_hero.jpg" class="imgads"> 
                   
   
            
                         




                </div>
        </div>

    </div>





    </center><br>
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