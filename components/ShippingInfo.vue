<template>
        <div class="card shopping-cart">
                  <h2 class="shoping-cart-title bg-order"><span>วิธีการจัดส่ง</span></h2>
                        <div class="card-body"  v-for="(data, index) in shipping" :key="data.id">
                <div class="form-group mb-0" id="boxCardShipping"><div class="row boxPaymentList pb-3 mb-3"> <div class="col-9 col-md-7" >
                    <label>
                         <input type="radio"    @change="changeAdd($event)" :value="data.id">&nbsp; {{data.name}}
                  
                        <div class="pl-3 text-muted offset-lg-0 d-none d-lg-block">{{data.details}}
                        </div>
                    </label>
                </div>
                <div class="col-3 px-0 offset-lg-0 d-none d-lg-block">
                    <div class="text-center"><img class="shippingImage fill" :src="Checkimage(data.avatar)" />
                    </div>
                </div> 
                <div class="col-3 col-md-2 pl-0 text-right">
                    <span>ฟรี</span>
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
import { CHOOSE_DELIVERY,CHECK_DELIVERY,DELIVERY_DATA } from "../store/actions.type.js";
  export default {
    data() {
      
      return {
        status: 'not_accepted',
        selectedAdd: null,
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
        let delivery_data = await this.$store.dispatch(DELIVERY_DATA,this.form);
        this.shipping = delivery_data;
       
  //  let check = await localStorage.getItem('delivery');
  //         this.statusdelivery = check;
        },

      methods: {
        Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;
        },

  
              changeAdd(event){
           var data = event.target.value;
         
            let delivery =  this.$store.dispatch(CHOOSE_DELIVERY,data);
    
        },
      }
  }
</script>