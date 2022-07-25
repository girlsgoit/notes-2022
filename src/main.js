import { createApp } from "vue";
import App from "./App.vue";
import LandingRO from "./pages/LandingRO.vue";
import LandingRU from "./pages/LandingRU.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routesRO = [{ name: "LandingRO", path: "/ro", component: LandingRO }];

const routesRU = [{ name: "LandingRU", path: "/ru", component: LandingRU }];

const routes = [
  {
    path: "/",
    redirect: "/ro",
    children: [...routesRO, ...routesRU]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

createApp(App).use(router).mount("#app");
