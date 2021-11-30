<template>

  <div class="boxStep card card-bg no-border-radius">

    <div class="row py-3">
                <div class="col-12 text-center">
                    <h1 class="fs-ta-30 fs-md-ta-36 text-thmLight-1 mb-0">สถานะการสั่งซื้อ</h1>
                </div>
            </div> 
            <!-- End Page Title -->

            <!-- Start Description -->
            <div class="row py-3 d-none d-md-flex">
                <div class="col-12 text-center">
                    <div class="fs-ta-16 text-thmLight-1">
                        หมายเลขคำสั่งซื้อ <span class="text-thmLight-2">112021000004</span>
                        &nbsp;&nbsp;
                        วันที่สั่งซื้อ <span class="text-thmLight-2">2021-11-30 15:04</span>
                    </div>
                                    </div>
            </div>
            <!-- End Description -->

            <!-- Start Expired Desktop -->
                            <div class="row pb-3 justify-content-center d-none d-md-flex">
                    <div class="col-auto py-3 bg-yellow">
                        <div class="fs-ta-14 text-pumpkin text-center">
                            กรุณาชำระเงินก่อนวันที่ <u>2021-12-03</u> เวลา <u>15:04</u> มิฉะนั้นระบบจะยกเลิกคำสั่งซื้อโดยอัตโนมัติ                        </div>
                    </div>
                </div>
                        <!-- End Expired Desktop -->
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
                    สั่งซื้อสินค้า                </div>
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
                    การชำระเงิน                </div>
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
                    ยืนยันการสั่งซื้อ                </div>
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
             
        mounted() {

          
        },
       
           

     
    
    };
</script>