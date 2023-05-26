import { navigateTo } from "svelte-router-spa";

export const authMock = () => {
    const doLogin = (username: string, pass: string) => {
        localStorage.setItem("POC::token", "POC::"+username+pass)
    }

    const logout = () => {
        localStorage.removeItem("POC::token");
        return new Promise((resolve) => {
            resolve(true)
        })
    }

    const isAuthenticated = () => {
        return  localStorage.getItem("POC::token");
    }

    return {
        doLogin,
        logout,
        isAuthenticated
    }
}