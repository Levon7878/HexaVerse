<script setup>
import Button from "./Button.vue";
</script>

<template>
  <div class="img-container">
    <div class="container_2">
      <div class="img-block">
        <img src="../Img/about.png" alt="" />
      </div>
      <div class="container_3">
        <div class="text-block">
          <h4>About Us</h4>
          <h3>Save Your Times And Money With Our Agencies</h3>
          <p>
            At HexaVerse, we specialize in turning complex technological
            challenges into streamlined, cutting-edge solutions, empowering
            businesses to thrive in the digital age.
          </p>
        </div>
        <div class="icons-text-block">
          <div class="icons-text">
            <div class="icon">
              <img src="../Img/doller.png" alt="" />
            </div>
            <h3>Experience and Expertise</h3>
          </div>
          <p>
            At HexaVerse, we are dedicated to transforming digital visions into
            reality. Our mission is to empower businesses with innovative IT
            solutions that drive growth and success.
          </p>
        </div>
        <div class="icons-text-block">
          <div class="icons-text">
            <div class="icon">
              <img src="../Img/profile.png" alt="" />
            </div>
            <h3>Experience and Expertise</h3>
          </div>
          <p>
            Founded in 2024, HexaVerse has consistently delivered top-notch IT
            services, including digital transformation, web development,
            software solutions, cybersecurity, and cloud solutions. Our team of
            skilled professionals is committed to excellence and innovation in
            every project.
          </p>
        </div>
        <div class="button-text">
          <Button class="butt"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* responsive */

/* end */

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* .img-container{
  background: linear-gradient(to bottom, #0d3b66, #051622);
} */

.container_2 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.icons-text-block {
  margin-top: 23px;
}

.icons-text-block p {
  margin-top: 10px;
}

.icons-text {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 15px;
}

.container_3 {
  width: 598px;
}

.img-block img {
  width: 948px;
  height: 747px;
  border-start-end-radius: 35px;
  border-end-end-radius: 35px;
}
.butt {
  width: 300px;
  margin-top: 30px;
}
.container_2 {
  display: flex;
  flex-direction: row;
  gap: 109px;
  margin-left: auto;
  margin-right: auto;
  justify-content: flex-start;
  margin-top: 100px;
}

.button-text {
  margin-top: 15px;
}

.text-block {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  margin-top: 15px;
}

.text-block h3 {
  font-size: 40px;
  /* color: aliceblue; */
  font-weight: 700;
  line-height: 52px;
  padding: 15px 0;
}

.container_2 button {
  margin-top: 50px;
}

.text-block h4 {
  padding: 13px 19px;
  /* color: #625635; */
  font-weight: 600;
  border-radius: 5px;
  display: inline-block;
  font-size: 21px;
}

.container_3 p {
  /* color: rgba(255, 255, 255, .6509803922); */
  line-height: 28px;
  font-weight: 400;
}

.icons-block {
  width: 536.02px;
  height: 116.95px;
  margin-top: 20px;
}

.icons-text h3 {
  /* color: aliceblue; */
  font-size: 22px;
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  line-height: 34px;
  display: inline-block;
  width: 571px;
}

.icons-text .icon {
  width: 53px;
  height: 53px;
  border-radius: 50%;
  /* background: aliceblue; */
}

.icons-text p {
  /* color: rgb(255, 255, 255); */
  line-height: 28px;
  margin-top: 15px;
  font-weight: 400;
}

.icons-block .butt {
  margin-top: 50px;
}

.img-container {
  width: 100%;
}

.icon-text {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icons-block {
  margin-top: 42px;
}

@media screen and (max-width: 1600px) {
  .img-block img {
    width: 800px;
  }
  .container_3 {
    width: 568px;
  }
  .container_2 {
    gap: 100px;
  }
  .icons-text h3 {
    width: 300px;
  }
}
@media screen and (max-width: 1667px) {
  .container_3 {
    width: 548px;
  }
  .container_2 {
    gap: 100px;
  }
}
@media screen and (max-width: 1446px) {
  .container_2 {
    gap: 70px;
  }
  .container_3 {
    width: 500px;
  }
}

@media screen and (max-width: 1300px) {
  .container_3 {
    width: 500px;
  }
  .container_2 {
    gap: 20px;
  }
  .img-block img {
    width: 700px;
  }
}

@media screen and (max-width: 1214px) {
  .container_3 {
    width: 520px;
  }
  .container_2 {
    gap: 20px;
  }
  .img-block img {
    width: 680px !important;
    height: 556px !important;

    object-fit: contain;
  }
  .text-block h3 {
    font-size: 37px;
    line-height: 47px;
  }

  .butt {
    margin-top: 14px;
  }
}

@media screen and (max-width: 1100px) {
  .text-block {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: baseline;
  }

  .container_3 {
    width: 520px !important;
    left: 25% !important;
  }

  .img-block img {
    width: 680px !important;
    height: 556px !important;

    object-fit: contain;
  }

  .text-block h3 {
    font-size: 37px;
    line-height: 47px;
  }

  .butt {
    margin-top: 14px !important;
  }
}

@media screen and (max-width: 1200px) {
  .container_3 {
    width: 462px;
  }
  .container_2 {
    gap: 0px !important;
  }
  .img-block img {
    width: 680px !important;
    height: 556px !important;
    object-fit: contain;
  }
}

@media screen and (max-width: 1199px) {
  .container_3 {
    width: 520px !important;
    position: absolute;
    left: 45%;
  }
  .container_2 {
    gap: 0px !important;
  }
  .img-block img {
    width: 600px !important;
    height: 700px !important;
    object-fit: contain;
    object-fit: cover;
    filter: opacity(0.2);
  }
  .img-block {
    position: relative;
  }

  /* .container_3{
    backdrop-filter: blur(5px);
    background: #1212224d;
  } */
}

@media screen and (max-width: 1378px) {
  .container_2 {
    gap: 20px;
  }

  .butt {
    margin-top: 16px !important;
  }
}

@media (max-width: 1334) {
  .container_2 {
    gap: 0px !important;
  }
  .img-block img {
    width: 680px;
    height: 600px;
  }
}

@media screen and (max-width: 999px) {
  .container_3 {
    left: 15% !important;
    width: 653px !important;
  }
}
@media screen and (max-width: 976px) {
  .container_3 {
    left: 8% !important;
  }
  .img-block img {
    max-width: 600px !important;
    height: 650px !important;
  }
}

@media screen and (max-width: 716px) {
  .container_3 {
    width: auto !important;
  }
  .img-block {
    width: 100%;
  }

  .text-block {
    margin: 0;
  }

  .icons-text-block {
    margin-top: 5px;
  }

  .button-text {
    margin-top: 5px;
  }

  .icons-text {
    margin-top: 5px;
  }
}

@media screen and (max-width: 768px) {
  .icons-text-block p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .text-block p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

@media screen and (max-width: 600px) {
  .img-block img {
    width: 550px !important;
  }
  .container_3 {
    width: auto !important;
  }
}

@media screen and (max-width: 550px) {
  .img-block img {
    width: 100% !important;
  }

  .container_3 {
    width: 100% !important;
    left: 0 !important;
  }
  .text-block {
    width: 100%;
    height: auto !important;
  }
  .icons-text-block {
    width: auto !important;
    height: auto !important;
  }
}

/**  */

[class="dark"] .text-block h4 {
  background-color: rgba(255, 255, 255, 0.06);
  color: orange;
}

[class="light"] .icon {
  background: black;
}

[class="dark"] .icon {
  background: aliceblue;
}

[class="dark"] .img-container {
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

[class="light"] .img-container {
  background: linear-gradient(to bottom, #005fa3, #d2ecff);
}
[class="dark"] .container_3 {
  color: aliceblue;
}

/**  */
</style> 
