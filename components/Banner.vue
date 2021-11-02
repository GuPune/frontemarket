<template>

         <div id="top-area">
                    <div id="top-mb">
                <div class="container">
                    <div class="row no-gutters">
                        <div class="col col-lg text-center">
                            <div id="logotop" class="hoverOverlay d-inline-flex">
                                <span class="navbar-brand">
                                    <a href="/" style="text-decoration: none;">
           
    <img src="https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/DefaultData/logo_2.png?v=202012190947" alt="logo" title="logo" class="d-inline-block img-logo"/>
                                    </a>
                                </span>
                            </div>
                        </div>

                        <b-container class="bv-example-row">
  <b-row>
  <b-col sm="12" md="12">
  <b-nav>
  <b-nav-item  v-for="(item, index) in menu" :key="item.id" @click="redirectTo(item.link)"  :class="{'rkknoob': checkPath(item.link)}">{{item.name}}</b-nav-item>
 
  </b-nav>
  </b-col>
  
  </b-row>
</b-container>
                    </div>
                </div>
            </div>
            <div class="topwidget-menu">
</div>
            </div>

 
</template>


<script>
  import { mapGetters,mapState } from "vuex";

  import { GET_MENU } from "@/store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";
  export default {
    data() {
    return {
      form:{

      },
    };
  },

     computed: {
           
        ...mapGetters(["menu"]),

        },
        
        mounted() {
          this.form.url = window.location.origin;
         this.form.shop_name = this.$route.params;
       this.$store.dispatch(GET_MENU,this.form);

        
         },
        
  
        methods: {

        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

        redirectTo(names) {
              let path = this.$route.path
               if (path !== names) {
               const Shopid = this.$route.params.id;
                this.$router.push({ name: names, params: { id: Shopid }})
                }
        },

            checkPath(name) {
                let path = this.$nuxt.$route.name


 if (name === path) {
   console.log('true');
                        return true
                    } else {
                        return false
                    }
              //  return (name === path)
            },




     
 

        },
  

        components: {

        },

    }
</script>

