<template>
<section class="Shopregis">
<div class="container forms" style="margin-bottom: 40px;">
<Loader v-if="isLoading"/>

      <h5 style="color: #171c24;">{{this.placeholder_menu}}</h5>


    <div class="row">
            <div class="input-group input-group-icon">
        <input type="text"   id="tel" class="form-control"  :placeholder="[[ placeholder_first_name ]]" v-model="form.first_name"
         :error-messages="firstNameErrors" required
         :class="{ 'is-invalid': $v.form.first_name.$error}"
         @input="$v.form.first_name.$touch()"
          @blur="$v.form.first_name.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>


    <div class="input-group input-group-icon">
        <input type="text" class="form-control" :placeholder="[[ placeholder_last_name ]]"  v-model="form.last_name"
                                                                         :error-messages="lastNameErrors" required
                                                                         :class="{ 'is-invalid': $v.form.last_name.$error}"
                                                                         @input="$v.form.last_name.$touch()"
                                                                         @blur="$v.form.last_name.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-user"></i></div>
      </div>



    </div>





    <div class="row">

      <div class="input-group input-group-icon">
        <input type="text" class="form-control" :placeholder="[[ placeholder_store_name ]]" v-model="form.shop_name"
                                                                         :error-messages="ShopnameErrors" required
                                                                         :class="{ 'is-invalid': $v.form.shop_name.$error}"
                                                                         @input="$v.form.shop_name.$touch()"
                                                                         @blur="$v.form.shop_name.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-shopping-bag"></i></div>
      </div>



       <div class="input-group input-group-icon">
        <input type="text" class="form-control" :placeholder="[[ placeholder_tel ]]" v-model="form.tel"
                                                                         :error-messages="telErrors" required
                                                                         :class="{ 'is-invalid': $v.form.tel.$error}"
                                                                         @input="$v.form.tel.$touch()"
                                                                         @blur="$v.form.tel.$touch()"
                                                                         v-on:keypress="isNumber($event)"   :maxlength="max"
                                                                         />
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-phone"></i></div>
      </div>


         <div class="input-group input-group-icon">
 <b-form-textarea  v-model="form.address" style="padding-left: 70px;"
                                                                 rows="3" max-rows="6"
                                                                       :error-messages="AddressErrors" required
                                                                         :class="{ 'is-invalid': $v.form.address.$error}"
                                                                         @input="$v.form.address.$touch()"
                                                                         @blur="$v.form.address.$touch()"
                                                                           :placeholder="[[ placeholder_address ]]"
                                                                 ></b-form-textarea>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-address-card"></i></div>
      </div>

      <div class="input-group input-group-icon">


      </div>

    </div>





    <div class="row">

    <div class="input-group input-group-icon">
        <input type="text" class="form-control"  :placeholder="[[ placeholder_email ]]"  v-model="form.email"
                                                                         :error-messages="EmailErrors" required
                                                                         :class="{ 'is-invalid': $v.form.email.$error}"
                                                                         @input="$v.form.email.$touch()"
                                                                         @blur="$v.form.email.$touch()"
                                                                         />
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-envelope"></i></div>
      </div>


      <div class="input-group input-group-icon">
        <input type="password" class="form-control" :placeholder="[[ placeholder_password ]]"  v-model="form.password"
                                                                         :error-messages="PassErrors" required
                                                                         :class="{ 'is-invalid': $v.form.password.$error}"
                                                                         @input="$v.form.password.$touch()"
                                                                         @blur="$v.form.password.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-key"></i></div>
      </div>

        <div class="error" v-if="!$v.form.password.minLength" style="color:red;text-align:center">รหัสผ่านต้องมีตัวอักษรอย่างน้อย {{ $v.form.password.$params.minLength.min }} ตัว</div>

    </div>




    <div class="row">


    <div class="input-group input-group-icon">
               <select class="form-control" name="x" id="x" @change="ChooseType($event)">
                                <option value="">- {{this.placeholder_choose}} - </option>
                                  <option :value="typeshops.id"  v-for="(typeshops, index) in typeshop" :key="typeshops.id" >{{typeshops.type_name}}</option>
                                                            </select>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-plus"></i></div>
      </div>
    </div>

    <div class="row">
   <div class="input-group input-group-icon">
        <input type="text" class="form-control" :placeholder="[[ placeholder_store_name ]]" v-model="form.shop_name"
                                                                         :error-messages="ShopnameErrors" required
                                                                         :class="{ 'is-invalid': $v.form.shop_name.$error}"
                                                                         @input="$v.form.shop_name.$touch()"
                                                                         @blur="$v.form.shop_name.$touch()"/>
        <div class="input-icon"><i style="color: #005dc0;" class="fa fa-shopping-bag"></i></div>
      </div>
       </div>
  <div class="row">
   <div class="input-group input-group-icon">
            <b-form-file v-model="file" ref="file-input" class="mb-2"
            @change="onFileChange"
            ></b-form-file>
      </div>
       </div>

    <div class="row">
    <div class="input-group input-group-icon">
      <b-form-checkbox  id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">ข้าพเจ้าเข้าใจและตกลงตาม</b-form-checkbox>
       <label for="commerce" style="color: red;"      v-on:click="Checkpolicy()"
                                  >เงื่อนไขการให้บริการ </label>
และ
      <label for="commerce" style="color: red;"  v-on:click="CheckService()"
                                  >นโยบายความเป็นส่วนตัว </label>

      </div>
    </div>





<!--
     <h6 style="color: #171c24;">ช่องทางการขายเพิ่มเติม</h6>
        <input type="checkbox" id="vehicle2" name="vehicle2"  v-model="form.status" v-on:click="checkdomain()">
        <label for="vehicle2">ซื้อ Domain</label><br>
        -->
    <center>




    <!-- <b-row>
    <b-col cols="12" md="12" sm="12">
      <b-form-checkbox  id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
     ข้าพเจ้าเข้าใจและตกลงตาม
      <label for="commerce" style="color: red;"      v-on:click="Checkpolicy()"
                                  >เงื่อนไขการให้บริการ </label>
และ
      <label for="commerce" style="color: red;"  v-on:click="CheckService()"
                                  >นโยบายความเป็นส่วนตัว </label>


    </b-form-checkbox></b-col>




  </b-row> -->
 <b-row>
   <b-col cols="12" md="12">
   <h6 v-if="status == 'not_accepted'"  style="color: red; text-align:center;">กรุณาอ่านและยอมรับข้อตกลงในการใช้งาน</h6>
   </b-col>

</b-row>

    <button class="btn btn-primary" @click="registershop()"><span>สร้างร้านค้า</span></button>
    </center>
    <div>
    </div>
</div>
</section>

</template>




<script>

import Nav from "@/components/Nav";
import { required, email, numeric,maxLength,minLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import { REGISSHOP,GET_TYPE_SHOP,SYSTEM_PDPA } from "@/store/actions.type.js";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import Loader from '@/components/Loader'

import { API_URL } from "../../environment/environment.js";



    export default {
      components: {
          Nav,Loading
              },
       validations: {
        form: {
            email: { required, email },
            password: { required,minLength: minLength(8) },
            first_name: { required },
            last_name: { required },
            shop_name: { required },
            tel: { required },
            address: { required },

        }
    },

     data: () => ({
        file:null,
        url: null,
        placeholder_menu: "",
        placeholder_first_name: "",
        placeholder_last_name:"",
        placeholder_store_name:"",
        placeholder_tel:"",
        placeholder_address:"",
        placeholder_email:"",
        placeholder_password:"",
        placeholder_choose:"",
        status: "",
        isLoading: false,
        checkpol:false,
        max:10,
        typeshop:"",
        type_id:"",
        form: {
            email: "",
            password: "",
            first_name:"",
            last_name:"",
            shop_name:"",
            tel:"",
            address:"",
            type_id:"",
            status: false,
        },
      }),
     computed: {
        firstNameErrors () {
            const errors = []
            if (!this.$v.form.first_name.$dirty) return errors
            !this.$v.form.first_name.required && errors.push('โปรดระบุชื่อ')
            return errors
        },
        lastNameErrors () {
            const errors = []
            if (!this.$v.form.last_name.$dirty) return errors
            !this.$v.form.last_name.required && errors.push('โปรดระบุนามสกุล')
            return errors
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
         telErrors() {
            const errors = [];
            if (!this.$v.form.tel.$dirty) return errors;
            !this.$v.form.tel.required  && errors.push("โปรดระบุเบอร์โทร");
            !this.$v.form.tel.numeric   && errors.push('โปรดระบุข้อมูลเป็นตัวเลข')
            !this.$v.form.tel.maxLength && errors.push('โปรดระบุตัวเลขไม่เกิน 10 หลัก')
            return errors;
        },
         ShopnameErrors () {
                const errors = []
                if (!this.$v.form.shop_name.$dirty) return errors
                !this.$v.form.shop_name.required && errors.push('โปรดระบุ')
                !this.$v.form.shop_name.shop_name    && errors.push('โปรดระบุข้อมูลรูปแบบ')
                return errors
            },
        AddressErrors(){
                const errors = []
                if (!this.$v.form.address.$dirty) return errors
                !this.$v.form.address.required && errors.push('โปรดระบุ')
                !this.$v.form.address.address    && errors.push('โปรดระบุข้อมูลรูปแบบ')
                return errors

        }
    },

    async created() {

        this.language = localStorage.getItem("language");
        console.log('language shop',this.language);
        if(this.language == 'en'){
         this.placeholder_first_name = 'First Name';
         this.placeholder_last_name = 'Last Name';
         this.placeholder_store_name = 'Store Name';
         this.placeholder_tel = 'Contact Number';
         this.placeholder_address = 'Address';
         this.placeholder_email = 'Email';
         this.placeholder_password = 'Password';
         this.placeholder_choose = 'Choose';
         this.placeholder_menu = 'Subscribe to a store';


        }
        if(this.language == 'ch'){
          this.placeholder_first_name = '姓名';
          this.placeholder_last_name = '姓';
          this.placeholder_store_name = '店铺名称';
          this.placeholder_tel = '联系电话';
          this.placeholder_address = '地址';
          this.placeholder_email = '电子邮件';
          this.placeholder_password = '密码';
          this.placeholder_choose = '选择';
           this.placeholder_menu = '商店订阅';


        }
         if(this.language == 'th' || this.language == null){
          this.placeholder_first_name = 'ชื่อ';
          this.placeholder_last_name = 'นามสกุล';
          this.placeholder_store_name = 'ชื่อร้านค้า';
          this.placeholder_tel = 'เบอร์ติดต่อ';
          this.placeholder_address = 'ที่อยู่';
          this.placeholder_email = 'อีเมล';
          this.placeholder_password = 'รหัสผ่าน';
          this.placeholder_choose = 'เลือก';
           this.placeholder_menu = 'สมัครสมาชิกร้านค้า';

        }



    },


       async mounted() {
          this.form.url = window.location.origin;
     let typeshop = await this.$store.dispatch(GET_TYPE_SHOP);


     let pdpa = await this.$store.dispatch(SYSTEM_PDPA,this.form);
     this.policies = pdpa.policies
      this.protectdata = pdpa.protectdata

this.typeshop = typeshop;
        },

        methods: {


              onFileChange(event) {

      var file = event.target.files[0];
     this.url = URL.createObjectURL(file);
    // Ensure it's an image
    if(file.type.match(/image.*/)) {


        // Load the image
        var reader = new FileReader();
        reader.onload = (readerEvent) =>{
            var image = new Image();
          image.onload = (imageEvent) => {
         var canvas = document.createElement('canvas'),
                    max_size = 544,// TODO : pull max size from a site config
                    width = image.width,
                    height = image.height;
                if (width > height) {
                    if (width > max_size) {
                        height *= max_size / width;
                        width = max_size;
                    }
                } else {
                    if (height > max_size) {
                        width *= max_size / height;
                        height = max_size;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                var dataUrl = canvas.toDataURL('image/jpeg');
                let resizedImage = this.dataURLToBlob(dataUrl);


                      axios.post(API_URL+'/upload', {
        image: dataUrl
      }).then(res => {
      this.file = res.data
      }).catch(function(){

              this.$swal({
                type: "error",
                title: "Upload รูปภาพไม่ผ่านติดต่อเจ้าหน้าที่",
                showConfirmButton: true,
                reverseButtons: true
            });

        });



            };
            image.src = readerEvent.target.result;


        }
        reader.readAsDataURL(file);

    }




    },
        dataURLToBlob(dataURI) {

  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], {type: mimeString});
  return blob;

},

        Checkpolicy(){

 window.open(this.policies, "_blank");
        },
        CheckService(){
 window.open(this.protectdata, "_blank");
        },


        async isNumber(event, message) {

                if (!/\d/.test(event.key) &&
                    (event.key !== "." || /\./.test(message))
                    )
                return event.preventDefault();


        },

        async english(event) {

             let keyCode = event.keyCode;

      if (keyCode < 97  || keyCode > 122) {
       event.preventDefault();
      }



        },
        async ChooseType(event){

               this.form.type_id = event.target.value;



        },
        async registershop(){



             this.$v.$touch()
            if (this.$v.form.$pending || this.$v.form.$error) return;


            if(this.form.type_id == ''){

                 this.errortype()
                return false;
            }
            if((this.status == 'not_accepted') || (this.status == '')){
              this.status = 'not_accepted';
            return false
            }
             await this.loader()
              await this.send()

        },
            loader() {
                this.isLoading = true;

            },
            send() {
                this.$store.dispatch(REGISSHOP,this.form).then((response) => response.code_return == "200" ? this.success() : this.error(response)).catch((error) => this.error(error.response))
            },
           async success() {
                     this.isLoading = false;
               await setTimeout(() =>
                    this.$swal.fire({
                        type: "success",
                        title: "ส่งข้อมูลเรียบร้อยแล้ว สามารถติดตามรายละเอียดได้ทางอีเมล",
                        showConfirmButton: false,
                        timer: 3000
                    }),
                    1000

                );
               await this.clear();
               await setTimeout(() => this.gotoback(), 4000);




            },
            error(response) {
                console.log(response.data.errors.ShopName);
                this.isLoading = false;
                this.$swal({
                    icon: 'error',
                    title: response.data.errors.Shop,
                    text: response.data.errors.ShopName,
                    showConfirmButton: true,
                    reverseButtons: true
                });
            },
            errortype() {
                this.$swal({
                    icon: 'error',
                    title: 'Type Shop',
                    text: 'กรุณาเลือกประเภทสินค้า!',
                    showConfirmButton: true,
                    reverseButtons: true
                });
            },
                  clear () {
            this.$v.form.$reset()
            this.form.email = ''
            this.form.password  = ''
            this.form.first_name  = ''
            this.form.last_name  = ''
            this.form.shop_name   = ''
            this.form.tel  = ''
            this.form.address  = ''
            this.form.status = false
        },
            async checkdomain(){
                this.form.status = await this.form.status ? false : true;
            },

            async gotoback(){


            window.location.href = process.env.backend;
            }
        }

    };
</script>
