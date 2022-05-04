<template>


    <section id="categories">
        <div class="row relatedweb-test">
                <div class="col-12 col-md-9 col-lg-9">
                   <div class="main-heading">
          <div class="row heading-title-new" >
    <div class="col-12 col-md-6 col-lg-6">
  <h2 v-if="shell_cate"  class="mobile-news"><span>ข่าวสาร และ กิจกรรม</span>

			</h2>

          <h2 v-else  class="mobile-news">


            <span >
    <img src="../assets/new11.png" style="width: 50px;height: 50px;">
              ข่าวและกิจกรรม</span>

			</h2>


    </div>
   <div class="col-12 col-md-6 col-lg-6"></div>
  </div>
 <div>

      <VueSlickCarousel v-bind="slickOptions">
    <div v-for="i in items"  class="img-wrapper cards">



              <div class="cards c-shopinmy-tt">


                                                <div class="cardproduct-new">

                                                  <img  :src="Checkimage(i.image)"  @click="ChangeProduct(i)" class="imgproduct-new related-images">
                                                  <div class="row">
                                                    <div class="col-12">

                                                    <!-- <div class="product-name-new">

คณะผู้บริหารบริษัท ไอดีไดรฟ์ จำกัด ร่วมเป็นเจ้าภาพ โครงการ “บรรพชาสามเณรฟื้นฟูพระพุทธศาสนาทั่วไทย พ.ศ. ๒๔๕๖๕” ณ ศูนย์
                                                    </div> -->

                                                    </div>
                                                                                                        <!-- <div class="bssdlp-title-text">
<a href="https://www.thailandpostmart.com/news/1337/%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%94%E0%B8%B5%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%AE%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%9A-%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%8A%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E-%E0%B9%82%E0%B8%94%E0%B8%A2-%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97-%E0%B8%97%E0%B8%B5%E0%B8%A7%E0%B8%B5%E0%B8%9E%E0%B8%B9%E0%B8%A5-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B9%8A%E0%B8%9B-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/" target="_blank" title="">
ส่งต่อสุขภาพดีด้วย อินเฮิร์บ ผลิตภัณฑ์ชงดื่มเพื่อสุขภาพ โดย บริษัท ทีวีพูล กรุ๊ป จำกัด
</a>
</div> -->
 <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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


                        <!-- -------------------------Mobile------------------------------ -->



    <br>
    </section>

</template>


<script>
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters,mapState } from "vuex";
import { FETCH_CATEGORY_SHELL,FETCH_PRODUCT_FIND } from "../store/actions.type.js";
  import { APP_URL } from "../environment/environment.js";
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'



  export default {

        data() {
      return {
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

 ...mapGetters(["category_shell","shell_cate"]),


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

      redirectTo(name) {
                    this.$router.push(name)
                  },

       async Loadcategory() {


                   let a = await this.$store.dispatch(FETCH_CATEGORY_SHELL);
                   this.items = a;



          },
         Checkimage(image){
                let public_images = process.env.ImageURL+image;
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
