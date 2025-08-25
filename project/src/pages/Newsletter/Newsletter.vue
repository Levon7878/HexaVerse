<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue';
import News from '@/components/News.vue'; 

export default {
    components:{
        Header,
        News,
        Footer
    }
}
</script>

<template>
    <div>
        <Header></Header>
        <News></News>
        <Footer></Footer>
    </div>
</template>

<style scoped>

</style>