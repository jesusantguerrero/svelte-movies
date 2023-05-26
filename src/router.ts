import Login from "./pages/Login.svelte";
import Home from "./pages/Home.svelte";
import MainLayout from "./layouts/MainLayout.svelte";

const isAuthenticated = () => {
    return false;
}

const routes = [
    {
        name: '/',
        component: Home,
        layout: MainLayout,
        onlyIf: { guard: isAuthenticated, redirect: '/login' } 
    },
    {
        name: 'login',
        component: Login
    }
]

export { routes }