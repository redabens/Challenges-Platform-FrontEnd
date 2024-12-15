// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ManageChallenges from '../views/admin/ManageChallenges.vue';
import ManageTeams from '../views/admin/ManageTeams.vue';
import ManageSubmissions from '../views/admin/ManageSubmissions.vue';
import ChallengeDetails from '../views/admin/ChallengeDetails.vue';
import AddChallenge from '../views/admin/AddChallenge.vue';
import Layout from '../views/admin/Layout.vue';


const routes = [
  {
    path: '/admin',
    component: Layout,
    children: [
      {
        path: '/manage-challenges',
        name: 'ManageChallenges',
        component: ManageChallenges,
      },
      {
        path: '/manage-teams',
        name: 'ManageTeams',
        component: ManageTeams,
      },
      {
        path: '/manage-submissions',
        name: 'ManageSubmissions',
        component: ManageSubmissions,
      },
      {
        path: '/challenge-details/:id',
        name: 'ChallengeDetails',
        component: ChallengeDetails,
        props: true,
      },
      {
        path: '/add-challenge',
        name: 'AddChallenge',
        component: AddChallenge,
        props: true,
      },
            ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
