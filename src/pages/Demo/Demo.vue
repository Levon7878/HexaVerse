<template>
  <div>
    <Header />
    <DemoPage />
    <Footer />
  </div>
</template>
<script>
import Header from "../../components/Header.vue";
import DemoPage from "../../components/DemoPage.vue";
import Footer from "../../components/Footer.vue";
export default {
  components: {
    Header,
    DemoPage,
    Footer,
  },
};
</script>
<style>
</style>