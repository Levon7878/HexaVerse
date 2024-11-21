<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue';
import Managment from '@/components/Managment.vue'; 

export default {
    components:{
        Header,
        Managment,
        Footer
    }
}
</script>

<template>
    <div>
        <Header></Header>
        <Managment></Managment>
        <Footer></Footer>
    </div>
</template>

<style scoped>

</style>