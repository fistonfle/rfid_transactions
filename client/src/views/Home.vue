<template>
  <div class="home">
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
<style scoped>
.home {
  height: 100vh;
  background: url('../assets/rfid-card-125khz-thickbox_default-12x.jpg');
  background-size: cover;
  
}
</style>
