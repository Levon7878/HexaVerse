<template>
  <section class="section aa">
    <div class="container">
      <div class="container-box">
        <!-- <h5>{{ $t('marketingTexts.title') }}</h5> -->
        <h3 class="anim">{{ $t("marketingTexts.text1") }}</h3>
        <p class="anim">
          {{ $t("marketingTexts.text2") }}
        </p>
        <!-- <Button class="button-section">{{ $t('marketingButton.more') }}</Button> -->
      </div>
      <BackgroundVideo> </BackgroundVideo>
    </div>

    <!-- <div class="img-box"></div> -->
  </section>
</template>
  
  <script>
import BackgroundVideo from "./BackgroundVideo.vue";

import Button from "./Button.vue";

export default {
  components: {
    Button,
    BackgroundVideo,
  },

  mounted() {
    const animatedElements = document.querySelectorAll(".anim");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    });

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  },
};
</script>
  
  <style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.section {
  width: 100%;
  /* padding-bottom: 96px; */
  /* background: linear-gradient(to bottom, #0d3b66, #051622); */
  /* color: #ffffff; */
  padding-top: 94px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-box {
  position: relative;
  background-image: url("../src/Img/bg01.png");
  width: 100%;
  max-width: 600px;
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 35px;
  border-bottom-left-radius: 322px;
  z-index: 1;
  right: 0;
  top: 0;
}

.container-box {
  height: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: center;
  gap: 15px;
  position: absolute;
}

.container-box h5 {
  padding: 13px 19px;
  /* background-color: rgba(255, 255, 255, 0.06); */
  /* color: #f6d273; */
  font-weight: 400;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 35px;
}

.container-box h3 {
  /* color: aliceblue; */
  font-size: 72px;
  line-height: 82px;
  font-weight: 700;
  max-width: 650px;
}

.container p {
  max-width: 600px;
  line-height: 28px;
  /* color: #ffffffc9; */
  margin-top: 20px;
}

.button-section {
  /* background-color: #ffbe0b; */
  /* color: #0d3b66; */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 25px;
}

.container button {
  /* background-color: #30665f; */
  outline: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  font-weight: 600;
  padding: 15px 32px;
  border: none;
  /* color: aliceblue; */
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
  z-index: 10;
  margin-top: 15px;
}

.anim.active {
  position: relative;
  animation: DivAnim 1s linear;
  animation-delay: 0s;
}
@keyframes DivAnim {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@media screen and (max-width: 1200px) {
  .img-box {
    filter: opacity(0.5) !important ;
  }
}

@media screen and (max-width: 1399px) {
  .img-box {
    position: relative;

    left: 19%;
  }
  .container-box {
    position: absolute;
    z-index: 5;
    left: 9%;
  }
}

@media screen and (max-width: 1200px) {
  .img-box {
    filter: opacity(0.2);
    left: 13%;
  }

  .container-box h3 {
    font-size: 55px;
    line-height: 60px;
  }

  .container-box {
    width: 516px;
    left: 18%;
  }
  .img-box {
    width: 500px;
    height: 500px;
  }
}

@media screen and (max-width: 991px) {
  .img-box {
    left: 6%;
    width: 608px;
    height: 608px;
  }

  .container-box {
    width: 696px;
    height: 500px;
    /* margin-bottom: 126px; */
    left: 15%;
  }
}

@media screen and (max-width: 820px) {
  .container-box {
    width: 650px;
  }
}

@media screen and (max-width: 768px) {
  .container-box {
    width: auto;
    height: auto;
    left: 2%;
  }

  .container-box h3 {
    font-size: 45px;
    line-height: 53px;
  }

  .container-text p {
    font-size: 18px;
    line-height: 28px;
  }

  .img-box {
    left: 0%;
    width: 540px;
    height: 608px;
  }
}

@media screen and (max-width: 614px) {
  .container-box h5 {
    margin-bottom: 0px;
  }
  .container-box p {
    margin-top: 0px;
  }
  .container-box {
    gap: 5px;
  }
  .button-section {
    margin-top: 0px;
  }
}

.aa {
  background-image: url();
}

@media screen and (max-width: 400px) {
  .container-box h3 {
    font-size: 30px;
    line-height: 32px;
  }

  .button-section {
    padding: 5px 10px;
  }
}

/**  */

[class="dark"] .container-box h5 {
  background-color: rgba(255, 255, 255, 0.06);
  color: #f6d273;
}

/* [class="light"] .section{
  background: linear-gradient(to bottom, #79afffd4, #d0e5f3);
} */

[class="light"] .button a {
  color: black;
}

[class="dark"] .section {
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

[class="light"] .section {
  background: linear-gradient(to bottom, #005fa3, #8dceff);
}
</style>