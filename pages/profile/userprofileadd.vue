<template>
    <section id="Userprofile">
        <Nav />


        <div class="container" style="padding-bottom: 40px;">
            <div class="main-body">
            

                <!-- /Breadcrumb -->
            
                <div class="row gutters-sm">
                    <div class="col-md-12 col-lg-12 col-xl-4 mb-3">
                    <ProfileImage :profile="profile"/>
                    <ProfileAddress />
                    </div>
                    <div class="col-md-12 col-lg-12 col-xl-8">
              
<Address/>
                
                         <div class="card">
                 
                     
                           
                         </div>

                     
                       
                



                    </div>
                </div>

                </div>
    </div>


    </section>
    
</template>


<script>
  
import Nav from "@/components/Nav";
import ProfileImage from "@/components/ProfileImage";
import ProfileAddress from "@/components/ProfileAddress";
import ProfileContent from "@/components/ProfileContent";
import ProfileALL from "@/components/ProfileALL";
import Address from "@/components/Address";
import { mapGetters } from "vuex";
import { FETCH_GET_PROFILE,FETCH_ADDRESS } from "@/store/actions.type.js";
    


    export default {
    middleware: 'authenticated',
      components: {
          Nav,
          ProfileAddress,
          ProfileImage,
          ProfileContent,
          ProfileALL,
          Address
           
              },

        data: () => ({
        form: {
            id: "",
        },
      }),

        computed: {
                ...mapGetters(["profile"]),
   
        },
             
       async mounted() {
           let a = await this.$store.dispatch(FETCH_GET_PROFILE);
           this.form.id = a.id;
           let address = await this.$store.dispatch(FETCH_ADDRESS,this.form);
           
        },
       
           

     
    
    };
</script>