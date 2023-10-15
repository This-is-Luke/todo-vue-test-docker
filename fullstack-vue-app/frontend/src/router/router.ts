import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import ViewLists from '../views/ViewLists.vue'
import List from '../views/List.vue'
import RegisterForm from '../components/RegisterForm.vue'
import LoginForm from '../components/LoginForm.vue'

const routes: any = [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/view-lists', component: ViewLists },
    { path: '/list', component: List },
    { path: '/register-form', component: RegisterForm },
    { path: '/login-form', component: LoginForm },
    { path: '/', component: Login },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
