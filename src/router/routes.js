import Vue from 'vue'
import Router from 'vue-router'

//Layouts
import Layout from '@/components/layout'

//Components
import LandingPage from '@/components/pages/landing'
import TestPage from '@/components/pages/test'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            component: LandingPage
        },
        {
            path: '/nested',
            component: Layout,
            children: [
                {
                    path: '/',
                    name: 'TestPage',
                    component: TestPage
                },
            ]
        }
    ]
})
