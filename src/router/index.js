import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("../views/Landing.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/hackathons",
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
        children: [],
      },
      {
        path: ":hackathonId/createteam",
        name: "CreateTeam",
        component: () => import("../views/participant/CreateTeam.vue"),
        children: [],
      },
      {
        path: ":hackathonId/:teamId",
        name: "Team",
        component: () => import("../views/participant/TeamSpace.vue"),
        children: [],
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
