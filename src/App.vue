<template>
  <div>

    <!-- <Header></Header>
    <Section></Section>
    <About></About>

    <Service></Service>
    <Counter></Counter>
    <WhyChoose></WhyChoose>
    <LatestProject></LatestProject>
    <Strategy></Strategy>
    <PlanStart></PlanStart>
    <Slider></Slider>
    <PlanCards></PlanCards>
    <Footer></Footer> -->
    <router-view></router-view>
  </div>
  
</template>

<script>
// import Header from "./components/Header.vue";
// import Section from "./components/Section.vue";
// import About from "./components/About.vue";

// import Service from "./components/Service.vue";
// import Counter from "./components/Counter.vue";
// import WhyChoose from "./components/WhyChoose.vue";
// import LatestProject from "./components/LatestProject.vue";
// import Strategy from "./components/Strategy.vue";
// import PlanStart from "./components/PlanStart.vue";
// import Slider from "./components/Slider.vue";
// import PlanCards from "./components/PlanCards.vue";
// import Footer from "./components/Footer.vue";
import router from './router';

export default {
  components: {
    // Header,
    // Section,
    // About,
   
    // Service,
    // Counter,
    // WhyChoose,
    // LatestProject,
    // Strategy,
    // PlanStart,
    // Slider,
    // PlanCards,
    // Footer,
    router
  },

}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  transition: background 0.3s ease;
}

html.dark,
html.dark body {
  background: #051622;
}

html.light,
html.light body {
  background: #d2ecff;
}

a {
  color: aliceblue;
}

.dark .header {
  background: linear-gradient(to bottom, #0d3b66, #051622) !important;
  color: aliceblue;
}

.light .header {
  background: linear-gradient(to bottom, #8dceff, #d2ecff) !important;
  color: #0d3b66;
}

.dark .header .link-header,
.dark .header .desktop-nav .my-link,
.dark .header .icons-text-block i {
  color: aliceblue;
}

.light .header .link-header,
.light .header .desktop-nav .my-link,
.light .header .icons-text-block i {
  color: #0d3b66;
}

.light .header .my-link:hover {
  color: #005fa3;
}

.light .header .dropdown-content .my-link {
  color: #ffffff;
}

.light .header .dropdown-content .my-link:hover {
  color: orange;
}

.dark footer {
  background: linear-gradient(to bottom, #0d3b66, #051622) !important;
  color: #ffffff;
}

.light footer {
  background: linear-gradient(to bottom, #8dceff, #d2ecff) !important;
  color: #0d3b66;
}

.light footer a,
.light footer h3,
.light footer p,
.light footer i,
.light footer svg {
  color: #0d3b66;
}

.light footer .line,
.light footer .border-line {
  background-color: rgba(13, 59, 102, 0.25);
}

.light footer input {
  color: #0d3b66;
  border: 1px solid rgba(13, 59, 102, 0.6);
}

.light footer input::placeholder {
  color: rgba(13, 59, 102, 0.6);
}

.light footer .icons {
  background-color: #0d3b66;
}

.light footer .icons i,
.light footer .icons svg {
  color: #ffffff;
}
</style>