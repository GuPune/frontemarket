

<template>
    <div>
           
         <Nav />
            <Ads />
                <Categories />

                    <Related />

                    <Footer />

        

 

      




    </div>

  


     
</template>




<script>
   
    import Nav from "@/components/Nav";
    import Ads from "@/components/Ads";
    import Categories from '@/components/Categories.vue';
    import Related from "@/components/Related";
    import Footer from "@/components/Footer";


    export default {
      components: {
             Nav, 
             Ads,
            Categories,
            Related,
            Footer
      
              },
             
        mounted() {},
       
           

     
    };
</script>


