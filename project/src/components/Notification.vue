<!-- NotificationModal.vue -->
<template>
  <div v-if="dialog" class="modal-overlay" @click="closeDialog">
    <div class="modal-content" @click.stop>
      <div class="text-img-block">
        <div class="img-block">
          <i class="fas fa-check-double"></i>
        </div>
        <div class="text-block">
          <p>
            Would you like to receive the latest updates from SecureCheck360?
          </p>
        </div>
      </div>
      <div class="buttons-block">
        <button @click="closeDialog" class="modal-no">NOT NOW</button>
        <button @click="closeDialog" class="modal-yes">YES</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  mounted() {
    const dialogShown = localStorage.getItem("dialogShown");
    if (!dialogShown) {
      this.dialog = true;
      localStorage.setItem("dialogShown", "true");
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  animation: fadeInOverlay 0.5s;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.5s;
}

.text-img-block {
  display: flex;
  gap: 25px;
}

.text-block p {
  color: black;
}

.img-block {
  width: 67px;
  text-align: center;
}

.img-block i {
  color: #082da7;
  font-size: 40px;
}

.buttons-block {
  display: flex;
  justify-content: flex-end;
  gap: 25px;
}

.modal-no {
  background-color: #e6dedd;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.modal-yes {
  background-color: #082da7;
  color: aliceblue;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

@keyframes fadeInOverlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
