<template>

  <div class="boxStep card card-bg no-border-radius sta-mobile">
    <div class="row">
        <!-- Step 1: Shipping -->
        <div id="stepCartShipping" class="col px-1 text-right divShipping active">
            <div class="stepBoxImage text-center">
                <div class="boxIcon" align="center">
                    <div class="border-box-icon box-border-circle-icon-color">
                        <div :class="a">
                        <i :class="icon"></i>
                         </div>
                    </div>
                </div>
                <div class="boxText fs-ta-14 fs-md-ta-16 pt-1 active">
                    <!-- <i class="far fa-check-circle"></i> -->
                    {{placeholder_datatra}}
                      </div>
            </div>
        </div>


        <!-- Step 2: Payment -->
        <div id="stepHeaderPayment" class="col px-1 divPayment text-center">
            <div class="stepBoxImage text-center">
                <div class="boxIcon" align="center">
                    <div class="border-box-icon box-border-circle-icon-color">
                        <div :class="paymentclass">
                        <i :class="iconpay"></i>
                        </div>
                    </div>
                </div>
                <div class="boxText fs-ta-14 fs-md-ta-16 pt-1 ">
                    <!-- <i class="far fa-check-circle"></i> -->

                    {{placeholder_payment}}


                            </div>
            </div>
        </div>

        <!-- Step 3: Success -->
        <div id="stepHeaderSuccess" class="col px-1 text-left divSuccess">
            <div class="stepBoxImage text-center">
                <div class="boxIcon" align="center">
                    <div class="border-box-icon box-border-circle-icon-color ">
                        <div :class="success">
                                                            <i :class="iconsuccess"></i>
                                                    </div>
                    </div>
                </div>
                <div class="boxText fs-ta-14 fs-md-ta-16 pt-1 ">
                    <!-- <i class="far fa-check-circle"></i> -->

{{placeholder_payment_confrim}}

                         </div>
            </div>
        </div>

    </div>
</div>




</template>





<script>
export default {
      components: {


              },

    computed: {
     a () {
         if(this.$route.name === 'cart-payment'){
              return 'box-shape-icon box-circle-icon-color visited';
         }else if(this.$route.name === 'cart-success'){
                return 'box-shape-icon box-circle-icon-color visited';
         }
         else {
               return 'box-shape-icon box-circle-icon-color active';
         }
      },
      icon(){
         if(this.$route.name === 'cart-payment'){
             //fa fa-hand-o-right id-payment
              return 'fas fa-check fa-lg icon-check-circle fa-lg position-icon position-icon-left-shipping fa';
         }else if(this.$route.name === 'cart-success'){
                return 'fas fa-check fa-lg icon-check-circle fa-lg position-icon position-icon-left-shipping fa';

         }
         else {
               return 'fas fa-truck stepIcon fa-lg position-icon position-icon-left-shipping fa';
         }
      },
    iconpay(){
         if(this.$route.name === 'cart-success'){
             //fa fa-hand-o-right id-payment
              return 'fas fa-check fa-lg icon-check-circle fa-lg position-icon position-icon-left-shipping fa';
         }
         else {
               return 'far fa-credit-card stepIcon fa-lg position-icon position-icon-left-payment fa';
         }
      },
    iconsuccess(){
         if(this.$route.name === 'cart-payment'){
             //fa fa-hand-o-right id-payment
              return 'fa fa-car';
         }else if(this.$route.name === 'cart-success'){
                return 'fas fa-check fa-lg icon-check-circle fa-lg position-icon position-icon-left-shipping fa';

         }
         else {
               return 'far fa-credit-card stepIcon fa-lg position-icon position-icon-left-payment fa';
         }
      },
    paymentclass(){
         if(this.$route.name === 'cart-payment'){
              return 'box-shape-icon box-circle-icon-color active';
         }else if(this.$route.name === 'cart-success'){
            return 'box-shape-icon box-circle-icon-color visited';
         }
         else {
               return 'box-shape-icon box-circle-icon-color';
         }
      },
      success(){
           if(this.$route.name === 'cart-payment'){
              return 'box-shape-icon box-circle-icon-color';
         }else if(this.$route.name === 'cart-success'){
            return 'box-shape-icon box-circle-icon-color visited';
         }
         else {
               return 'box-shape-icon box-circle-icon-color';
         }

      }
    },

        async created(){


        this.language = localStorage.getItem("language");

        if(this.language == 'en'){
         this.placeholder_datatra = 'Delivery';
         this.placeholder_payment = 'Payment';
         this.placeholder_payment_confrim = 'Confirmation';

        }
        if(this.language == 'ch'){
          this.placeholder_datatra = '配送信息';
           this.placeholder_payment = '付款方法';
            this.placeholder_payment_confrim = '订单确认';

        }
        if(this.language == 'th' || this.language == null){
          this.placeholder_datatra = 'ข้อมูลจัดส่ง';
           this.placeholder_payment = 'การชำระเงิน';
            this.placeholder_payment_confrim = 'ยืนยันการสั่งซื้อ';

        }

        },

        mounted() {


        },





    };
</script>
