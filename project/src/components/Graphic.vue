<script>
import { useMyStore } from '@/store/myStore';
import { computed } from 'vue';

export default {
  name: 'IconButtonExample',
  setup() {
    const store = useMyStore() 
    const graphicBlock = computed(() => store.graphicBlock)
    return {
      graphicBlock
    };
  },
};
</script>

<template>
  <div class="graphic-design-box">
    <div class="wrapper">
      <div class="text-graphic-design">
        <h1>Visual designs that communicate your brand effectively.</h1>
        <h3>Graphic Design</h3>
      </div>
      <div class="cols">
        <div class="col" v-for="item in graphicBlock" :key="item.text" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div class="front" :style="{ backgroundImage: 'url(' + item.image + ')' }">
              <div class="inner">
                <p>{{ item.text }}</p>
                <span>Burj Khalifa</span>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>The Burj Khalifa is the tallest building in the world and a global icon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
    margin: 0; padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.graphic-design-box{
  padding: 120px 0px;
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

.text-graphic-design{
  text-align: center;
  display: flex;
  flex-direction: column;
  gap:20px;
  align-items: center;
  color: white;

}
.text-graphic-design h1{
  font-size: 40px;
    font-weight: 700;
    line-height: 62px;
    max-width: 644px;
    text-align: center;
}


.text-graphic-design h3{
  font-size: 35px;
    font-weight: 300;
}

.wrapper {
    width: 90%; margin: 0 auto; max-width: 80rem;
    ;
}
.cols {
    display: -webkit-box; display: -ms-flexbox;
    display: flex; -ms-flex-wrap: wrap;
    flex-wrap: wrap; -webkit-box-pack: center;
    -ms-flex-pack: center; justify-content: center;
    padding: 50px 0;
}
.col {
    width: calc(25% - 2rem); margin: 1rem;
    cursor: pointer;
}

.container {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 1000px; perspective: 1000px;
}
.front, .back {
    background-size: cover; border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
    background-position: center; backface-visibility: hidden;
    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), 
    -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-backface-visibility: hidden;
    text-align: center; min-height: 280px;
    box-shadow: 0 0 10px solid blue; font-size: 1.5rem;
    height: auto; border-radius: 10px; color: #fff;
}

.back {
    background: #cedce7;
    background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
    background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
    background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
}
.front:after {
    position: absolute; top: 0; left: 0; z-index: 1;
    width: 100%; height: 100%; content: ''; border-radius: 10px;
    display: block; opacity: .6; background-color: #000;
    -webkit-backface-visibility: hidden; backface-visibility: hidden;

}
.container:hover .front, .container:hover .back {
    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), 
    -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back {
    position: absolute; top: 0; left: 0; width: 100%;
}
.inner {
    -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
    transform: translateY(-50%) translateZ(60px) scale(0.94);
    top: 50%; position: absolute; left: 0; width: 100%; padding: 2rem;
    -webkit-box-sizing: border-box; box-sizing: border-box;
    outline: 1px solid transparent; -webkit-perspective: inherit;
    perspective: inherit; z-index: 2;
}
.container .back {
    -webkit-transform: rotateY(180deg); transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d; transform-style: preserve-3d;
}
.container .front {
    -webkit-transform: rotateY(0deg); transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d; transform-style: preserve-3d;
}

.container:hover .back {
    -webkit-transform: rotateY(0deg); transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d; transform-style: preserve-3d;
}
.container:hover .front {
    -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d; transform-style: preserve-3d;
}
.front .inner p {
    font-size: 2rem; margin-bottom: 2rem; position: relative;
}
.front .inner p:after {
    content: ''; width: 4rem; height: 2px; position: absolute;
    background: #C6D4DF; display: block; left: 0; right: 0;
    margin: 0 auto; bottom: -.75rem;
}
.front .inner span {
    color: rgba(255, 255, 255, 0.7); font-family: 'Montserrat'; font-weight: 300;
}

@media screen and (max-width: 64rem) {
    .col {
        width: calc(33.333333% - 2rem);
    } }
@media screen and (max-width: 48rem) {
    .col {
        width: calc(50% - 2rem);
    } }

@media screen and (max-width: 32rem) {
    .col {
        width: 100%;
        margin: 0 0 2rem 0;
    }
}


/* -- YouTube Link Styles -- */

#source-link {
    top: 60px;
}

#source-link>i {
    color: rgb(94, 106, 210);
}

#yt-link {
    top: 10px;
}

#yt-link>i {
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

.meta-link>i,
.meta-link>span {
    height: 20px;
    line-height: 20px;
}

.meta-link>span {
    color: white;
    font-family: "Rubik", sans-serif;
    transition: color 600ms;
}
</style>
