<template>
 <b-container>
    <div class="form">

 <b-tabs pills card >
         <b-tab title="All Transactions" active> 
          <b-card-text>
        </b-card-text>
                            <Table :content="madeTransactions"/>

        </b-tab>
      <b-tab title="New Transaction"><b-card-text><h4>Record Transaction</h4></b-card-text>
          <b-form @submit="sendTransaction" >
    <b-form-input
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="trans.card_id"
      placeholder="Enter card Id"
    ></b-form-input>
        <b-form-input
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="trans.transaction_fare"
      type="number"
      placeholder="Transactions Fare"
    ></b-form-input>
            <b-form-input
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="trans.new_balance"
      type="number"
      placeholder="New balance"
    ></b-form-input>
    <div>
        <b-button variant="primary" type="submit">Save </b-button>
    </div>
    </b-form>
      </b-tab>

      <b-tab title="My Transactions">
        <b-card-text>
        </b-card-text>
    <b-form >
    <b-form-input
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="cardToCheck"
      placeholder="Enter uuid"
    ></b-form-input>
    </b-form>
                    <Table :content="cardTransactions"/>

        </b-tab>
      <b-tab title="All Cards">
        <b-card-text>
                <Table :content="cards"/>
        </b-card-text>
        </b-tab>
      <b-tab title="Check Card">
        <b-card-text>Check Card</b-card-text>
                  <b-form >
    <b-form-input
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="cardToCheck"
      placeholder="Enter uuid"
    ></b-form-input>
    </b-form>
      <div v-for="(card,i) in cardExist" :key="i">
      <div>
      UUID : {{card.uuid}}
      </div>
      <div>
              Owner : {{card.Owner}}
      </div>
      <div>
              Current_balance : {{ card.current_balance}}
      </div>
      </div>
      </b-tab>

      <b-tab title="New Card" ><b-card-text>
    <b-form @submit="sendCard" >
    <b-form-input
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="RFID.uuid"
      placeholder="Enter uuid"
    ></b-form-input>
        <b-form-input
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="RFID.Owner"
      placeholder="Card Owner"
    ></b-form-input>
            <b-form-input
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="RFID.current_balance"
      type="number"
      placeholder="Current_balance"
    ></b-form-input>
    <div>
        <b-button variant="primary" type="submit">Save card</b-button>
    </div>
    </b-form>
        </b-card-text></b-tab>
    </b-tabs>
  </div>
 </b-container>
</template>

<script>
const axios = require('axios').default;
import Table from '@/components/Table.vue'

export default {
name:"form-transact",
data(){
return {
  trans:{
   card_id:null,
   transaction_fare:null,
   new_balance:null
     },
    RFID:{
    uuid:"",
    Owner:"",
    current_balance:0,
  },
    cards:null,
    cardToCheck:"TUEUIIO",
    cardExist:null,
    madeTransactions:null,
    cardTransactions:null,
    message:""
}
},
components:{
  Table
},
created(){
this.fetchCards()
this.checkCard()
this.fetchCards()
this.fetchTransactions()
this.getRFIDTransactions()
this.testFunction()
},
methods:{
    testFunction: function () {
      var v = this;
      setInterval(function () {
        v.message = new Date().toLocaleTimeString();
    }, 2000);
   },

   fetchCards:function(){
           var v = this;
      setInterval(function () {
      axios
        .get('http://localhost:6600/api/cards')
        .then(response => (v.cards = response.data))
        .catch(error => {
        v.errorMessage = error.message;
        console.error("There was an error!", error);
    });    }, 1);
},
   checkCard:function(){
     var v = this
setInterval(function(){
        axios
        .get('http://localhost:6600/api/cards/'+this.cardToCheck)
        .then(response => (v.cardExist = response.data.card))
        .catch(error => {
        v.errorMessage = error.message;
        console.error("There was an error!", error);
    });
},1)
},
   fetchTransactions:function(){
  var v = this
setInterval(function(){
      axios
        .get('http://localhost:6600/api/transactions')
        .then(response => (v.madeTransactions = response.data))
        .catch(error => {
        v.errorMessage = error.message;
        console.error("There was an error!", error);
    });
},1)
},
   getRFIDTransactions(){

      axios
        .get('http://localhost:6600/api/transactions/'+this.cardToCheck)
        .then(response => (this.cardTransactions = response.data))
        .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
    });
},
  sendCard(event){
      event.preventDefault()
       axios
        .post('http://localhost:6600/api/cards',this.RFID)
        .then(response => (console.log(response)))
        .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
    });
},
  sendTransaction(event){
      event.preventDefault()
       axios
        .post('http://localhost:6600/api/transactions',this.trans)
        .then(response => (console.log(response.data)))
        .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
    });
}
}
}
</script>

<style scoped>
.form {
  margin: 50px;
  
}
.form .form-control {
  margin-bottom: 20px  !important;
  width: 20em;
}
h4 {
  font-size: 16px;
}

</style>