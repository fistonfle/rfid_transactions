import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Record from '../views/Record'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/record',
        name: 'record',
        component: Record
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router