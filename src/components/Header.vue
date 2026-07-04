<template>
  <div :class="['header', currentTheme, currentLanguage]">
    <div class="box">
      <router-link class="my-link link-header" to="/home"
        >HexaVerse</router-link
      >
      <nav class="desktop-nav">
        <ul>
          <li class="dropdown">
            <router-link class="my-link" to="/home">{{ $t('nav.homepage') }}</router-link>
          </li>
          <li :class="['dropdown', { open: activeDropdown === 'about' }]">
            <div class="icons-text-block" @click="toggleMenu('about')">
              <router-link class="my-link" to="/Team">{{ $t('nav.aboutUs') }}</router-link>
              <i class="fa fa-angle-down"></i>
            </div>
            <div class="dropdown-content">
              <router-link class="my-link" to="/Blog">{{ $t('nav.ourStory') }}</router-link>
              <router-link class="my-link" to="/Team"
                >{{ $t('nav.meetTheTeam') }}</router-link
              >
            </div>
          </li>
          <li :class="['dropdown', { open: activeDropdown === 'services' }]">
            <div class="icons-text-block" @click="toggleMenu('services')">
              <router-link class="my-link" to="/DigitalMarketing">{{ $t('nav.servicesOverview') }}</router-link>
              <i class="fa fa-angle-down"></i>
            </div>
            <div class="dropdown-content">
              <div class="dropdown-box">
                <router-link to="/DigitalMarketing" class="my-link"
                  >{{ $t('nav.digitalMarketing') }}</router-link
                >
              </div>
              <div class="dropdown-box">
                <router-link to="/DigitalPiar" class="my-link"
                  >{{ $t('nav.digitalPR') }}</router-link
                >
              </div>
              <div class="dropdown-box">
                <router-link to="/ProjectManagment" class="my-link"
                  >{{ $t('nav.projectManagement') }}</router-link
                >
              </div>
              <div class="dropdown-front">
                <router-link to="/WebDevelopment" class="my-link"
                  >{{ $t('nav.webDevelopment') }}</router-link
                >
              </div>
              <div class="dropdown-box">
                <router-link to="/AiDevelopment" class="my-link"
                  >{{ $t('nav.aiDevelopment') }}</router-link
                >
              </div>
              <div class="dropdown-box">
                <router-link to="/CmsDev" class="my-link"
                  >{{ $t('nav.cmsDevelopment') }}</router-link
                >
              </div>
              <div class="dropdown-back">
                <router-link to="/WebDesign" class="my-link"
                  >{{ $t('nav.webDesign') }}</router-link
                >
              </div>
              <div class="dropdown-back">
                <router-link class="my-link" to="/GraphicDesign"
                  >{{ $t('nav.graphicDesign') }}</router-link
                >
              </div>
            </div>
          </li>
          <li class="dropdown">
            <router-link class="my-link" to="/Client"
              >{{ $t('nav.clientTestimonials') }}</router-link
            >
          </li>
          <li class="dropdown">
            <router-link class="my-link" to="/ProjectManagment">{{ $t('nav.caseStudies') }}</router-link>
          </li>
          <li class="dropdown">
            <router-link class="my-link" to="/Blog">{{ $t('nav.blog') }}</router-link>
          </li>
          <li :class="['dropdown', { open: activeDropdown === 'contact' }]">
            <div class="icons-text-block" @click="toggleMenu('contact')">
              <router-link class="my-link" to="/Contact">{{ $t('nav.contact') }}</router-link>
              <i class="fa fa-angle-down"></i>
            </div>
            <div class="dropdown-content">
              <router-link class="my-link" to="/newsLetter"
                >{{ $t('nav.newsletter') }}</router-link
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
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
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
    const route = useRoute();
    const isOpen = ref(false);
    const activeDropdown = ref(null);
    const currentLanguage = ref(localStorage.getItem('language') || "en");
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

    const toggleMenu = (key) => {
      activeDropdown.value = activeDropdown.value === key ? null : key;
    };

    const closeMenus = () => {
      activeDropdown.value = null;
    };

    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        closeMenus();
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleOutsideClick);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleOutsideClick);
    });

    watch(
      () => route.path,
      () => {
        closeMenus();
      }
    );

    const changeLanguage = (lang) => {
      currentLanguage.value = lang;
      locale.value = lang;
      localStorage.setItem('language', lang);
      isOpen.value = false;
    };

    return {
      isOpen,
      activeDropdown,
      currentFlag,
      toggleDropdown,
      toggleMenu,
      closeMenus,
      changeLanguage,
      currentLanguage,
      currentTheme,
      flags,
    };
  },
};
</script>


<style scoped>
.icons-text-block {
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
}

.icons-text-block i {
  transition: transform 0.3s ease;
}

.dropdown.open .icons-text-block i {
  transform: rotate(180deg);
}

.dropdown.open .dropdown-content {
  display: block;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
  padding: 12px 16px;
  display: block;
  text-decoration: none;
  color: white;
  transition: background-color 0.3s;
  text-align: left;
}

.dropdown-content .my-link:hover {
  background-color: #575757;
}

.header {
  --header-height: 94px;
  width: 100%;
  min-height: var(--header-height);
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100000;
  transition: background 0.4s ease, padding 0.3s ease;
  top: 0;
  left: 0;
  padding: 0 clamp(16px, 3vw, 48px);
  box-sizing: border-box;
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

.box {
  width: min(100%, 1440px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(12px, 2vw, 32px);
}

.box .link-header {
  font-size: clamp(1.35rem, 2.2vw, 2rem);
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
}

.desktop-nav {
  min-width: 0;
  justify-self: center;
  width: 100%;
  transition: opacity 0.3s ease;
}

.desktop-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: clamp(8px, 1.1vw, 20px);
}

ul .my-link {
  text-decoration: none;
  font-weight: 600;
  color: aliceblue;
  transition: color 0.3s ease, font-size 0.3s ease;
  font-size: clamp(0.7rem, 0.85vw, 0.95rem);
  white-space: nowrap;
}

/* Specific styles for Russian language to prevent overflow */
.header.ru .desktop-nav ul {
  gap: clamp(6px, 0.8vw, 14px);
}

.header.ru ul .my-link {
  font-size: clamp(0.65rem, 0.75vw, 0.85rem);
}

/* Specific styles for Armenian language to prevent overflow */
.header.arm .desktop-nav ul {
  gap: clamp(4px, 0.4vw, 8px);
}

.header.arm ul .my-link {
  font-size: clamp(0.55rem, 0.6vw, 0.75rem);
}

ul .my-link:hover {
  color: orange;
}

.buttons-block {
  display: flex;
  gap: clamp(10px, 1.5vw, 20px);
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  transform: translateX(0);
  background: linear-gradient(to bottom, #0d3b66, #051622);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
  min-width: 220px;
  border-radius: 8px;
  overflow: hidden;
}

.dropdown-language {
  position: relative;
  display: inline-flex;
  align-items: center;
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
  top: calc(100% + 8px);
  right: 0;
  background-color: #000000;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100005;
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
  cursor: pointer;
}

.dropdown-language.open .dropdown-content-language {
  display: block;
  animation: langIn 0.3s ease;
}

.header-button {
  padding: 8px;
  width: 120px;
  height: 34px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
}

@keyframes langIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 1420px) {
  .desktop-nav ul {
    gap: 8px;
  }
  ul .my-link {
    font-size: 0.75rem;
  }
}

@media screen and (max-width: 1360px) {
  .desktop-nav ul {
    gap: 6px;
  }
  ul .my-link {
    font-size: 0.7rem;
  }
}

@media screen and (max-width: 1320px) {
  .desktop-nav {
    display: none;
  }

  .header-button {
    display: none;
  }
}

@media screen and (max-width: 640px) {
  .header {
    --header-height: 72px;
    padding: 0 12px;
  }

  .box {
    gap: 12px;
  }

  .buttons-block {
    gap: 10px;
  }
}

@media screen and (max-width: 420px) {
  .box .link-header {
    font-size: 1.2rem;
  }
}

/* Header theme colors are defined globally in App.vue so the
   .light/.dark selectors are emitted verbatim (scoped :global() was
   collapsing them into a bare .light/.dark rule). */
</style>
