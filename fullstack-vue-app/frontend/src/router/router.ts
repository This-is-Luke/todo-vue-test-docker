import { createRouter, createWebHistory } from 'vue-router'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import ViewLists from './views/ViewLists.vue'
import List from './views/List.vue'
import Logout from './views/Logout.vue'
import RegisterForm from './components/RegisterForm.vue'
import LoginForm from './components/LoginForm.vue'

const routes: any = [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/view-lists', component: ViewLists },
    { path: '/list', component: List },
    { path: '/logout', component: Logout },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
