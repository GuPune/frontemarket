<template>
<section id="Productdetail" class="product-details">
<div class="container product-details productItemDetail" style="background-color: white;">


       <div class="row">
            <div class="col-sm-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
                                                    <li class="breadcrumb-item "  itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                                                    <a itemscope itemtype="https://schema.org/Thing" itemprop="item" href="/"
                                       alt="คลิกไปที่ หน้าแรก" title="คลิกไปที่ หน้าแรก" id="1">
                                        <span itemprop="name">หน้าแรก</span>
                                    </a>
                                    <meta itemprop="position" content="1">
                                                            </li>
                                                    <li class="breadcrumb-item "  itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                                                    <a itemscope itemtype="https://schema.org/Thing" itemprop="item" href="/category"
                                       alt="คลิกไปที่ สินค้าทั้งหมด" title="คลิกไปที่ สินค้าทั้งหมด" id="2">
                                        <span itemprop="name">สินค้าทั้งหมด</span>
                                    </a>
                                    <meta itemprop="position" content="2">
                                                            </li>
                                                    <li class="breadcrumb-item "  itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                                                    <a itemscope itemtype="https://schema.org/Thing" itemprop="item" href="/category/3382/gemstones"
                                       alt="คลิกไปที่ Gemstones" title="คลิกไปที่ Gemstones" id="3">
                                        <span itemprop="name">Gemstones</span>
                                    </a>
                                    <meta itemprop="position" content="3">
                                                            </li>
                                                    <li class="breadcrumb-item active" aria-current="page" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                                                    <a itemscope itemtype="https://schema.org/Thing" itemprop="item" href="/product/28463-28068/แหวนไพลิน-a4989"
                                       alt="คลิกไปที่ แหวนไพลิน A4989" title="คลิกไปที่ แหวนไพลิน A4989" id="4">
                                        <span itemprop="name">แหวนไพลิน A4989</span>
                                    </a>
                                    <meta itemprop="position" content="4">
                                                            </li>
                                            </ol>
                </nav>
            </div>
        </div>
<div class="row no-margin">
   <div class="left col-lg-5 col-md-6">
             <article class="gallery-wrap"> 
                    <div class="img-big-wrap">
                      <div> <a href="#"><center><img src="https://dy.lnwfile.com/0tii3i.jpg"></center></a></div>
                    </div> <!-- slider-product.// -->
                    <div class="img-small-wrap">
                      <div class="item-gallery"> <img src="https://dy.lnwfile.com/0tii3i.jpg"> </div>
                      <div class="item-gallery"> <img src="https://dy.lnwfile.com/0tii3i.jpg"> </div>
                      <div class="item-gallery"> <img src="https://dy.lnwfile.com/0tii3i.jpg"> </div>
                      <div class="item-gallery"> <img src="https://dy.lnwfile.com/0tii3i.jpg"> </div>
                    </div> <!-- slider-nav.// -->
                    </article> <!-- gallery-wrap .end// -->
   </div>
                

<div class="col-12 col-md-7">
            <div class="marginInner">
            <h1 class="productName-detail">แหวนไพลิน A4989</h1>
            </div>
            <div class="row">
                <div class="col-md-12">
                                            <div class="form-group">
                            <div class="marginInner">
                                       <div class="ratings">
                                                   <div class="rating-box-detail">
                                                   <div class="rating" style="width:%"></div>
                                                   </div>
						</div>
                            </div>
                        </div>
                                    </div>
            </div>
                                    <div class="marginInner mb-4 mb-md-4"><div class="dividerFix"></div></div>
                                    <div class="row ">
                <div class="col-12">
                    <div class="form-group">
                        <div class="marginInner">
                            <div class="productPrice">
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                            <input type="hidden" class="hiddenAttributeSelected" name="hiddenAttributeSelected[]" value="0" />
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group h5">
                        <div class="marginInner mb-4 mb-md-4">
                            <p class="productStock"> ฿ 48,6001 </p>
                            
                        </div>
                    </div>
                </div>
            </div>

              <div class="row">

             <div class="col-md-2 attrHeader form-group">จำนวน </div>


                <div class="col-md-3 col-sm-3">
                    <div class="group-product-number">
                           <b-input-group size="sm">
                                        <b-input-group-prepend>
                                        <b-btn variant="outline-info" v-on:click='Adddown()'>-</b-btn>
                                        </b-input-group-prepend>
                                        <b-form-input type="text" min="0" class="text-number-order productde-text-ce"  v-model="quantity"  maxlength=2></b-form-input>
                                        <b-input-group-append>
                                        <b-btn variant="outline-secondary"  v-on:click='Addup()'>+</b-btn>
                                        </b-input-group-append>
                                        </b-input-group>   
                    </div>
                </div>
            </div>

 

  
            <div class="marginInner d-md-none mb-4 mb-md-0">
                                    <div class="dividerFix">
                                  
                                    </div>
                            </div>
                        <div class="button-wrapper">
                                    <div class="my-col-12 col-md-7 col-lg-6 pl-0">

                        <button class="btn btn-style btnMainCart btnProductCart btnAddToCartpdetail" type="button">
                            <i class="fa fa-shopping-cart fa-1x">&nbsp;</i>
                            สั่งซื้อสินค้า                       
                        </button>
                        <input type="hidden" class="hiddenAttributeGroupID" value="" />
                        <input type="hidden" class="hiddenCheckAddToCart" value="0" />
                        <input type="hidden" id="hiddenCartImageDefault" value="Gemstones/แหวนไพลิน_A4989.png" />
                        <input type="hidden" id="hiddenCartImageDefaultFull" value="https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/Gemstones/แหวนไพลิน_A4989.png" />
                    </div>
                    
                    </div>

                    <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <div class="marginInner mb-4 mb-md-4">            
                                        <p class="m-0 d-none d-md-inline">Share</p>
                                        <div class="divSocilaGroupNew d-none d-md-inline-block">
                                            <div class="btn-group social-widget">
                                                                                                    <a class="faco-top fa-layers fa-fw facebookSocialPD" target="_blank" href="https://www.facebook.com/sharer.php?u=https://www.pattanagems.com/product/28463-28068/">
                                                        <i class="fas fa-square colorFacebookBGPD"></i>
                                                        <i class="fa-inverse fab fa-facebook-f colorFacebookPD" data-fa-transform="shrink-7"></i>
                                                    </a>
                                                                                                                                                                                                        <a class="faco-top fa-layers fa-fw twitterSocialPD" target="_blank" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.pattanagems.com%2Fproduct%2F28463-28068%2F%25E0%25B9%2581%25E0%25B8%25AB%25E0%25B8%25A7%25E0%25B8%2599%25E0%25B9%2584%25E0%25B8%259E%25E0%25B8%25A5%25E0%25B8%25B4%25E0%25B8%2599-a4989&text=%E0%B9%81%E0%B8%AB%E0%B8%A7%E0%B8%99%E0%B9%84%E0%B8%9E%E0%B8%A5%E0%B8%B4%E0%B8%99+A4989">
                                                        <i class="fas fa-square colorTwitterBGPD"></i>
                                                        <i class="fa-inverse fab fa-twitter colorTwitterPD" data-fa-transform="shrink-7"></i>
                                                    </a>
                                                                                                                                                    <a class="faco-top fa-layers fa-fw pinterestSocialPD" target="_blank" href="https://pinterest.com/pin/create/button/?url=https://www.pattanagems.com/product/28463-28068/&media=https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/Gemstones/แหวนไพลิน_A4989.png&description=แหวนไพลิน A4989">
                                                        <i class="fas fa-square colorPinterestBGPD"></i>
                                                        <i class="fa-inverse fab fa-pinterest-p colorPinterestPD" data-fa-transform="shrink-7"></i>
                                                    </a>
                                                                                                                                                     <a class="faco-top fa-layers fa-fw LineSocialPD" target="_blank" href="javascript:void(0);" onclick="window.open('https://social-plugins.line.me/lineit/share?url=https://www.pattanagems.com/product/28463-28068/แหวนไพลิน-a4989?v=1632896765','popup','width=600,height=600,scrollbars=no,resizable=no,status=no,toolbar=no'); return false;">
                                                         <i class="fas fa-square colorLineBGPD"></i>
                                                         <i class="fa-inverse fab fa-line colorLinePD" data-fa-transform="grow-2.2" data-fa-mask="fas fa-circle"></i>
                                                     </a>
                                                                                            </div> 
                                        </div> 
                                  
                                     
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-none d-md-none">
                        <button class="btn btn-style btn-block addWishlist d-md-none" type="button">
                            <i class="fa fa-heart fa-1x">&nbsp;</i> เพิ่มรายการโปรด                        </button>
                    </div>
                    <div class="col-6 d-none d-md-none">
                        <button class="btn btn-style btn-block  d-md-none" type="button">
                            <i class="fa fa-exchange fa-1x">&nbsp;</i> เปรียบเทียบ                        </button>
                    </div>
                </div>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <div class="marginInner mb-4 mb-md-4">
                     
                                                                                                                                                                                                                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Brand Name -->
                        <!-- Brand Name -->
                            <div class="row d-md-none">
                    <div class="col-md-12">
                        <div class="form-group">
                            <div class="marginInner mb-4 mb-md-4">
                                <div class="labelShare"><p>Share</p></div>
                                <div class="divSocilaGroup">
                                    <div class="btn-group social-widget">
                                                                                    <a class="faco-top fa-layers fa-fw facebookSocialPD" target="_blank" href="https://www.facebook.com/sharer.php?u=https://www.pattanagems.com/product/28463-28068/">
                                                <i class="fas fa-square colorFacebookBGPD"></i>
                                                <i class="fa-inverse fab fa-facebook-f colorFacebookPD" data-fa-transform="shrink-7"></i>
                                            </a>
                                                                                                                                                                        <a class="faco-top fa-layers fa-fw twitterSocialPD" target="_blank" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.pattanagems.com%2Fproduct%2F28463-28068%2F%25E0%25B9%2581%25E0%25B8%25AB%25E0%25B8%25A7%25E0%25B8%2599%25E0%25B9%2584%25E0%25B8%259E%25E0%25B8%25A5%25E0%25B8%25B4%25E0%25B8%2599-a4989&text=%E0%B9%81%E0%B8%AB%E0%B8%A7%E0%B8%99%E0%B9%84%E0%B8%9E%E0%B8%A5%E0%B8%B4%E0%B8%99+A4989">
                                                <i class="fas fa-square colorTwitterBGPD"></i>
                                                <i class="fa-inverse fab fa-twitter colorTwitterPD" data-fa-transform="shrink-7"></i>
                                            </a>
                                                                                                                            <a class="faco-top fa-layers fa-fw pinterestSocialPD" target="_blank" href="https://pinterest.com/pin/create/button/?url=https://www.pattanagems.com/product/28463-28068/&media=https://image.makewebeasy.net/makeweb/0/pYN8s1ZiT/Gemstones/แหวนไพลิน_A4989.png&description=แหวนไพลิน A4989">
                                                <i class="fas fa-square colorPinterestBGPD"></i>
                                                <i class="fa-inverse fab fa-pinterest-p colorPinterestPD" data-fa-transform="shrink-7"></i>
                                            </a>
                                                                                                                            <a class="faco-top fa-layers fa-fw LineSocialPD" target="_blank" href="javascript:void(0);" onclick="window.open('https://social-plugins.line.me/lineit/share?url=https://www.pattanagems.com/product/28463-28068/แหวนไพลิน-a4989?v=1632896765','popup','width=600,height=600,scrollbars=no,resizable=no,status=no,toolbar=no'); return false;">
                                                <i class="fas fa-square colorLineBGPD"></i>
                                                <i class="fa-inverse fab fa-line colorLinePD" data-fa-transform="grow-2.2" data-fa-mask="fas fa-circle"></i>
                                            </a>
                                                                            </div> <!-- Socila btn -->
                                </div> <!-- divSocilaGroup-->
                            </div> <!-- marginInner -->
                        </div>
                    </div>
                </div> <!-- row --> 
                    </div>
        <!-- End Product information -->
    </div>

  </div>   
 <div class="row">

 
            
         

              

                        
</div>
 </div>
</section>

    
</template>


<script>
  import { mapGetters,mapState } from "vuex";
  import { FETCH_BY_PRODUCT_SHOP_ONE_ITEM } from "../../../store/actions.type.js";
  import Nav from "@/components/Nav";
  import Footer from "@/components/Footer";
    


    export default {
      data() {
        return {
            form:{

            },
  quantity:0
    };
  },
      components: {
          Nav,
          Footer
           
              },
             
       async mounted() {
this.form.product_id = this.$route.params.id;
this.form.url = window.location.origin

let productshop_item= this.$store.dispatch(FETCH_BY_PRODUCT_SHOP_ONE_ITEM,this.form);
    
        
        },


          methods: {
        async Addup(){
            //// logic // จำนวนสินค้าที่มี
          //  let Add_up = await this.$store.dispatch(ADD_UP,item);
            this.quantity += 1;
            let keytext = 'เพิ่มสินค้าเรียร้อย!'
            await this.success(keytext);

        },
        async Adddown(){
          this.quantity -= 1;
            let keytext = 'ลดสินค้าเรียบร้อย!'
                await this.success(keytext);
        },
   
        error() {
                this.$swal({
                    icon: 'error',
                    title: 'สินค้า',
                    text: 'สินค้าไม่สามารถลดได้แล้ว!',
                    showConfirmButton: true,
                    reverseButtons: true
                });
        },
        success(keytext) {
                  
                 this.$swal({
                    icon: 'success',
                    title: 'สินค้า',
                    text: keytext,
                    showConfirmButton: true,
                    reverseButtons: true
                });
              
        },
        
       }
       
           

     
    
    };
</script>