
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
          <p>{{ $t(choose.text1) }}</p>
          <h3>{{ $t(choose.text2) }}</h3>
          <h5>{{ $t(choose.text3) }}</h5>
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
                <h3>{{ $t(wrapper.text4 || wrapper.text5) }}</h3>
              </div>
            </div>
            <div class="line"></div>
            <div class="texting" v-for="slack in chooseBlock3" :key="slack.id">
              <i class="fas fa-check"></i>
              <p>{{ $t(slack.text6 || slack.text7) }}</p>
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
.choose {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 125px;
  padding: 0 20px;
  box-sizing: border-box;
}

.choose-container {
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  gap: 48px;
  flex-wrap: wrap;
}

.content-wrapper {
  flex: 1 1 520px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 1;
}

.choose-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
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
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.2;
  font-weight: 700;
  margin: 0;
}

.choose-block h5 {
  line-height: 28px;
  font-weight: 400;
  margin: 0;
}

.container-box {
  width: 100%;
}

.container-text-img {
  width: 100%;
  max-width: 622px;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #203548, #072f78);
  color: aliceblue;
  box-sizing: border-box;
}

.container-block-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
}

.block-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex: 1 1 220px;
  min-width: 0;
}

.block-wrapper h3 {
  font-size: 18px;
  line-height: 1.35;
  margin: 0;
}

.line {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.25);
  width: 100%;
  margin-top: 28px;
}

.texting {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 20px;
}

.texting i {
  margin-top: 6px;
  flex-shrink: 0;
}

.texting p {
  color: rgba(255, 255, 255, 0.65);
  line-height: 26px;
  font-weight: 400;
  margin: 0;
}

.img-box {
  flex: 1 1 380px;
  display: flex;
  justify-content: center;
}

.img-box img {
  width: 100%;
  max-width: 560px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

@media screen and (max-width: 992px) {
  .choose {
    margin-top: 80px;
  }
  .choose-container {
    flex-direction: column-reverse;
    gap: 32px;
  }
  .content-wrapper,
  .img-box {
    width: 100%;
  }
}

:global(.light .container-text-img){
  background: #000000ed;
}
:global(.dark .choose-block){
  color: aliceblue;
}
</style>