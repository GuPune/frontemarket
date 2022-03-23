<template>
<div>
          <div class="card mt-3">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0"  v-if ="this.language == 'en'"><i class="fa fa-home" aria-hidden="true"> :</i> 
                         
                          {{this.placeholder_address}}
                            </h6>
                               <h6 class="mb-0"  v-if ="this.language == 'ch'"><i class="fa fa-home" aria-hidden="true"> :</i> 
                           {{this.placeholder_address}}
                    
                            </h6>
                               <h6 class="mb-0"   v-if ="this.language == 'th' || this.language == null"><i class="fa fa-home" aria-hidden="true"> :</i> 
                            {{this.placeholder_address}}
                    
                            </h6>

                         
                            
                            <span class="text-secondary">{{profile.address}}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0" v-if ="this.language == 'en'"><i class="fa fa-phone" aria-hidden="true"> :</i> 
                            
                            {{this.placeholder_tel}}
                            </h6>
                                <h6 class="mb-0" v-if ="this.language == 'ch'"><i class="fa fa-phone" aria-hidden="true"> :</i> 
                            
                            {{this.placeholder_tel}}
                            </h6>
                                <h6 class="mb-0"  v-if ="this.language == 'th' || this.language == null"><i class="fa fa-phone" aria-hidden="true"> :</i> 
                            
                            {{this.placeholder_tel}}
                            </h6>
                            <span class="text-secondary" > {{profile.tel}}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0" v-if ="this.language == 'en'"><i class="fa fa-envelope" aria-hidden="true"> :</i>
                              {{this.placeholder_email}}
                             </h6>
                             <h6 class="mb-0" v-if ="this.language == 'ch'"><i class="fa fa-envelope" aria-hidden="true"> :</i>
                              {{this.placeholder_email}}
                             </h6>
                             <h6 class="mb-0"  v-if ="this.language == 'th' || this.language == null"><i class="fa fa-envelope" aria-hidden="true"> :</i>
                              {{this.placeholder_email}}
                             </h6>
                            <span class="text-secondary">{{profile.email}}</span>
                        </li>
                       
                        </ul>
                    </div>
</div>
</template>


<script>
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import { FETCH_GET_PROFILE } from "@/store/actions.type.js";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';
  export default {
    data() {
    return {
      placeholder_email:'',
      placeholder_address:'',
       placeholder_tel:'',
    
    };
  },
     computed: {
            ...mapGetters(["profile"]),
   
        },


                 async created(){



        this.language = localStorage.getItem("language");

        if(this.language == 'en'){
         this.placeholder_email = 'Email';
         this.placeholder_address = 'Address';
         this.placeholder_tel = 'Tel';

        }
        if(this.language == 'ch'){
         this.placeholder_email = '电子邮件';
         this.placeholder_address = '地址';
         this.placeholder_tel = '電話';
 
        }
         if(this.language == 'th' || this.language == null){
         this.placeholder_email = 'อีเมล';
         this.placeholder_address = 'ที่อยู่';
         this.placeholder_tel = 'เบอร์โทร';

    
        }

        },
        
        mounted() {
 
        
         },
        
  
        methods: {

   
     
     
        },
  

        components: {

        },

    }
</script>