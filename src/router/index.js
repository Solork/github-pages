import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Blabbing from "../components/Blabbing.vue";
import Books from "../components/Books.vue";
import Games from "../components/Games.vue";
import Movies from "../components/Movies.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blabbing",
    name: "Blabbing",
    component: Blabbing,
  },
  {
    path: "/books",
    name: "Books",
    component: Books,
  },
  {
    path: "/games",
    name: "Games",
    component: Games,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;