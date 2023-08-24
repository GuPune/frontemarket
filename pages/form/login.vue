<template>
<div>
<section id="Loginform" class="form-login-desktop" style="margin:15px;">
      <div class="container forms">

       <div class="alert alert-danger" role="alert" v-if="alert.message">
              <div v-if ="this.language == 'en'" > {{this.placeholder_alert}} </div>
             <div v-if ="this.language == 'ch'" > {{this.placeholder_alert}}</div>
              <div v-if ="this.language == 'th' || this.language == null" > {{this.placeholder_alert}} </div>
        </div>

    <div class="row">
      <h5 style="color: #171c24;font-size: 32px;" v-if ="this.language == 'en'" >{{this.placeholder_login}}</h5>
      <h5 style="color: #171c24;font-size: 32px;" v-if ="this.language == 'ch'">{{this.placeholder_login}}</h5>
      <h5 style="color: #171c24;font-size: 32px;"  v-if ="this.language == 'th' || this.language == null" >{{this.placeholder_login}}</h5>
      <div class="input-group input-group-icon">
        <input class="form-control"  :placeholder="[[ placeholder_name ]]" type="text" v-model="form.email"
            :error-messages="EmailErrors"

              :class="{ 'is-invalid': $v.form.email.$error}"
               @input="$v.form.email.$touch()"
             @blur="$v.form.email.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>



      <div class="input-group input-group-icon">
        <input type="password" class="form-control" :placeholder="[[ placeholder_password ]]"
        v-model="form.password"
         :error-messages="PassErrors"

          :class="{ 'is-invalid': $v.form.password.$error}"
        @input="$v.form.password.$touch()"
        @blur="$v.form.password.$touch()" >
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-key"></i></div>



      </div>
           <label @click="showmodal()"><a href="#forgotpass">
            {{this.placeholder_passforgot}}</a></label><br>

    </div>






    <center>
    <button class="btn btn-primary" @click="login()"><span>{{this.placeholder_login}}</span></button>
    <p>{{this.placeholder_account}}  <nuxt-link to="userregis">
      <a href="" >{{this.placeholder_subscribe}}</a>

    </nuxt-link></p></center>


<div class="row">


       <!-- <button class="btn btn-success" @click="loginline()"><span><i class="lab la-line"></i> Login with Line</span></button> -->





    </div>


    <div class="form-group">
                                    <div class="text-center textLiner theme-bg-2">
                                        <span class="textLiner-txt theme-bg-1 theme-text-2"></span>
                                    </div>
                                </div>


    <!-- <div class="form-group pt-3">
    <button type="submit" class="btn btn-lg btn-block btnFacebook btn-facebook" id="btnLogin"  @click="socialLogin('facebook')">

      <div>
        {{this.placeholder_login_to}} Facebook
        </div>
      </button>
     </div> -->
    <div class="form-group pt-3">
    <button type="submit" class="btn btn-lg btn-block btnGoogle" id="btnLogin"  @click="socialLogin('google')">{{this.placeholder_login_to}} Google </button> </div>








</div>




            <!-- <div class="row loginformweb">
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




              </div> -->


                <!-- ----------------------------------------Mobile-------------------------------------------------------- -->


              <!-- <div class="row loginformmobile">

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

              </div> -->



        <div id="forgotpass" class="overlay"
         v-if="Isshow">
            <div class="popup">
                <h6>ลืมรหัสผ่านใช่หรือไม่?</h6><br>
                <a class="close" href="#">&times;</a><br>
                <div class="content">
                    <div class="alert alert-danger" role="alert" v-if="emailalert == true">
                        กรุณากรอกอีเมล
                    </div>
                    <div class="alert alert-success" role="alert" v-if="alertforgot.messageforgot == 1">
                         ส่งไปที่อีเมลสำเร็จ
                    </div>
                      <div class="alert alert-danger" role="alert" v-if="alertforgot.messageforgot == 2">
                         ไม่มีอีเมลนี้
                    </div>
                    <input type="email" class="form-control" placeholder="example@gmail.com" required v-model="forms.email"><br>
                    <button type="submit" class="btn btn-info"  @click="forgot()">ส่งไปที่อีเมล</button>
                </div>
            </div>
        </div>









</section>
</div>

</template>



<script>
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import Vue from 'vue';
import Vuex from "vuex";
import Nav from "@/components/Nav";
import { FORGOTEMAIL,CLEARALRET } from "../../store/actions.type.js";



    export default {
      middleware: 'guest',
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
      placeholder_login:'เข้าสู่ระบบ',
      placeholder_password:'รหัสผ่าน',
      placeholder_name:'ชื่อผู้ใช้งาน',
      placeholder_alert:'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง !',
      placeholder_account:'คุณมีบัญชีแล้วใช่หรือไม่ ?',
      placeholder_subscribe:'',
      placeholder_passforgot:'ลืมรหัสผ่าน ?',
       placeholder_login_to:'เข้าสู่ระบบด้วย',
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

        isUrl () {
                return this.$store.state.user.url_id;
        },
        EmailErrors () {
                const errors = []
                if (!this.$v.form.email.$dirty) return errors
                !this.$v.form.email.required && errors.push('โปรดระบุ')
                !this.$v.form.email.email    && errors.push('โปรดระบุข้อมูลรูปแบบ')
                return errors
            },
        PassErrors(){

              const errors = []
                if (!this.$v.form.password.$dirty) return errors
                !this.$v.form.password.required && errors.push('โปรดระบุ')
                !this.$v.form.password.password    && errors.push('โปรดระบุข้อมูลรูปแบบ')
                return errors

        },
        alert () {

                return this.$store.state.alert;
        },
        alertforgot () {

                return this.$store.state.user;
        }

    },
      async created(){

        this.language = localStorage.getItem("language");
        if(this.language == 'en'){
         this.placeholder_login = 'Login';
         this.placeholder_password = 'Password';
         this.placeholder_name = 'Username';
        this.placeholder_alert = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง !';
        this.placeholder_subscribe = 'Subscribe';
        this.placeholder_account = 'Do you have a account?';
         this.placeholder_passforgot = 'Forgot password ?';
         this.placeholder_login_to = 'Login to ';
        }
        if(this.language == 'ch'){
         this.placeholder_login = '登入';
         this.placeholder_password = '当前密码';
         this.placeholder_name = '姓名';
         this.placeholder_alert = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง !';
         this.placeholder_subscribe = '订阅';
         this.placeholder_account = 'คุณมีบัญชีแล้วใช่หรือไม่ ?';
        this.placeholder_passforgot = '忘记密码 ?';
        this.placeholder_login_to = 'เข้าสู่ระบบด้วย';

        }
         if(this.language == 'th' || this.language == null){
         this.placeholder_login = 'เข้าสู่ระบบ';
         this.placeholder_password = 'รหััสผ่าน';
         this.placeholder_name = 'ชื่อผู้ใช้งาน';
         this.placeholder_alert = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง !';
         this.placeholder_subscribe = 'สมัครสมาชิก';
         this.placeholder_account = 'คุณมีบัญชีแล้วใช่หรือไม่ ?';
          this.placeholder_passforgot = 'ลืมรหัสผ่าน ?';
          this.placeholder_login_to = 'เข้าสู่ระบบด้วย';
        }

        },

    mounted() {


       // let clearalert = this.$store.dispatch(CLEARALRET);
    },
    methods: {
        socialLogin(service) {
this.form.url = window.location.hostname;



       //  window.location.href = `https://cmsecom.idtest.work/api/auth/login/${service}`;
           window.location.href = `https://back.halalthaimart.com/api/auth/login/${service}/con/${this.form.url}`;
             //    window.location.href = `https://backoffice.thaionzon.com/api/auth/login/${service}/con/${this.form.url}`;
        },
        async loginline(){
   this.$router.push('/1/form/register');
        },
        async login(){
        this.$v.$touch()
            this.form.url = window.location.origin

                if (this.$v.form.$pending || this.$v.form.$error) return;
            //    await this.$store.dispatch('auth/login', this.form);

        //        await this.$auth.loginWith("local", {
        //     data: this.form
        //   })

          try {
        await this.$auth.loginWith('local', {
          data: this.form
        }).then(data => {

       setTimeout(() => {
         let token = this.$auth.getToken('local')   //get token

      }, 1000);

    let a = this.$store.dispatch(FETCH_GET_PROFILE)
         // let a = this.$store.dispatch(FETCH_GET_PROFILE)

				})
				.catch(err => {
        this.alert.message = 1;
  //      let path = this.$route.path
  //      const names = 'form-login'
  //      const Shopid = this.isUrl.id;
  //      this.$router.push({ name: names})
				});
      } catch (e) {
//  this.$store.dispatch('alert/error', null, { root: true });



      }
        },

        async getprofile(){

            await setTimeout(() => {
        let a = this.$store.dispatch(FETCH_GET_PROFILE)
      }, 1000);

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
