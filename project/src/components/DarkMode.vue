<script setup>
import { useDark, useToggle, useColorMode } from "@vueuse/core";
const isDark = useDark();
const colorMode = useColorMode();
useToggle(isDark);
</script>

<template>
  <div class="block-dark">
    <button @click="colorMode = 'dark'" class="moon">
      <span><i class="fas fa-moon"></i></span>
    </button>
    <button @click="colorMode = 'light'" class="sun">
      <span><i class="fas fa-sun"></i></span>
    </button>
  </div>
</template>



<style scoped>
.block-dark {
  width: 74px;
  display: flex;
  justify-content: space-around;
  gap: 9px;
  /* background: #192644; */
  border: 1px solid;
  border-radius: 50px;
  margin-left: 28px;
  height: 34px;
}

.moon,
.sun {
  flex: 0 0 auto;
  color: #546e7a;
  overflow: visible;
  font-size: 18px;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
}

.moon,
.sun:hover {
  background-color: transparent;
}

.dark {
  background: linear-gradient(to bottom, #0d3b66, #051622);
  color: white;
}
.light {
  background: #fff;
}

@media screen and (max-width: 500px) {
  .block-dark {
    margin-left: 0;
  }
}
</style>
