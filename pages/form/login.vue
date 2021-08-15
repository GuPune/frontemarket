<template>






<section id="Loginform">

    <Nav />
    
            <div class="row loginformweb">
                        <div class="container loginformweb">
                         <div class="alert alert-danger" role="alert" v-if="alert.message">
                        ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง !
                        </div>
                            <div class="col-sm">
                            <center><h4>กรุณาเข้าสู่ระบบ</h4></center><br>
                               
                                            <p>ชื่อผู้ใช้งาน :</p>
                                             <input type="text" id="tel" class="form-control" placeholder="email" v-model="form.email"
                                 :error-messages="EmailErrors"
                             required
                             :class="{ 'is-invalid': $v.form.email.$error}"
                            @input="$v.form.email.$touch()"
                            @blur="$v.form.email.$touch()"
                                ><br>

                                            <p>รหัสผ่าน :</p>
                                            <input type="password" id="tel" class="form-control" placeholder="Password" v-model="form.password"
                                 :error-messages="PassErrors"
                             required
                             :class="{ 'is-invalid': $v.form.password.$error}"
                            @input="$v.form.password.$touch()"
                            @blur="$v.form.password.$touch()"
                                >
                                            <label  @click="showmodal()"><a href="#forgotpass">ลืมรหัสผ่าน?</a></label><br>

                                            <center><button class="btn btn-success" @click="login()">เข้าสู่ระบบ</button><br><br>
                                            <p>คุณยังไม่มีบัญชีใช่หรือไม่ ? <nuxt-link to="userregis"><a href="">สมัครสมาชิก</a></nuxt-link></p>
                                            
                                            </center>


                                



                                




                            
                        </div>


                        </div>

                
               

              </div>


                <!-- ----------------------------------------Mobile-------------------------------------------------------- -->


              <div class="row loginformmobile">

                       <div class="container loginformmobile">
                            <div class="col-sm">
                            <center><h4>กรุณาเข้าสู่ระบบ</h4></center><br>
                               
                                            <p>ชื่อผู้ใช้งาน :</p>
                                            <input type="text" id="email" class="form-control" placeholder="email" v-model="form.email"
                                 :error-messages="EmailErrors"
                             required
                             :class="{ 'is-invalid': $v.form.email.$error}"
                            @input="$v.form.email.$touch()"
                            @blur="$v.form.email.$touch()"
                                ><br>

                                            <p>รหัสผ่าน :</p>
                                             <input type="password" id="tel" class="form-control" placeholder="Password" v-model="form.password"
                                 :error-messages="PassErrors"
                             required
                             :class="{ 'is-invalid': $v.form.password.$error}"
                            @input="$v.form.password.$touch()"
                            @blur="$v.form.password.$touch()"
                                >
                            
                                            <label><a href="#">ลืมรหัสผ่าน?</a></label><br>
                                        
                                            <center><button class="btn btn-success" @click="login()">เข้าสู่ระบบ</button><br><br>
                                            <p>คุณยังไม่มีบัญชีใช่หรือไม่ ? <nuxt-link to="userregis"><a href="">สมัครสมาชิก</a></nuxt-link></p>
                                          
                                            </center>

                            
                        </div>
                        </div>

              </div>


              
        <div id="forgotpass" class="overlay"
         v-if="Isshow">
            <div class="popup">
                <h6>ลืมรหัสผ่านใช่หรือไม่?</h6><br>
                <small>กรุณายืนยันอีเมลล์</small>
                <a class="close" href="#">&times;</a><br>
                <div class="content">
                    <div class="alert alert-danger" role="alert" v-if="emailalert">
                        กรุณณากรอกอีเมลล์
                    </div>
                    <div class="alert alert-success" role="alert" v-if="alertforgot.messageforgot">
                         ส่งไปที่อีเมลล์สำเร็จ
                    </div>
                    <input type="email" class="form-control" placeholder="example@mail.com" required v-model="forms.email"><br>
                    <button type="submit" class="btn btn-info"  @click="forgot()">ส่งไปที่อีเมลล์</button>
                </div>
            </div>
        </div>

    




 


</section>

    
</template>



<script>
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import Nav from "@/components/Nav";
import { FORGOTEMAIL,CLEARALRET } from "../../store/actions.type.js";
    


    export default {
      components: {
          Nav,
           
              },
      validations: {
        form: {
            email: { required },
            password: { required },
     }
    },
    data: () => ({
        emailalert:false,
        emailsuccess:false,
        Isshow:false,
        form: {
            email: "",
            password: "",
        },
        forms: {
            email: "",
        }
      }),

    computed: {
        EmailErrors () {
                const errors = []
                if (!this.$v.form.email.$dirty) return errors
                !this.$v.form.email.required && errors.push('โปรดระบุอีเมล์')
                !this.$v.form.email.email    && errors.push('โปรดระบุข้อมูลรูปแบบอีเมล์')
                return errors
            },
        PassErrors(){

              const errors = []
                if (!this.$v.form.password.$dirty) return errors
                !this.$v.form.password.required && errors.push('โปรดระบุอีเมล์')
                !this.$v.form.password.password    && errors.push('โปรดระบุข้อมูลรูปแบบอีเมล์')
                return errors

        },
        alert () {
                console.log('this.$store.state.alert',this.$store.state.alert);
                return this.$store.state.alert;
        },
        alertforgot () {
              console.log('this.$store.state.user',this.$store.state.user);
                return this.$store.state.user;
        }

    },
    mounted() {
       // let clearalert = this.$store.dispatch(CLEARALRET);
    },
    methods: {
        async login(){
        this.$v.$touch()
            this.form.url = window.location.origin
           
                if (this.$v.form.$pending || this.$v.form.$error) return;
                   await this.$store.dispatch('auth/login', this.form);
                 
        },

        async forgot(){

//this.Isshow = false;
if(this.forms.email == ''){
    this.emailalert = true
    return false
}else{
    this.emailalert = false;
    this.emailsuccess = true;
    this.forms.url = window.location.origin
    let data = await this.$store.dispatch(FORGOTEMAIL,this.forms);
   // this.Isshow = false;
//     this.$router.push({
//     name: 'form-login'
// });
}           
        },
        showmodal(){
            this.Isshow = true;
         
        }
    },
    };
    
</script>
