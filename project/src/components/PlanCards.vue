
 

<script>
import { useMyStore } from "@/store/myStore";
import Button from "./Button.vue";
import { useDateFormat, useNow } from "@vueuse/core";
import { computed } from "vue";

export default {
  components: {
    Button,
  },

  setup() {
    const store = useMyStore()
    const planBlockItem = computed(() => store.planBlockItem)
    const formatted = useDateFormat(useNow(), "YYYY-MMM-DD");

    return {
      formatted,
      planBlockItem

    };
  },

};
</script>

<template>
  <div class="head-container">
    <div class="block">
      <div class="button-text">
        <h4>View Plan</h4>
        <h3>View Our Pricing Plan And Start Your Project</h3>
      </div>
      <div class="text-block"></div>
    </div>
    <div class="plan-block">
      <div class="plan-container">
        <div class="services" v-for="services in planBlockItem" :key="services.id">
          <div class="services-block">
            <div class="icons-date">
              <div class="icon-admin"></div>
              <div class="date">
                <p>{{ formatted }}</p>
              </div>
            </div>
            <div class="text-img">
              <a href="">{{ services.text }}</a>
              <img :src="'src/Img/blog' + services.src + '.jpg'" alt="" />
            </div>
            <div class="links-text">
              <p>{{ services.text2 }}</p>
              <a href="">{{ services.links }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.head-container {
  padding: 130px 0;
}
.button-text {
  display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.button-text h3 {
  font-size: 33px;
  /* color: aliceblue; */
  font-weight: 700;
  line-height: 52px;
  padding-top: 30px;
}


.button-text h4 {
  font-weight: 600;
    border-radius: 5px;
    display: inline-block;
    padding: 13px 19px;
    color: orange;
    font-size: 21px;
    background-color: rgba(255, 255, 255, 0.06);

}

.block {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
}

/* .check2 {
  width: 250px;
} */

.text-img img {
  border-radius: 8px;
  object-fit: cover;
  width: 356px;
  height: 251px;
  margin-top: 22px;
}

.plan-container {
  display: flex;
  width: 1320px;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.plan-block {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

/* .services {
  height: 608px;
} */

.services:hover {
  background-color: rgba(8, 38, 104, 0.452);
  transition: 0.3s;
}
.services-block {
  border-radius: 8px;
  padding: 35px 30px 45px 30px;
  background-color: rgba(255, 255, 255, 0.06);
  transition: all 0.5s;
}


.services-block p{
  color: aliceblue;
}

.links-text p {
  color: rgba(255, 255, 255, 0.6509803922);
  line-height: 28px;
  font-weight: 400;
  margin-bottom: 0;
}

.text-img a {
  color: aliceblue;
  font-size: 22px;
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  line-height: 34px;
  display: inline-block;
  margin-top: 22px;
}

.links-text p {
  color: rgba(255, 255, 255, 0.6509803922);
  line-height: 28px;
  font-weight: 400;
  margin-bottom: 0;
}

.links-text {
  display: flex;
  flex-direction: column;
  height: 89px;

  flex-wrap: nowrap;
}

.links-text a {
  color: #ffbe0b;
  padding-top: 30px;
}
.links-text a:hover {
  color: #fca311;
}

.text-img {
  margin-top: 22px;
}

@media screen and (max-width: 1400px) {
  .services-block {
    max-width: 356px;
  }
  .services-block img {
    border-radius: 8px;
    max-width: 296px;
    max-height: 251px;
    height: 100%;
    object-fit: cover;
  }
  .services {
    margin: 0;
  }
}

@media screen and (max-width: 1200px) {
  .block {
    justify-content: center;
  }
  .plan-container {
    flex-wrap: wrap;
    justify-content: center;
  }
  .services {
    max-width: 356px;
  }
}



@media screen and (max-width: 778px) {
  .plan-container {
    justify-content: center;
    margin-left: 1px;
  }
}

@media screen and (max-width: 370px) {
.services-block{
  padding: 30px 0px 45px 14px;
}
}

[class="dark"] .button-text {
  color: aliceblue;
}

[class="light"] .button-text {
  color: black;
}

[class="light"] .services {
  background: linear-gradient(to bottom, #124474, #051622);
}
</style>