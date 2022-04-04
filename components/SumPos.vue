<template>
     <div class="order-mod">
        <div class="card shopping-cart">
                        <div class="card-body">
                        <div class="table table-responsive">
              <table class="table">
  <thead>
    <tr>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(i, index) in item">
      <th scope="row">{{i.id}}</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>{{i.qty}}</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
    </div>
    </div>



</template>


<script>
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import { FETCH_ADS } from "../store/actions.type.js";
  export default {
    data() {
    return {
      IsLogin: false,
      slide: 0,
        sliding: null
    };
  },


     computed: {
      ...mapGetters(["item"]),

        },



          async created(){
        this.language = localStorage.getItem("language");
        if(this.language == 'en'){
          this.placeholder_sum = 'Total Price';
          this.placeholder_sum_price = 'Total';
          this.placeholder_sum_dis = 'Discount';
           this.placeholder_sum_all = 'Total Price';
           this.placeholder_sum_money = '(THB)';

        }
        if(this.language == 'ch'){
          this.placeholder_sum = '总价';
          this.placeholder_sum_price = '全部的';
          this.placeholder_sum_dis = '折扣';
           this.placeholder_sum_all = '总价';
            this.placeholder_sum_money = '(THB)';


        }
        if(this.language == 'th' || this.language == null){
          this.placeholder_sum = 'ยอดรวมตะกร้าสินค้า';
          this.placeholder_sum_price = 'รวมทั้งหมด';
          this.placeholder_sum_dis = 'ส่วนลด';
           this.placeholder_sum_all = 'ราคาสุทธิที่ต้องชำระ';
            this.placeholder_sum_money = '(บาท)';

        }

        },




      mounted() {

         },

      methods: {





        }



        }


</script>
