<script setup>
import { ref, onMounted } from "vue";

const theme = ref("dark");

const applyTheme = (value) => {
  theme.value = value;
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(value);
  localStorage.setItem("theme", value);
};

onMounted(() => {
  const saved = localStorage.getItem("theme") || "dark";
  applyTheme(saved);
});
</script>

<template>
  <div class="block-dark">
    <button
      type="button"
      @click="applyTheme('dark')"
      :class="['moon', { active: theme === 'dark' }]"
    >
      <span><i class="fas fa-moon"></i></span>
    </button>
    <button
      type="button"
      @click="applyTheme('light')"
      :class="['sun', { active: theme === 'light' }]"
    >
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
  border: 1px solid;
  border-radius: 50px;
  margin-left: 0;
  height: 34px;
  flex-shrink: 0;
}

.moon,
.sun {
  flex: 0 0 auto;
  color: #546e7a;
  overflow: visible;
  font-size: 18px;
  text-align: center;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
}

.moon.active,
.sun.active {
  color: orange;
}

@media screen and (max-width: 500px) {
  .block-dark {
    margin-left: 0;
  }
}
</style>
