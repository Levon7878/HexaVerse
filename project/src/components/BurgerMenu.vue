<script >
import { ref, reactive } from "vue";

export default {
  setup() {
    const mobileNav = ref(false);
    const burgerClicks = reactive({
      about: false,
      services: false,
      community: false,
      portfolio: false,
      contact: false,
    });

    function toggleMenu() {
      mobileNav.value = !mobileNav.value;
    }

    function toggleBurgerClick(key) {
      burgerClicks[key] = !burgerClicks[key];
    }

    function contentClose(key) {
      burgerClicks[key] = false;
    }

    return {
      mobileNav,
      burgerClicks,
      toggleMenu,
      toggleBurgerClick,
      contentClose,
    };
  },
};
</script>

<template>
  <div>
    <div class="icon-burger" @click="toggleMenu">
      <i class="fas fa-bars" style="cursor: pointer"></i>
    </div>
    <Transition name="slide">
      <nav class="dropdown-nav" v-if="mobileNav">
        <a href="#">Home</a>

        <div class="menu-down-content">
          <div :class="{ 'icons-text-block': true, open: burgerClicks.about }">
            <div class="down-block">
              <a class="dropdown-a" href="#/DigitalPiar">About Us</a>
              <i
                class="fa fa-angle-down"
                style="cursor: pointer"
                @click="toggleBurgerClick('about')"
              ></i>
            </div>
            <div v-if="burgerClicks.about" class="burger-content">
              <a href="#">Our Story</a>
              <a href="#">Meet the Team</a>
            </div>
          </div>
        </div>

        <div class="menu-down-content">
          <div
            :class="{ 'icons-text-block': true, open: burgerClicks.services }"
            class="animated-block"
          >
            <div class="down-block">
              <a class="dropdown-a" href="#/DigitalPiar">Services Overview</a>
              <i
                class="fa fa-angle-down"
                style="cursor: pointer"
                @click="toggleBurgerClick('services')"
              ></i>
            </div>
            <div
              v-if="burgerClicks.services"
              class="burger-content"
              v-show="contentClose"
            >
              <a href="#/DigitalMarketing">Digital Marketing</a>
              <a href="#/DigitalPiar">Digital PR</a>
              <a href="#/ProjectManagment">Project Management</a>
              <a href="#/WebDevelopment">Web Development</a>
              <a href="#/AiDevelopment">AI Development</a>
              <a href="#/CmsDev">CMS Development</a>
              <a href="#/WebDesign">Web Design</a>
              <a href="#/GraphicDesign">Graphic Design</a>
            </div>
          </div>
        </div>
        <div class="menu-down-content">
          <div
            :class="{ 'icons-text-block': true, open: burgerClicks.community }"
          >
            <div class="down-block">
              <a class="dropdown-a" href="#/DigitalPiar">Community Section</a>
              <i
                class="fa fa-angle-down"
                style="cursor: pointer"
                @click="toggleBurgerClick('community')"
              ></i>
            </div>
            <div v-if="burgerClicks.community" class="burger-content">
              <a href="">Forum</a>
              <a href="">Blog</a>
              <a href="">Webinars and Events</a>
              <a href="">Resource Library</a>
              <a href="">Member Profiles</a>
            </div>
          </div>
        </div>
        <div class="menu-down-content">
          <div
            :class="{
              'icons-text-block': true,
              open: burgerClicks.portfolio,
              close: contentClose,
            }"
          >
            <div class="down-block">
              <a class="dropdown-a" href="#/DigitalPiar">Portfolio</a>
              <i
                class="fa fa-angle-down"
                style="cursor: pointer"
                @click="toggleBurgerClick('portfolio')"
              ></i>
            </div>
            <div v-if="burgerClicks.portfolio" class="burger-content">
              <a href="">Case Studies</a>
              <a href="">Gallery</a>
            </div>
          </div>
        </div>
        <div class="menu-down-content">
          <div
            :class="{ 'icons-text-block': true, open: burgerClicks.contact }"
          >
            <div class="down-block">
              <a class="dropdown-a" href="#/Contact">Contact</a>
              <i
                class="fa fa-angle-down"
                style="cursor: pointer"
                @click="toggleBurgerClick('contact')"
              ></i>
            </div>
            <div v-if="burgerClicks.contact" class="burger-content">
              <a href="">Contact Form</a>
              <a href="">Social Media Links</a>
              <a href="">Newsletter Signup</a>
            </div>
          </div>
        </div>
      </nav>
    </Transition>
  </div>
</template>

<style scoped>
.icon-burger {
  position: fixed;
  cursor: pointer;
  display: none;
}

.dropdown-a a {
  font-size: 17px;
}

.icons-text-block {
  width: 100%;
  position: relative;
}

.down-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dropdown-content {
  display: flex;
  flex-direction: column;
}

.burger-content {
  position: relative;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  opacity: 1;
}

.icons-text-block.open .burger-content {
  opacity: 1;
  animation: slideDown 0.5s ease-in-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translate(-20px, -20px);
  }
  to {
    opacity: 1;
    transform: translateY(20px, 20px);
  }
}

.icons-text-block.open .burger-content {
  opacity: 1;
  animation: slideDown 0.5s ease-in-out;
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 300px;
  background: linear-gradient(to bottom, #0d3b66, #051622);
  position: fixed;
  top: 94px;
  left: 0;
  z-index: 1000;
  padding: 20px;
  transform: translateX(0px);
  transition: all 0.4s ease-in-out;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0px);
}

.dropdown-nav a {
  color: white;
  text-decoration: none;
  margin: 3px 0;
}

@media screen and (max-width: 1200px) {
  .icon-burger {
    display: block;
    top: 37px;
  }

  .icon-burger i {
    font-size: 25px;
  }
}

@media screen and (min-width: 1200px) {
  .dropdown-nav {
    display: none;
  }
}
/* .slide-enter-active, .slide-enter-from{
  transition: all .5s ease-in-out;
    } */
</style>
