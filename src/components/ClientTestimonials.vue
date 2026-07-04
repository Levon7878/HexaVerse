<template>
  <div>
    <div class="box-test">
      <div class="text-block">
        <h1>{{ $t('testimonials.title') }}</h1>
        <h4>{{ $t('testimonials.subtitle') }}</h4>
      </div>
      <div class="box-text-testomonials">
        <div class="clients-rate" v-for="test in testObj" :key="test.id">
          <div class="rate-text">
            <v-rating v-model="test.rating.value"></v-rating>
            <p>{{ $t(test.testomonial) }}</p>
          </div>
          <div class="img-rate-i">
            <div class="img-text">
              <img :src="test.image" alt="" />
              <div class="text-box">
                <h4>{{ $t(test.clinetName) }}</h4>
                <p>{{ $t(test.position) }}</p>
              </div>
            </div>
            <div class="icons-box">
              <i class="fas fa-angle-right"></i>
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const testObj = [
  {
    id: 1,
    clinetName: "testimonials.client1.name",
    position: "testimonials.client1.position",
    testomonial: "testimonials.client1.text",
    image: "src/Img/ClientTestomonials/test-1.jpg",
    rating: ref(0),
  },
  {
    id: 2,
    clinetName: "testimonials.client2.name",
    position: "testimonials.client2.position",
    testomonial: "testimonials.client2.text",
    image: "src/Img/ClientTestomonials/test-2.jpg",
    rating: ref(0),
  },
  {
    id: 3,
    clinetName: "testimonials.client3.name",
    position: "testimonials.client3.position",
    testomonial: "testimonials.client3.text",
    image: "src/Img/ClientTestomonials/test-3.jpg",
    rating: ref(0),
  },
  {
    id: 4,
    clinetName: "testimonials.client4.name",
    position: "testimonials.client4.position",
    testomonial: "testimonials.client4.text",
    image: "src/Img/ClientTestomonials/test-4.jpg",
    rating: ref(0),
  },
  {
    id: 5,
    clinetName: "testimonials.client5.name",
    position: "testimonials.client5.position",
    testomonial: "testimonials.client5.text",
    image: "src/Img/ClientTestomonials/test-5.jpg",
    rating: ref(0),
  },
  {
    id: 6,
    clinetName: "testimonials.client6.name",
    position: "testimonials.client6.position",
    testomonial: "testimonials.client6.text",
    image: "src/Img/ClientTestomonials/test-6.jpg",
    rating: ref(0),
  },
];
</script>
<style scoped>
.box-test {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 150px 0 50px;
}

.box-text-testomonials {
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 57px;
}

.clients-rate {
  max-width: 550px;
  padding: 40px 30px 40px 30px;
  border-radius: 20px 20px 20px;
  background-color: transparent;
  border: 1px solid;
  box-shadow: 5px 4px #10324c;
}

.img-rate-i {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 25px;
}

.icons-box > i {
  font-size: 55px;
}

.icons-box i:first-child {
  color: rgb(78, 78, 78);
}

.img-text > img {
  border-radius: 50%;
}

.text-block {
  text-align: center;
  color: white;
}

.img-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.img-text p {
  font-size: 14px;
}

:global(.dark .box-test){
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

:global(.light .box-test){
  background: linear-gradient(to bottom, #005fa3, #8dceff);
}

:global(.dark .clients-rate){
  color: aliceblue;
}

:global(.light .clients-rate){
  color: black;
}

@media screen and (max-width: 435px) {
  .icons-box{
    display: flex;
  }
}
</style>
