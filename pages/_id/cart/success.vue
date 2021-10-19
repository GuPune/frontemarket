<template>


<div class="container col-12 col-md-8" style="padding-top: 90px;">
<StatusShipping/>
    <div style="padding-top: 20px;">
    <div class="row">
    <div class="col-12 col-md-8">
    <div class="col-12 col-md-12 shiipping-add">
   
         
    </div>
    </div>

    </div>
    </div>
</div>

</template>





<script>
    import { mapGetters } from "vuex";
    import StatusShipping from "@/components/StatusShipping";
    import ShippingInfo from "@/components/ShippingInfo";
    import Summary from "@/components/Summary";
    import Pay from "@/components/Pay";
    import AddressShippingConfirm from "@/components/AddressShippingConfirm";
    import { SAVE_DELIVERY,CHECK_DELIVERY } from "../../../store/actions.type.js";
    export default {
      components: {
        StatusShipping,
        ShippingInfo,
        Summary,
        Pay,
        AddressShippingConfirm
              },

                data() {
      return {
          variants: ['dark'],
 loading:true
      }
    },

        computed: {
          

        
        },
             
        mounted() {

          
        },
        methods: {

       async deliverys(){
 let checkbank = await localStorage.getItem('bank');
 if(checkbank == null){
     this.error('กรุณาเลือกบริการจ่ายเงิน');
     return false;
 }
     
//  let savedelivery =  this.$store.dispatch(SAVE_DELIVERY,this.delivery);
        },
         error($text){
                    this.$swal({
                    icon: 'error',
                    title: $text,
                    showConfirmButton: true,
                    reverseButtons: true
                });

 }
     
//  let savedelivery =  this.$store.dispatch(SAVE_DELIVERY,this.delivery);
        },
    
        
        
      
       
    
    };
</script>