<script>
    import { Route } from "svelte-router-spa";
  
    export let currentRoute;
    const params  = {hello: "world"}
</script>

<main>
    <header>
        The Svelte Application
    </header>
    <section class="main_content">
       <Route {currentRoute} {params} />
    </section>
</main>