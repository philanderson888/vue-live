import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About3View from "../views/About3View.vue";
import ViewTutorialsView from "../views/VueTutorialsView.vue";
import HelloWorldView from "../views/HelloWorldView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about3",
      name: "about3",
      component: About3View,
    },
    {
      path: "/viewtutorials",
      name: "viewtutorials",
      component: ViewTutorialsView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/about2", 
      name: "about2", 
      component: () => import("../views/About2View.vue"),
    },
    {
      path: "/helloWorld", 
      name: "helloWorld", 
      component: () => import("../views/HelloWorldView.vue"),
    }
  ],
});

export default router;
