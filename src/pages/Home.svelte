<script>
    import svelteLogo from '../assets/svelte.svg'
    import viteLogo from '/vite.svg'
    import Counter from '../lib/Counter.svelte'
    import { authMock } from '../lib/authMock';
    import { navigateTo } from 'svelte-router-spa';


    const { logout } = authMock()
        const onLogout = () => {
            logout().then(() => {
                navigateTo("/");
            })
        }
</script>

<section>
    <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} class="logo" alt="Vite Logo" />
        </a>
        <a href="https://svelte.dev" target="_blank" rel="noreferrer">
          <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
        </a>
      </div>
      <h1>Vite + Svelte</h1>
    
      <div class="card mt-5">
        <Counter  />
        <button class="text-white" on:click={onLogout}> Logout </button>
      </div>
</section>