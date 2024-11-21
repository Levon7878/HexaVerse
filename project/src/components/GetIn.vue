<template>
  <div>
    <div class="touch-container animate__animated animate__fadeIn">
      <div c class="getin-text">
        <h2 class="touch-text">Get in touch</h2>
        <p>Reach out, and let's create a universe of possibilities together!</p>
      </div>
      <div
        class="get-block"
        style="  background: #101933; border-radius: 16px"
      >
        <div class="block-section">
          <h2 class="text-h4 mb-2 text-white">Let's connect constellations</h2>
          <p class="mb-6 text-white">
            Let's align our constellations! Reach out and let the magic of
            collaboration illuminate our skies.
          </p>
          <v-row class="d-flex flex-wrap">
  <v-col cols="12" md="6" class="pa-1">
    <v-text-field
      label="First Name"
      color="white"
      outlined
      dense
    ></v-text-field>
  </v-col>
  
  <v-col cols="12" md="6" class="pa-1">
    <v-text-field
      label="Last Name"
      color="white"
      outlined
      dense
    ></v-text-field>
  </v-col>
  
  <v-col cols="12" class="pa-0">
    <v-text-field
      label="Email"
      color="white"
      outlined
      dense
    ></v-text-field>
  </v-col>
  
  <v-col cols="12" class="pa-0">
    <v-text-field
      label="Phone Number"
      color="white"
      outlined
      dense
    ></v-text-field>
  </v-col>
  
  <v-col cols="12" class="pa-0">
    <v-textarea
      label="Message"
      color="white"
      outlined
      dense
    ></v-textarea>
  </v-col>
  
  <v-col cols="12" class="pa-0 d-flex justify-center">
    <v-btn variant="outlined text-white">Submit</v-btn>
  </v-col>
</v-row>

        </div>
        <div class="block-text-image">
          <img src="../Img/it-1.jpg" alt="Contact Us Image" />
          
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
.block-section .v-field__field {
  color: aliceblue;
}

.get-block {
    border-radius: 16px;
  display: flex;
  max-width: 1190px;
  align-items: center;
  justify-content: space-between;
  gap: 37px;
  padding: 20px;
  margin-top: 50px;
}
.touch-container {
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 110px;
}

.block-section {
  max-width: 520px;
  width: 100%;
}

@media (max-width:951px){
  .get-block{
    flex-wrap: wrap;
    justify-content: center;
  }

  .block-section{
    max-width: max-content;
  }
  .block-image img{
    border-radius: 35px;
  }
}

.block-text-image img{
  width: 100%;
    height: 550px;
}


.text p {
  color: #b9b9b9;
}

.text h5 {
  color: #ffffff;
  font-size: 15px;
}

.getin-text p {
  color: white;
  font-size: 19px;
}

.getin-text {
  text-align: center;
}

.block-image img {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
}

.touch-text {
  font-size: 48px;
  font-weight: bold;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

[class="dark"] .touch-container {
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

[class="light"] .touch-container {
  background: linear-gradient(to bottom, #abceeb, #97b9d1);
}
</style>
  