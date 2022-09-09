import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import HomeV2 from './pages/HomeV2.vue';
import CoffeeSite from './pages/CoffeeSite.vue';
import BlackWhiteSite from './pages/BlackWhiteSite.vue';
import BusinessFinderSite from './pages/BusinessFinderSite.vue';
import ShowPDF from './pages/ShowPdf.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        // {
        //     path: '/',
        //     name: 'homev2',
        //     component: HomeV2
        // },
        {
            path: '/',
            name: 'homev2',
            component: HomeV2
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
        {
            path: '/business-finder-site',
            name: 'business-finder-site',
            component: BusinessFinderSite
        },
        {
            path: '/resume',
            name: 'resume',
            component: ShowPDF
        },
    ],
    // ensures page loads at the top
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

export default router;