<template>
  <div class="block-wb">
    <div class="text-web">
      <h2>Innovative AI solutions for smarter business operations.</h2>
      <h1>AI Development</h1>
    </div>
    <div class="container-web">
      <div class="cards">
        <div class="card" v-for="(item, index) in block" :key="index">
          <h1><a href="">{{ item.text }}</a></h1>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMyStore } from '@/store/myStore';

export default {
  setup() {
    const store = useMyStore();
    
    return {
      block: store.aiBlock
    };
  },
};
</script>

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
    gap: 15px;
  }

  .text-web h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 62px;
    max-width: 610px;
  }

  a {
    color: orange;
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

  .cards {
    display: flex;
    padding: 54px 0;
    flex-wrap: wrap;
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

  .card p {
    margin-top: 35px;
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