import { createWebHistory, createRouter } from "vue-router";
import ManageChallenges from "../views/admin/ManageChallenges.vue";
import ManageTeams from "../views/admin/ManageTeams.vue";
import ManageSubmissions from "../views/admin/ManageSubmissions.vue";
import ChallengeDetails from "../views/admin/ChallengeDetails.vue";
import AddChallenge from "../views/admin/AddChallenge.vue";
import Layout from "../views/admin/Layout.vue";

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
  {
    path: "/admin",
    component: Layout,
    children: [
      {
        path: "/manage-challenges",
        name: "ManageChallenges",
        component: ManageChallenges,
      },
      {
        path: "/manage-teams",
        name: "ManageTeams",
        component: ManageTeams,
      },
      {
        path: "/manage-submissions",
        name: "ManageSubmissions",
        component: ManageSubmissions,
      },
      {
        path: "/challenge-details/:id",
        name: "ChallengeDetails",
        component: ChallengeDetails,
        props: true,
      },
      {
        path: "/add-challenge",
        name: "AddChallenge",
        component: AddChallenge,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
