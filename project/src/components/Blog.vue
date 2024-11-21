
<template >
  <section class="blog-container">
    <div class="blog-box">
      <div class="box-text-container">
        <div class="blog-text">
          <h4>BLOGS</h4>
          <h1>Blogs on product management & user feedback</h1>
        </div>
      </div>
      <div class="img-line-container">
        <h3>READ BY CATEGORY</h3>
        <div class="line"></div>
      </div>
      <div class="blog-img-text">
        <div
          v-for="(item, index) in blogTextItems"
          :key="index"
          class="block-container"
        >
          <div class="img-block">
            <img :src="item.imgSrc" alt="" />
          </div>
          <div class="button-block">
            <button>{{ item.buttonText }}</button>
          </div>
        </div>
      </div>
      <div class="recent-posts">
        <div class="text-recent">
          <h4>RECENT POSTS</h4>
          <div class="line"></div>
        </div>
        <div class="recent-img-container">
          <div class="recent-img-block">
            <img src="../Img/Blog/feature-voting.jpg" alt="" />
          </div>
          <div class="text-container">
            <div class="proffession-date">
              <button>Product Management</button>
              <div class="line-proff"></div>
              <h4>Jul 06, 2024</h4>
            </div>
            <div class="text-container-2">
              <a href="">Top 14 Feature Voting Tools for SaaS Companies </a>
              <p>
                Discover the top 14 feature voting tools for SaaS companies.
                Learn how to prioritize product development and boost customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div class="recent-container">
          <div
            class="recent-block"
            v-for="(item2, index) in blogPostsItems"
            :key="index"
          >
            <div class="recent-img-text">
              <img :src="item2.img" alt="" />
              <div class="proffession-date">
                <button>{{ item2.Profession }}</button>
                <div class="line-proff"></div>
                <p>{{ item2.date }}</p>
              </div>
              <div class="text-rec">
                <h3>{{ item2.text1 }}</h3>
                <p>{{ item2.text2 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { computed } from "vue";
import { useMyStore } from "@/store/myStore";

export default {
  setup() {
    const store = useMyStore();

    const blogTextItems = computed(() => store.blogTextItems || []);
    const blogPostsItems = computed(() => store.blogPostsItems || []);

    return {
      blogTextItems,
      blogPostsItems,
    };
  },
};
</script>

<style scoped>
.blog-box {
  width: 100%;
  padding: 140px 0;
  max-width: 1200px;
}

.blog-text h4 {
  font-family: Inter, Helvetica Neue, system-ui, -apple-system;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
}

.box-text-container {
  padding: 80px 0;
}

.blog-text h1 {
  font-size: 56px;
  letter-spacing: -0.025em;
  line-height: 1;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
  font-family: BricolageGrotesque, Helvetica Neue, system-ui, -apple-system;
}

.blog-text {
  max-width: 576px;
  margin-left: auto;
  margin-right: auto;
}

.line {
  width: 100%;
  height: 1px;
  background-color: black;
  margin-top: 15px;
}

.blog-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.blog-img-text {
  display: flex;
  padding: 52px 0;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media (max-width: 1089px) {
  .blog-img-text {
    justify-content: center;
    gap: 20px;
  }
}

@media (max-width: 998px) {
  .recent-img-container {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 535px) {
    .recent-img-container {
      padding: 15px !important;
    }
    .text-recent {
      padding: 15px !important;
    }
    .img-line-container {
      padding: 15px !important;
    }
  }

  .text-container {
    max-width: 532px;
  }
}

@media (max-width: 557px) {
  .blog-text h1 {
    font-size: 32px;
  }
}

.block-container {
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
  max-width: 362px;
}

.block-container img {
  width: 100%;
  height: 144px;
  object-fit: cover;
  border-radius: 1rem;
}

.button-block {
  position: absolute;
  bottom: 15px;
  left: 10px;
}

.button-block button {
  padding: 0.5rem 1rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 9999px;
  border: none;
  cursor: pointer;
}
.recent-img-text img {
  width: 100%;
  max-width: 362px;
  height: 266px;
}

/******************************************************* recent posts ***************************************** */

.recent-img-block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  background-position: center;
}

.recent-img-container .recent-img-block img:hover {
  transform: scale(1.1);
}

.recent-img-container {
  display: flex;
  gap: 48px;
  padding: 50px 0;
}
.recent-img-block {
  overflow: hidden;
  position: relative;
  max-width: 552px;
  height: 266px;
  transition: transform 0.3s ease;
}

.line-proff {
  width: 32px;
  height: 1px;
  background: black;
}

.proffession-date {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 1px;
}

.proffession-date button {
  padding: 1px 8px;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 9999px;
  transition: all 300ms;
}

.proffession-date button:hover {
  background-color: #d6d6d6;
  color: #000;
}

.text-container-2 a {
  font-size: 2rem;
  letter-spacing: -0.025em;
  line-height: 1;
  color: black;
}

.text-container-2 p {
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 18px;
  color: black;
}
.recent-img-container:hover .text-container-2 a {
  text-decoration: underline;
}
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.recent-container {
  display: flex;
  padding: 55px 0;
  justify-content: center;
  gap: 56px;
  flex-wrap: wrap;
}

.recent-img-text {
  max-width: 362px;
}

.text-rec h3 {
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 600;
}

.text-rec p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 13px;
  font-weight: 100;
  font-size: 20px;
}

/**  ********************************************************************** */

[class="dark"] .blog-container {
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

[class="light"] .blog-container {
  background: linear-gradient(to bottom, #005fa3, #8dceff) !important;
}

[class="dark"] .recent-img-text,
.text-container {
  color: aliceblue;
}

[class="dark"] .text-container-2 a {
  color: aliceblue;
}

[class="dark"] .blog-text {
  color: aliceblue;
}

[class="dark"].line {
  background-color: aliceblue;
}

[class="dark"].img-line-container {
  color: aliceblue;
}
</style>