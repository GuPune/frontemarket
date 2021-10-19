<template>

  <div class="boxStep card card-bg no-border-radius">
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
                    ข้อมูลจัดส่ง                </div>
            </div>
        </div>
        

        <!-- Step 2: Payment -->
        <div id="stepHeaderPayment" class="col px-1 divPayment text-center">
            <div class="stepBoxImage text-center">
                <div class="boxIcon" align="center">
                    <div class="border-box-icon box-border-circle-icon-color">
                        <div :class="paymentclass">
                        <i class="far fa-credit-card stepIcon fa-lg position-icon position-icon-left-payment fa"></i>
                        </div>
                    </div>            
                </div>
                <div class="boxText fs-ta-14 fs-md-ta-16 pt-1 ">
                    <!-- <i class="far fa-check-circle"></i> -->
                    การชำระเงิน                </div>
            </div>
        </div>

        <!-- Step 3: Success -->
        <div id="stepHeaderSuccess" class="col px-1 text-left divSuccess " >
            <div class="stepBoxImage text-center">
                <div class="boxIcon" align="center">
                    <div class="border-box-icon box-border-circle-icon-color ">
                        <div class="box-shape-icon box-circle-icon-color ">
                                                            <i class="far fa-box-check stepIcon fa-lg position-icon position-icon-left-payment fa"></i>
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
        
         if(this.$route.name === 'id-cart-payment'){
              return 'box-shape-icon box-circle-icon-color visited';
         }else {
               return 'box-shape-icon box-circle-icon-color active';
         }
      },
      icon(){
         if(this.$route.name === 'id-cart-payment'){

             //fa fa-hand-o-right id-payment
              return 'fas fa-truck stepIcon fa-lg position-icon position-icon-left-shipping fa';
         }else {
               return 'fas fa-truck stepIcon fa-lg position-icon position-icon-left-shipping fa';
         }
      },
    paymentclass(){
         if(this.$route.name === 'id-cart-payment'){
console.log('ifxxxxxxxxxxxx');
              return 'box-shape-icon box-circle-icon-color active';
         }else {
               return 'box-shape-icon box-circle-icon-color';
         }
      }

    },
             
        mounted() {

          
        },
       
           

     
    
    };
</script>