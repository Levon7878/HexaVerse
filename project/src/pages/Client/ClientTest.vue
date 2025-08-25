<template>
    <div>
      <Header></Header>
      <ClientTestimonials ></ClientTestimonials>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
import Footer from '../../components/Footer.vue';
import ClientTestimonials from '../../components/ClientTestimonials.vue';
  import Header from '../../components/Header.vue';
  
  export default {
    components: {
      Header,
      ClientTestimonials,
      Footer
    }
  };
  </script>
  
  
  