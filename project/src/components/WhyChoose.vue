
<script>
import { useMyStore } from "@/store/myStore";
import { computed } from "vue";

export default {
  setup() {
    const store = useMyStore();

    const chooseBlock1 = computed(() => store.chooseBlock1 || []);
    const chooseBlock2 = computed(() => store.chooseBlock2 || []);
    const chooseBlock3 = computed(() => store.chooseBlock3 || []);

    return {
      chooseBlock1,
      chooseBlock2,
      chooseBlock3,
    };
  },
};
</script>

 <template>
  <div class="choose">
    <div class="choose-container">
      <div class="content-wrapper">
        <div
          class="choose-block"
          v-for="choose in chooseBlock1"
          :key="choose.id"
        >
          <p>{{ choose.text1 }}</p>
          <h3>{{ choose.text2 }}</h3>
          <h5>{{ choose.text3 }}</h5>
        </div>
        <div class="container-box">
          <div class="container-text-img">
            <div class="container-block-wrapper">
              <div
                class="block-wrapper"
                v-for="wrapper in chooseBlock2"
                :key="wrapper.id"
              >
                <img :src="wrapper.img" alt="" />
                <h3>{{ wrapper.text4 }}</h3>
                <h3>{{ wrapper.text5 }}</h3>
              </div>
            </div>
            <div class="line"></div>
            <div class="texting" v-for="slack in chooseBlock3" :key="slack.id">
              <i class="fas fa-check"></i>
              <p>{{ slack.text6 }}</p>
              <p>{{ slack.text7 }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="img-box">
        <img :src="`/src/Img/bg_img.png`" alt="" />
      </div>
    </div>
  </div>
</template>


<style scoped>
.block-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.choose {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 125px;
}

.container-text-img {
  width: 622px;
  height: 369px;
  padding: 10px 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #203548, #072f78);
  color: aliceblue;
}
.choose-block {
  max-width: 536px;
  height: 275px;
  position: relative;
  right: 254px;
}
.content-wrapper {
  width: 800px;
  position: relative;
  z-index: 1;
  right: 605px;
}

.line {
  height: 1px;
  background-color: black;
  width: 100%;
  margin-top: 43px;
}

.choose-block p {
  padding: 13px 19px;
  background-color: rgba(255, 255, 255, 0.06);
  font-weight: 600;
  border-radius: 5px;
  display: inline-block;
  color: orange;
  font-size: 21px;
}

.choose-block h3 {
  font-size: 40px;
  font-weight: 700;
}

.choose-block h5 {
  line-height: 28px;
  font-weight: 400;
  margin-bottom: 0;
}

.img-box img {
  width: 1150px;
  height: 600px;
}

.img-box {
  position: absolute;
}

.choose-container {
  width: 1900px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
}

.container-block-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.texting p {
  color: rgba(255, 255, 255, 0.6509803922);
  line-height: 28px;
  font-weight: 400;
  margin-bottom: 0;
  margin-left: 10px;
}
.texting {
  display: flex;
  align-items: center;
  margin-top: 22px;
}

@media screen and (max-width: 1600px) {
  .choose-block {
    right: 0;
  }
}

@media screen and (max-width: 1750px) {
  .img-box img {
    max-width: 800px;
    height: 643px;
    object-fit: cover;
  }
  .choose-block {
    right: 0;
  }
}

@media screen and (max-width: 1400px) {
  .choose-block {
    left: 100px;
  }
  .container-box {
    position: relative;
    left: 100px;
  }
  .img-box img {
    max-width: 700px;
    height: 610px;
  }
}

@media screen and (max-width: 1310px) {
  .content-wrapper {
    right: 483px;
  }
}
@media screen and (max-width: 1200px) {
  .img-box img {
    filter: opacity(0.2);
    max-width: 600px;
    height: 650px;
  }

  .choose-block {
    bottom: 36px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 15px;
  }

  .choose-block h3 {
    font-size: 37px;
    line-height: 47px;
  }

  .container-text-img {
    width: 536px;
    height: 553px;
    padding: 40px;
  }

  .container-block-wrapper {
    flex-direction: column;
    align-items: stretch;
  }

  .container-box {
    position: relative;
    bottom: 50px;
  }
}

@media screen and (max-width: 1180px) {
  .content-wrapper {
    width: 720px;
  }
}

@media screen and (max-width: 1105px) {
  .content-wrapper {
    right: 333px;
  }
}
@media screen and (max-width: 967px) {
  .content-wrapper {
    right: 280px;
  }
}
@media screen and (max-width: 911px) {
  .content-wrapper {
    right: 230px;
  }
}

@media screen and (max-width: 911px) {
  .content-wrapper {
    right: 150px;
  }
}
@media screen and (max-width: 773px) {
  .content-wrapper {
    right: 60px;
  }
  .container-box {
    width: 500px;
  }
}
@media screen and (max-width: 645px) {
  .content-wrapper {
    right: 0;
  }
  .choose-block {
    width: 488px;
  }
}
@media screen and (max-width: 718px) {
  .img-box img {
    position: relative;
    right: 50px;
  }
}

@media screen and (max-width: 615px) {
  .container-box {
    width: 545px;
  }
}

@media screen and (max-width: 599px) {
  .choose-block {
    left: 20px;
    width: 400px;
    height: 306px;
  }

  .container-box {
    left: 20px;
  }
}

@media screen and (max-width: 499px) {
  .choose-container {
    width: auto;
    height: auto;
  }
  .content-wrapper {
    width: auto;
    height: auto;
  }
  .choose-block {
    width: 100%;
    left: 0px;
  }
  .container-box {
    width: auto !important;
    height: auto !important;
    left: 0;
  }
  .container-text-img {
    width: 100% !important;
    height: auto !important;
  }
}

@media screen and (max-width: 702px) {
  .img-box img {
    left: 0;
    width: 100%;
  }
  .img-box {
    left: 0;
  }

  .content-wrapper {
    width: 100%;
  }
  .container-text-img {
    width: 100%;
  }

  .container-box {
    width: 75%;
  }
  .container-text-img {
    width: 434px;
  }
}

[class="light"] .container-text-img {
  background: #000000ed;
}
[class="dark"] .choose-block {
  color: aliceblue;
}
</style>