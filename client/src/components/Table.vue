<template>
  <div>
      <b-container>
            <b-table striped  :items="content"></b-table>
      </b-container>
  </div>
</template>
<script>
export default {
 name:"transactions",
 data(){
return {
      }
},
props:{
        content: null
}
}
</script>

<style scoped>

</style>