<script>
import { useMyStore } from "@/store/myStore";
import { computed } from "vue";

export default {
  setup() {
    const store = useMyStore();
    const latestBlock = computed(() => store.latestBlock || []);

    return {
      latestBlock,
    };
  },
  methods: {
    goToTestomonials() {
      setTimeout(() => {
        this.$router.push({ path: "/Client" });
      }, 1200);
    },
  },
};
</script>


<template>
  <transition name="fade">
    <div class="project">
      <div class="text-latest">
        <h5>View Our Latest Project</h5>
        <h4>Our Latest Case Studies For Our Marketing Clients</h4>
      </div>
      <div class="latest-project">
        <div class="projects-cards">
          <div class="project-img" v-for="card in latestBlock" :key="card.id">
            <div class="project-cards-img" @click="goToTestomonials">
              <div class="container-img">
                <div class="container-absolute"></div>
                <img
                  :src="'src/Img/LatestRate/rate' + card.src + '.svg'"
                  alt=""
                />
                <div class="color-overlay"></div>
                <div class="cards-container">
                  <div class="cards">
                    <div class="cards-box">
                      <div class="block-1">
                        <h5>{{ card.us }}</h5>
                        <p>{{ card.name }}</p>
                      </div>
                      <div class="line"></div>
                      <div class="block-2">
                        <p>{{ card.web }}</p>
                        <h5>{{ card.Dev }}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<style scoped>
.latest-project {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.projects-cards {
  width: 1300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.project-img {
  position: relative;
  transition: all 0.5s;
  cursor: pointer;
}

.container-img {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.container-absolute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: opacity 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.project-cards-img:hover .container-absolute {
  opacity: 0.7;
}

.project-cards-img img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  transition: transform 0.5s;
}

.project-cards-img:hover img {
  transform: scale(1.05);
}

.color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(234 235 224 / 50%);
  opacity: 0;
  transition: opacity 0.5s;
}

.project-cards-img:hover .color-overlay {
  opacity: 1;
}

.cards {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 26px;
  width: 480px;
  background: linear-gradient(
    180deg,
    rgb(8 20 19 / 68%) 0%,
    rgba(133, 153, 187, 0.86) 100%
  );
  backdrop-filter: brightness(0.3);
  display: flex;
  align-items: center;
  border-radius: 8px;
}

.container-img {
  width: 554px;
  height: 478px;
}

.line {
  height: 50px;
  width: 1px;
  background: #ffffff;
}

.text-latest h5 {
  padding: 13px 19px;
  background-color: rgba(255, 255, 255, 0.06);
  font-weight: 600;
  border-radius: 5px;
  display: inline-block;
  font-size: 21px;
  color: orange;
}

.text-latest h4 {
  font-size: 40px;
  color: var(--primary-clr);
  font-weight: 700;
  line-height: 52px;
}

.text-latest {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  gap: 25px;
}

.block-1,
.block-2 {
  display: flex;
  flex-direction: column;
}

.block-1 p,
.block-1 h5,
.block-2 p,
.block-2 h5 {
  color: rgba(255, 255, 255, 0.7);
}

.cards-box {
  display: flex;
  gap: 19px;
  align-items: center;
}


.cards::after {
  content: "";
  position: absolute;
  right: -30px;
  top: 0;
  border-top: 120px solid aliceblue;
  border-left: 25px solid aliceblue;
  border-right: 30px solid rgba(0, 0, 0, 0);
  border-top-right-radius: 8px;
  height: 0;
  width: 40px;
  transition: all 0.5s;
}

@media screen and (max-width: 578px) {
  .container-img {
    width: auto;
    height: auto;
  }
  .projects-cards {
    padding: 0 31px;
  }
}

[class="dark"] .text-latest {
  color: aliceblue;
}
</style>