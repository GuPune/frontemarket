<template>
        <div class="card shopping-cart">
    
        <h2 class="shoping-cart-title bg-order"><span>ที่อยู่ในการจัดส่ง</span>
            <span id="showLinkChangeAddress"><a class="linkChangeAddress">  <b-button v-b-modal.modal-1 class="bt-ship"  @click="showModal()">เปลี่ยนที่อยู่</b-button></a></span>
        </h2>
                        <div class="card-body">
                       <div class="row" id="scrollMemberList">
        <div class="col-12">
            <div class="row form-group">
                <div class="col-12 divMemberAddressChoose">
                    <label class="font-weight-bold"> xxxxx xxxxx                   </label>
                    <label class="pl-2">0843745454</label>
                    <div class="text-muted">
                        2e3r4t5yui, xxxx, xxxxx, ขอนแก่น 40000                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>    

      <b-modal id="modal-1"  title="เลือกที่อยู่ในการจัดส่ง" size="lg">
        <div>
  
        <div class="col-12 divMemberAddress">
            <ul class="ulDataBody ul-body-form-panel">
                <li>
                    <span class="text-left">ที่อยู่ที่จัดส่ง</span>
          
                </li>
                <li v-for="(item, index) in items" :key="item.id">
                  <span class="span-td-col1 text-center"><div class="custom-control custom-radio">
                  <input type="radio" :value="item.id" v-model="selectedAdd"  @change="changeAdd($event)">
                  
                  <label class="custom-control-label" for="customRadio1">
                  </label>
                  </div>
                  </span>
             
                  <span class="span-td-col7 text-left"> 2e3r4t5yui, นาเพียง, ชุมแพ, ขอนแก่น 40000 </span>
                  </li> 
                  </ul>
        </div>
  </div>
     
      </b-modal>
            </div>


            
</template>





<script>
import { mapGetters } from "vuex";
import { FETCH_GET_PROFILE,FETCH_ADDRESS_BY_ID,FETCH_ADDRESS} from "../store/actions.type.js";
export default {
      computed: {
     
            ...mapGetters(["address","selectedad"]),

        },
          data() {
      return {
        forms:{
          id:null
        },
        modes: ['multi', 'single', 'range'],
        fields: ['index','selected', 'isActive', 'age', 'first_name', 'last_name'],
        items: [],
        selectMode: 'single',
        selected: '',
        selectedAdd: ''
      }
    },
      
      components: {
      
           
              },
             
      async mounted() {
 await this.fetchaddress(); 
      

         
        },

      methods: {
        changeAdd(event){
           var data = event.target.value;
              console.log(data);
        },

        

   rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.status === 'D') return 'table-active'
      },
       async fetchaddress(){
        let a = await this.$store.dispatch(FETCH_GET_PROFILE);
        this.forms.id = a.id;
        let getaddress = await this.$store.dispatch(FETCH_ADDRESS,this.forms);
        this.items = getaddress;
        this.selectedAdd = this.selectedad.id;
//console.log('this.selected',this.selected);


      

    
      },
  	showModal() {
     
       
    },


     onRowSelected(items) {
       this.selected = items

               let selectableTable = this.$refs.selectableTable
   selectableTable.selectRow(0)
     
        
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows()

      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      },
      selectThirdRow() {
         
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.selectRow(1)
          
      },
      unselectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.unselectRow(2)
      }
    
  }
       
           

     
    
    };
</script>