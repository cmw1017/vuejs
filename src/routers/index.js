import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        name: "home",
        path: "/",
        component: () => import('@/views/Home.vue')
    },
    {
        name: "about",
        path: "/about",
        component: () => import('@/views/About.vue')
    },
    {
        name: "todos",
        path: "/todos/:id",
        component: () => import('@/views/TodoApp.vue')
    },
    {
        name: "practices",
        path: "/practices",
        component: () => import('@/views/Practices.vue'),
        children: [
            {
                path: 'ch_02_03',
                component: () => import('@/components/ch_02_03.vue')
            },
            {
                path: 'ch_02_05',
                component: () => import('@/components/ch_02_05.vue')
            },
            {
                path: 'ch_03_05',
                component: () => import('@/components/ch_03_05.vue')
            },
            {
                path: 'ch_03_11_12',
                component: () => import('@/components/ch_03_11_12.vue')
            },
            {
                path: 'ch_03_13',
                component: () => import('@/components/ch_03_13.vue')
            },
            {
                path: 'ch_03_15',
                component: () => import('@/components/ch_03_15.vue')
            },
            {
                path: 'ch_03_16',
                component: () => import('@/components/ch_03_16.vue')
            },
            {
                path: 'ch_03_25',
                component: () => import('@/components/ch_03_25.vue')
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;