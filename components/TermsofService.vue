<template>
 <transition name="modal">
        <div class="modal-mask open-modal-term">
          <div class="modal-wrapper">
            <div class="modal-content col-sm-6">
              <div class="modal-header header1">
                <h3>ข้อตกลงและเงื่อนไขการใช้งานเว็บไซต์</h3>
                </div>
                <!-- <slot name="header">
                  <h3>ข้อตกลงและเงื่อนไขการใช้งานเว็บไซต์</h3>
                </slot> -->
              

              <div class="modal-body" @scroll="handleScroll">
              
                <slot name="body">
                  <p>การเข้าเว็บไซต์นี้ ตลอดจนการเปิดหน้าเว็บต่าง ๆ ที่อยู่ในเว็บไซต์นี้ ผู้ใช้งานเว็บไซต์ (“ผู้ใช้งาน”) ตกลงและยินยอมที่จะปฏิบัติตามนโยบายของบริษัท ออนไลน์ แอสเซ็ท จำกัด (“ออนไลน์ แอสเซ็ท”) กฎหมายที่ใช้บังคับ และข้อตกลงและเงื่อนไขการใช้งานเว็บไซต์ที่กำหนดไว้ในข้อตกลงนี้ทั้งที่กำหนดไว้เป็นการทั่วไปและที่ได้กำหนดไว้โดยเฉพาะเจาะจงในส่วนใดส่วนหนึ่งของเว็บไซต์นี้ทั้งหมด (“ข้อตกลงและเงื่อนไขการใช้”) โดยผู้ใช้งานรับทราบและตกลงว่าข้อตกลงและเงื่อนไขการใช้ที่กำหนดไว้นั้นอาจมีการเปลี่ยนแปลงได้โดยไม่ต้องมีการบอกกล่าวล่วงหน้า

อย่างไรก็ดี การเปลี่ยนแปลงใด ๆ ที่เกี่ยวกับข้อตกลงและเงื่อนไขการใช้จะมีการเผยแพร่ไว้ในเว็บไซต์นี้ และเมื่อผู้ใช้งานได้เข้าใช้งานเว็บไซต์นี้ภายหลังการเปลี่ยนแปลงดังกล่าวแล้ว ย่อมถือว่าผู้ใช้งานตกลงยอมรับข้อตกลงและเงื่อนไขการใช้ทั้งหมดตามที่ได้เปลี่ยนแปลงแล้ว ดังนั้น ผู้ใช้งานจึงควรติดตามข้อตกลงและเงื่อนไขการใช้งานเว็บไซต์ที่กำหนดไว้นี้อยู่เสมอ

ทั้งนี้ หากท่านไม่เห็นด้วยหรือประสงค์ที่จะปฏิเสธความมีผลผูกพันตามข้อตกลงและเงื่อนไขการใช้ใด ๆ ขอความกรุณาท่านยุติการเข้าชมและใช้งานเว็บไซต์นี้</p>

<p>1. การใช้เว็บไซต์และทรัพย์สินทางปัญญา</p>
<p>1.1	
บรรดาข้อมูลที่ปรากฏในเว็บไซต์นี้ซึ่งรวมถึงแต่ไม่จำกัดเฉพาะ ข้อความ รูปภาพ ตารางข้อมูล กราฟ ราคาหรือมูลค่าหลักทรัพย์ (ถ้ามี) เครื่องหมายการค้า กราฟิกต่าง ๆ เสียง การออกแบบหน้าจอแอปพลิเคชัน การออกแบบส่วนต่อประสานกับผู้ใช้ (Interface) ข้อมูลต่าง ๆ ไม่ว่าจะอยู่ในรูปแบบใด โปรแกรมซอฟท์แวร์ใด ๆ ที่มีอยู่ในเว็บไซต์นี้ รวมถึงข้อมูลทั้งหลายที่ผู้ใช้งานได้ดาวน์โหลดจากเว็บไซต์นี้ (ซึ่งต่อไปนี้จะรวมเรียกว่า “เนื้อหา”) ถือเป็นสิทธิของออนไลน์ แอสเซ็ท หรือผู้ให้อนุญาตแก่ออนไลน์ แอสเซ็ท ซึ่งเนื้อหาเหล่านั้นได้รับความคุ้มครองด้านทรัพย์สินทางปัญญา และ/หรือสิทธิในความเป็นเจ้าของอื่น ๆ ตามกฎหมายของประเทศไทยและ/หรือกฎหมายของประเทศอื่นไม่ว่าในรูปแบบใด ๆ และไม่ว่าจะได้รับการจดทะเบียนไว้แล้วหรือไม่ก็ตาม

ทั้งนี้ การนำชื่อทางการค้า เครื่องหมายการค้า เครื่องหมายบริการ และเครื่องหมายอื่น ๆ ของออนไลน์ แอสเซ็ท รวมถึงทรัพย์สินทางปัญญาใด ๆ ที่ปรากฏในเว็บไซต์นี้ไปใช้ ไม่ว่าจะด้วยวัตถุประสงค์ใด ๆ ผู้ใช้งานจะต้องได้รับความยินยอมล่วงหน้าเป็นลายลักษณ์อักษรจากออนไลน์ แอสเซ็ท ก่อนดำเนินการ</p>

<p>1.2	
บรรดาชื่อทางการค้า ชื่อสินค้า เครื่องหมายการค้า เครื่องหมายบริการ และเครื่องหมายอื่น ๆ รวมถึงทรัพย์สินทางปัญญาอื่นใดที่ปรากฏในเว็บไซต์นี้ นอกเหนือจากสิ่งที่เป็นทรัพย์สินทางปัญญาของออนไลน์ แอสเซ็ท ซึ่งได้ถูกนำมาเรียบเรียงหรือจัดให้มีขึ้นเพื่อใช้เป็นส่วนประกอบของเว็บไซต์นี้ มีขึ้นเพื่อวัตถุประสงค์ในการตกแต่งรูปลักษณ์ของเว็บไซต์ โดยออนไลน์ แอสเซ็ทในฐานะผู้ให้บริการเว็บไซต์ไม่ได้มีเจตนาที่จะกระทำการใด ๆ อันเป็นการละเมิดสิทธิในทางการค้าหรือทรัพย์สินทางปัญญาของผู้ใด เว้นแต่มีข้อความระบุไว้เป็นอย่างอื่นในเว็บไซต์นี้</p>

<p>1.3	
บรรดาเนื้อหา ไฟล์ หรือเอกสารที่ปรากฏในเว็บไซต์นี้ ผู้ใช้งานมีสิทธิเพียงเข้าดู ดาวน์โหลด อัพโหลดเนื้อหา และพิมพ์เนื้อหาดังกล่าว เฉพาะเพื่อประโยชน์แก่การใช้งานในทางส่วนตัวและต้องไม่ใช่การใช้งานที่เป็นไปเพื่อประโยชน์ในทางการค้า และผู้ใช้งานตกลงไม่ทำสำเนา หรือจัดเก็บ หรือดาวน์โหลดเนื้อหาไม่ว่าจะในรูปของเอกสารหรือในรูปแบบสื่ออิเล็กทรอนิกส์อื่นใดอันมีวัตถุประสงค์เพื่อการส่ง โอน จัดทำ เผยแพร่ พิมพ์ ทำซ้ำ ดัดแปลง สร้างงานที่พัฒนา นำออกแสดง แพร่กระจาย จำหน่าย ให้สิทธิ เช่า ให้เช่า หรือโอนเนื้อหาใด ๆ ให้แก่บุคคลภายนอก ไม่ว่าการกระทำดังกล่าวจะเป็นไปเพื่อประโยชน์ในทางการค้าหรือได้รับประโยชน์เป็นสิ่งตอบแทนอื่นใดหรือไม่ก็ตาม เว้นแต่จะได้รับความยินยอมเป็นลายลักษณ์อักษรล่วงหน้าจากออนไลน์ แอสเซ็ทก่อนดำเนินการ</p>
                </slot>
                
              </div>

              <div class="modal-footer">
                <slot name="footer" v-if="this.HideFooter == true">
                  <button class="btn btn-primary" @click="$emit('close')">
                    ยอมรับ
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>



<style>

#sorlice {
    max-height: 640px;

}
.dart {
    width: 50%;
}
.open-modal-term {
    overflow: hidden;
}


/* .modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}



.modal-wrapper {
  display: block;
  vertical-align: middle;
  padding-top: 10px;
  padding-bottom: 10px;
}

.modal-container {
  width: auto;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
} */

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */




/* .modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.button {
  padding: 15px 25px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
} */


</style>
<script>



export default {
 

    data() {
    return {
         HideFooter:false,
         scrollPosition: 0,
    };
  },
   created() {


  
        },
        computed: {


    },
      mounted() {
      //  console.log('ok ผ่าน');
      },
      methods: {
            	handleScroll: function(e) {
               this.HideFooter = true;
          var currentScrollPosition = e.srcElement.scrollTop;
            var currentscrollHeight = e.srcElement.scrollHeight;
        // console.log(currentScrollPosition);
        //    console.log(currentscrollHeight);
            // if (currentScrollPosition > this.scrollPosition) {
            //   //  console.log("Scrolling down");
              
            // }
            if(currentscrollHeight - currentScrollPosition == 640){

            }
       
            this.scrollPosition = currentScrollPosition;
		}

     


    

  
      }
}
</script>
