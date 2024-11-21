<script>
export default {
  data() {
    return {
      items1: [
        { text: "WordPress", image: "src/Img/about.png" },
        { text: "OpenCart", image: "src/Img/about.png" },
        { text: "Joomla", image: "src/Img/about.png" },
        { text: "Drupal", image: "src/Img/about.png" },
      ],
      items2: [
        { text: "Webflow", image: "src/Img/about.png" },
        { text: "Wix", image: "src/Img/about.png" },
        { text: "Squarespace", image: "src/Img/about.png" },
        { text: "Shopify", image: "src/Img/about.png" },
      ],
    };
  },
};
</script>
<template>
  <div class="card-container">
    <div class="text-block-cms">
      <h1>Custom content management systems for easy control.</h1>
      <h2>Open Source CMS</h2>
    </div>
    <div class="card-box">
      <div class="card" v-for="item in items1" :key="item">
        <div class="card-inner">
          <div class="card-front">
            <img :src="item.image" alt="" />
            <h3>{{ item.text }}</h3>
          </div>
          <div class="card-back">
            <img :src="item.image" alt="" />
            <h3>Boat 135G Ultra Sound</h3>
            <h1>RS 40,999</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="saas-container">
      <div class="text-block-saas">
        <h2>SaaS CMS</h2>
      </div>
      <div class="card-box">
        <div class="card" v-for="item in items2" :key="item">
          <div class="card-inner">
            <div class="card-front">
              <img :src="item.image" alt="" />
              <h3>{{ item.text }}</h3>
            </div>
            <div class="card-back">
              <img :src="item.image" alt="" />
              <h3>Boat 135G Ultra Sound</h3>
              <h1>RS 40,999</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-container {
  padding: 150px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

.text-block-cms {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 25px;
  color: white;
}

.text-block-cms h1 {
  color: white;
  font-size: 40px;
  font-weight: 700;
  line-height: 62px;
  max-width: 610px;
}

.card-front h3 {
  font-size: 24px;
  color: white;
}

.card-box {
  display: flex;
  max-width: 1190px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  position: relative;
  background-color: transparent;
  width: 400px;
  height: 350px;
  perspective: 1000px;
  transform: perspective(750px) translate3d(0px, 0px, -250px) rotateX(27deg)
    scale(0.9, 0.9);
  border-radius: 20px;
  border: 5px solid #e6e6e6;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
  transition: 0.4s ease-in-out transform, 0.4s ease-in-out box-shadow;
}

.card:hover {
  transform: translate3d(0px, 0px, -250px);
  box-shadow: 0 50px 80px -20px rgba(32, 195, 187, 0.5);
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.text-block-saas {
  text-align: center;
  margin-top: 70px;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 16px;
}

.card-front {
  background: linear-gradient(to right, #1abc9c, #3498db);
}

.card-front img {
  width: 250px;
  margin-top: 18px;
}

.card-back {
  background: linear-gradient(to right, #1abc9c, #3498db);
  color: #ffffff;
  box-shadow: 0 5px 20px #3498db;
  transform: rotateY(180deg);
}

.card-front-1,
.card-back-1 {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 16px;
}

.card-front-1 {
  background: linear-gradient(to right, #ffbe0b, #ff0066);
}

.card-front-1 img {
  width: 200px;
  margin-top: 18px;
}

.card-back-1 {
  background: linear-gradient(to right, #ffbe0b, #ff0066);
  color: #ffffff;
  box-shadow: 0 5px 20px #d26d33;
  transform: rotateY(180deg);
}

.card-back img {
  width: 300px;
  height: 200px;
  margin-top: 1rem;
  transform: perspective(3000px) rotateY(5deg);
}

.card-back h3 {
  margin-bottom: 0.3rem;
}

.card-back h1 {
  margin: 0;
}

.card-back-1 img {
  width: 140px;
  margin-top: 1rem;
  transform: perspective(3000px) rotateY(5deg);
}

.card-back-1 h3 {
  margin-bottom: 0.3rem;
}

.card-back-1 h1 {
  margin: 0;
}


#source-link {
  top: 60px;
}

#source-link > i {
  color: rgb(94, 106, 210);
}

#yt-link {
  top: 10px;
}

#yt-link > i {
  color: rgb(219, 31, 106);
}

.meta-link {
  align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: inline-flex;
  gap: 5px;
  left: 10px;
  padding: 10px 20px;
  position: fixed;
  text-decoration: none;
  transition: background-color 600ms, border-color 600ms;
  z-index: 10000;
}

.meta-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.meta-link > i,
.meta-link > span {
  height: 20px;
  line-height: 20px;
}

.meta-link > span {
  color: white;
  font-family: "Rubik", sans-serif;
  transition: color 600ms;
}
</style>
