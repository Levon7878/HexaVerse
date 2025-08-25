<template>
  <transition name="fade" >
    <div class="aa">
      <Notification></Notification>
      <Header></Header>
      <Section></Section>
      <!-- <AnimationWrapper></AnimationWrapper> -->
      <About></About>
      <animationSlide></animationSlide>
      <Service></Service>
      <Counter></Counter>
      <WhyChoose></WhyChoose>
      <LatestProject></LatestProject>
      <Strategy></Strategy>
      <PlanStart></PlanStart>
      <Slider></Slider>
      <PlanCards></PlanCards>
      <Footer></Footer>
      <PrivacyPolicy></PrivacyPolicy>
    </div>
  </transition>
</template>
  
<script setup>
import Header from "../../components/Header.vue";
import Section from "../../components/Section.vue";
import About from "../../components/About.vue";
import Service from "../../components/Service.vue";
import Counter from "../../components/Counter.vue";
import WhyChoose from "../../components/WhyChoose.vue";
import LatestProject from "../../components/LatestProject.vue";
import Strategy from "../../components/Strategy.vue";
import PlanStart from "../../components/PlanStart.vue";
import Slider from "../../components/Slider.vue";
import PlanCards from "../../components/PlanCards.vue";
import Footer from "../../components/Footer.vue";
import Digital from "../../components/Digital.vue";
import AnimationSlide from "../../components/AnimationSlide.vue";
// import AnimationWrapper from '../../components/AnimtionWrapper.vue'
import Notification from "../../components/Notification.vue";
import PrivacyPolicy from "../../components/PrivacyPolicy.vue";





</script>

<script>
export default {
  components: {
    Header,
    Section,
    About,
    AnimationSlide,
    Service,
    Counter,
    WhyChoose,
    LatestProject,
    Strategy,
    PlanStart,
    Slider,
    PlanCards,
    Footer,
    Digital,
    // AnimationWrapper
    Notification,
    PrivacyPolicy,
  },
};
</script>

  
  <style>

.aa {
  font-family: "Roboto", sans-serif;

    background-position: center;
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease, transform 1s ease;
  will-change: opacity, transform;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.fade-enter-to, .fade-leave {
  opacity: 1;
  transform: scale(1);
}





a {
  color: aliceblue;
}

[class="dark"] .aa {
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

[class="light"] .aa {
  /* background: linear-gradient(to bottom, #005fa3, #8dceff); */
  background: linear-gradient(to bottom, #1f83e096, #85cafab0);
}

.Vue-Toastification__toast-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Vue-Toastification__toast-body button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.Vue-Toastification__toast-body button:first-child {
  background-color: #007bff;
  color: #fff;
}

.Vue-Toastification__toast-body button:last-child {
  background-color: #f8f9fa;
  color: #6c757d;
}
</style>