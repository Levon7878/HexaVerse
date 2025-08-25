<template>
  <section class="plan-start">
    <div class="text-container">
      <div class="text-block">
        <h4>View Plan</h4>
        <h3>View Our Pricing Plan And Start Your Project</h3>
      </div>
      <div class="start-block-text1">
        <h4>
          Digital marketing agencies often run paid advertising campaigns for
          themselves. This includes creating compelling.
        </h4>
      </div>
    </div>
    <div class="box-container">
      <div class="start-container">
        <div class="plan-block" v-for="block in items" :key="block.id">
          <h3>{{ block.Plan }}</h3>
          <p>{{ block.work }}</p>
          <div class="price-block">
            <h2>{{ block.price }}</h2>
            <h5>{{ block.month }}</h5>
          </div>
          <Button class="plan-button">{{ block.button }}</Button>
          <div class="included-plan">
            <p>{{ block.texts }}</p>
            <div class="checks">
              <i class="fas fa-check"></i>
              <p>{{ block.digitalMarketing }}</p>
            </div>
            <div class="checks">
              <i class="fas fa-check"></i>
              <p>{{ block.digitalPr }}</p>
            </div>
            <div class="checks">
              <i class="fas fa-check"></i>
              <p>{{ block.webDevelopment }}</p>
            </div>
            <div class="checks">
              <i class="fas fa-check"></i>
              <p>{{ block.webDesign }}</p>
            </div>
            <div class="checks">
              <i class="fas fa-check"></i>
              <p>{{ block.aiDevelopment }}</p>
            </div>
            <div class="checks">
              <i class="fas fa-check"></i>
              <p>{{ block.cmsDevelopment }}</p>
            </div>
            <div class="checks">
              <i class="fas fa-check"></i>
              <p>{{ block.projectManagement }}</p>
            </div>
            <div class="checks">
              <i class="fas fa-check"></i>
              <p>{{ block.graphicDesign }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useMyStore } from "@/store/myStore";
import Button from "./Button.vue";
import { computed } from "vue";

export default {
  name: "MySVGComponent",
  components: {
    Button,
  },
  setup() {
    const store = useMyStore();

    const items = computed(() => store.planBlock);

    return {
      items,
    };
  },
};
</script>

<style scoped>
.text-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.plan-start {
  width: 100%;
}

.plan-block {
  max-width: 416px;
  border: 2px solid white;
  border-radius: 8px;
  height: 688px;
  overflow-y: auto;
  padding: 45px;
  transition: height 0.3s ease;
  cursor: pointer;
}

.plan-block h3 {
  font-weight: 500;
  margin-bottom: 25px;
  font-size: 22px;
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  line-height: 34px;
  color: aliceblue;
}

.plan-block p {
  color: rgba(255, 255, 255, 0.6509803922);
  line-height: 28px;
  font-weight: 400;
}

.plan-button {
  margin-top: 30px;
}

.text-block {
  max-width: 536px;
  margin-left: 40px;
}

.text-block h4 {
  font-weight: 600;
  border-radius: 5px;
  display: inline-block;
  padding: 13px 19px;
  color: orange;
  font-size: 21px;

  background-color: rgba(255, 255, 255, 0.06);
}
.plan-block::-webkit-scrollbar {
  width: 12px;
}

.plan-block::-webkit-scrollbar-track {
  background: #d4d2d2;
  border-radius: 5px;
}

.plan-block::-webkit-scrollbar-thumb {
  background: #000046;
  background: -webkit-linear-gradient(to right, #1cb5e0, #000046);
  background: linear-gradient(to right, #1cb5e0, #000046);
  border-radius: 10px;
  cursor: pointer;
}

.text-block h3 {
  padding-top: 30px;
  font-weight: 700;
  line-height: 52px;
  font-size: 40px;
  color: #fff;
}

.start-block-text1 {
  max-width: 536px;
}

.start-block-text1 h4 {
  color: rgba(255, 255, 255, 0.6509803922);
  line-height: 28px;
  font-weight: 400;
}

.box-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.start-container {
  display: flex;
  width: 1800px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.checks p {
  color: #fff;
  font-weight: 500;
  line-height: 28px;
  max-width: 280px;
}

.checks {
  display: flex;
  gap: 7px;
  margin-bottom: 23px;
  align-items: baseline;
}

.price-block {
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  gap: 4px;
}

.price-block h2 {
  font-size: 40px;
  color: #fff;
  margin: 0;
}

.price-block h5 {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6509803922);
}

.included-plan {
  margin-top: 30px;
}

[class="light"].text-block h3 {
  color: black;
}

[class="dark"] .text-block h4 {
  color: orange;
}

@media screen and (max-width: 1100px) {
  .text-container {
    flex-wrap: wrap;
    text-align: center;
    padding-top: 25px;
    gap: 16px;
  }
  .text-block {
    margin-left: 0;
  }
}
</style>
