<template>
    <v-container class="my-5">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title>
              Your Details
            </v-card-title>
            <v-card-subtitle>
              <v-span>{{ formattedDate }} <a href="#" class="date-text" @click="editDate">Edit</a></v-span>
            </v-card-subtitle>
            <v-card-text>
              <v-form v-model="valid">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.firstName"
                      label="First Name *"
                      :rules="[rules.required]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.lastName"
                      label="Last Name *"
                      :rules="[rules.required]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.email"
                      label="Your Email Address *"
                      :rules="[rules.required, rules.email]"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="red" outlined @click="goBack">
                <v-icon left>mdi-arrow-left</v-icon> Back
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" color="orange" @click="submitForm">
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const valid = ref(false);
      const form = ref({
        firstName: '',
        lastName: '',
        email: '',
      });
  
      const rules = {
        required: (value) => !!value || 'This field is required',
        email: (value) => /.+@.+\..+/.test(value) || 'Enter a valid email',
      };
  
      const currentDate = ref(new Date());
  
      const formattedDate = computed(() => {
        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        };
        return currentDate.value.toLocaleString('en-US', options);
      });
  
      const editDate = () => {
        console.log('Edit date');
      };
  
      const goBack = () => {
        console.log('Back');
      };
  
      const submitForm = () => {
        if (valid.value) {
          console.log(form.value);
        }
      };
  
      return {
        valid,
        form,
        rules,
        formattedDate,
        editDate,
        goBack,
        submitForm,
      };
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    padding: 20px;
  }
  
  .date-text {
    color: aqua;
    font-size: 17px;
  }
  </style>
  