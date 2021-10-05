<template>

  <div class="boxStep card card-bg no-border-radius">
    <div class="row">
        <!-- Step 1: Shipping -->
        <div id="stepCartShipping" class="col px-1 text-right divShipping active">
            <div class="stepBoxImage text-center">
                <div class="boxIcon" align="center">
                    <div class="border-box-icon box-border-circle-icon-color active">
                        <div class="box-shape-icon box-circle-icon-color active">
                                                            <i class="fas fa-truck stepIcon fa-lg position-icon position-icon-left-shipping fa"></i>

                                                          
                                                            
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
                    <div class="border-box-icon box-border-circle-icon-color ">
                        <div class="box-shape-icon box-circle-icon-color ">
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
             
        mounted() {

          
        },
       
           

     
    
    };
</script>