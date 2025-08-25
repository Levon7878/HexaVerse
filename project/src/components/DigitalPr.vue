<template>
  <div class="pr">
    <section class="hero-section1">
      <div class="digital">
        <h2>Building your online reputation through strategic PR</h2>
        <h1>Digital PR</h1>
      </div>
      <div class="card-grid1">
        <div class="card1" v-for="item in digitaPrBlock" :key="item.text">
          <div class="card__background1">
            <img :src="item.image" alt="">
          </div>
          <div class="card__content1">
            <p class="card__category1">{{ item.text }}</p>
          </div>
        </div>
      </div>
     
    </section>
  </div>
</template>

<script>
import { useMyStore } from '@/store/myStore';
import { computed } from 'vue'; 

export default {
  name: 'BeautifulGrid',
  setup() {
    const store = useMyStore(); 
    const digitaPrBlock = computed(() => store.digitaPrBlock); 

    return {
      digitaPrBlock, 
    };
  },
};
</script>

<style>


.digital {
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 25px;
  color: white;
}

.digital h2 {
  font-size: 40px;
  font-weight: 700;
  line-height: 62px;
  max-width: 610px;
}

.digital h1{
  font-size: 35px;
  font-weight: 300;
}

:root {
  --background-dark: #2d3548;
  --text-light: rgba(255, 255, 255, 0.6);
  --text-lighter: rgba(255, 255, 255, 0.9);
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 64px;
  --width-container: 1200px;
}


html {
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
}

.hero-section1 {
  align-items: flex-start;
  background-image: linear-gradient(15deg, #0f4667 0%, #2a6973 150%);
  display: flex;
  min-height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 120px 0;
}

.card-grid1 {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 951px;
  width: 100%;
  gap: 15px;
}

@media screen and (max-width: 930px) {
  .card-grid1 {
    justify-content: center;
  }
}

.card1 {
  list-style: none;
  position: relative;
  width: 286px;
  height: 396px;
}

.card1:before {
  content: '';
  display: block;
  padding-bottom: 150%;
  width: 100%;
}

.card__background1 {
  background-size: cover;
  background-position: center;
  border-radius: var(--spacing-l);
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transform: scale(1) translateZ(0);
  transition: filter 200ms linear, transform 200ms linear;
}

.card:hover .card__background1 {
  transform: scale(1.05) translateZ(0);
}

.card-grid1:hover > .card1:not(:hover) .card__background1 {
  filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
}

.card__content1 {
  left: 0;
  padding: var(--spacing-l);
  position: absolute;
  top: 0;
}

.card__category1 {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-s);
  text-transform: uppercase;
}

.card__heading1 {
  color: var(--text-lighter);
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.4;
  word-spacing: 100vw;
}
</style>
