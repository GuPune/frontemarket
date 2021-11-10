

<template>
<div>

<b-container fluid>
  <b-img  :src="Checkimage()" fluid alt="Responsive image" style="magin:5px"></b-img>
   <b-img src="http://127.0.0.1:8000/storage/uploads/Ab4_1635495339.jpg" fluid alt="Responsive image" style="width:100vw;"></b-img>

</b-container>


  
</div>
   
</template>




<script>
   


    export default {
      components: {
  

          
         
      
              },
             
        mounted() {},

             methods: {

        
        Checkimage(image){
           
                return "http://demo.takraonline.com/Images/SalePage/Image/2Salepage-banner-1-TripleJay.jpg";
        },

  
    
      }
       
           

     
    };
</script>


