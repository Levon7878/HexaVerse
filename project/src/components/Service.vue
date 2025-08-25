<script>
import { useMyStore } from "@/store/myStore";
import { computed } from "vue";

export default {
  setup() {
    const store = useMyStore();
    const serviceBlock = computed(() => store.serviceBlock || []);
    return {
      serviceBlock
    };
  },
};
</script>

<template>
  <section class="services">
    <div class="block-text">
      <p>Services</p>
      <h3>What Services We Provide For Yur Business</h3>
    </div>
    <div class="box-content">
      <div class="conteiner-content">
        <div class="services-box" v-for="service in serviceBlock" :key="service.id">
          <div class="block-img">
            <div class="container-img">
              <img :src="service.src" alt="" />
              <div class="container-text">
                <p>{{ service.id }}</p>
                <h4>{{ service.title }}</h4>
                <h5>{{ service.description }}</h5>
                <a href="">{{ service.link }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.conteiner-content {
  width: 1300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 42px;
}
.container-text {
  position: absolute;
  width: 100%;
  height: 35%;
  left: 0;
  bottom: 0%;
  background: linear-gradient(
    180deg,
    rgba(62, 124, 116, 0) 0%,
    rgba(133, 153, 187, 0.86) 100%
  );
  padding: 30px;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  transition: 0.5s;
}

.container-img:hover .container-text {
  background: linear-gradient(
    180deg,
    rgba(62, 124, 116, 0) 0%,
    rgba(133, 153, 187, 0.86) 100%
  );
  width: 100%;
  height: 50%;
  overflow: hidden;
  transition: 0.7s;
  height: 50%;
  padding: 10px 25px 10px;
  gap: 10px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: brightness(0.3);
}

.container-text p {
  font-size: 30px;
  font-weight: 900;
  transition: 0.3s;
}

.container-img:hover .container-text p{
  color: aliceblue;
}

.container-text h4 {
  font-size: 22px;
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  line-height: 34px;
  display: inline-block;
}

.block-img a {
  position: relative;
  color: aliceblue;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
}

.block-img :hover a {
  opacity: 1;
}

.services-box h5 {
  position: relative;
  z-index: -3;
  opacity: 0;
}

.services-box:hover h5 {
  opacity: 1;
}

.container-text:hover {
  position: absolute;
}

.block-img {
  border: none;
  position: relative;
  border-radius: 9px;
  overflow: hidden;
}

.services {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 80px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
}

.block-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;
}
.block-text p {
  padding: 13px 19px;
  font-weight: 600;
  border-radius: 5px;
  display: inline-block;
  font-size: 21px;
}

.block-text h3 {
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  width: 503px;
  text-align: center;
}

.container-img img {
  max-width: 421px;
  height: 421px;
}

.container-img {
  width: 421px;
  height: 421px;
}

@media screen and (max-width: 1396px) {
  .container-img {
    max-width: 366px;
  }
  .block-text {
    width: 100%;
  }
  .container-img img {
    max-width: 366px;
  }
  .conteiner-content {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .block-text h3 {
    font-size: 32px;
  }

  .container-img {
    max-width: 100%;
  }
}

@media screen and (max-width: 1199px) {
  .conteiner-content {
    max-width: 1000px !important;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .container-img {
    max-width: 421px;
    max-height: 421px;
  }
  .block-text {
    width: 100%;
  }
  .container-img img {
    max-width: 421px;
    max-height: 421px;
  }
}

@media screen and (max-width: 1199px) {
  .container-img {
    max-width: 421px;
    max-height: 421px;
  }
  .block-text {
    width: auto;
  }
  .container-img img {
    max-width: 421px;
    max-height: 421px;
  }
}

@media screen and (max-width: 900px) {
  .conteiner-content {
    max-width: 600px !important;
    display: flex;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 575px) {
  .block-text h3 {
    font-size: 28px;
    line-height: 35px;
    width: 300px;
  }
}

@media screen and (max-width: 430px) {
  .container-img,
  .container-img img {
    width: 100%;
    max-width: 301px;
    max-height: 364px;
  }
}

@media screen and (max-width: 391px) {
  .services {
    padding: 0px;
  }
}

[class="dark"] .block-text p {
  background-color: rgba(255, 255, 255, 0.06);
  /* color: #f6d273; */
}

[class="dark"] .block-text {
  color: aliceblue;
}

[class="dark"] .block-text p{
  color: orange;
}

[class="light"] .block-text p {
  background-color: rgba(19, 6, 6, 0.212);
}
</style>
