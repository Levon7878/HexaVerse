<template>
  <div>
    <section class="hero-section2">
      <div class="block-text">
        <h2>Empowering your brand with tailored digital strategies</h2>
        <p>Services</p>
        <h3>What Services We Provide For Your Business</h3>
      </div>
      <div class="card-grid2">
        <div class="card2" v-for="item in digitalItems" :key="item.id">
          <div
            class="card__background2"
            :style="{ backgroundImage: 'url(' + item.image + ')' }"
          ></div>
          <div class="card__content2">
            <p class="card__category2">{{ item.title }}</p>
            <div>
             

        
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { useMyStore } from '@/store/myStore';
export default {

  name: "Service",
  setup() {
    const store = useMyStore();

    return {
      digitalItems: store.digitalBlock

    };
  },
};
</script>

<style  scoped>
/* .services {
     background: linear-gradient(
     to bottom,
     #0d3b66
     #051622
   );
   margin-top: 94px;
 } */

.block-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  gap: 20px;
  color: white;
}

.block-text > h2 {
  font-size: 40px;
  font-weight: 700;
  line-height: 62px;
  max-width: 563px;
  text-align: center;
}

.block-text > p {
  font-size: 23px;
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

* {
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
}

body {
  height: 100%;
}

.hero-section2 {
  align-items: center;
  /* background-image: linear-gradient(15deg, #0f4667 0%, #2a6973 150%); */
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;
  padding: 130px 0;
}

.card-grid2 {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  width: 100%;
}

@media (min-width: 540px) {
  .card-grid2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .card-grid2 {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card2 {
  list-style: none;
  position: relative;
}

.card2:before {
  content: "";
  display: block;
  padding-bottom: 150%;
  width: 100%;
}

.card__background2 {
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

.card2:hover .card__background2 {
  transform: scale(1.05) translateZ(0);
}

.card-grid2:hover > .card2:not(:hover) .card__background2 {
  filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
}

.card__content2 {
  left: 0;
  padding: var(--spacing-l);
  position: absolute;
  top: 0;
}

.card__category2 {
  color: var(--text-light);
  font-size: 18px;
  margin-bottom: var(--spacing-s);
  text-transform: uppercase;
  font-weight: 800;
}

.card__heading2 {
  color: var(--text-lighter);
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.4;
  word-spacing: 100vw;
}

[class="dark"] .hero-section2{
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

[class="light"] .hero-section2 {
  background-color: aliceblue;
}
</style>