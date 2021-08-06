<template>
    <section id="Userprofile">
        <Nav />

        <div class="row profieweb">
            <div class="container profieweb">

                
                            <div class="profiletitle">
                                        <table id="customers">
                                                    <tr>
                                                        <th width="100"><img class="profile" src="https://www.lopburicancer.in.th/img/user.png"></th>
                                                         <th><h6>Supawadee Swns.</h6></th>
                                                        <th><button type="button" class="btn btn-warning">แก้ไข</button></th>
                                                        
                                                    </tr>
                                                   
                                    
                                        </table>
                            </div>


            </div>

        </div> <br>











        <Footer />

    </section>
    
</template>


<script>
  
  import Nav from "@/components/Nav";
  import Footer from "@/components/Footer";
    


    export default {
      components: {
          Nav,
          Footer
           
              },
             
        mounted() {},
       
           

     
    
    };
</script>