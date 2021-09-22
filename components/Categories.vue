<template>
  <section id="categories">

 <div class="product-categories">  
 <div class="main-heading-cate"> 
 <div class="heading-title-cate-mobile">
 
            <h2><span>PRODUCT CATEGORIES</span>
	<em class="">ประเภทสินค้า</em>
			</h2>
        </div>
        </div>
        </div>
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
         <img class="img-slider" v-for="(item, index) in category_shell" :key="category_shell.id" :src="Checkimage(item.image)" @click="ChangeProduct(item.id)">
            </div>
          </section>
    </center>








<br>
</section>

    
</template>

<script>
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters,mapState } from "vuex";
import { FETCH_CATEGORY_SHELL,FETCH_PRODUCT_FIND } from "../store/actions.type.js";
  export default {

     computed: {
          ...mapGetters(["category_shell"]),
        },

        data() {
            return {
                form: {
                    catagory_id: "",
                },
              
            }

        },

        
 

          mounted() {


     //     let a = this.$store.dispatch(FETCH_CATEGORY_SHELL);
     this.Loadcategory()
          },
        
  
        methods: {

      redirectTo(name) {
                    this.$router.push(name)
                  },

        Loadcategory() {
                   let a = this.$store.dispatch(FETCH_CATEGORY_SHELL);  
          },
        Checkimage(image){

        let a = 'http://127.0.0.1:8000/public/product/'+image;
return a;
          
        },
        ChangeProduct(id){

        this.form.catagory_id = id;
        let find_product = this.$store.dispatch(FETCH_PRODUCT_FIND,this.form);  
    
        }

        },

        components: {

        },

    }
</script>