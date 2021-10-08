<template>
        <div class="card shopping-cart">
                  <h2 class="shoping-cart-title bg-order"><span>วิธีการจัดส่ง</span></h2>
                        <div class="card-body">
                     <div class="form-group mb-0" id="boxCardShipping">
                        <div class="row boxPaymentList pb-3 mb-3">
                <div class="col-9 col-md-7">
                    <label>
   <input type="radio"    @change="changeAdd($event)" value='ems' v-model="statusdelivery">&nbsp; EMS
                  
                        <div class="pl-3 text-muted offset-lg-0 d-none d-lg-block">delivery
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
import { mapGetters } from "vuex";
import { CHOOSE_DELIVERY,CHECK_DELIVERY } from "../store/actions.type.js";
  export default {
    data() {
      
      return {
        status: 'not_accepted',
        selectedAdd: null,
        statusdelivery:null
      }
    },

            computed: {
            ...mapGetters(["delivery"]),

        
        },

     async mounted() {
   let check = localStorage.getItem('delivery');

       //    let checkdelivery = await this.$store.dispatch(CHECK_DELIVERY);
      //    console.log(this.delivery);
          this.statusdelivery = check;
        },

      methods: {
  
              changeAdd(event){
           var data = event.target.value;
         
            let delivery =  this.$store.dispatch(CHOOSE_DELIVERY,data);
    
        },
      }
  }
</script>