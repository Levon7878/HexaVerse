<template>
  <div class="counter" ref="counterRef">
    <div class="counter_wrapper" v-for="count in counterBlock" :key="count.id">
      <div class="box_counter">
        <h2>{{ formattedNumber(count.currentNum, count.suffix) }}</h2>
        <h3>{{ count.name }}</h3>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useMyStore } from "@/store/myStore";
import { computed, onMounted, ref } from "vue";

const store = useMyStore();
const counterRef = ref(null);
const counterBlock = computed(() => store.counterBlock);

const formattedNumber = (num, suffix) => store.formattedNumber(num, suffix);

const createObserver = () => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        store.startCounters();
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.1 }
  );

  if (counterRef.value) {
    observer.observe(counterRef.value);
  }
};

onMounted(() => {
  createObserver();
});
</script>

<style scoped>
.counter {
  width: 100%;
  padding: 48px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 170px;
}

.counter h2 {
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
}

.counter h3 {
  line-height: 28px;
  font-weight: 400;
}

@media screen and (min-width: 1200px) {
  .counter {
    display: flex;
    flex-wrap: wrap;
  }
}

[class="dark"] .counter {
  backdrop-filter: brightness(0.5);
  color: aliceblue;
}

[class="light"] .counter {
  backdrop-filter: brightness(0.2);
  color: aliceblue;
}
</style>
