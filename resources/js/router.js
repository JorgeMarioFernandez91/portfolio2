import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import HomeV2 from './pages/HomeV2.vue';
import HomeV3 from './pages/HomeV3.vue';
import CoffeeSite from './pages/CoffeeSite.vue';
import CoffeeSiteProducts from './pages/CoffeeSiteProducts.vue';
import BlackWhiteSite from './pages/BlackWhiteSite.vue';
import BusinessFinderSite from './pages/BusinessFinderSite.vue';
import ShowPDF from './pages/ShowPdf.vue';
import MapPage from './pages/MapPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        // },
        // {
        //     path: '/',
        //     name: 'homev2',
        //     component: HomeV2
        // },
        {
            path: '/',
            name: 'homev3',
            component: HomeV3
        },
        {
            path: '/coffee-site',
            name: 'coffee-site',
            component: CoffeeSite
        },
        {
            path: '/coffee-site/products',
            name: 'products',
            component: CoffeeSiteProducts
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
            path: '/business-finder-site/map',
            name: 'map',
            component: MapPage
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