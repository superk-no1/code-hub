import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import IndexPage from '~/pages/index.vue'
import AboutPage from '~/pages/about.vue'
import NotFound from '~/pages/404.vue'

const routes = [{
    path: '/',
    component: IndexPage
},{
    path: '/about',
    component: AboutPage
},{
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
}]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router