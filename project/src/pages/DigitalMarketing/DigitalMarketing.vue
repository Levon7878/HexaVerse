
<script>
import Header from '@/components/Header.vue';
import Digital from '@/components/Digital.vue';
import Footer from '@/components/Footer.vue';


export default{
   
  
  components:{
      Header,
      Footer,
      Digital
  },

};
</script>


<template>
    <div>
        <Header></Header>
        <Digital></Digital>
        <Footer class="footer"></Footer>
    </div>
</template>

<style scoped>
</style>