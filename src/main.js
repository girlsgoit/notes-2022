import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import RegisterRO from "./pages/RegisterRO.vue";
import RegisterRU from "./pages/RegisterRU.vue";
import LandingRO from "./pages/LandingRO.vue";
import LandingRU from "./pages/LandingRU.vue";
import DashboardRO from "./pages/DashboardRO.vue";
import DashboardRU from "./pages/DashboardRU.vue";
import LoginRO from "./pages/LoginRO.vue";
import LoginRU from "./pages/LoginRU.vue";
import NoteRO from "./pages/NoteRO.vue";
import NoteRU from "./pages/NoteRO.vue";
import NoteEditRO from "./pages/NoteEditRO.vue";
import NoteEditRU from "./pages/NoteEditRU.vue";

const routesRO = [
  { name: "LandingRO", path: "/ro", component: LandingRO },
  { name: "DashboardRO", path: "/ro/dashboard", component: DashboardRO },
  { name: "LoginRO", path: "/ro/login", component: LoginRO },
  { name: "NoteRO", path: "/ro/note/:id", component: NoteRO },
  { name: "NoteEditRO", path: "/ro/note-edit", component: NoteEditRO },
  { name: "RegisterRO", path: "/ro/register", component: RegisterRO },
];

const routesRU = [
  { name: "LandingRU", path: "/ru", component: LandingRU },
  { name: "DashboardRU", path: "/ru/dashboard", component: DashboardRU },
  { name: "LoginRU", path: "/ru/login", component: LoginRU },
  { name: "NoteRU", path: "/ru/note/:id", component: NoteRU },
  { name: "NoteEditRU", path: "/ru/note-edit", component: NoteEditRU },
  { name: "RegisterRU", path: "/ru/register", component: RegisterRU },
];

const routes = [
  {
    path: "/",
    redirect: "/ro",
    children: [...routesRO, ...routesRU],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

createApp(App).use(router).mount("#app");
