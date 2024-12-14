// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ManageChallenges from '../components/ManageChallenges.vue';
import ManageTeams from '../components/ManageTeams.vue';
import ManageSubmissions from '../components/ManageSubmissions.vue';
import ChallengeDetails from '../components/ChallengeDetails.vue';

const routes = [
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
    props: true, // This allows us to pass the route params as props to the component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
