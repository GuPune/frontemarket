<template>
<div>
 <ul class="profile-info-list">
                                            <li>
                                                <div class="field">ประเภทสินค้า:</div>
                                                <div class="value" v-if="cate_by_shop">
                                                    <select class="form-control" name="items" id="items"  @change="onChange($event)">
                                                     <option value="" disabled selected>ค่าเริ่มต้น</option>
                                                    <option v-for="item in cate_by_shop" :value="item.id">{{item.name_th}}</option>
                                                    </select>
                                                </div>
                                            </li> <br>

                                            <li>
                                                <div class="field">ราคา: {{ formatPrice(form.price) }}</div>

    <b-form-input id="range-1" v-model="form.price" type="range" min="0" max="50000" v-on:change="all_price"></b-form-input>

                                            </li>

                                                                                        <li>
                                                <div class="field">ค้นหา:</div>

          <b-form-input v-model="form.search" placeholder="ค้นหาสินค้า" v-on:keyup="search"></b-form-input>

                                            </li>

                                        </ul>

    </div>
</template>


<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Categoriesbyshop from "@/components/Categoriesbyshop";
import Productbyshop from "@/components/Productbyshop";
import { FETCH_FIND_PRODUCT } from "@/store/actions.type.js";
import { mapGetters } from "vuex";

  export default {
    props: ['cate_by_shop'],
    data() {
    return {
   value: '0',
   form:{
     id:null,
     price:'0',
     cate_type:null,
     search:""
   }
    };
  },


     computed: {

        },



        created(){

        },




      mounted() {
         this.form.url = window.location.origin;
         this.form.shop_name = this.$route.params;

         },

      methods: {
      async onChange(event) {
         this.form.cate_type = event.target.value;

            let cate_by_shop = this.$store.dispatch(FETCH_FIND_PRODUCT,this.form)
        },
        async all_price(){
           console.log('this.form',this.form);
            let cate_by_shop = this.$store.dispatch(FETCH_FIND_PRODUCT,this.form)
        },

         async search(){
           console.log('this.form',this.form);
            let cate_by_shop = this.$store.dispatch(FETCH_FIND_PRODUCT,this.form)
        },


             formatPrice(value) {
        let val = (value/1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
        return val;
    },



        }



        }


</script>
