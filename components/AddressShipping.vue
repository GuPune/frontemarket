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

    <b-table
      :items="items"
      :fields="fields"
      :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
    >


      <!-- Example scoped slot for select state illustrative purposes -->
      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </b-table>
    <p>
      <b-button size="sm" @click="selectAllRows">Select all</b-button>
      <b-button size="sm" @click="clearSelected">Clear selected</b-button>
      <b-button size="sm" @click="selectThirdRow">Select 3rd row</b-button>
      <b-button size="sm" @click="unselectThirdRow">Unselect 3rd row</b-button>
    </p>
    <p>
      Selected Rows:<br>
      {{ selected[0].id }}
 {{ items[0].id }}
    
    </p>
  </div>
     
      </b-modal>
            </div>


            
</template>





<script>
export default {
          data() {
      return {
 
          modes: ['multi', 'single', 'range'],
        fields: ['selected','id', 'isActive', 'age', 'first_name', 'last_name'],
        items: [
          { id:1, isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { id:2, isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { id:3,isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { id:4,isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        selectMode: 'single',
        selected: [{ id:4,isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }],
  
      }
    },
      
      components: {
      
           
              },
             
        mounted() {

         
        },

      methods: {
  	showModal() {
     
       
    },


     onRowSelected(items) {
        this.selected = items
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
           console.log('selectThirdRow',this.$refs.selectableTable);
      },
      unselectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.unselectRow(2)
      }
    
  }
       
           

     
    
    };
</script>