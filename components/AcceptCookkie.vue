<template>
<div>
     
            <div class="acceptcookkie" hidden>
                  <input class="checkbox-cb" id="checkbox-cb" type="checkbox" />
                        <div class="cookie-bar">
                          <strong>
                          <p class="cookkie">เว็บไซต์นี้มีการใช้งานของคุกกี้ <a href="#">เรียนรู้เพิ่มเติม</a></p></strong>
                          <label for="checkbox-cb" class="accept-cb" >ยอมรับ</label>
                          <label for="checkbox-cb" class="close-cb" >ไม่ยอมรับ</label>
                        </div>
            </div>


              <div class="accept">
                    <input class="checkbox" id="checkbox" type="checkbox" >
                          <div class="cookiebar ">
                          
                              <div class="row bar">
                                  <div class="col-sm-10">
                                    <strong>
                                    <p class="cookkies" style="color:black;">We use cookies<br>This website uses cookies to enhance your browsing experience 
                                    on our website, to show you personalized content and targeted ads, 
                                    to analyze our website traffic, and to understand where our visitors are coming from. 
                                    You can manage your preferences by clicking "Change Preferences".  <a style="color: blue;">
                                    "Privacy Policy"</a></p></strong>
                                  </div>
                                    <center>  
                                    <div class="col-sm-2">
                                              <label for="checkbox" class="accept-cookie">Accept All</label>
                                              
                                              <p  class="close-cookie" style="color:e67825;" ><u>Change Preferences</u></p><br>
                                    </div>
                                    </center>
                              </div>
                            
                            
                          </div>
              </div>
      



      
       
</div>


</template>


<style>




/*---------------------------------------------------------*/



.cookiebar {
  position: fixed;
  width: 90%;
  bottom: 10px;
  right:5%;
  left: 5%;
  /* height: 270px; */
  /* text-align: center; */
  line-height: 30px;
  background: linear-gradient(#ffffff, #ffffff);
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 100;
  transition: 0.8s;
  -webkit-animation: slideIn 0.8s;
          animation: slideIn 0.8s;
  -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;
  font-size: 15px;
  z-index: 100;
  border: 5px solid #e2e2e2;
  border-radius: 10px;
}


.cookiebar .message {
  white-space: nowrap;
  text-shadow: 0 1px 0 #cc0000;
}


@-webkit-keyframes slideIn {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
.close-cookie {
  border: none;
  color: #e67825;
  /* background: #970000; */
  position: absolute;
  display: inline-block;
  /* right: 10px; */
  top:18px;
  text-align: center;
  cursor: pointer;
  /* border-radius: 3px;
  box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2); */
  line-height: 30px;
  height: auto;
  width: 150px;
  font-size: 16px;
  font-weight: bold;
}


/* .close-cookie:hover {
  background: #eb2525;
} */


.checkbox {
  display: none;
}
.checkbox:checked + .cookiebar {
  transform: translateY(120%);
}



.accept-cookie {
  border: none;
  color: white;
  background: #e67825;
  position: absolute;
  display: inline-block;
  /* right: 10px; */
  bottom: 5px;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2);
  line-height: 30px;
  height: auto;
  width: 150px;
  font-size: 16px;
  font-weight: bold;
}
.accept-cookie:hover {
  background: #ff9544;
}

.checkbox {
  display: none;
}
.checkbox:checked + .cookiebar {
  transform: translateY(120%);
}



.bar{
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;

}



</style>

<script>
import { required, email, numeric, maxLength } from "vuelidate/lib/validators";
import { mapGetters,mapState } from "vuex";



    export default {
      components: {
			
    },



    data: () => ({


        showModal: false,
        showModalPrivacypolicy:false,
        showModalSettingCookie:false,
   
          form: {
            name:"Analytics",
            accepted:false
        },
           
    
      }),
      
      computed: {
       
             
        
      },
   
       async mounted() {
       
       },

        methods: {
          redirectTo(){
            window.location.reload();
          },
          async accept(){
           
         


      
    
        
 
          },



           Privacypolicy(){
        alert('Privacypolicy');
      },
    TermsofService(){
   alert('TermsofService');
    },
    SettingCookie(){
   alert('SettingCookie');
    },
    Checkpolicy(){


 this.checkpol = this.checkpol ? false : true;


 if(this.checkpol == true){
 this.isHidden = false;
 }else {
 this.isHidden = true;

 }


    }

















        },



    }
</script>