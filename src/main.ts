import { createApp } from "vue";
import { createRouter, createWebHistory, RouterView } from "vue-router";
import { GraffitiPlugin } from "@graffiti-garden/wrapper-vue";
import { GraffitiLocal } from "@graffiti-garden/implementation-local";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/Home.vue"),
    },
  ],
});

createApp(RouterView)
  .use(router)
  .use(GraffitiPlugin, {
    graffiti: new GraffitiLocal(),
  })
  .mount("#app");
