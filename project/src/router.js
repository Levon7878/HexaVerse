import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home/Home.vue";
import DigitalMarketing from "@/pages/DigitalMarketing/DigitalMarketing.vue";
import DigitalPiar from "@/pages/DigitalPR/DigitalPiar.vue";
import ProjectManagments from "@/pages/ProjectManagment/ProjectManagments.vue";
import WebDevelopment from "@/pages/WebDevelopment/WebDevelopment.vue";
import WebDesign from "@/pages/WebDesign/WebDesign.vue";
import GraphicDesign from "@/pages/GraphicDesign/GraphicDesign.vue";
import CmsDevelopment from "@/pages/CmsDev/CmsDevelopment.vue";
import AiDevelopment from "@/pages/AiDevelopment/AiDevelopment.vue";
import Team from "@/pages/Team/Team.vue";
import ClientTest from "@/pages/Client/ClientTest.vue";
import Contact from "@/pages/Contact/Contact.vue";
import BlogPage from "@/pages/BlogPage/BlogPage.vue";
import Demo from "@/pages/Demo/Demo.vue";
import CalendarDemo from "./components/CalendarDemo.vue";
import UseFormDemo from "./components/UseFormDemo.vue";
import getInTouch from "./pages/GetInTouch/GetInTouch.vue";
import Newsletter from "./pages/Newsletter/Newsletter.vue";
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/DigitalMarketing", component: DigitalMarketing },
    { path: "/DigitalPiar", component: DigitalPiar },
    { path: "/ProjectManagment", component: ProjectManagments },
    { path: "/WebDevelopment", component: WebDevelopment },
    { path: "/WebDesign", component: WebDesign },
    { path: "/GraphicDesign", component: GraphicDesign },
    { path: "/CmsDev", component: CmsDevelopment },
    { path: "/AiDevelopment", component: AiDevelopment },
    { path: "/Team", component: Team },
    { path: "/Client", component: ClientTest },
    { path: "/Contact", component: Contact },
    { path: "/Blog", component: BlogPage },
    { path: "/demo", component: Demo },
    { path: "/calendar", component: CalendarDemo },
    { path: "/formdemo", component: UseFormDemo },
    { path: "/getInTouch", component: getInTouch },
    { path: "/newsLetter", component: Newsletter },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});
