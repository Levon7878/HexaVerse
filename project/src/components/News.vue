<template>
  <div class="main">
    <div class="main-container">
      <div class="main-background">
        <v-container>
          <v-row>
            <v-col class="text-center">
              <h1
                class="text-white text-4xl"
                style="font-size: 50px; font-weight: 300"
              >
                Your new favorite emails about email
              </h1>
              <p class="text-white">
                Subscribe to keep your know-how fresh on email marketing,
                design, and development
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div class="block-box">
      <v-row class="flex-column">
        <div class="img-block">
          <img
            src="../Img/Newsletter/subscription.png"
            style="max-width: 500px"
            alt=""
          />
        </div>
        <div class="text-block">
          <h2>
            Get email strategies, how-tos, and more from our Litmus newsletter &
            emails
          </h2>
          <h3 class="pb-10">For Email Pros, By Email Pros →</h3>
          <p>
            You’ll be inspired by our content–and our beautiful design and
            coding techniques
          </p>
        </div>
      </v-row>
      <div class="container-blocks">
        <div             
        class="block-input w-100">
          <v-text-field
            label="Email"
            color="white"
            outlined
            dense
          ></v-text-field>
        </div >
        <div v-for="item in newsBlock" :key="item.id" class="block-boxes">
          <div class="news-box d-flex align-centre">
            <v-checkbox
            style="max-width: 50px; width: 100%;"
            :value="item.id"
            class="block-input"
            >
          </v-checkbox>
          <div
          class="block-items d-flex flex-column"
          style="max-width: 500px; margin-top: 18px"
          >
          <p>{{ item.title }}</p>
          <h4>{{ item.description }}</h4>
        </div>
      </div>
        </div>
        <v-col class="w-100 mt-5">
          <v-btn rounded="x-large" size="x-large" block>Subscribe</v-btn>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMyStore } from "@/store/myStore";
import { computed, ref } from "vue";

const store = useMyStore();
const newsBlock = computed(() => store.newsBlock);
const selected = ref(null);

const subscribe = (item) => {
  item.subscribed = true;
  console.log(`Subscribed to: ${item.title}`);
};
</script>

<style scoped>
.block-boxes {
  display: flex;
  gap: 10px;
}

.main-background {
  background-image: url("../Img/Newsletter/simple-blue.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 336px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  padding-top: 150px;
}

.text-block {
  max-width: 780px;
}

.block-box {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  margin: auto;
  gap: 53px;
}

.img-block {
  width: 100%;
  max-width: 800px;
}

.container-blocks{
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

[class="dark"] .main {
  background: linear-gradient(to bottom, #0d3b66, #051622) ;
}

[class="dark"] .block-box {
  color: white;
}

@media screen and (max-width: 1200px) {
  .block-box{
    flex-wrap: wrap;
    justify-content: center;
  }

  .img-block{
    display: flex;
    
    justify-content: center;
  }
}

[class="light"].main{
  background-color: aliceblue;
}
</style>
