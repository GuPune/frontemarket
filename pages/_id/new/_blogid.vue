<template>
      
<div style="background: white;padding-top: 50px;">
<div v-if="loadding">
<Loader/>
</div>
<Banner2/>
<Blogonly/>

        
                                                </div>
                          



                

 
     
            
   
</template>



<script>
import { VueEditor } from "vue2-editor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Categoriesbyshop from "@/components/Categoriesbyshop";
import Productbyshop from "@/components/Productbyshop";
import { GET_ABOUT,FETCH_BLOG_ONLY,GET_NAVBAR_SHOP } from "@/store/actions.type.js";
import AdsShop from "@/components/AdsShop"
import { mapGetters } from "vuex";
import Adsmini from "@/components/Adsmini"
import Relation from "@/components/Relation"
import Banner2 from "@/components/Banner2"
import Blogonly from "@/components/Blogonly"
    
    export default {
      components: {
          AdsShop,
          Nav,
          Footer,
          Categoriesbyshop,
          Adsmini,
          Banner2,
          Blogonly
           
              },

                  data() {
    return {
        content: '',
         loadding:true,
   form:{
shop_name:null,
url:null
   }
    };
  },

        computed: {
                ...mapGetters(["about"]),

        },
             
       async mounted() {
   this.loadding = false
   this.form.url = window.location.origin;
   this.form.shop_name = this.$route.params;
   this.form.blog_id = this.$route.params.blogid;
      let navarshop = await this.$store.dispatch(GET_NAVBAR_SHOP,this.form);
   let blogonly = await this.$store.dispatch(FETCH_BLOG_ONLY,this.form);
   
   this.content = this.blogonly

        },

         methods: {

            Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return "https://image.makewebeasy.net/makeweb/c_c_409x409/pYN8s1ZiT/Blog/9DB0008E_7979_4605_A62E_DB764FBB6DD8.jpeg";
            },
     
            success() {
          
            },
            success() {
          
            },
            error($text) {

           this.$router.push('/error')

          
            },
        }
       
           

     
    
    };
</script>