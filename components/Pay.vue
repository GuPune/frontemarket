<template>
        <div class="card shopping-cart">
                  <h2 class="shoping-cart-title bg-order"><span>วิธีการชำระเงิน</span></h2>
                        <div class="card-body">
                     <div class="form-group mb-0" id="boxCardShipping">
                        <div class="row boxPaymentList pb-3 mb-3">
                <div class="col-9 col-md-7">
           <label>
   <input type="radio"    @change="changeAdd($event)" value='ems' v-model="checkbank">&nbsp; ธนาคารกรุงศรีอยุธยา
                  
                        <div class="pl-3 text-muted offset-lg-0 d-none d-lg-block">ภ.ภัชธนมณี 003-1-22360-1
                        </div>
                    </label>
                </div>
                <div class="col-3 px-0 offset-lg-0">
                    <div class="text-center">
                                                    <img class="shippingImage fill" 
                                src="https://webbuilder46.makewebeasy.com/images/trackcode/track1.jpg" 
                                alt='EMS'/>
                                            </div>
                </div> 
            
                
            </div>
            
            </div>
              <div>

   <div>
  </div>
  </div>
                        </div>    
            </div>
</template>



<script>
  export default {

  }
</script>
