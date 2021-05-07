<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
* {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
thead, tbody, tfoot, tr, td, th {
  border: none  !important; 
}

 #app .nav-link {
  color: rgb(204, 211, 243);
font-weight: 500;
}
#app .nav-pills .nav-link.active{
  color: rgb(255, 255, 255);
  
}
.card-header:first-child {
background: blue;
}
</style>
