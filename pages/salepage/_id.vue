

<template>
<div style="background: white;">
<div v-for="(item, index) in items" :key="item.id">
<b-container fluid>
  <b-img  :src="Checkimage(item.images)" fluid alt="Responsive image" style="margin-bottom:5px;width: 100%;"></b-img>
</b-container>
</div>

<div style="background: white;">

 <div class="container c-map">
 <div class="row">
            <div class="col-12">
                <div class="contactHeader ">
                    <h1>ติดต่อเรา</h1>
                </div>
            </div>
        </div>

         <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
                    <div class="form-group">
                        <label for="inputContactName" class="font-weight-bold">ชื่อ<span class="text-danger"> * </span></label>
                        <input type="text" class="form-control" name="inputContactName" id="inputContactName" :class="{ 'is-invalid': $v.form.tel.$error}" v-model="form.name"
                         :error-messages="NameErrors"
                                            required
                                            @input="$v.form.name.$touch()"
                                            @blur="$v.form.name.$touch()"
                                      
                        />
                    </div>
              <div class="form-group">
                        <label for="inputContactName" class="font-weight-bold">อีเมล<span class="text-danger"> * </span></label>
                        <input type="text" class="form-control" name="inputContactName" id="inputContactName" :class="{ 'is-invalid': $v.form.email.$error}" v-model="form.email"
                         :error-messages="EmailErrors"
                                            required
                                            @input="$v.form.email.$touch()"
                                            @blur="$v.form.email.$touch()"
                                      
                        />
                    </div>
                    <div class="form-group">
                        <label for="inputContactPhone" class="font-weight-bold">เบอร์โทรศัพท์<span class="text-danger"> * </span></label>
                   <input class="form-control" name="message" placeholder="เบอร์ติดต่อ" v-model="form.tel" :class="{ 'is-invalid': $v.form.tel.$error}" :error-messages="TelErrors"
                                            required
                                            @input="$v.form.tel.$touch()"
                                            @blur="$v.form.tel.$touch()"
                                        maxlength="10"
                                      >
                    </div>
                 
                    <div class="form-group buttonSendPanel">
                        <button type="submit" class="btn btn-style" @click="save()">
                            <i class="fas fa-envelope"></i>&nbsp;ส่งข้อความ</button>
                    </div>
              
            </div>
           
        </div>
        </div>

</div>
  
</div>



   
</template>




<script>
//import Pusher from 'pusher-js';
import { mapGetters } from "vuex";
import { FETCH_SALEPAGE,SAVE_SALEPAGE } from "@/store/actions.type.js";
import Contact from "@/components/Contact"
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";

    export default {
      components: {
        Contact
              },
        validations: {
        form: {
            email      : { required, email   },
            name: { required },
            tel: { required },
        }
    },
      data: () => ({
        form: {
            url: "",
            email: '',
          name: '',
          details: '',
          tel: '',
        },
        items:[]
      }),

          computed: {

            NameErrors() {
            const errors = [];
            if (!this.$v.form.name.$dirty) return errors;
            !this.$v.form.name.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },



                EmailErrors () {
            const errors = []
            if (!this.$v.form.email.$dirty) return errors
            !this.$v.form.email.required && errors.push('โปรดระบุอีเมล์')
            !this.$v.form.email.email    && errors.push('โปรดระบุข้อมูลรูปแบบอีเมล์')
            return errors
        },

            TelErrors() {
            const errors = [];
            if (!this.$v.form.tel.$dirty) return errors;
            !this.$v.form.tel.required && errors.push("โปรดระบุชื่อ");
            return errors;
            },



    },
             
            async mounted() {
      this.form.url = window.location.origin;
      this.form.salepage = this.$route.params.id;
      let salepage = await this.$store.dispatch(FETCH_SALEPAGE,this.form);

      console.log(salepage.data.content);

      this.items = salepage.data.content;



 
      
      },

             methods: {
         async save(){
           this.$v.$touch();
            if (this.$v.form.$pending || this.$v.form.$error) return;

  //let save = await this.$store.dispatch(SAVE_SALEPAGE,this.form);
            console.log(this.form);

              },

        

                Checkimage(image){
                let public_images = process.env.ImageURL+image;
                return public_images;

                  // return "http://demo.takraonline.com/Images/SalePage/Image/2Salepage-banner-1-TripleJay.jpg";
        },

  
    
      }
       
           

     
    };
</script>


