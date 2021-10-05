<template>
        <div class="card shopping-cart">
                  <h2 class="shoping-cart-title bg-order"><span>วิธีการจัดส่ง</span></h2>
                        <div class="card-body">
                     <div class="form-group mb-0" id="boxCardShipping">
                        <div class="row boxPaymentList pb-3 mb-3">
                <div class="col-9 col-md-7">
                    <label>

                         <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"  :disabled="true"
    >
       <span class="font-weight-bold">EMS</span>
    </b-form-checkbox>
                  
                        <div class="pl-3 text-muted offset-lg-0 d-none d-lg-block">
                        ระยะเวลาขนส่ง&nbsp;1-5&nbsp; 
                        </div>
                    </label>
                </div>
                <div class="col-3 px-0 offset-lg-0 d-none d-lg-block">
                    <div class="text-center">
                                                    <img class="shippingImage fill" 
                                src="https://webbuilder46.makewebeasy.com/images/trackcode/track1.jpg" 
                                alt='EMS'/>
                                            </div>
                </div> 
                <div class="col-3 col-md-2 pl-0 text-right">
                    <span>ฟรี</span>
                </div>
                <div class="col-12 d-lg-none pt-1 pt-lg-0">
                    <div class="pl-3 text-muted">
                                                    ระยะเวลาขนส่ง                            &nbsp;1-5&nbsp;
                            วัน                                                                                            </div>    
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
    data() {
      return {
        status: 'accepted'
      }
    }
  }
</script>