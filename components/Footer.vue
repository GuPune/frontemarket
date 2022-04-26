<template>
<div >


<div data-v-76387e28="" v-if="objects"  :style="{'background-color':objects.color,'text-align':objects.position}">
    <div class="container">
    <div id="footer-top">
    <div class="row footer-top" data-v-2eecd278="">
</div>
</div>
<div class="row main-footer">
    <div class="flex-row col-lg-12"><div id="footer-main" class="row" style="font-size: 14px;">
<div class="col col-12 col-md-6 col-xs-12"  data-v-2eecd278="">
<div class="footer-list" data-v-2eecd278="" style="hiHGcU">
<p data-v-2eecd278="" style="font-weight: 900;">{{objects.details}}</p>
</div>
</div>
<div class="col-12 col-md-6 col-xs-12"  data-v-2eecd278="">
<div class="footer-list" data-v-2eecd278="">
<p data-v-2eecd278="" style="font-weight: 900;"><div class="bfc-paylogo">
<img src="https://www.thailandpostmart.com/templates/images/image_payment_footer-min.png" class="img-fluid">
</div></p>
</div>
</div>

</div>
</div>
</div>

                  </div>
                  </div>
</div>


</template>







<script>
import { mapGetters,mapState } from "vuex";
  import { FETCH_PRODUCT_BY_SHOP,GET_FOOTER } from "@/store/actions.type.js";
  export default {
       data() {
    return {
      form:{
url:""
      },

    };
  },

     computed: {

      ...mapState({
                objects: state => state.Layout.footer,
            }),

        },

      async  mounted() {
        //  this.$store.dispatch(ToogleAction);






         },


        methods: {

      redirectTo(name) {
                    this.$router.push(name)
                  }

        },

        components: {

        },

    }
</script>
