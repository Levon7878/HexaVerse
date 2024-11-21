<template>
  <v-container class="text-input-container" fluid>
    <div>
      <v-row class="demo-container" justify="space-evenly">
        <v-col cols="10" md="5" class="text-container-block">
          <v-row>
            <v-text class="font-weight-bold text-white "
              >Get a Free Demo of HexaVerse’s Digital Solutions</v-text
            >
            <v-text h4 class="text-white">
              HexaVerse <strong>(bold)</strong> offers a full suite of digital
              services tailored to help your business grow. Whether you're
              looking for digital PR, project management, AI development, or web
              design, our team is ready to deliver results. Discover how our
              solutions can transform your business.
            </v-text>
          </v-row>

          <v-row class="service-container pb-4" justify="center">
            <v-col
              v-for="(item, index) in demoBlock"
              :key="index"
              cols="12"
              md="5"
            >
              <v-card class="service-block" elevation="2">
                <v-card-title>
                  <strong>{{ item.title }}</strong>
                </v-card-title>
                <v-card-text class="block-text-check">
                  <v-list dense>
                    <v-list-item v-for="(service, i) in item.services" :key="i">
                      <v-list-item-icon>
                        <v-icon>mdi-check-circle-outline</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>{{ service }}</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="10" md="4" class="form-container">
          <v-card elevation="2">
            <v-card-text>
              <v-form
                class="d-flex flex-wrap flex-column"
                @submit.prevent="onSubmit"
              >
                <v-row justify="center">
                  <v-col cols="10" md="5">
                    <v-text-field
                      v-model="form.firstName"
                      label="First Name *"
                      :rules="[rules.required]"
                      required="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="10" md="5">
                    <v-text-field
                      v-model="form.lastName"
                      label="Last Name *"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="10" md="5">
                    <v-text-field
                      v-model="form.email"
                      label="Email *"
                      :rules="[rules.required, rules.email]"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="10" md="5">
                    <v-text-field
                      v-model="form.phone"
                      label="Phone Number *"
                      :rules="[rules.required, rules.phone]"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="10" md="5">
                    <v-text-field
                      v-model="form.companyName"
                      label="Company Name *"
                      :rules="[rules.required]"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="10" md="5">
                    <v-text-field
                      v-model="form.website"
                      label="Website URL *"
                      :rules="[rules.url]"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="10">
                    <v-select
                      v-model="form.employees"
                      label="How many employees work there? *"
                      :items="['1-10', '11-50', '51-200', '201-500', '501+']"
                      :rules="[rules.required]"
                      required
                    ></v-select>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="10">
                    <p>
                      We’re committed to your privacy. HexaVerse uses the
                      information you provide to us to contact you about
                      relevant content, products, and services. You may
                      unsubscribe from these communications at any time. For
                      more information, check out our
                      <a href="#" style="color: blue">Privacy Policy</a>.
                    </p>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="12" class="text-center">
                    <v-btn
                      color="orange"
                      href="#/calendar"
                      type="submit"
                      class="white--text v-col v-col-10 pb-5"
                    >
                      Get your free demo
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const form = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      website: "",
      employees: "",
    });

    const rules = {
      required: (value) => !!value || "Required.",
      email: (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
      phone: (value) =>
        /^[0-9]{10,15}$/.test(value) || "Phone number must be valid.",
      url: (value) =>
        value === "" || /https?:\/\/[^\s]+/.test(value) || "URL must be valid.",
    };

    const demoBlock = ref([
      {
        title: "Digital PR",
        services: [
          "Reputation Management",
          "Media Outreach",
          "Crisis Communication",
        ],
      },
      {
        title: "Digital Marketing",
        services: ["Social Media Strategy", "SEO & SEM", "Content Marketing"],
      },
      {
        title: "AI Development",
        services: [
          "AI-Powered Analytics",
          "Chatbots & Virtual Assistants",
          "Predictive Modelling",
        ],
      },
      {
        title: "Web Development",
        services: [
          "Custom CMS Solutions",
          "E-commerce Platforms",
          "Frontend & Backend Development",
        ],
      },
      {
        title: "Project Managment",
        services: [
          "Traditional Project Management",
          "Agile Project Management",
          "Scrum Project Management",
          "Lean Project Management",
          "Kanban Project Management",
          "Waterfall Project Management",
          "PRINCE2 Project Management",
          "Six Sigma Project Management",
        ],
      },
      {
        title: "Project Managment",
        services: [
          "Traditional Project Management",
          "Agile Project Management",
          "Scrum Project Management",
          "Lean Project Management",
          "Kanban Project Management",
          "Waterfall Project Management",
          "PRINCE2 Project Management",
          "Six Sigma Project Management",
        ],
      },
      {
        title: "Web Design",
        services: [
          "UX/UI Design",
          "Responsive Design",
          "E-commerce Design",
          "Landing Page Design",
          "Website Redesign",
          "Mobile Design",
          "Branding and Identity Design",
        ],
      },
      {
        title: "Grapghic Design",
        services: [
          "Branding and Identity Design",
          "Logo Design",
          "Website Graphics (Icons, Buttons, Banners)",
          "Infographic Design",
          "Social Media Graphics",
          "Illustration for Websites",
          "User Interface (UI) Design Elements",
          "Typography Design for Web Content",
        ],
      },
    ]);

    const onSubmit = () => {
      if (
        form.value.firstName &&
        form.value.lastName &&
        form.value.email &&
        form.value.phone &&
        form.value.companyName &&
        form.value.employees
      ) {
        console.log("Form submitted:", form.value);
      } else {
        console.log("Please fill out all required fields.");
      }
    };

    return {
      form,
      demoBlock,
      rules,
      onSubmit,
    };
  },
};
</script>

<style scoped>
.text-input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.demo-container {
  padding: 100px 0;
}

.service-block {
  margin: 10px;
  height: 100%;
}

.text-container-block h2,
.text-container-block h4 {
  color: #333;
}

.form-container {
  background-color: #fff;
  padding: 20px;
}

@media  (max-width: 960px) {
    .form-container{
      max-height: max-content !important;
    }
}

.v-btn {
  background-color: #6200ea;
  color: white;
}

.v-icon {
  color: green;
}

.form-container {
  position: sticky;
  top: 115px;
  max-height: 67vh;
}

[class="dark"] .text-input-container {
  background: linear-gradient(to bottom, #0d3b66, #051622);
}

[class="ligth"] .text-container-block {
  color: white;
}


@media  (max-width:) {
  
}
</style>
