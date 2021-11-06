<template>
<div class="card mb-3" style="margin-top:80px;">
                        <div class="boxEditAddressBook theme-main">
    <div class="card boxCard theme-font mb-4">
        <h2 class="profile-cart-title"><span>ที่อยู่ในการจัดส่ง </span>
            <span id="showLinkChangeAddress"><a class="linkChangeAddress"></a></span>
        </h2>
        
        <div class="card-body pt-0">
 

     <b-row>
      

      

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>


      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->

    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
    >
 
         <template #cell(status)="row">

         <div  v-if="row.item.status == 'Y'">
 
       <b-button size="sm" squared variant="primary">ชำระเงิน</b-button>
</div>
<div v-else>
   <b-button size="sm" squared variant="danger">รอการชำระ</b-button>
</div>
         
 
      </template>

   <template #cell(created_at)="row">
  

          {{covertdate(row.item.created_at)}}
      </template>
      

      <template #cell(actions)="row">

        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} 
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul v-for="(value, key) in row.item.order_item" :key="key.id">
            <li>ชื่อสินค้า: {{ value.product_name }}</li>
            <li>ราคารวม: {{ value.sumPrice }}</li>
            <li>จำนวน: {{ value.qty }}</li>
            <li>เลขพัสดุ: {{ value.trackNumber }}</li>
            <li>สถานะ: {{ value.delivertStatus }}</li>
            <li>รูป: {{ value.product_images }}</li>

          </ul>
        </b-card>
      </template>
    </b-table>

          <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only>
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </div>
           
        </div>
    </div>



    </div>




</template>


<script>
import moment from 'moment'
import { mapGetters } from "vuex";
import { CHECK_LOGIN } from "../store/actions.type.js";
import { FETCH_ADS_SHOP,FETCH_GET_PROFILE,FETCH_ADDRESS,DEL_ADDRESS_BY_ID,GET_ORDER_ALL  } from "@/store/actions.type.js";
  export default {
    data() {
    return {
      
      IsLogin: false,
  items: [
        

        ],
        fields: [
          { key: 'order_cartnumber', label: 'หมายเลขคำสั่งซื้อ	', sortable: true, sortDirection: 'desc' },
          { key: 'sumPrice', label: 'ราคา(THB)	', sortable: true, class: 'text-center' },
          { key: 'status', label: 'สถานะการสั่งซื้อ	', sortable: true, class: 'text-center' },
        { key: 'created_at', label: 'วันที่สั่งซื้อ	', sortable: true, class: 'text-center' },
       
          { key: 'actions', label: 'Actions' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        },
         form:{
        address:"",
        id:"",
        customer_id:"",
        },
       forms:{
        id:""
        }
    };
  },


     computed: {
   ...mapGetters(["address","profile","orderall"]),
   

    isUrl () {
                return this.$store.state.user.url_id;
        },

    rows() {
        return this.items.length
      }
        },
           

   
        created(){
           
        },
        

    
        
     async mounted() {
         this.form.url = window.location.origin;
   this.form.shop_name = this.$route.params;
  let a = await this.$store.dispatch(FETCH_GET_PROFILE);
           this.form.customer_id = a.id;
    let order_all = await this.$store.dispatch(GET_ORDER_ALL,this.form);
    this.items = order_all;
   this.totalRows = this.items.length
      },

      methods: {
            onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },

        redirectTo() {
              this.$router.push({ name: 'profile-addressshipping' })
          
        },

        covertdate(date){
            return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
                
        },

       


      }


           
        }


</script>
