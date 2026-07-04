<template>
    <div v-if="dialog" class="banner-overlay">
      <div class="banner-content">
        <div class="banner-text">
          <p>
            By clicking "Accept All Cookies", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
          </p>
        </div>
        <div class="banner-buttons">
          <button @click="closeDialog" class="banner-button accept">Accept All Cookies</button>
          <button @click="openSettings" class="banner-button settings">Cookies Settings</button>
        </div>
        <button @click="closeDialog" class="banner-close">×</button>
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
      const dialogShown = localStorage.getItem("privacyPolicyShown");
      if (!dialogShown) {
        this.dialog = true;
        localStorage.setItem("privacyPolicyShown", "true");
    }
    },
    methods: {
      closeDialog() {
        this.dialog = false;
      },
      openSettings() {
        console.log("Open Cookie Settings");
      },
    },
  };
  </script>
  
  <style scoped>
  .banner-overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    z-index: 1001;
  }
  
  .banner-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .banner-text p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }
  
  .banner-buttons {
    display: flex;
    gap: 10px;
  }
  
  .banner-button {
    background-color: #082da7;
    color: #fff;
    border: none;
    padding: 10px 105px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .banner-button.settings {
    background-color: #e6e6e6;
    color: #333;
  }
  
  .banner-close {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #333;
    margin-left: 20px;
  }
  
  .banner-close:hover {
    color: #000;
  }
  </style>
  