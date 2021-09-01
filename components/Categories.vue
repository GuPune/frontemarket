<template>
  <section id="categories">
    
 
    <center>       
      <section class="section-slider web">
            <div class="slider col-9">
                <img class="img-slider" v-for="(item, index) in category_shell" :key="category_shell.id" :src="Checkimage(item.image)" @click="ChangeProduct(item.id)">

           
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
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters,mapState } from "vuex";
import { FETCH_CATEGORY_SHELL } from "../store/actions.type.js";
  export default {

     computed: {
          ...mapGetters(["category_shell"]),
        },
        
 

          mounted() {


     //     let a = this.$store.dispatch(FETCH_CATEGORY_SHELL);
     this.loadcategory()
          },
        
  
        methods: {

      redirectTo(name) {
                    this.$router.push(name)
                  },

        loadcategory() {
                   let a = this.$store.dispatch(FETCH_CATEGORY_SHELL);  
          },
        Checkimage(image){

        let a = 'http://127.0.0.1:8000/public/product/'+image;
return a;
          
        },
        ChangeProduct(id){
        alert(id);
        }

        },

        components: {

        },

    }
</script>