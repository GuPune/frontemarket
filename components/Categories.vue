<template>
  <section id="categories">
    
    <center><div class="row categoryweb col-9">
    
        
            <div class="col-sm">
              <img class="cateimg" src="../assets/cate1.png">

            </div>

            <div class="col-sm">
              <img class="cateimg" src="../assets/cate2.png">

            </div>

            <div class="col-sm">
              <img class="cateimg" src="../assets/cate3.png">

            </div>


            <div class="col-sm">
              <img class="cateimg" src="../assets/cate1.png">

            </div>

            <div class="col-sm">
              <img class="cateimg" src="../assets/cate2.png">

            </div>

       

            

      

      
  </div></center>


<!-- <------------Mobile---------------------------->

   <center> <div class="row categorymobile">

          <div class="row">
            
              <div class="col">
                <img class="cateimg" src="../assets/cate1.png">

              </div>

              <div class="col">
                <img class="cateimg" src="../assets/cate2.png">

              </div>

              <div class="col">
                <img class="cateimg" src="../assets/cate3.png">

              </div>

          </div>


          <div class="row">
            
              <div class="col">
                <img class="cateimg" src="../assets/cate1.png">

              </div>

              <div class="col">
                <img class="cateimg" src="../assets/cate2.png">

              </div>

              <div class="col">
                <img class="cateimg" src="../assets/cate3.png">

              </div>

          </div>


            

    



    </div></center>





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