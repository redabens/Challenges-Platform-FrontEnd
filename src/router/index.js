import { createWebHistory, createRouter } from "vue-router";
import Layout from "../components/Layout.vue";

const routes = [
  {
    path: "/dashboard",
    component: () => import("../views/participant/Dashboard.vue"),
    children: [
      {
        path: "",
        name: "Hackathons",
        component: () => import("../views/participant/Hackathons.vue"),
      },
    ],
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: () => import("../views/Home.vue"),
  // },

  // {
  //   path: "/dashboard/hackathons",
  //   name: "Hackathons",
  //   component: () => import("../views/participant/Hackathons.vue"),
  // },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: () => import("../views/participant/Dashboard.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
