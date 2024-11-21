<template>
  <div :class="['header', currentTheme]">
    <div class="box">
      <router-link class="my-link link-header" to="/home"
        >HexaVerse</router-link
      >
      <nav>
        <ul>
          <li class="dropdown">
            <router-link class="my-link" to="/home">Homepage</router-link>
          </li>
          <li class="dropdown">
            <div class="icons-text-block">
              <router-link class="my-link" to="">About Us</router-link>
              <i class="fa fa-angle-down"></i>
            </div>
            <div class="dropdown-content">
              <router-link class="my-link" to="">Our Story</router-link>
              <router-link class="my-link" to="/Team"
                >Meet the Team</router-link
              >
            </div>
          </li>
          <li class="dropdown">
            <div class="icons-text-block">
              <router-link class="my-link">Services Overview</router-link>
              <i class="fa fa-angle-down"></i>
            </div>
            <div class="dropdown-content">
              <div class="dropdown-box">
                <router-link to="/DigitalMarketing" class="my-link"
                  >Digital Marketing</router-link
                >
              </div>
              <div class="dropdown-box">
                <router-link to="/DigitalPiar" class="my-link"
                  >Digital PR</router-link
                >
              </div>
              <div class="dropdown-box">
                <router-link to="/ProjectManagment" class="my-link"
                  >Project Management</router-link
                >
              </div>
              <div class="dropdown-front">
                <router-link to="/WebDevelopment" class="my-link"
                  >Web Development</router-link
                >
              </div>
              <div class="dropdown-box">
                <router-link to="/AiDevelopment" class="my-link"
                  >AI Development</router-link
                >
              </div>
              <div class="dropdown-box">
                <router-link to="/CmsDev" class="my-link"
                  >CMS Development</router-link
                >
              </div>
              <div class="dropdown-back">
                <router-link to="/WebDesign" class="my-link"
                  >Web Design</router-link
                >
              </div>
              <div class="dropdown-back">
                <router-link class="my-link" to="/GraphicDesign"
                  >Graphic Design</router-link
                >
              </div>
            </div>
          </li>
          <li class="dropdown">
            <router-link class="my-link" to="/Client"
              >Client Testimonials</router-link
            >
          </li>
          <li class="dropdown">
            <router-link class="my-link">Case Studies | Portfolio</router-link>
          </li>
          <li class="dropdown">
            <router-link class="my-link" to="/Blog">Blog</router-link>
          </li>
          <li class="dropdown">
            <div class="icons-text-block">
              <router-link class="my-link" to="/Contact">Contact</router-link>
              <i class="fa fa-angle-down"></i>
            </div>
            <div class="dropdown-content">
              <router-link class="my-link" to="/newsLetter"
                >Newsletter</router-link
              >
            </div>
          </li>
        </ul>
      </nav>
      <div class="buttons-block">
        <Button class="header-button"> </Button>
        <div :class="{ 'dropdown-language': true, open: isOpen }">
          <img
            :src="currentFlag"
            alt="Current Language"
            @click="toggleDropdown"
          />
          <div class="dropdown-content-language" v-if="isOpen">
            <img
              :src="flags.arm"
              alt="Armenian"
              @click="() => changeLanguage('arm')"
            />
            <img
              :src="flags.ru"
              alt="Russian"
              @click="() => changeLanguage('ru')"
            />
            <img
              :src="flags.en"
              alt="English"
              @click="() => changeLanguage('en')"
            />
          </div>
        </div>
        <DarkMode></DarkMode>
        <BurgerMenu></BurgerMenu>
      </div>
    </div>
  </div>
</template>

<script >
import { ref, computed } from "vue";
import DarkMode from "./DarkMode.vue";
import Button from "./Button.vue";
import BurgerMenu from "./BurgerMenu.vue";
import Flag1 from "../Img/flag1.png";
import Flag2 from "../Img/flag2.png";
import Flag3 from "../Img/flag3.png";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Button,
    BurgerMenu,
    DarkMode,
  },
  setup() {
    const isOpen = ref(false);
    const currentLanguage = ref("en");
    const flags = {
      en: Flag2,
      arm: Flag1,
      ru: Flag3,
    };

    const currentFlag = computed(() => flags[currentLanguage.value]);
    const currentTheme = ref("light");

    const { locale } = useI18n({ useScope: "global" });

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const changeLanguage = (lang) => {
      currentLanguage.value = lang;
      locale.value = lang;
      isOpen.value = false;
    };

    return {
      isOpen,
      currentFlag,
      toggleDropdown,
      changeLanguage,
      currentLanguage,
      currentTheme,
      flags,
    };
  },
};
</script>


<style scoped>
.burger {
  display: none;
}

.burger-dark {
  gap: 50px;
  height: 30px;
}

.icons-text-block {
  display: flex;
  align-items: center;
  gap: 7px;
}

.dropdown:hover .dropdown-content {
  display: block;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.dropdown-front > .my-link {
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.dropdown-front > .my-link:hover {
  color: orange;
}

.dropdown-content .my-link {
  padding: 10px;
  display: block;
  text-decoration: none;
  color: white;
  transition: background-color 0.3s;
}

.dropdown-content .my-link:hover {
  background-color: #575757;
}

.header {
  width: 100%;
  height: 94px;
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: fixed;
  z-index: 1000;
  transition: all 0.5s;
  top: 0;
}

.box {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box .link-header {
  font-size: 32px;
  font-weight: 600;
}

nav {
  width: 100%;
  max-width: 900px;
}

nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-between;
  align-items: center;
}

ul .my-link {
  text-decoration: none;
  font-weight: 600;
  color: aliceblue;
  transition: color 0.3s;
}

ul .my-link:hover {
  color: orange;
}

.buttons-block {
  display: flex;
  gap: 20px;
  align-items: center;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: linear-gradient(to bottom, #0d3b66, #051622);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 150px;
}

.dropdown-language {
  position: relative;
  display: inline-block;
  top: 3px;
}

.dropdown-language img {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  cursor: pointer;
}

.dropdown-content-language {
  display: none;
  position: absolute;
  left: -5px;
  background-color: #000000;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 8px;
  padding: 5px;
  border: 1px solid aliceblue;
}

.dropdown-content-language img {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 10px 0;
}

.dropdown-language.open .dropdown-content-language {
  display: block;
  animation: langIn 0.5s;
}

.header-button {
  padding: 8px 8px;
  width: 120px;
  height: 34px;
}

@keyframes langIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-button {
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

@media screen and (max-width: 1600px) {
  /* nav ul {
    gap: 14px;
  } */

  .box {
    width: 95%;
  }
}

@media screen and (max-width: 1444px) {
  nav {
    display: none;
  }
}

@media screen and (max-width: 1390px) {
  .dropdown {
    width: auto;
  }
  .dropdown a {
    font-size: 15px;
  }
}

@media screen and (max-width: 1706px) {
  /* nav ul {
    gap: 10px;
  } */
}

@media screen and (max-width: 1250px) {
  .dropdown a {
    font-size: 14px !important;
  }
}

@media screen and (max-width: 1200px) {
  .header-button {
    display: none;
  }
  .burger {
    display: block;
  }

  .header {
    padding: 0 64px;
  }

  .dropdown-language {
    margin-top: 3px;
  }
  .bm-burger-button {
    left: 1%;
  }
}

@media screen and (max-width: 1255px) {
  .dropdown a {
    font-size: 15px;
  }

  .box {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  .header {
    justify-content: center !important;
  }
  .block-dark {
    margin-left: 0;
  }
}

@media screen and (max-width: 470px) {
  .buttons-block {
    gap: 15px;
  }
  .header {
    padding: 0px 26px 0 0;
  }
  .box {
    justify-content: space-evenly;
  }
}

[class="dark v-overlay-scroll-blocked"] .header {
  background: linear-gradient(to bottom, #0d3b66, #051622) !important;
}

[class="light v-overlay-scroll-blocked"] .header {
  background: linear-gradient(to bottom, #005fa3, #8dceff) !important;
}

[class="dark"] .header {
  background: linear-gradient(to bottom, #0d3b66, #051622) !important;
}

[class="light"] .header {
  background: linear-gradient(to bottom, #005fa3, #8dceff) !important;
}
</style>
