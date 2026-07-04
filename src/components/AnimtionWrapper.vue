<script>
export default {};
</script>

<template>
  <div class="block-header-animation">
    <div class="header-animation-wrapper">
      <!-- <div class="icons-container">
        <div>
          <img width="60" src="../Img/WrapperAnimation/money.webp" alt="" />
          <p>
            Digital Marketing 
          </p>
        </div>
      </div> -->
      <div class="icons-container">
        <div>
          <img width="60" src="../Img/WrapperAnimation/analytics.webp" alt="" />
        </div>
        <p>Digital Marketing</p>
      </div>
      <div class="icons-container">
        <div>
          <img width="60" src="../Img/WrapperAnimation/money.webp" alt="" />
        </div>
        <p>Digital PR</p>
      </div>
      <div class="icons-container">
        <div>
          <img width="60" src="../Img/WrapperAnimation/analytics.webp" alt="" />
        </div>
        <p>Project Management</p>
      </div>
      <div class="icons-container">
        <div>
          <img width="60" src="../Img/WrapperAnimation/money.webp" alt="" />
        </div>
        <p>Web Development</p>
      </div>
      <div class="icons-container">
        <div>
          <img width="60" src="../Img/WrapperAnimation/analytics.webp" alt="" />
        </div>
        <p>AI Development</p>
      </div>
      <div class="icons-container">
        <div>
          <img width="60" src="../Img/WrapperAnimation/money.webp" alt="" />
        </div>
        <p>CMS Development</p>
      </div>
      <div class="icons-container">
        <div>
          <img width="60" src="../Img/WrapperAnimation/analytics.webp" alt="" />
        </div>
        <p>
           Web Design 
        </p>
      </div>
      <div class="icons-container">
        <div>
          <img width="60" src="../Img/WrapperAnimation/money.webp" alt="" />
        </div>
        <p>
          Graphic Design
        </p>
      </div>
      <div class="main-image-wrapper">
        <div class="img-text">
          <img wo src="../Img/WrapperAnimation/V1.png" alt="" />
          <p>1 JavaScript / 1 Platform</p>
        </div>
        <div class="border-animation"></div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.icons-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-animation: orbit 36s linear infinite;
  -moz-animation: orbit 36s linear infinite;
  -o-animation: orbit 36s linear infinite;
  animation: orbit 36s linear infinite;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.icons-container div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media only screen and (max-width: 500px) {
  .icons-container div > img {
    max-width: 40px;
  }
}

.icons-container p {
  line-height: 1.3;
}

@media only screen and (max-width: 500px) {
  .icons-container p {
    font-size: 0.8rem;
  }
}

.icons-container:nth-child(1) {
  animation-delay: 0.5s;
  transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(0deg);
}

.icons-container:nth-child(2) {
  animation-delay: -3.5s;
  transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(40deg);
}

.icons-container:nth-child(3) {
  animation-delay: -7.5s;
  transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(80deg);
}

.icons-container:nth-child(4) {
  animation-delay: -12.5s;
  transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(120deg);
}

.icons-container:nth-child(5) {
  animation-delay: -16.5s;
  transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(160deg);
}

.icons-container:nth-child(6) {
  animation-delay: -20.5s;
  transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(200deg);
}

.icons-container:nth-child(7) {
  animation-delay: -25.5s;
  transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(240deg);
}

.icons-container:nth-child(8) {
  animation-delay: -31.5s;
  transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(280deg);
}

/* .icons-container:nth-child(9) {
  animation-delay: -32s;
  transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(320deg);
} */

@-webkit-keyframes orbit {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-360deg) translateX(195px)
      rotate(360deg);
  }
}

@-moz-keyframes orbit {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-360deg) translateX(195px)
      rotate(360deg);
  }
}

@-o-keyframes orbit {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-360deg) translateX(195px)
      rotate(360deg);
  }
}

@keyframes orbit {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(195px) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-360deg) translateX(195px)
      rotate(360deg);
  }
}

.block-header-animation {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-animation-wrapper {
  width: 420px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../Img/WrapperAnimation/head-anim-img.webp");
  background-size: cover;
  position: relative;
}

.main-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.border-animation {
  width: 200px;
  height: 200px;
  background-image: url("../Img/WrapperAnimation/anim-img.webp");
  background-repeat: no-repeat;
  background-size: 200px 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-animation-name: border-animation;
  animation-name: border-animation;
  -webkit-animation-duration: 20s;
  animation-duration: 20s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}

.img-text {
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.img-text img {
  width: 40px;
}

.img-text p {
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: capitalize;
  color: #fcfdff;
  width: 140px;
  min-width: 140px;
}

@keyframes border-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
