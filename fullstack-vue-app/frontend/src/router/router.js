import { createRouter, createWebHistory } from 'vue-router';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import ViewLists from './views/ViewLists.vue';
import List from './views/List.vue';
import Logout from './views/Logout.vue';
const routes = [
    { path: '/register', component: Register, redirect: undefined },
    { path: '/login', component: Login, redirect: undefined },
    { path: '/view-lists', component: ViewLists, redirect: undefined },
    { path: '/list', component: List, redirect: undefined },
    { path: '/logout', component: Logout, redirect: undefined },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
//# sourceMappingURL=router.js.map