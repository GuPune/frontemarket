<template>
<div>
           <div class="card" v-if="profile">
                        <div class="card-body">
                        <div class="d-flex flex-column align-items-center text-center">
                            <img src="https://www.arianagrande.com/sites/g/files/aaj12746/f/styles/suzuki_breakpoints_image_tablet/public/positions-final_0.jpg" alt="Admin" class="rounded-circle profile" width="150">
                            <div class="mt-3">
                            <h4>
                    {{profile.name}}
                            </h4>
                            <p class="text-secondary mb-1">
                                <strong>ประเภท</strong>
                                <small class="text-muted">โปรไฟล์ผู้ซื้อ</small></p>
                            <button class="btn btn-primary">อัปโหลดรูปภาพ</button>
                            <a href="#changepassword" class="btn btn-outline-primary">เปลี่ยนรหัสผ่าน</a>
                            </div>
                        </div>
                        </div>
                    </div>
</div>

</template>


<script>
import Nav from "@/components/Nav";
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import { FETCH_GET_PROFILE } from "../store/actions.type.js";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';
  export default {
    props: ['profile'],
     computed: {
            
   
        },
        
        mounted() {
  console.log(this.profile)
        
         },
        
  
        methods: {

   
     
     
        },
  

        components: {

        },

    }
</script>