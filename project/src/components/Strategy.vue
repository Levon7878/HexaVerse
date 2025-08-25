


<script>
import { useMyStore } from "@/store/myStore";
import { computed } from "vue";

export default {
  setup() {
    const store = useMyStore();

    const strategyBlock = computed(() => store.strategyBlock);

    return {
      strategyBlock,
    };
  },
};
</script>


<template>
  <section class="strategy-content">
    <div class="box-content">
      <div class="container">
        <div class="container-box" v-for="str in strategyBlock" :key="str.id">
          <div class="num-str">
            <span>{{ str.num }}</span>
            <h3>{{ str.str }}</h3>
          </div>
          <h4>{{ str.txt }}</h4>
        </div>
      </div>
      <div class="container-box2">
        <div class="container-texts">
          <h4>How It Work</h4>
          <h3>Our Proven IT Solutions Process</h3>
        </div>
        <img src="/src/Img/work.png" alt="" />
      </div>
    </div>
  </section>
</template>


<style  scoped>
.strategy-content {
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.container-box {
  width: 510px;
  background: rgb(10 15 15 / 71%);
  border-radius: 8px;
  padding: 35px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.container-box2 h4 {
  padding: 13px 19px;
  background-color: rgba(255, 255, 255, 0.06);
  font-weight: 400;
  border-radius: 5px;
  display: inline-block;
}

.container-box2 h3 {
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
}

.container-box2 img {
  border-radius: 35px;
  border-bottom-left-radius: 229px;
  margin-top: 45px;
}

.container-texts {
  width: 648px;
  height: 137px;
  padding: 25px;
}

.box-content {
  display: flex;
  justify-content: space-evenly;
  width: 1600px;
  align-items: center;
}

.container-box2 {
  display: flex;
  flex-direction: column;
  height: 834px;
  justify-content: flex-end;
  gap: 15px;
}

.num-str span {
  font-weight: 700;
  line-height: 34px;
  font-size: 22px;
  color: rgb(255, 255, 255);
}

.num-str h3 {
  font-weight: 700;
  line-height: 34px;
  font-size: 22px;
  /* color: aliceblue; */
}

.num-str {
  display: flex;
  align-items: center;
  gap: 13px;
}

.container-box h4 {
  line-height: 28px;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 13px;
 
}

.container-texts h4{
  color: orange;
  font-size: 21px;
  font-weight: 600;
}

@media screen and (max-width: 1399px) {
  .container-box {
    width: 444px;
  }
}

@media screen and (max-width: 1199px) {
  .container-box {
    width: 374px;
  }
}

@media screen and (max-width: 1200px) {
  .container-box2 img {
    width: 468px;
  }
  .container-box2 {
    height: 731px;
    justify-content: flex-start;
  }
  .container-box {
    width: 374px;
  }
  .container-texts {
    width: 468px;
    height: 221px;
  }

  .container-texts h3 {
    padding-top: 30px;
    font-size: 31px;
    line-height: 46px;
    /* color: aliceblue; */
    font-weight: 700;
  }
}

@media screen and (max-width: 991px) {
  .box-content {
    flex-direction: column-reverse;
    width: 100%;
  }

  .container-box2 img {
    width: 696px;
    height: 604px;
    border-radius: 35px;
    border-bottom-left-radius: 229px;
    margin-top: 45px;
  }

  .container-box {
    width: 696px;
  }

  .container-box2 {
    height: auto;
  }

  .container {
    margin-top: 56px;
  }
}

@media screen and (max-width: 768px) {
  .container-box2 img {
    width: 516px;
    height: 448px;
    border-radius: 20px;
    border-bottom-left-radius: 100px;
  }

  .container-box {
    width: 516px;
  }
}

@media screen and (max-width: 533px) {
  .container-box2 img {
    width: 450px;
    height: 400px;
  }
  .container-box {
    width: 450px;
  }
}

@media screen and (max-width: 485px) {
  .container-texts {
    width: auto;
    height: auto;
  }
  .container-box2 img {
    width: 100%;
    height: 100%;
  }

  .container-box {
    width: 100%;
    height: 100%;
  }

  .container {
    width: auto;
    height: auto;
  }

  .container-box {
    width: 100%;
    height: auto;
  }

  .container-box2 {
    width: auto;
    height: auto;
  }
}

[class="light"] .container-box {
  backdrop-filter: brightness(0.1);
}

[class="dark"] .container-texts {
  color: aliceblue;
}

[class="dark"] .container-box {
  color: white;
}
</style>

