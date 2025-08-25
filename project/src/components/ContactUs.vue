<template>
  <div class="contact-container">
    <v-container class="contact-block pb-16">
      <div class="contact-text-block text-center">
        <h2>Contact Us</h2>
        <p class="text-grey-darken-1">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <v-row class="mt-9">
        <v-col cols="12" md="4" class="pr-0 pb-0 pa-0" style="position: relative">
          <v-card
            class="pa-5 contact-info h-100 d-flex flex-column justify-space-between"
          >
            <div class="text-block">
              <h3 class="text-h5">Contact Information</h3>
              <p style="margin-top: 18px">
                Say something to start a live chat!
              </p>
            </div>

            <div class="contact-text" dense color="transparent">
              <div class="d-flex">
                <v-icon class="mr-3">mdi-phone</v-icon>
                <v-list-item-content>
                  <v-list-item-title>+1012 3456 789</v-list-item-title>
                </v-list-item-content>
              </div>

              <div class="d-flex">
                <v-icon class="mr-3">mdi-email</v-icon>
                <v-list-item-content>
                  <v-list-item-title>hexaversepro@gmail.com</v-list-item-title>
                </v-list-item-content>
              </div>

              <div class="d-flex">
                <v-icon class="mr-3">mdi-map-marker</v-icon>
                <v-list-item-content>
                  <v-list-item-title style="white-space: wrap">
                    49 Tigran Mets Avenue, Yerevan.
                  </v-list-item-title>
                </v-list-item-content>
              </div>
            </div>

            <div class="mt-6 icons-block">
              <v-btn icon>
                <i class="fab fa-facebook-square"></i>
              </v-btn>
              <v-btn icon> <i class="fab fa-instagram"></i> </v-btn>
              <v-btn class="width-30px" icon>
                <i class="fab fa-linkedin-in"></i>
              </v-btn>
              <v-btn icon>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                />
              </svg>
              </v-btn>
            </div>
          </v-card>
          <div class="block-fills">
            <div class="small-fill animate__animated"></div>
            <div class="big-fill animate__animated"></div>
          </div>
        </v-col>
        <v-col cols="12" md="8" class="pl-0 pb-0 pa-0">
          <v-card class="pa-6">
            <v-form>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="First Name"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Last Name" aria-required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Email" aria-required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Phone Number"
                    aria-required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-radio-group
                v-model="selectedSubject"
                label="How did you hear about us?"
                row
              >
                <div class="block-select d-flex flex-row">
                  <v-radio label="Social networks" value="general"></v-radio>
                  <v-radio label="Friends" value="general2"></v-radio>
                  <v-radio label="Other" value="general3"></v-radio>
                </div>
              </v-radio-group>

              <v-select
                label="Select"
                :items="[
                  'EU (European Union)',
                  'Asia',
                  'East Asia',
                  'Southeast Asia',
                  'South Asia',
                  'Central Asia',
                  'Western Asia (Middle East)',
                  'Africa',
                  'North Africa',
                  'Sub-Saharan Africa',
                  'North America',
                  'USA',
                  'South America',
                  'Australia and Oceania'
                ]"
              ></v-select>
              <v-textarea
                label="Message"
                placeholder="Write your message.."
              ></v-textarea>
            </v-form>
            <div class="d-flex justify-end flex-column align-end">
              <v-row class="v-col-md-4 v-col-12">
                <v-btn
                  color="black"
                  class="mt-6 animate__animated animate__backInUp"
                  block
                  >Send Message</v-btn
                >
              </v-row>
              <div class="box-img animate__animated animate__backInUp">
                <img src="../Img/ContactUs/letter_send.png" alt="" />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSubject: "general",
    };
  },
};
</script>

<style scoped>
.contact-block {
  padding-top: 130px;
}

.contact-info {
  background-color: black;
  color: #ffffff;
}
.v-btn {
  color: #ffffff;
}

.contact-text {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.icons-block {
  display: flex;
  gap: 24px;
}

.icons-block .v-btn {
  width: 30px;
  height: 30px;
  background: #1b1b1b;
}

.icons-block .v-btn:hover {
  background: #ffffff;
  color: #1b1b1b;
  transition: 0.3s;
}

.block-fills {
  position: absolute;
  bottom: 0;
  right: 0;
}

.big-fill {
  width: 150px;
  height: 150px;
  border-top-left-radius: 100%;
  background: #1a1a1a;
}

.small-fill {
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #4848488a;
}

.box-img img {
  max-width: 240px;
  max-height: 125px;
  margin-right: 81px;
  filter: contrast(0.5);
}

[class="dark"] .contact-container {
  background: linear-gradient(to bottom, #0d3b66, #051622);
}
</style>
