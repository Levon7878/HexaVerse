<script >
import Button from "./Button.vue";
import MapComponent from "./Map.vue";
import router from "@/router";

export default {
  setup() {
    return {
      router,
    };
  },
  components: {
    Button,
    MapComponent,
  },
};
</script>

<template>
  <footer>
    <div class="footer-box-container">
      <div class="footer-head">
        <a href="">HexaVerse</a>
        <div class="line"></div>
        <div class="icons-container">
          <div class="icons">
            <i class="fab fa-facebook"></i>
          </div>
          <div class="icons">
            <i class="fab fa-instagram"></i>
          </div>
          <div class="icons">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <div class="icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
              />
            </svg>
          </div>

          <div class="icons">
            <i class="fab fa-youtube"></i>
          </div>
          <div class="icons">
            <i class="fab fa-tiktok"></i>
          </div>
        </div>
      </div>
      <div class="text-icon">
        <p>Innovating Your Digital Future</p>
      </div>
      <div class="line-block">
        <div class="border-line"></div>
      </div>

      <div class="footer-block">
        <div class="footer-container">
          <div class="footer-subscribe">
            <h3>Subscribe Now</h3>
            <p>
              Stay updated with the latest in IT solutions and services.
              Subscribe to our newsletter
            </p>
            <input type="text" placeholder="Enter your Email" />
            <Button class="footer-button"></Button>
          </div>
          <div class="about-us">
            <h3>About Us</h3>
            <div class="about-block">
              <a href="#/getInTouch">Get in Touch</a>
              <a href="">About Us</a>
              <a href="">Terms & Condition</a>
              <a href="">Privacy Policy</a>
              <a href="">Make a Payment</a>
            </div>
          </div>
          <div class="our-contact">
            <h3>Our Contact</h3>
            <div class="contact-block">
              <div class="contact-box">
                <i class="fas fa-envelope"></i>
                <a href="">hexaversepro@gmail.com</a>
              </div>
              <div class="contact-box">
                <i class="fas fa-phone-alt"></i>
                <a href="">+48 93939 0239</a>
              </div>
              <div class="contact-box">
                <i class="fas fa-phone-alt"></i>
                <a href="">+84 83939 0237</a>
              </div>
              <div class="contact-box">
                <i class="fas fa-calendar-alt"></i>
                <a href="">Mon - Fri 10:00 - 18:00</a>
              </div>
              <div class="contact-box">
                <i class="fas fa-map-marker-alt"></i>
                <a href="">49 Tigran Mets Avenue, Yerevan.</a>
              </div>
            </div>
          </div>

          <!-- <div class="our-services">
            <h3>Our Services</h3>
            <div class="our-block">
              <div class="service-block">
                <a href="">Digital Marketing</a>
                <a href="">Digital PR</a>
                <a href="">Project Management</a>
                <a href="">Web Development</a>
              </div>
              <div class="service-block2">
                <a href="">AI Development</a>
                <a href="">CMS Development</a>
                <a href="">Web Design</a>
                <a href="">Graphic Design</a>
              </div>
            </div>
          </div> -->
        </div>

        <MapComponent />
      </div>
      <!-- <div class="footer-end"> -->
      <!-- <Map></Map> -->
      <!-- <div class="line-block">
          <div class="border-line"></div>
        </div> -->
      <!-- <div class="texts-box">
          <p>© Copyright 2024 All Rights Reserved by</p>
          <a href="">Rootteam</a>
        </div> -->
      <!-- </div> -->
    </div>
  </footer>
</template>

<style scoped>
.line-block {
  width: 100%;
  display: flex;
  justify-content: center;
}
.footer-button {
  max-width: 249px;
  height: 50px;
  margin-top: 15px;
}

.footer-head a {
  font-size: 34px;
  font-weight: 600;
}

.text-icon {
  padding-bottom: 20px;
}

.text-icon p {
  text-align: center;
}
.line {
  display: block;
  width: 1px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.12);
}

[class="light"] footer {
  background: linear-gradient(to bottom, #005fa3, #8dceff) !important;
}

.footer-subsrcibe {
  color: rgb(255 255 255);
  line-height: 28px;
  font-weight: 400;
  margin-bottom: 0;
}

.footer-end {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.footer-subscribe {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.footer-subscribe input {
  max-width: 249px;
  outline: none;
  border-radius: 8px;
  background-color: rgba(0, 2, 122, 0);
  border: 1px solid rgba(255, 251, 251, 0.911);
  padding: 0px 27px;
  height: 36px;
  margin-top: 23px;
  color: aliceblue;
}
.footer-subscribe p {
  max-width: 328px;
  margin-top: 20px;
}

.our-services a {
  font-size: 16px;
}
.about-block {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 24px;
}

.service-block {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-block {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-block i {
  font-size: 16px;
}

.about-block a {
  font-size: 16px;
}

.icons {
  width: 42px;
  height: 42px;
  border-radius: 50px;
  background-color: rgb(2, 2, 2);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid aliceblue;
}

.icons:hover {
  /* background:transparent ; */
  border: none;
  transition: 0.5s;
  cursor: grabbing;
}

.footer-head {
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  padding: 40px 0px;
}

.border-block {
  display: flex;
  justify-content: center;
}

.border-line {
  background-color: aliceblue;
  width: 1251px;
  height: 1px;
}
footer {
  background: linear-gradient(to bottom, #0d3b66, #051622);
  color: #ffffff;
  margin-left: auto;
  width: 100%;
  margin-right: auto;
}

.contact-box {
  display: flex;
  flex-direction: row;
  gap: 12px;
}

.service-block2 {
  display: flex;
  flex-direction: column;
}

.footer-container {
  display: flex;
  gap: 31px;
}

.footer-block {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  flex-wrap: wrap;
  gap: 18px;
}

.texts-box {
  display: flex;
  justify-content: center;
  gap: 7px;
  padding: 25px 0px;
  flex-direction: row;
  flex-wrap: nowrap;
}

.icons-container {
  display: flex;
  gap: 5px;
}
@media screen and (max-width: 841px) {
  .footer-container {
    gap: 25px;
  }
}

@media screen and (max-width: 1318px) {
  .footer-block {
    gap: 50px;
  }
}

@media screen and (width: 1240px) {
  .footer-block {
    flex-direction: column;
  }
}

@media screen and (max-width: 778px) {
  .footer-container {
    flex-direction: column;
    gap: 45px;
  }
  .footer-subscribe {
    align-items: center;
  }
  .footer-subscribe p {
    text-align: center;
  }
  .about-us .about-block {
    align-items: center;
  }

  .our-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact-block {
    align-items: center;
  }
}
.about-us {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media screen and (max-width: 428px) {
  .footer-subscribe p {
    width: auto !important;
  }
  .footer-subscribe {
    width: 100% !important;
  }
}

@media screen and (max-width: 768px) {
  .line {
    display: none;
  }

  .footer-head {
    flex-wrap: wrap;
  }
}
</style>
