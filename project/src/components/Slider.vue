<template>
  <div class="d-flex justify-center">
  <v-window v-model="currentWindow" show-arrows class="next-prev animated-window">
    <v-window-item v-for="user in usersBlock" :key="user.id" class="item">
      <v-card
        id="box"
        class="d-flex justify-center align-center"
        height="500px"
      >
        <div class="container-block">
          <div class="additional-images">
            <div
              v-for="(userImage, imgIndex) in user.users"
              :key="imgIndex"
              :class="`image-${imgIndex}`"
              @click="handleImageClick(imgIndex)"
            >
              <img :src="userImage" alt="User Image" class="user-images" />
            </div>
          </div>
          <div class="block">
            <div class="quote">
              <img :src="user.quote" alt="" />
            </div>
            <div class="user-block">
              <img :src="user.image" alt="" />
              <div id="user">
                <h3>{{ user.name }}</h3>
                <h4>{{ user.role }}</h4>
              </div>
              <div class="text-center">
                <v-rating
                  v-model="user.rating"
                  active-color="orange"
                  color="orange-lighten-1"
                ></v-rating>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-window-item>
  </v-window>
</div>
</template>

<script setup>
import { useMyStore } from "@/store/myStore";
import { ref, computed, watch } from "vue";

const store = useMyStore();
const usersBlock = computed(() => store.usersItems);
const currentWindow = ref(0);
const handleImageClick = (userIndex) => {
  store.setCurrentUserIndex(userIndex);
};

watch(
  () => store.currentIndex,
  (newIndex) => {
    currentWindow.value = newIndex;
  }
);
</script>




<style scoped>
.item {
  width: 1279px;
}
.user-block {
  display: flex;
  gap: 13px;
  align-items: center;
  flex-direction: column;
}
.user-block img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.user-block h4 {
  text-align: center;
}
#box {
  background: linear-gradient(to bottom, #0d3b66, #051622);
}
.block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.quote {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background-color: #142220;
  display: flex;
  align-items: center;
  justify-content: center;
}
.block p {
  width: 1080px;
  text-align: center;
}
.next-prev {
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
/*///////////////////////Absolute relative images //////////////////*/

.additional-images {
  width: 100%;
  position: absolute;
  left: 5px;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
}

.image-0,
.image-1,
.image-2,
.image-3 {
  position: absolute;
  cursor: pointer;
}

.image-0 {
  left: 90%;
  top: 70%;
}

.image-1 {
  left: 84%;
  top: 7%;
}

.image-2 {
  left: 14%;
  top: 15%;
}

.image-3 {
  left: 7%;
  top: 83%;
}

/*///////////////////////Absolute relative images   End//////////////////*/

@media screen and (max-width: 1200px) {
  .item {
    width: 100%;
  }
  .container-block {
    width: 100%;
  }
  .block p {
    width: auto;
  }
}
@media screen and (max-width: 1279px) {
  .next-prev {
    width: 100%;
  }
}
[class="dark"] .block {
  color: aliceblue;
}
[class="light"] .block {
  color: black;
}
</style>
