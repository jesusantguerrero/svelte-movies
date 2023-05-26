import Login from "./pages/Login.svelte";
import Home from "./pages/Home.svelte";
import Users from "./pages/Accounts.svelte";
import Accounts from "./pages/Users.svelte";
import MainLayout from "./layouts/MainLayout.svelte";
import { authMock } from "./lib/authMock";


const { isAuthenticated } = authMock();

const routes = [
    {
        name: '/',
        component: Home,
        layout: MainLayout,
        onlyIf: { guard: isAuthenticated, redirect: '/login' } 
    },
    {
        name: '/users',
        component: Users,
        layout: MainLayout,
        onlyIf: { guard: isAuthenticated, redirect: '/login' } 
    },
    {
        name: '/accounts',
        component: Accounts,
        layout: MainLayout,
        onlyIf: { guard: isAuthenticated, redirect: '/login' } 
    },
    {
        name: 'login',
        component: Login
    }
]

export { routes }