import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import NotFound from "../views/NotFound.vue";

const routes = [{
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
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
    linkActiveClass: 'active',
});

export default router;