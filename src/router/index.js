import { createRouter, createWebHistory } from 'vue-router';
import MoonLandingView from '../views/MoonLandingView.vue';
import MarsPathfinderView from '../views/MarsPathfinderView.vue';
import WatsonxAiView from '../views/WatsonxAiView.vue';

const routes = [
  {
    path: '/1969-moon-landing',
    name: 'moon-landing',
    component: MoonLandingView,
  },
  {
    path: '/1997-mars-pathfinder',
    name: 'mars-pathfinder',
    component: MarsPathfinderView,
  },
  {
    path: '/2023-watsonx',
    name: 'watsonx',
    component: WatsonxAiView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
