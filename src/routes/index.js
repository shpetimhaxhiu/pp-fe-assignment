import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";

const routes = [{
        path: "/",
        name: "Index",
        component: Home,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/users",
        name: "Users",
        component: Users,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;