<script>
    import { Navigate, Route } from "svelte-router-spa";
  
    export let currentRoute;
    const params  = {hello: "world"}
</script>

<main>
    <header class="bg-white w-full h-16 font-bold flex items-center px-5 border-orange-500 text-gray-600 border-b">
        The Svelte Application
    </header>
    <section class="flex">
        <aside class="w-64 px-5 space-y-2 pt-8 h-screen flex flex-col border-r border-orange-500">
            <Navigate to="/">Home</Navigate>
            <Navigate to="/accounts">Accounts</Navigate>
            <Navigate to="/users">Users</Navigate>
        </aside>
        <section class="main_content py-5 px-8">
           <Route {currentRoute} {params} />
        </section>
    </section>
</main>