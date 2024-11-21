  <script>
import { useMyStore } from '@/store/myStore';

export default {
  setup() {
    const store = useMyStore()
    return{
      frontItems: store.frontBlock,
      backItems: store.backBlock
    }
  }
};
</script>
<template>
  <div class="block-wb">
    <div class="text-web">
      <h3>Creating robust and responsive websites</h3>
      <h1>Web Development</h1>
      <h2>Front-end Development</h2>
    </div>
    <div class="container-web">
      <div class="cards">
        <div class="card" v-for="item in frontItems" :key="item">
          <h1>
            <a href="#0">{{ item.text }}</a>
          </h1>
          <p>Thanks to Chris Coyier</p>
        </div>
      </div>
    </div>

    <div class="backend-container">
      <div class="back-text">
        <h1>Backend frameworks</h1>
      </div>
      <div class="backend-services">
        <div class="cards">
          <div class="card" v-for="item in backItems" :key="item">
            <h1>
              <a href="#0"> {{ item.text }}</a>
            </h1>
            <p>Thanks to Chris Coyier</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
  <style scoped>
* {
  font-family: "ZCOOL KuaiLe", cursive;
}
.block-wb {
  background: linear-gradient(to bottom, #0d3b66, #051622);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0;
}

.text-web {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.text-web h3 {
  font-size: 40px;
  font-weight: 700;
  line-height: 62px;
  max-width: 563px;
}

a {
  color: orange;
}
body {
  margin: 0;
  height: 100vh;
  display: grid;
  place-items: center;
  background: black;
  overflow: hidden;
}

.cards {
  display: flex;
  padding: 54px 0;
  flex-wrap: wrap;
}

@media screen and (max-width: 1329px) {
  .cards {
    max-width: 1200px;
    justify-content: normal;
  }
  .card {
    --distance: 0 !important;
  }
}

@media screen and (max-width: 1199px) {
  .cards {
    max-width: 902px !important;
  }
}

@media screen and (max-width: 899px) {
  .cards {
    max-width: 619px !important;
    gap: 13px;
  }
}

@media screen and (max-width: 630px) {
  .cards {
    max-width: 268px !important;
  }
}

.back-text {
  text-align: center;
}

.card {
  background: #101933;
  min-width: 300px;
  width: 300px;
  min-height: 360px;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.3s;
  --distance: -130px;
  color: white;
}
.card:not(:first-child) {
  margin-left: var(--distance);
}

.card:hover,
.card:focus-within {
  transform: translateY(-1rem);
}

.card:hover ~ .card,
.card:focus-within ~ .card {
  transform: translateX(calc(var(--distance) * -1));
}

.text-web,
.back-text {
  color: #ffff;
}
</style>
  