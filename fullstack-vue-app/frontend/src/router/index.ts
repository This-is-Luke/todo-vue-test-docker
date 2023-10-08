import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import ViewLists from '../views/ViewLists.vue'
import List from '../views/List.vue'
import Logout from '../views/Logout.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/view-lists', component: ViewLists },
    { path: '/list', component: List },
    { path: '/logout', component: Logout },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
