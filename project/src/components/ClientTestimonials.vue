<template>
  <div>
    <div class="box-test">
      <div class="text-block">
        <h1>What Our Clients Say</h1>
        <h4>Hear from Businesses Transformed by HexaVerse</h4>
      </div>
      <div class="box-text-testomonials">
        <div class="clients-rate" v-for="test in testObj" :key="test.id">
          <div class="rate-text">
            <v-rating v-model="test.rating.value"></v-rating>
            <p>{{ test.testomonial }}</p>
          </div>
          <div class="img-rate-i">
            <div class="img-text">
              <img :src="test.image" alt="" />
              <div class="text-box">
                <h4>{{ test.clinetName }}</h4>
                <p>{{ test.position }}</p>
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
    clinetName: "Jane Doe",
    position: "CEO, TechStart",
    testomonial:
      "HexaVerse transformed our online presence and drove incredible growth. Their strategic approach to digital marketing and deep understanding of our industry set them apart. We saw a significant increase in traffic and conversions within just a few months. The team is professional, responsive, and truly cares about our success.",
    image: "src/Img/ClientTestomonials/test-1.jpg",
    rating: ref(0),
  },
  {
    id: 2,
    clinetName: "John Smith",
    position: "Founder, InnovateHub",
    testomonial:
      "The expertise and dedication of the HexaVerse team were evident in every project they undertook for us. From web development to digital PR, they delivered outstanding results that exceeded our expectations. Our website is now more user-friendly, and our brand visibility has skyrocketed. HexaVerse is a valuable partner in our growth journey.",
    image: "src/Img/ClientTestomonials/test-2.jpg",
    rating: ref(0),
  },
  {
    id: 3,
    clinetName: "Lisa Brown",
    position: "Marketing Director, NextGen Solutions",
    testomonial:
      "The innovative solutions provided by HexaVerse helped us achieve our business goals more efficiently. Their AI development and data analysis services gave us valuable insights that we never had before. The team's creativity and technical skills are unmatched. I highly recommend HexaVerse to any company looking to enhance their digital capabilities.",
    image: "src/Img/ClientTestomonials/test-3.jpg",
    rating: ref(0),
  },
  {
    id: 4,
    clinetName: "Mark Thompson",
    position: "COO, GreenTech Innovations",
    testomonial:
      "Working with HexaVerse has been a game-changer for our company. Their comprehensive digital marketing strategies and excellent project management skills ensured that our campaigns were successful and delivered on time. The results speak for themselves – increased engagement, higher conversion rates, and a stronger online presence.",
    image: "src/Img/ClientTestomonials/test-4.jpg",
    rating: ref(0),
  },
  {
    id: 5,
    clinetName: "Susan Lee",
    position: "Head of Communications, BlueWave Enterprises",
    testomonial:
      "HexaVerse's team is a pleasure to work with. They took the time to understand our brand and created a digital marketing strategy that perfectly aligned with our goals. Their content marketing and social media management services have significantly boosted our brand's visibility and engagement. We couldn't be happier with the results.",
    image: "src/Img/ClientTestomonials/test-5.jpg",
    rating: ref(0),
  },
  {
    id: 6,
    clinetName: "Robert Williams",
    position: "Founder & CEO, BrightFuture Tech",
    testomonial:
      "HexaVerse delivered a top-notch website that is both aesthetically pleasing and highly functional. Their attention to detail and commitment to quality are impressive. The CMS they developed for us has made content management a breeze, and our team can now focus more on creating valuable content for our audience.",
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

[class="dark"] .box-test {
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

[class="light"] .box-test {
  background: linear-gradient(to bottom, #005fa3, #8dceff);
}

[class="dark"] .clients-rate {
  color: aliceblue;
}

[class="ligth"] .clients-rate {
  color: black;
}

[class="dark"] .text-block {
  border: 1px solid;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 9px 7px white;
}

@media screen and (max-width: 435px) {
  .icons-box{
    display: flex;
  }
}
</style>
