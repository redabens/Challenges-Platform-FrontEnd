import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/hackathons",
    // component: () => import("../views/participant/Dashboard.vue"),
    component: () => import("../components/Layout.vue"),
    children: [
      {
        path: "",
        name: "Hackathons",
        component: () => import("../views/participant/Hackathons.vue"),
        children: [],
      },
      {
        path: ":hackathonId",
        name: "Hackathon",
        component: () => import("../views/participant/HackathonDetails.vue"),
      },
      {
        path: "teamspace",
        name: "TeamSpace",
        component: () => import("../views/participant/TeamSpace.vue"),
      },
    ],
  },
];

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

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
