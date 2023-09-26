import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/ch_02_03",
        name: "ch_02_03",
        component: () => import('@/components/ch_02_03.vue')
    },
    {
        path: "/ch_02_05",
        name: "ch_02_05",
        component: () => import('@/components/ch_02_05.vue')
    },
    {
        path: "/ch_03_05",
        name: "ch_03_05",
        component: () => import('@/components/ch_03_05.vue')
    },
    {
        path: "/ch_03_11_12",
        name: "ch_03_11_12",
        component: () => import('@/components/ch_03_11_12.vue')
    },
    {
        path: "/ch_03_13",
        name: "ch_03_13",
        component: () => import('@/components/ch_03_13.vue')
    },
    {
        path: "/ch_03_15",
        name: "ch_03_15",
        component: () => import('@/components/ch_03_15.vue')
    },
    {
        path: "/ch_03_16",
        name: "ch_03_16",
        component: () => import('@/components/ch_03_16.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;