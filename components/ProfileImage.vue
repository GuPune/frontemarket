<template>
<div>
           <div class="card profile-im" v-if="profile">
                        <div class="card-body">
                        <div class="d-flex flex-column align-items-center text-center profile-bg-order">
 <img v-if="profile.profile_images" :src="profile.profile_images"  alt="Admin" class="rounded-circle profile" width="150" />
                            <div class="mt-3">
                            <h4>
                    {{profile.name}}
                            </h4>
                            </div>
                        </div>
                        </div>
                         <div class="card-body">
                                <div class="boxMenu">
                                    <ul class="nav flex-column nav-pills memberMenu">
                                        <li class="prof-s" id="member-MyAccount" @click="redirectTo('profile-userprofile')"  :class="{'profile-menu': checkPath('profile-userprofile')}">
                                            <p  v-if ="this.language == 'en'">{{this.placeholder_profiledata}}</p>
                                            <p  v-if ="this.language == 'ch'">{{this.placeholder_profiledata}}</p>
                                            <p  v-if ="this.language == 'th' || this.language == null">{{this.placeholder_profiledata}}</p>
                                        </li>
                                       <!-- <li class="" id="member-editprofile" >
                                            <p></p>
                                        </li> -->

                                        <li class="prof-s" id="member-editaddressbook" @click="redirectTo('profile-userprofileadd')"  :class="{'profile-menu': checkPath('profile-userprofileadd')}">
                                           
                                              <p  v-if ="this.language == 'en'">{{this.placeholder_address}}</p>
                                            <p  v-if ="this.language == 'ch'">{{this.placeholder_address}}</p>
                                            <p  v-if ="this.language == 'th' || this.language == null">{{this.placeholder_address}}</p>
                                            
                                        </li>
                                        <li class="prof-s" id="member-orderedhistory" @click="redirectTo('profile-historyorder')"  :class="{'profile-menu': checkPath('profile-historyorder')}" >
                                
                                                 <p  v-if ="this.language == 'en'">{{this.placeholder_history}}</p>
                                            <p  v-if ="this.language == 'ch'">{{this.placeholder_history}}</p>
                                            <p  v-if ="this.language == 'th' || this.language == null">{{this.placeholder_history}}</p>
                                        </li>
                                                                                <li class="prof-s" id="member-changepassword"  :class="{'profile-menu': checkPath('profile-changepassword')}"  @click="redirectTo('profile-changepassword')">
                                             <p  v-if ="this.language == 'en'">{{this.placeholder_password}}</p>
                                            <p  v-if ="this.language == 'ch'">{{this.placeholder_password}}</p>
                                            <p  v-if ="this.language == 'th' || this.language == null">{{this.placeholder_password}}</p>
                                        </li>
                                      
                                    </ul>
                                </div>
                            </div>
                    </div>
</div>

</template>


<script>
import Nav from "@/components/Nav";
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import { FETCH_GET_PROFILE } from "@/store/actions.type.js";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';
  export default {
          data() {
    return {
      placeholder_profiledata:'',
      placeholder_address:'',
       placeholder_history:'',
       placeholder_password:'',
    };
  },
    props: ['profile'],
     computed: {
            
   
        },


         async created(){



        this.language = localStorage.getItem("language");

        if(this.language == 'en'){
         this.placeholder_profiledata = 'ข้อมูลของฉัน';
         this.placeholder_address = 'Delivery address';
         this.placeholder_history = 'Order History';
         this.placeholder_password = 'ตั้งค่ารหัสผ่าน';
      
        

        }
        if(this.language == 'ch'){
          this.placeholder_profiledata = 'ข้อมูลของฉัน';
          this.placeholder_address = '邮寄地址';
          this.placeholder_history = '订单历史';
          this.placeholder_password = 'ตั้งค่ารหัสผ่าน';

        }
         if(this.language == 'th' || this.language == null){
          this.placeholder_profiledata = 'ข้อมูลของฉัน';
          this.placeholder_address = 'ที่อยู่จัดส่ง';
         this.placeholder_history = 'ประวัติการสั่งซื้อ';
         this.placeholder_password = 'ตั้งค่ารหัสผ่าน';
    
        }

        },

        
        mounted() {


         },
        
  
        methods: {

        Checkimage(image){
            
                let public_images = process.env.Upload+image;
            
                return public_images;
        },

   
        redirectTo(names) {
              this.$router.push({ name: names })
          
        },
        checkPath(name) {
                let path = this.$nuxt.$route.name


 if (name === path) {
   console.log('true');
                        return true
                    } else {
                        return false
                    }
              //  return (name === path)
            },

     
        },
  

        components: {

        },

    }
</script>