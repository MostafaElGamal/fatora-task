import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Favroite from "@/views/Favroite";
import Uploads from "@/views/Uploads";
import Search from "@/views/Search";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favroite",
    name: "favroite",
    component: Favroite,
  },
  {
    path: "/uploads",
    name: "Uploads",
    component: Uploads,
  },
  {
    path: "/search/:text",
    name: "search",
    component: Search,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
