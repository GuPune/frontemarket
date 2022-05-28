<template>


    <section id="categories">
        <div class="row relatedweb-test" style="margin-bottom: -25px;">


                <div class="col-12 col-md-9 col-lg-9" v-for="(x, index) in categornew" :key="x.id">
                   <div class="main-heading">
          <div class="row heading-title-new" >
    <div class="col-9 col-md-10 col-lg-10 col-sm-6">

  <h2 v-if="shell_cate"  class="mobile-news"><span>ข่าวสาร และ กิจกรรม</span>

			</h2>

          <h2 v-else  class="mobile-news">


            <span >
    <img src="../assets/new11.png" style="width: 50px;height: 50px;">
              {{x.name}}</span>

			</h2>

    </div>
   <div class="col-3 col-md-2 col-lg-2 col-sm-6" style="line-height: 4;text-align: right;">
     <button type="button" class="btn btn-outline-dark">ดูทั้งหมด</button>
   </div>
  </div>
 <div>

      <VueSlickCarousel v-bind="slickOptions">
    <div v-for="i in x.data"  class="img-wrapper cards">

              <div class="cards c-shopinmy-tt">


                                                <div class="cardproduct-new">

                                                  <img  :src="Checkimage(i.f_archives_img)"  class="imgproduct-new related-images">
                                                  <div class="row">
                                                    <div class="col-12">



                                                    </div>
 <div class="card-body">
    <p class="card-text product-name-new">{{i.f_name}}</p>
       <p class="card-text"><small class="text-muted">{{covertdate(i.updated_at)}}</small></p>
  </div>
                                            </div>

                                                           <div class="row">
                                                    <div class="col-12">


                                                    </div>
                                                    </div>
     </div>
        </div>










      </div>


    </VueSlickCarousel>
  </div>




                    </div>
      </div>

    </div>


    <br>
    </section>

</template>


<script>
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters,mapState } from "vuex";
import { FETCH_CATEGORY_SHELL,FETCH_PRODUCT_FIND,GET_NEWE } from "../store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import moment from 'moment'


  export default {

        data() {
      return {
        x:null,
        categornew:null,
         form: {
                    catagory_id: "",
                },
          items: [
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
            {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
            {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
            {
            src: 'https://cmsecom.idtest.work/public/product/20210901064507ldvtQEcA3aYbLpoyWxtg.png',
          },
          {
            src: 'https://cmsecom.idtest.work/public/product/20211012083555GwHsOt7iJXKzzXRyhW0s.jpeg',
          },
                 {
            src: 'https://cmsecom.idtest.work/public/product/20211012083555GwHsOt7iJXKzzXRyhW0s.jpeg',
          },
                 {
            src: 'https://cmsecom.idtest.work/public/product/20211012083555GwHsOt7iJXKzzXRyhW0s.jpeg',
          },
                 {
            src: 'https://cmsecom.idtest.work/public/product/20211012083555GwHsOt7iJXKzzXRyhW0s.jpeg',
          },
                 {
            src: 'https://cmsecom.idtest.work/public/product/20211012083555GwHsOt7iJXKzzXRyhW0s.jpeg',
          },
        ],


  slickOptions:{
 "centerMode": true,
  "centerPadding": "20px",
   "arrows": false,
  "focusOnSelect": true,
  "infinite": true,
  "slidesToShow": 5,
  "speed": 500,
  "responsive": [
            {
      "breakpoint": 1700,
      "settings": {
        "slidesToShow": 8,
        "slidesToScroll": 4,
        "infinite": true,
        "dots": true
      }
    },
            {
      "breakpoint": 1500,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 4,
        "infinite": true,
        "dots": true
      }
    },
          {
      "breakpoint": 1440,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 4,
        "infinite": true,
        "dots": true
      }
    },
      {
      "breakpoint": 1300,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 4,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 6,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 5,

        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 2,

        "slidesToScroll": 5
      }
    },
        {
      "breakpoint": 375,
      "settings": {
        "slidesToShow": 2,

        "slidesToScroll": 5

      }
    }
  ]
}

      }
    },

     computed: {

 ...mapGetters(["category_shell","shell_cate","newe"]),


      ...mapState({
                objects: state => state,
            }),

               ...mapState({
                objects: state => state.ProductShell.shell_cate,
            }),

         isUrl () {
                return this.$store.state.user.url_id;
        },


        },

        mounted() {

        this.Loadcategory()

           if(this.objects == null){
        this.form.cate = "";
         }else {

                  this.form.cate = this.objects.id;
         }

           let find_product = this.$store.dispatch(FETCH_PRODUCT_FIND,this.form);

         },


         methods: {

          covertdate(date){
            console.log('date',date);
                  return moment(String(date)).format('MMMM ,Do YYYY')
        },


      redirectTo(name) {
                    this.$router.push(name)
                  },

       async Loadcategory() {


                   let a = await this.$store.dispatch(GET_NEWE);
                   this.categornew = a;
                   console.log('item',this.items);



          },
         Checkimage(image){
                let public_images = process.env.ImageURL+image;
                console.log('public_images',public_images);
                return public_images;
        },
        ChangeProduct(i){


        this.form.catagory_id = i.id;
        this.form.cat = i;

        let find_product = this.$store.dispatch(FETCH_PRODUCT_FIND,this.form);

        }

        },


        components: {

        },

    }
</script>
