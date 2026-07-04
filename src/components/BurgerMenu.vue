<script>
import { ref, reactive, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
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

    function closeMenu() {
      mobileNav.value = false;
    }

    function toggleBurgerClick(key) {
      burgerClicks[key] = !burgerClicks[key];
    }

    watch(
      () => route.path,
      () => {
        closeMenu();
      }
    );

    return {
      mobileNav,
      burgerClicks,
      toggleMenu,
      closeMenu,
      toggleBurgerClick,
    };
  },
};
</script>

<template>
  <div class="burger-root">
    <button
      class="icon-burger"
      type="button"
      aria-label="Open menu"
      :aria-expanded="mobileNav"
      @click="toggleMenu"
    >
      <i :class="mobileNav ? 'fas fa-times' : 'fas fa-bars'"></i>
    </button>

    <Transition name="fade">
      <button
        v-if="mobileNav"
        class="menu-overlay"
        type="button"
        aria-label="Close menu"
        @click="closeMenu"
      ></button>
    </Transition>

    <Transition name="slide">
      <nav v-if="mobileNav" class="dropdown-nav">
        <router-link to="/home" @click="closeMenu">{{ $t('nav.homepage') }}</router-link>

        <div class="menu-down-content">
          <div :class="{ 'icons-text-block': true, open: burgerClicks.about }">
            <div class="down-block">
              <span class="dropdown-a">{{ $t('nav.aboutUs') }}</span>
              <button
                type="button"
                class="submenu-toggle"
                @click="toggleBurgerClick('about')"
              >
                <i
                  class="fa"
                  :class="burgerClicks.about ? 'fa-angle-up' : 'fa-angle-down'"
                ></i>
              </button>
            </div>
            <div v-if="burgerClicks.about" class="burger-content">
              <a href="#">{{ $t('nav.ourStory') }}</a>
              <router-link to="/Team" @click="closeMenu">{{ $t('nav.meetTheTeam') }}</router-link>
            </div>
          </div>
        </div>

        <div class="menu-down-content">
          <div :class="{ 'icons-text-block': true, open: burgerClicks.services }">
            <div class="down-block">
              <span class="dropdown-a">{{ $t('nav.servicesOverview') }}</span>
              <button
                type="button"
                class="submenu-toggle"
                @click="toggleBurgerClick('services')"
              >
                <i
                  class="fa"
                  :class="burgerClicks.services ? 'fa-angle-up' : 'fa-angle-down'"
                ></i>
              </button>
            </div>
            <div v-if="burgerClicks.services" class="burger-content">
              <router-link to="/DigitalMarketing" @click="closeMenu"
                >{{ $t('nav.digitalMarketing') }}</router-link
              >
              <router-link to="/DigitalPiar" @click="closeMenu">{{ $t('nav.digitalPR') }}</router-link>
              <router-link to="/ProjectManagment" @click="closeMenu"
                >{{ $t('nav.projectManagement') }}</router-link
              >
              <router-link to="/WebDevelopment" @click="closeMenu"
                >{{ $t('nav.webDevelopment') }}</router-link
              >
              <router-link to="/AiDevelopment" @click="closeMenu"
                >{{ $t('nav.aiDevelopment') }}</router-link
              >
              <router-link to="/CmsDev" @click="closeMenu">{{ $t('nav.cmsDevelopment') }}</router-link>
              <router-link to="/WebDesign" @click="closeMenu">{{ $t('nav.webDesign') }}</router-link>
              <router-link to="/GraphicDesign" @click="closeMenu"
                >{{ $t('nav.graphicDesign') }}</router-link
              >
            </div>
          </div>
        </div>

        <router-link to="/Client" @click="closeMenu">{{ $t('nav.clientTestimonials') }}</router-link>
        <router-link to="/ProjectManagment" @click="closeMenu">{{ $t('nav.caseStudies') }}</router-link>
        <router-link to="/Blog" @click="closeMenu">{{ $t('nav.blog') }}</router-link>

        <div class="menu-down-content">
          <div :class="{ 'icons-text-block': true, open: burgerClicks.contact }">
            <div class="down-block">
              <router-link class="dropdown-a" to="/Contact" @click="closeMenu"
                >{{ $t('nav.contact') }}</router-link
              >
              <button
                type="button"
                class="submenu-toggle"
                @click="toggleBurgerClick('contact')"
              >
                <i
                  class="fa"
                  :class="burgerClicks.contact ? 'fa-angle-up' : 'fa-angle-down'"
                ></i>
              </button>
            </div>
            <div v-if="burgerClicks.contact" class="burger-content">
              <router-link to="/newsLetter" @click="closeMenu">{{ $t('nav.newsletter') }}</router-link>
            </div>
          </div>
        </div>
      </nav>
    </Transition>
  </div>
</template>

<style scoped>
.burger-root {
  display: none;
  align-items: center;
  position: relative;
}

.icon-burger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.icon-burger:hover {
  background: rgba(255, 255, 255, 0.08);
}

.icon-burger i {
  font-size: 1.15rem;
}

.menu-overlay {
  position: fixed;
  inset: 0;
  top: 94px;
  border: none;
  background: rgba(0, 0, 0, 0.45);
  z-index: 100002;
  cursor: pointer;
}

.icons-text-block {
  width: 100%;
}

.down-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.submenu-toggle {
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  padding: 4px;
}

.burger-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0 8px 12px;
}

.burger-content a {
  font-weight: 400 !important;
  font-size: 14px !important;
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: min(88vw, 320px);
  height: calc(100vh - 94px);
  overflow-y: auto;
  background: linear-gradient(to bottom, #0d3b66, #051622);
  position: fixed;
  top: 94px;
  right: 0;
  z-index: 100003;
  padding: 20px;
  box-shadow: -8px 0 24px rgba(0, 0, 0, 0.25);
}

.dropdown-nav a,
.dropdown-nav .dropdown-a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  line-height: 1.4;
  font-size: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

@media screen and (max-width: 1320px) {
  .burger-root {
    display: inline-flex;
  }
}

@media screen and (max-width: 640px) {
  .menu-overlay {
    top: 72px;
  }

  .dropdown-nav {
    top: 72px;
    height: calc(100vh - 72px);
  }
}

@media screen and (min-width: 1321px) {
  .burger-root,
  .dropdown-nav,
  .menu-overlay {
    display: none !important;
  }
}
</style>
