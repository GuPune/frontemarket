<template>
        <div class="card shopping-cart">
                  <h2 class="shoping-cart-title bg-order"><span>วิธีการชำระเงิน</span></h2>
                        <div class="card-body">
                     <div class="form-group mb-0" id="boxCardShipping">
                        <div class="row boxPaymentList pb-3 mb-3">
                <div class="col-9 col-md-7">
           <label>
   <input type="radio"    @change="changeBank($event)" value='ems'>&nbsp; ธนาคารกรุงศรีอยุธยา
                  
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
import { mapGetters } from "vuex";
import { FETCH_BANK } from "../store/actions.type.js";
  export default {
    data() {
      
      return {
        status: 'not_accepted',
        selectedAdd: null,
        selectedDel: null,
        statusdelivery:null,
        shipping:null,
        form:{
        url:null
        }
      }
    },

   computed: {
            ...mapGetters(["delivery"]),

          isUrl () {
                return this.$store.state.user.url_id;
          },

        
        },

     async mounted() {
       this.form.url = window.location.origin
        let bank_data = await this.$store.dispatch(FETCH_BANK,this.form);
//         this.shipping = delivery_data;
       
//  let check = await localStorage.getItem('delivery');
//  if(check){
//    console.log(check);
//    this.selectedDel = check;
//  }

        },

      methods: {
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

  
        changeAdd(event){
           this.selectedDel = event.target.value
           let delivery =  this.$store.dispatch(CHOOSE_DELIVERY,this.selectedDel);
    
        },
      }
  }
</script>
