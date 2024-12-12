import { createRouter, createWebHistory } from 'vue-router';
import CreateTeam from '../components/CreateTeam.vue';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';

const routes = [
  { path: '/', redirect: '/sign-in' }, 
  { path: '/create-team', component: CreateTeam },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;
