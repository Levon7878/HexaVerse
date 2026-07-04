<template>
  <div class="carousel-block">
    <swiper
      :slides-per-view="3"
      :space-between="45"
      :loop="true"
      :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
      :pagination="true"
      class="carousel"
    >
      <swiper-slide
        v-for="(logo, index) in logos"
        :key="index"
        class="carousel-item"
      >
        <img :src="logo.img" :alt="'Logo ' + logo.id" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';



const logos = [
  { id: 1, img: "src/Img/AnimationSlide/arnology.png" },
  { id: 2, img: "src/Img/AnimationSlide/art-house.svg" },
  { id: 3, img: "src/Img/AnimationSlide/itm.svg" },
  { id: 4, img: "src/Img/AnimationSlide/sccode.png" },
];
</script>

<style scoped>
.carousel-block {
  padding: 60px 80px;
}

.carousel-item {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 120px ;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  backdrop-filter: brightness(0.5);}

.carousel-item:hover {
  transform: scale(1.1);
  border-radius: 12px;
}

.carousel-item img {
  width: 100px;
  height: auto;
  display: block;
  border-radius: 8px;
}


@media (max-width: 590px){
  .carousel-block{
    padding: 0px 30px;
    margin-top: 50px;
    margin-bottom: -50px;
  }
}

@media (max-width: 480px){
  .carousel-block{
    padding: 0;
    margin-top: 50px;
    margin-bottom: 50px;
  }
}


@media (max-width: 415px){
  .carousel-block{
    padding: 0;
    margin-top: 180px;
    margin-bottom: 50px;
  }
}

</style>
