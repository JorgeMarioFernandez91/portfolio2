import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import CoffeeSite from './pages/CoffeeSite.vue';
import BlackWhiteSite from './pages/BlackWhiteSite.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/coffee-site',
            name: 'coffee-site',
            component: CoffeeSite
        },
        {
            path: '/black-white-site',
            name: 'black-white-site',
            component: BlackWhiteSite
        },
    ],
    // ensures page loads at the top
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

export default router;