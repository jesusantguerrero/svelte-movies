<script>
  import { navigateTo } from "svelte-router-spa";
  import { authMock } from "../lib/authMock";

    let username = "";
    let pass = "";
    const { doLogin } = authMock();
    
    const onLogin = () => {
        doLogin(username, pass);
        navigateTo("/")
    }
</script>

<main class="login-box">
    <section class="border-orange-500 text-center border mt-44 px-5 py-3 shadow-md rounded-md h-96 w-96 mx-auto">
        <h1 class="text-3xl text-orange-500 font-bold"> This is a login</h1>
        <form class="space-y-4 mt-12 text-center">
            <label class="block">
                <span>User</span>
                <input class="bg-orange-50 border rounded" type="text" bind:value={username}>
            </label>
            <label class="block mt-4">
                <span>Password</span>
                <input type="password" bind:value={pass} class="bg-orange-50 border rounded" >
            </label>
            <footer class="flex justify-center text-white">
                <button on:click={onLogin}> Login </button>
            </footer>
        </form>
    </section>
</main>

<style lang="scss">
    .login-box {
        background: white;
        height: 100vh;

        form label, form label span {
            display: block;
        }
    }
</style>